(ns client.client
  (:require [uix.core :refer [$]]
            [uix.dom :as dom.client]
            [app.ui :as ui]))

(defn init []
  (dom.client/hydrate-root
   (js/document.getElementById "root")
   ($ ui/title-bar)))
