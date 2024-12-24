(ns app.ui
  (:require [uix.core :refer [use-state defui $]]
            clojure.pprint
            [banzai.puzzle.crossword.core :as cw]
            [banzai.puzzle.crossword.uix :as cwu]))

(defui button [{:keys [children] :as props}]
  ($ :button.bg-sky-500.text-slate-50.rounded-full.w-10.h-10
    (dissoc props :children)
    children))

(defui app
  []
  (let [puzzle cw/example-cw-puzzle
        state  cw/example-cw-state
        [st set-st] (use-state {:puzzle (cw/comprehend-puzzle (or puzzle cw/example-cw-puzzle))
                                :state  (or state cw/example-cw-state)})
        {:keys [state puzzle]} st]
    ($ :div.flex.flex-col.justify-center.min-h-screen.bg-gray-800
       ($ cwu/PuzzlePage {:puzzle puzzle, :state state, :set-state set-st}))))
