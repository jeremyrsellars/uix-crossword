(ns banzai.puzzle.crossword.uix
  (:require [banzai.puzzle.crossword.core :as cw]
            [banzai.puzzle.crossword.ui :as cw-ui :refer [coord-id focus-coord]]
            #?(:cljs [banzai.puzzle.crossword.ui.browser :as cw-ui-browser])
            clojure.pprint
            [clojure.string :as string]
            [uix.core :refer [use-state defui $]]))

(defui CrosswordPuzzleCluePane
  [{{:keys [cells crossword/clues] :as cw-puzzle} :puzzle
    cw-state :state
    :keys [ProcessCmd]
    {:keys [words-key] :or {words-key :words}} :opts}]
  (let [grouped-words (group-by cw/word->axis (get cw-puzzle words-key))]
    ($ :ol {:class "ml-4 text-white" #_ ['ml-4 'text-white]}
       (for [[axis words] grouped-words]
        ($ :<>
           {:key axis}
           ($ :h3 {:class "capitalize text-xl"}
              (name axis))
           ($ :ol {:class ['mb-4]}
              (for [[coord word cell]
                    (->> (for [word words]
                           (let [coord (cw/word->coord word)]
                             [coord word (get cells coord)]))
                         (sort-by (fn number [[_ _ {:keys [cell-num]}]] cell-num)))]
               ($ :li
                  {:key coord
                   :class [(when (some (partial = (:selected-coord cw-state)) (cw/word->coords word))
                             (if (= (:axis cw-state) (cw/word->axis word))
                               ['bg-yellow-100 'text-slate-800]
                               ['bg-slate-100 'text-slate-800]))
                           'font-bold]}
                  ($ :label {:for (coord-id coord)
                             :class ['hover:bg-yellow-200 'hover:text-slate-800 'cursor-pointer 'pad-r-1em]
                             :on-click (fn [_]
                                         (ProcessCmd ['select-coord {:coord coord, :axis axis}])
                                         (focus-coord coord))}
                     ($ :span (str (:cell-num cell) ". " (get clues (cw/word->answer word)))))))))))))

(defui CrosswordPuzzleGridPane
  [{{:keys [col-count row-count] :as cw-puzzle} :puzzle
    {:keys [selected-coord selected-word axis] :as cw-state} :state
    :keys [ProcessCmd]}]
  ($ :div {:class ['relative]}
     ($ :div {:class '[absolute w-full h-full bg-cover bg-center bg-no-repeat]
              :style {:background-image "url(https://static-app-misc.teachbanzai.com/img/income-and-expenses-thumb.jpg)"}})
     ($ :div {:class '[grid m-6]
              :style {:grid-template-columns (string/join " " (repeat col-count "3rem"))
                      :grid-template-rows    (string/join " " (repeat row-count "3rem"))}}
        (let [selected-word-coords (set (some-> selected-word cw/word->coords))]
          (for [[[r-idx c-idx :as cell] {:keys [cell-num current-value correct-letter locked]}]
                (cw/all-cells cw-puzzle cw-state)]
            (let [coord [r-idx c-idx]
                  active-word? (contains? selected-word-coords coord)
                  cell-format (if locked
                                '[bg-black border-black]
                                '[border-slate-500 border-1])
                  text-format (if current-value "text-black" "text-slate-500")
                  focused-cell? (= selected-coord coord)]
              ($ :<>
                 {:key (pr-str cell)}
                 (when-not locked
                   ($ :div
                      (cond-> {:id (coord-id coord)
                               :key 'locked
                               :content-editable true
                               :style {:grid-row-start    (inc r-idx) ; Tailwind doesn't always find generated classes
                                       :grid-column-start (inc c-idx)}
                               #?@(:cljs
                                   [
                                    :suppress-content-editable-warning "true"
                                    :suppressContentEditableWarning true
                                    :on-click   (fn [e] (when focused-cell?
                                                          (ProcessCmd ['select-coord {:coord coord, :axis ({:across :down} axis :across)}])
                                                          (.focus (.-target e))))
                                    :on-focus   (fn [_] (ProcessCmd ['select-coord {:coord coord}])
                                                        (focus-coord coord))
                                    :on-blur    (fn [_] (ProcessCmd ['deselect-coord {:coord coord}]))
                                    :on-input   (fn [e] (let [value (some-> (.-data (.-nativeEvent e)) string/upper-case)
                                                              next-coord (cw/find-coord cw-puzzle cw-state coord
                                                                           :find-coord/next-in-word :find-coord/next-empty-start-in-axis :find-coord/next-empty-in-axis :find-coord/next-empty)
                                                              prev-value (as-> current-value s
                                                                           (or (str s) "")
                                                                           (str (string/upper-case s) (string/lower-case s))
                                                                           (frequencies s)
                                                                           (sort-by (comp - second) s))
                                                              best-s (remove prev-value value)
                                                              best-char (if-let [bc (first best-s)] bc (last value))]
                                                          (set! (.-value (.-target e)) (str best-char))
                                                          (ProcessCmd ['set-coord {:coord coord, :value value, :move :empty}])
                                                          (focus-coord next-coord)
                                                          (.preventDefault e)))
                                    :on-key-down (fn [e]
                                                   (when-let [[_ args :as cmd] (cw-ui/keydown-command (cw-ui-browser/keydown-event-data e) {:coord coord})]
                                                     (ProcessCmd cmd)
                                                     (when-let [next-coord (->> args :find-coord/directives (apply cw/find-coord cw-puzzle cw-state coord))]
                                                       (focus-coord next-coord)
                                                       (.preventDefault e))
                                                     (when-let [[_ value] (find args :value)] ; to-do: is this electric-style ui mutation necesary in UIx?
                                                       (.preventDefault e))))])
                               :class (vec
                                       (flatten
                                        [text-format cell-format 'z-10
                                         (when-not locked "border")
                                         (cond
                                           focused-cell? 'bg-yellow-200
                                           active-word? 'bg-blue-200
                                           :else 'bg-white)
                                         'justify-center 'items-center
                                         "text-xl bold grid items-center focus:outline-none height-[3rem] m-[-1px_-1px_0_0] caret-transparent"]))}
                        (not locked) (assoc :tab-index 0))
                      (str current-value)))
                 (when cell-num
                   ($ :div {:key 'unlocked
                            :class ['text-slate-800 'relative 'left-0 'top-1]
                            :style {:grid-row-start    (inc r-idx) ; Tailwind doesn't always find generated classes
                                    :grid-column-start (inc c-idx)}}
                      ($ :sup {:class ['text-slate-800 'relative 'm-1 'z-20]}
                         (str cell-num)))))))))))

(defui CrosswordPuzzle [{cw-puzzle :puzzle, cw-state :state, :keys [ProcessCmd] :as props}]
  ($ :div
     ($ :div {:class "grid lg:grid-cols-2 m-4"}
        ;; ($ CrosswordPuzzleCluePane (update props :opts merge {:words-key :words-in-rows}))
        ($ CrosswordPuzzleGridPane props)
        ($ CrosswordPuzzleCluePane (update props :opts merge {:words-key :words})))))

(defui PuzzlePage
  [{:keys [puzzle state set-state] :as x}]
  (let [ProcessCmd (fn process-c-cmd [cmd]
                     (let [{:keys [update-state result]}
                           (cw/mutate x cmd)]
                       (when update-state
                         (assert (fn? update-state))
                         (set-state #(update % :state update-state)))
                       result))]
    ($ :<>
      ($ :h1
         {:class "text-xl text-white"}
         ($ :span "Crossword in "
            ($ :a  {:href "https://uix-cljs.dev/"
                    :target "_blank"
                    :class "cursor-pointer text-blue-500"}
              ($ :span "UIx"))
            " - A ReactJS wrapper for ClojureScript"))
      ($ CrosswordPuzzle {:puzzle puzzle, :state state, :ProcessCmd ProcessCmd})
      #_
      ($ :pre
         ($ :code.text-white
            (with-out-str
              (clojure.pprint/pprint {:puzzle puzzle, :state state})))))))
