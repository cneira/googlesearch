(ns lt.plugins.googlesearch
  (:require [lt.object :as object]
            [lt.objs.popup :as popup]
            [lt.objs.notifos :as notifos]
            [lt.objs.sidebar.command :as sidebar]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.browser :as browser]
            [lt.util.dom :as dom]
            [clojure.string :as string]
            [lt.objs.command :as cmd])

    (:require-macros [lt.macros :refer [defui behavior]]))



(def query-input
  (sidebar/options-input {:placeholder "search for "}))


(behavior ::exec-active!
          :triggers #{:select}
          :reaction (fn [this query]
                      (sidebar/exec-active! query)))


(object/add-behavior! query-input ::exec-active!)


(cmd/command {:command ::google-search
              :desc "google-search: google it!"
              :options query-input
              :exec (fn [query]
                      (when (not (empty? query))
                        (gsearch query  "google")))})



(cmd/command {:command ::github-search
              :desc "github-search: search on github"
              :options query-input
              :exec (fn [query]
                      (when (not (empty? query))
                        (gsearch query  "github")))})



(cmd/command {:command ::amazon-search
              :desc "amazon-search: search on amazon"
              :options query-input
              :exec (fn [query]
                      (when (not (empty? query))
                        (gsearch query  "amazon")))})


(cmd/command {:command ::googlegroup-lighttable-search
              :desc "googlegroup-lighttable: search on discussion group"
              :options query-input
              :exec (fn [query]
                      (when (not (empty? query))
                        (gsearch query  "ligthtable-googlegroup")))})


(cmd/command {:command ::stackoverflow-search
              :desc "search on stackoverflow"
              :options query-input
              :exec (fn [query]
                      (when (not (empty? query))
                        (gsearch query  "stackoverflow")))})




(cmd/command {:command ::goto-url
              :desc "go to url "
              :options query-input
              :exec (fn [query]
                      (when (not (empty? query))
                        (goto-url query)))})



(cmd/command {:command ::google-word-under-cursor
              :desc "google selected text"
              :exec (fn []
                      (google-word "google"))})



(cmd/command {:command ::search-amazon-word-under-cursor
              :desc "search in amazon the selected text"
              :exec (fn []
                      (google-word "amazon"))})


(cmd/command {:command ::search-github-word-under-cursor
              :desc "search in github the selected text"
              :exec (fn []
                      (google-word "github"))})

(cmd/command {:command ::search-stackoverflow-word-under-cursor
              :desc "search in stackoverflow the selected text"
              :exec (fn []
                      (google-word "stackoverflow"))})


(defn goto-url  [query]
  (cmd/exec! :add-browser-tab query))



(defn google-word [engine]
  (let [cm (pool/last-active)]
    (when-let [ed (editor/->cm-ed cm)]
      (when (not (empty? (editor/selection ed) ))
      (gsearch (editor/selection ed)  engine )))))


(defn gsearch [query engine]
  (cond
    (= engine "google")
      (let [url  (str "https://www.google.cl/?gws_rd=ssl#q=" (string/join  "+"  (string/split query  #"\s")) ) ]
        (cmd/exec! :add-browser-tab url))
    (= engine "github")
      (let [url  (str "https://github.com/search?utf8=%E2%9C%93&q=" (string/join  "+"  (string/split query  #"\s")) ) ]
        (cmd/exec! :add-browser-tab url))
    (= engine "amazon")
      (let [url  (str "http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=" (string/join  "+"  (string/split query  #"\s")) ) ]
        (cmd/exec! :add-browser-tab url))
    (= engine "ligthtable-googlegroup")
      (let [url  (str "https://groups.google.com/forum/#!searchin/light-table-discussion/" (string/join  "%20"  (string/split query  #"\s")) ) ]
        (cmd/exec! :add-browser-tab url))
    (= engine "stackoverflow")
      (let [url  (str "http://stackoverflow.com/search?q=" (string/join  "+"  (string/split query  #"\s")) ) ]
        (cmd/exec! :add-browser-tab url))))
