if(!lt.util.load.provided_QMARK_('lt.plugins.googlesearch')) {
goog.provide('lt.plugins.googlesearch');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.browser');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('clojure.string');
goog.require('lt.objs.browser');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.googlesearch.query_input = lt.objs.sidebar.command.options_input.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"search for "], null));
lt.plugins.googlesearch.__BEH__exec_active_BANG_ = (function __BEH__exec_active_BANG_(this$,query){return lt.objs.sidebar.command.exec_active_BANG_.call(null,query);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.googlesearch","exec-active!","lt.plugins.googlesearch/exec-active!",4612930673),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.googlesearch.__BEH__exec_active_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.object.add_behavior_BANG_.call(null,lt.plugins.googlesearch.query_input,new cljs.core.Keyword("lt.plugins.googlesearch","exec-active!","lt.plugins.googlesearch/exec-active!",4612930673));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.googlesearch","google-search","lt.plugins.googlesearch/google-search",654774296),new cljs.core.Keyword(null,"desc","desc",1016984067),"google-search: google it!",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.googlesearch.query_input,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (query){if(!(cljs.core.empty_QMARK_.call(null,query)))
{return lt.plugins.googlesearch.gsearch.call(null,query,"google");
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.googlesearch","github-search","lt.plugins.googlesearch/github-search",4224418094),new cljs.core.Keyword(null,"desc","desc",1016984067),"github-search: search on github",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.googlesearch.query_input,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (query){if(!(cljs.core.empty_QMARK_.call(null,query)))
{return lt.plugins.googlesearch.gsearch.call(null,query,"github");
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.googlesearch","amazon-search","lt.plugins.googlesearch/amazon-search",3778207555),new cljs.core.Keyword(null,"desc","desc",1016984067),"amazon-search: search on amazon",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.googlesearch.query_input,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (query){if(!(cljs.core.empty_QMARK_.call(null,query)))
{return lt.plugins.googlesearch.gsearch.call(null,query,"amazon");
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.googlesearch","googlegroup-lighttable-search","lt.plugins.googlesearch/googlegroup-lighttable-search",1843567178),new cljs.core.Keyword(null,"desc","desc",1016984067),"googlegroup-lighttable: search on discussion group",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.googlesearch.query_input,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (query){if(!(cljs.core.empty_QMARK_.call(null,query)))
{return lt.plugins.googlesearch.gsearch.call(null,query,"ligthtable-googlegroup");
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.googlesearch","stackoverflow-search","lt.plugins.googlesearch/stackoverflow-search",1119613573),new cljs.core.Keyword(null,"desc","desc",1016984067),"search on stackoverflow",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.googlesearch.query_input,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (query){if(!(cljs.core.empty_QMARK_.call(null,query)))
{return lt.plugins.googlesearch.gsearch.call(null,query,"stackoverflow");
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.googlesearch","goto-url","lt.plugins.googlesearch/goto-url",3899814335),new cljs.core.Keyword(null,"desc","desc",1016984067),"go to url ",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.googlesearch.query_input,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (query){if(!(cljs.core.empty_QMARK_.call(null,query)))
{return lt.plugins.googlesearch.goto_url.call(null,query);
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.googlesearch","google-word-under-cursor","lt.plugins.googlesearch/google-word-under-cursor",3945265558),new cljs.core.Keyword(null,"desc","desc",1016984067),"google selected text",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.googlesearch.google_word.call(null,"google");
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.googlesearch","search-amazon-word-under-cursor","lt.plugins.googlesearch/search-amazon-word-under-cursor",2673489158),new cljs.core.Keyword(null,"desc","desc",1016984067),"search in amazon the selected text",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.googlesearch.google_word.call(null,"amazon");
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.googlesearch","search-github-word-under-cursor","lt.plugins.googlesearch/search-github-word-under-cursor",1260204315),new cljs.core.Keyword(null,"desc","desc",1016984067),"search in github the selected text",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.googlesearch.google_word.call(null,"github");
})], null));
lt.plugins.googlesearch.goto_url = (function goto_url(query){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),query);
});
lt.plugins.googlesearch.google_word = (function google_word(engine){var cm = lt.objs.editor.pool.last_active.call(null);var temp__4092__auto__ = lt.objs.editor.__GT_cm_ed.call(null,cm);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(!(cljs.core.empty_QMARK_.call(null,lt.objs.editor.selection.call(null,ed))))
{return lt.plugins.googlesearch.gsearch.call(null,lt.objs.editor.selection.call(null,ed),engine);
} else
{return null;
}
} else
{return null;
}
});
lt.plugins.googlesearch.gsearch = (function gsearch(query,engine){if(cljs.core._EQ_.call(null,engine,"google"))
{var url_6391 = [cljs.core.str("https://www.google.cl/?gws_rd=ssl#q="),cljs.core.str(clojure.string.join.call(null,"+",clojure.string.split.call(null,query,/\s/)))].join('');lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),url_6391);
} else
{if(cljs.core._EQ_.call(null,engine,"github"))
{var url_6392 = [cljs.core.str("https://github.com/search?utf8=%E2%9C%93&q="),cljs.core.str(clojure.string.join.call(null,"+",clojure.string.split.call(null,query,/\s/)))].join('');lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),url_6392);
} else
{if(cljs.core._EQ_.call(null,engine,"amazon"))
{var url_6393 = [cljs.core.str("http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords="),cljs.core.str(clojure.string.join.call(null,"+",clojure.string.split.call(null,query,/\s/)))].join('');lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),url_6393);
} else
{if(cljs.core._EQ_.call(null,engine,"ligthtable-googlegroup"))
{var url_6394 = [cljs.core.str("https://groups.google.com/forum/#!searchin/light-table-discussion/"),cljs.core.str(clojure.string.join.call(null,"%20",clojure.string.split.call(null,query,/\s/)))].join('');lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),url_6394);
} else
{}
}
}
}
cljs.core._EQ_.call(null,engine,"stackoverflow");
var url = [cljs.core.str("http://stackoverflow.com/search?q="),cljs.core.str(clojure.string.join.call(null,"+",clojure.string.split.call(null,query,/\s/)))].join('');return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),url);
});
}

//# sourceMappingURL=google-search_compiled.js.map