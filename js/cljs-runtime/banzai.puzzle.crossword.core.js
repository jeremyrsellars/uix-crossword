goog.provide('banzai.puzzle.crossword.core');
banzai.puzzle.crossword.core.example_cw_puzzle = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("crossword","puzzle-string","crossword/puzzle-string",-402725686),"#  TEACH\n    #    N\n    #    STUDY\n    #    W  O\n    # G  E  N\n    # LEARN E\n    # U\n    #TEST WORD\n    #   A O\n    #   P R\n    #  DESK",new cljs.core.Keyword("crossword","clues","crossword/clues",-1480943904),cljs.core.PersistentHashMap.fromArrays(["TEACH","WORD","ANSWER","DESK","LEARN","DONE","WORK","STUDY","TEST","GLUE","TAPE"],["Instruct a student","A part of a sentence.","Response to a question","A place to hold your school books and paper while you work.","Acquire knowledge","Complete","Getting stuff done","Learn from a resource (e.g. book)","A graded set of questions for students","Used to stick one piece of paper to another","Sticky strips often coming in rolls"])], null);
banzai.puzzle.crossword.core.nyt_cw_puzzle_2024_04_18 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("crossword","puzzle-string","crossword/puzzle-string",-402725686),"#BANJO\n    #ALOUD\n    #GENIE\n    #EXECS\n    #LATE",new cljs.core.Keyword("crossword","clues","crossword/clues",-1480943904),cljs.core.PersistentHashMap.fromArrays(["ALOUD","BAGEL","ODES","LATE","GENIE","EXECS","ALEXA","BANJO","NONET","JUICE"],["Audible way to think","The schmear goes here","Poems like 'to Autumn' and 'To a Skylark'","Behind schedule","Aladdin character whose first line is 'Oy! 10,000 years will give you such a crick in the neck`'","Members of a company's C-suite","Amazon's assistant","Bluegrass instrument","Group of nine","Batter life, informally"])], null);
banzai.puzzle.crossword.core.example_cw_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current","current",-1088038603),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.Keyword(null,"across","across",-2072531706),new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
/**
 * Gets the starting coordinate from a word.
 */
banzai.puzzle.crossword.core.word__GT_coord = (function banzai$puzzle$crossword$core$word__GT_coord(p__21716){
var vec__21717 = p__21716;
var r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(0),null);
var c_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_idx,c_idx], null);
});
/**
 * Gets the coordinates of a word.
 */
banzai.puzzle.crossword.core.word__GT_coords = (function banzai$puzzle$crossword$core$word__GT_coords(p__21722){
var vec__21723 = p__21722;
var r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21723,(0),null);
var c_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21723,(1),null);
var answer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21723,(2),null);
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21723,(3),null);
var vec__21726 = (function (){var G__21729 = axis;
var G__21729__$1 = (((G__21729 instanceof cljs.core.Keyword))?G__21729.fqn:null);
switch (G__21729__$1) {
case "across":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21729__$1)].join('')));

}
})();
var r_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726,(0),null);
var c_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726,(1),null);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function banzai$puzzle$crossword$core$word__GT_coords_$_r_letter(l_idx,_letter){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r_idx + (r_STAR_ * l_idx)),(c_idx + (c_STAR_ * l_idx))], null);
}),answer);
});
banzai.puzzle.crossword.core.word__GT_row_index = (function banzai$puzzle$crossword$core$word__GT_row_index(p__21730){
var vec__21731 = p__21730;
var r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21731,(0),null);
var _c_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21731,(1),null);
var _answer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21731,(2),null);
var _axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21731,(3),null);
return r_idx;
});
banzai.puzzle.crossword.core.word__GT_col_index = (function banzai$puzzle$crossword$core$word__GT_col_index(p__21736){
var vec__21737 = p__21736;
var _r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(0),null);
var c_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(1),null);
var _answer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(2),null);
var _axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(3),null);
return c_idx;
});
banzai.puzzle.crossword.core.word__GT_answer = (function banzai$puzzle$crossword$core$word__GT_answer(p__21741){
var vec__21742 = p__21741;
var _r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21742,(0),null);
var _c_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21742,(1),null);
var answer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21742,(2),null);
var _axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21742,(3),null);
return answer;
});
banzai.puzzle.crossword.core.word__GT_axis = (function banzai$puzzle$crossword$core$word__GT_axis(p__21745){
var vec__21746 = p__21745;
var _r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,(0),null);
var _c_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,(1),null);
var _answer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,(2),null);
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,(3),null);
return axis;
});
if((typeof banzai !== 'undefined') && (typeof banzai.puzzle !== 'undefined') && (typeof banzai.puzzle.crossword !== 'undefined') && (typeof banzai.puzzle.crossword.core !== 'undefined') && (typeof banzai.puzzle.crossword.core.mutate !== 'undefined')){
} else {
/**
 * Given `{:puzzle {...}, :state {...}} [op arg1...]`
 * dispatches on op,
 * optionally returning a state-mutation with `:update-state` (an arity-1 fn of old-state to new-state),
 * optionally returning a result with `:result`
 * 
 * ```clojure
 * {;:server/effect (fn [](prn 'hi))
 *  ;:client/effect (fn [](js/console.log 42))
 *  :update-state (fn [st](assoc st :x 42))
 *  :result 42}
 * ```
 */
banzai.puzzle.crossword.core.mutate = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__21750 = cljs.core.get_global_hierarchy;
return (fexpr__21750.cljs$core$IFn$_invoke$arity$0 ? fexpr__21750.cljs$core$IFn$_invoke$arity$0() : fexpr__21750.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("banzai.puzzle.crossword.core","mutate"),(function banzai$puzzle$crossword$core$mutate_dispatch(p__21751,p__21752){
var map__21753 = p__21751;
var map__21753__$1 = cljs.core.__destructure_map(map__21753);
var puzzle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753__$1,new cljs.core.Keyword(null,"puzzle","puzzle",-825926240));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21753__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var vec__21754 = p__21752;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21754,(0),null);
var _cmd = vec__21754;
return op;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
banzai.puzzle.crossword.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (_puz_st,p__21757){
var vec__21758 = p__21757;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21758,(0),null);
var _cmd = vec__21758;
var msg_parts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Warning:","operation isn't supported:",op], null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.warn,msg_parts);
}));
banzai.puzzle.crossword.core.update_axis = (function banzai$puzzle$crossword$core$update_axis(p__21761,p__21762){
var map__21763 = p__21761;
var map__21763__$1 = cljs.core.__destructure_map(map__21763);
var st = map__21763__$1;
var selected_coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763__$1,new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297));
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822));
var map__21764 = p__21762;
var map__21764__$1 = cljs.core.__destructure_map(map__21764);
var _puzzle = map__21764__$1;
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21764__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var axises_at_coord = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(banzai.puzzle.crossword.core.word__GT_axis),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_coord,new cljs.core.Keyword(null,"words","words",1924933001)], null)));
var G__21765 = st;
if((!(cljs.core.contains_QMARK_(axises_at_coord,axis)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21765,new cljs.core.Keyword(null,"axis","axis",-1215390822),cljs.core.first(cljs.core.seq(axises_at_coord)));
} else {
return G__21765;
}
});
banzai.puzzle.crossword.core.update_selected_word = (function banzai$puzzle$crossword$core$update_selected_word(p__21767,p__21768){
var map__21769 = p__21767;
var map__21769__$1 = cljs.core.__destructure_map(map__21769);
var st = map__21769__$1;
var selected_coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21769__$1,new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297));
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21769__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822));
var map__21770 = p__21768;
var map__21770__$1 = cljs.core.__destructure_map(map__21770);
var _puzzle = map__21770__$1;
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21770__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var word = cljs.core.some((function (p1__21766_SHARP_){
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,banzai.puzzle.crossword.core.word__GT_axis(p1__21766_SHARP_));
if(and__5000__auto__){
return p1__21766_SHARP_;
} else {
return and__5000__auto__;
}
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cells,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected_coord,new cljs.core.Keyword(null,"words","words",1924933001)], null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.Keyword(null,"selected-word","selected-word",1662423723),word);
});
banzai.puzzle.crossword.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"deselect-coord","deselect-coord",-584364120,null),(function banzai$puzzle$crossword$core$deselect_coord(_puz_st,p__21771){
var vec__21772 = p__21771;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21772,(0),null);
var map__21775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21772,(1),null);
var map__21775__$1 = cljs.core.__destructure_map(map__21775);
var coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21775__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update-state","update-state",-653396259),(function banzai$puzzle$crossword$core$deselect_coord_$_update_st(p__21776){
var map__21777 = p__21776;
var map__21777__$1 = cljs.core.__destructure_map(map__21777);
var st = map__21777__$1;
var selected_coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21777__$1,new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297));
var G__21778 = st;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coord,selected_coord)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21778,new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297));
} else {
return G__21778;
}
})], null);
}));
banzai.puzzle.crossword.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),(function banzai$puzzle$crossword$core$select_coord(p__21780,p__21781){
var map__21782 = p__21780;
var map__21782__$1 = cljs.core.__destructure_map(map__21782);
var puzzle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21782__$1,new cljs.core.Keyword(null,"puzzle","puzzle",-825926240));
var vec__21783 = p__21781;
var _op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21783,(0),null);
var map__21786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21783,(1),null);
var map__21786__$1 = cljs.core.__destructure_map(map__21786);
var coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21786__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"update-state","update-state",-653396259),(function banzai$puzzle$crossword$core$select_coord_$_update_st(st){
return banzai.puzzle.crossword.core.update_selected_word(banzai.puzzle.crossword.core.update_axis(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297),coord),new cljs.core.Keyword(null,"axis","axis",-1215390822),(function (p1__21779_SHARP_){
var or__5002__auto__ = axis;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return p1__21779_SHARP_;
}
})),puzzle),puzzle);
}),new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["selecting",coord], 0))], null);
}));
banzai.puzzle.crossword.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"set-coord","set-coord",1324194164,null),(function banzai$puzzle$crossword$core$set_coord(p__21787,p__21788){
var map__21789 = p__21787;
var map__21789__$1 = cljs.core.__destructure_map(map__21789);
var puzzle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21789__$1,new cljs.core.Keyword(null,"puzzle","puzzle",-825926240));
var vec__21790 = p__21788;
var _op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21790,(0),null);
var map__21793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21790,(1),null);
var map__21793__$1 = cljs.core.__destructure_map(map__21793);
var data = map__21793__$1;
var coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21793__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21793__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","effect","client/effect",1153635824)], null)),new cljs.core.Keyword(null,"update-state","update-state",-653396259),(function banzai$puzzle$crossword$core$set_coord_$_update_st(st){
return cljs.core.assoc_in(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),coord], null),value);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["set",coord,"to",value], 0))], 0));
}));
banzai.puzzle.crossword.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol(null,"set-axis","set-axis",-151756116,null),(function banzai$puzzle$crossword$core$set_axis(_puz_st,p__21795){
var vec__21796 = p__21795;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21796,(0),null);
var map__21799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21796,(1),null);
var map__21799__$1 = cljs.core.__destructure_map(map__21799);
var data = map__21799__$1;
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21799__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","effect","client/effect",1153635824)], null)),new cljs.core.Keyword(null,"update-state","update-state",-653396259),(function banzai$puzzle$crossword$core$set_axis_$_update_st(st){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.Keyword(null,"current-axis","current-axis",-606099174),(function (p1__21794_SHARP_){
var or__5002__auto__ = axis;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var fexpr__21800 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"across","across",-2072531706),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"across","across",-2072531706)], null);
return (fexpr__21800.cljs$core$IFn$_invoke$arity$2 ? fexpr__21800.cljs$core$IFn$_invoke$arity$2(p1__21794_SHARP_,new cljs.core.Keyword(null,"across","across",-2072531706)) : fexpr__21800.call(null, p1__21794_SHARP_,new cljs.core.Keyword(null,"across","across",-2072531706)));
}
}));
}));
}));
banzai.puzzle.crossword.core.find_words_in_rows = (function banzai$puzzle$crossword$core$find_words_in_rows(p__21801){
var map__21802 = p__21801;
var map__21802__$1 = cljs.core.__destructure_map(map__21802);
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21802__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21802__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var words = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var seq__21803_21930 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),row_count));
var chunk__21804_21931 = null;
var count__21805_21932 = (0);
var i__21806_21933 = (0);
while(true){
if((i__21806_21933 < count__21805_21932)){
var r_idx_21934 = chunk__21804_21931.cljs$core$IIndexed$_nth$arity$2(null, i__21806_21933);
var c_idx_21939 = (0);
var ss_21940 = cljs.core.re_seq(/\S+|\s+/,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,r_idx_21934));
while(true){
var temp__5804__auto___21943 = cljs.core.first(ss_21940);
if(cljs.core.truth_(temp__5804__auto___21943)){
var word_or_spaces_21944 = temp__5804__auto___21943;
if(cljs.core.truth_(cljs.core.re_seq(/^\S\S/,word_or_spaces_21944))){
words.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(words.cljs$core$IDeref$_deref$arity$1(null, ),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_idx_21934,c_idx_21939,word_or_spaces_21944,new cljs.core.Keyword(null,"across","across",-2072531706)], null)));
} else {
}

var G__21945 = (c_idx_21939 + cljs.core.count(word_or_spaces_21944));
var G__21946 = cljs.core.next(ss_21940);
c_idx_21939 = G__21945;
ss_21940 = G__21946;
continue;
} else {
}
break;
}


var G__21947 = seq__21803_21930;
var G__21948 = chunk__21804_21931;
var G__21949 = count__21805_21932;
var G__21950 = (i__21806_21933 + (1));
seq__21803_21930 = G__21947;
chunk__21804_21931 = G__21948;
count__21805_21932 = G__21949;
i__21806_21933 = G__21950;
continue;
} else {
var temp__5804__auto___21951 = cljs.core.seq(seq__21803_21930);
if(temp__5804__auto___21951){
var seq__21803_21952__$1 = temp__5804__auto___21951;
if(cljs.core.chunked_seq_QMARK_(seq__21803_21952__$1)){
var c__5525__auto___21953 = cljs.core.chunk_first(seq__21803_21952__$1);
var G__21954 = cljs.core.chunk_rest(seq__21803_21952__$1);
var G__21955 = c__5525__auto___21953;
var G__21956 = cljs.core.count(c__5525__auto___21953);
var G__21957 = (0);
seq__21803_21930 = G__21954;
chunk__21804_21931 = G__21955;
count__21805_21932 = G__21956;
i__21806_21933 = G__21957;
continue;
} else {
var r_idx_21958 = cljs.core.first(seq__21803_21952__$1);
var c_idx_21959 = (0);
var ss_21960 = cljs.core.re_seq(/\S+|\s+/,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,r_idx_21958));
while(true){
var temp__5804__auto___21961__$1 = cljs.core.first(ss_21960);
if(cljs.core.truth_(temp__5804__auto___21961__$1)){
var word_or_spaces_21962 = temp__5804__auto___21961__$1;
if(cljs.core.truth_(cljs.core.re_seq(/^\S\S/,word_or_spaces_21962))){
words.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.conj.cljs$core$IFn$_invoke$arity$2(words.cljs$core$IDeref$_deref$arity$1(null, ),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_idx_21958,c_idx_21959,word_or_spaces_21962,new cljs.core.Keyword(null,"across","across",-2072531706)], null)));
} else {
}

var G__21963 = (c_idx_21959 + cljs.core.count(word_or_spaces_21962));
var G__21964 = cljs.core.next(ss_21960);
c_idx_21959 = G__21963;
ss_21960 = G__21964;
continue;
} else {
}
break;
}


var G__21965 = cljs.core.next(seq__21803_21952__$1);
var G__21966 = null;
var G__21967 = (0);
var G__21968 = (0);
seq__21803_21930 = G__21965;
chunk__21804_21931 = G__21966;
count__21805_21932 = G__21967;
i__21806_21933 = G__21968;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(words);
});
/**
 * Given a normalized puzzle (all row strings of the appropiate length),
 * inverts the rows and columns.
 * Only inverts `:row-count, :col-count, :rows`
 * other dependent fields may need to be inverted as well.
 */
banzai.puzzle.crossword.core.invert_puzzle_puzzle_light = (function banzai$puzzle$crossword$core$invert_puzzle_puzzle_light(p__21807){
var map__21808 = p__21807;
var map__21808__$1 = cljs.core.__destructure_map(map__21808);
var cw_puzzle = map__21808__$1;
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var col_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,new cljs.core.Keyword(null,"col-count","col-count",2044540340));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21808__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cw_puzzle,new cljs.core.Keyword(null,"row-count","row-count",1060167988),col_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col-count","col-count",2044540340),row_count,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function banzai$puzzle$crossword$core$invert_puzzle_puzzle_light_$_restring(c_idx){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.nth,rows,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(c_idx)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(col_count))], 0));
});
banzai.puzzle.crossword.core.find_words_in_cols = (function banzai$puzzle$crossword$core$find_words_in_cols(cw_puzzle){
var inverted = banzai.puzzle.crossword.core.invert_puzzle_puzzle_light(cw_puzzle);
var inverted_words = banzai.puzzle.crossword.core.find_words_in_rows(inverted);
var iter__5480__auto__ = (function banzai$puzzle$crossword$core$find_words_in_cols_$_iter__21809(s__21810){
return (new cljs.core.LazySeq(null,(function (){
var s__21810__$1 = s__21810;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21810__$1);
if(temp__5804__auto__){
var s__21810__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21810__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21810__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21812 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21811 = (0);
while(true){
if((i__21811 < size__5479__auto__)){
var vec__21813 = cljs.core._nth(c__5478__auto__,i__21811);
var c_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21813,(0),null);
var r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21813,(1),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21813,(2),null);
cljs.core.chunk_append(b__21812,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_idx,c_idx,word,new cljs.core.Keyword(null,"down","down",1565245570)], null));

var G__21973 = (i__21811 + (1));
i__21811 = G__21973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21812),banzai$puzzle$crossword$core$find_words_in_cols_$_iter__21809(cljs.core.chunk_rest(s__21810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21812),null);
}
} else {
var vec__21816 = cljs.core.first(s__21810__$2);
var c_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21816,(0),null);
var r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21816,(1),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21816,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_idx,c_idx,word,new cljs.core.Keyword(null,"down","down",1565245570)], null),banzai$puzzle$crossword$core$find_words_in_cols_$_iter__21809(cljs.core.rest(s__21810__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(inverted_words);
});
banzai.puzzle.crossword.core.cell_idx = (function banzai$puzzle$crossword$core$cell_idx(p__21819,p__21820){
var map__21821 = p__21819;
var map__21821__$1 = cljs.core.__destructure_map(map__21821);
var _cw_puzzle = map__21821__$1;
var col_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21821__$1,new cljs.core.Keyword(null,"col-count","col-count",2044540340));
var vec__21822 = p__21820;
var r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21822,(0),null);
var col_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21822,(1),null);
return ((r_idx * col_count) + col_idx);
});
banzai.puzzle.crossword.core.assoc_cells = (function banzai$puzzle$crossword$core$assoc_cells(cw_puzzle){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cw_puzzle,new cljs.core.Keyword(null,"cells","cells",-985166822),(function (){var coords = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(banzai.puzzle.crossword.core.word__GT_coord),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(cw_puzzle));
var sorted_coords = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(banzai.puzzle.crossword.core.cell_idx,cw_puzzle),coords);
var words_at_coord = cljs.core.group_by(banzai.puzzle.crossword.core.word__GT_coord,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(cw_puzzle));
var first_letter_cells = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.zipmap(sorted_coords,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,coord){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cell-num","cell-num",-726221889),(idx + (1)),new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var G__21825 = coord;
var G__21826 = cljs.core.PersistentVector.EMPTY;
return (words_at_coord.cljs$core$IFn$_invoke$arity$2 ? words_at_coord.cljs$core$IFn$_invoke$arity$2(G__21825,G__21826) : words_at_coord.call(null, G__21825,G__21826));
})())], null);
}),sorted_coords)));
return cljs.core.reduce_kv((function banzai$puzzle$crossword$core$assoc_cells_$_r_words(cells,p__21827,p__21828){
var vec__21829 = p__21827;
var r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21829,(0),null);
var c_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21829,(1),null);
var map__21832 = p__21828;
var map__21832__$1 = cljs.core.__destructure_map(map__21832);
var words = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21832__$1,new cljs.core.Keyword(null,"words","words",1924933001));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function banzai$puzzle$crossword$core$assoc_cells_$_r_words_$_r_word(cells__$1,word){
var vec__21833 = (function (){var G__21836 = banzai.puzzle.crossword.core.word__GT_axis(word);
var G__21836__$1 = (((G__21836 instanceof cljs.core.Keyword))?G__21836.fqn:null);
switch (G__21836__$1) {
case "across":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21836__$1)].join('')));

}
})();
var r_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21833,(0),null);
var c_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21833,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function banzai$puzzle$crossword$core$assoc_cells_$_r_words_$_r_word_$_r_letter(cells__$2,p__21837){
var vec__21838 = p__21837;
var l_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21838,(0),null);
var letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21838,(1),null);
var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r_idx + (r_STAR_ * l_idx)),(c_idx + (c_STAR_ * l_idx))], null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cells__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,new cljs.core.Keyword(null,"correct-letter","correct-letter",-1325513078)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,new cljs.core.Keyword(null,"words","words",1924933001)], null),cljs.core.conj,word);
}),cells__$1,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,banzai.puzzle.crossword.core.word__GT_answer(word)));
}),cells,cljs.core.seq(words));
}),first_letter_cells,first_letter_cells);
})());
});
banzai.puzzle.crossword.core.assoc_words = (function banzai$puzzle$crossword$core$assoc_words(cw_puzzle){
var cw_puzzle__$1 = cw_puzzle;
var cw_puzzle__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cw_puzzle__$1,new cljs.core.Keyword(null,"words-in-rows","words-in-rows",-2088175447),banzai.puzzle.crossword.core.find_words_in_rows(cw_puzzle__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"words-in-cols","words-in-cols",1355545653),banzai.puzzle.crossword.core.find_words_in_cols(cw_puzzle__$1)], 0));
var cw_puzzle__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cw_puzzle__$2,new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"words-in-rows","words-in-rows",-2088175447).cljs$core$IFn$_invoke$arity$1(cw_puzzle__$2),new cljs.core.Keyword(null,"words-in-cols","words-in-cols",1355545653).cljs$core$IFn$_invoke$arity$1(cw_puzzle__$2)));
return banzai.puzzle.crossword.core.assoc_cells(cw_puzzle__$3);
});
banzai.puzzle.crossword.core.comprehend_puzzle = (function banzai$puzzle$crossword$core$comprehend_puzzle(p__21841){
var map__21842 = p__21841;
var map__21842__$1 = cljs.core.__destructure_map(map__21842);
var cw_puzzle = map__21842__$1;
var puzzle_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21842__$1,new cljs.core.Keyword("crossword","puzzle-string","crossword/puzzle-string",-402725686));
if(typeof puzzle_string === 'string'){
} else {
throw (new Error("Assert failed: (string? puzzle-string)"));
}

var short_rows = cljs.core.re_seq(/(?<=#).*/,puzzle_string);
var width = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,short_rows));
var rows = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function banzai$puzzle$crossword$core$comprehend_puzzle_$_fill_row_w_extra_spaces(s,spaces){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spaces)].join(''),(0),width);
}),short_rows,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(width," "))));
var comprehended = banzai.puzzle.crossword.core.assoc_words(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"col-count","col-count",2044540340),width,new cljs.core.Keyword(null,"row-count","row-count",1060167988),cljs.core.count(rows)], null),cw_puzzle], 0)));
return comprehended;
});
banzai.puzzle.crossword.core.all_cells = (function banzai$puzzle$crossword$core$all_cells(p__21843,cw_state){
var map__21844 = p__21843;
var map__21844__$1 = cljs.core.__destructure_map(map__21844);
var _cw_puzzle = map__21844__$1;
var col_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21844__$1,new cljs.core.Keyword(null,"col-count","col-count",2044540340));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21844__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21844__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var iter__5480__auto__ = (function banzai$puzzle$crossword$core$all_cells_$_iter__21845(s__21846){
return (new cljs.core.LazySeq(null,(function (){
var s__21846__$1 = s__21846;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21846__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var r_idx = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__21846__$1,r_idx,xs__6360__auto__,temp__5804__auto__,map__21844,map__21844__$1,_cw_puzzle,col_count,row_count,cells){
return (function banzai$puzzle$crossword$core$all_cells_$_iter__21845_$_iter__21847(s__21848){
return (new cljs.core.LazySeq(null,((function (s__21846__$1,r_idx,xs__6360__auto__,temp__5804__auto__,map__21844,map__21844__$1,_cw_puzzle,col_count,row_count,cells){
return (function (){
var s__21848__$1 = s__21848;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21848__$1);
if(temp__5804__auto____$1){
var s__21848__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21848__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21848__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21850 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21849 = (0);
while(true){
if((i__21849 < size__5479__auto__)){
var c_idx = cljs.core._nth(c__5478__auto__,i__21849);
cljs.core.chunk_append(b__21850,(function (){var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_idx,c_idx], null);
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cells,coord,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locked","locked",-1658763820),true], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"current-value","current-value",2066017989),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cw_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),coord], null)))], null);
})());

var G__21986 = (i__21849 + (1));
i__21849 = G__21986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21850),banzai$puzzle$crossword$core$all_cells_$_iter__21845_$_iter__21847(cljs.core.chunk_rest(s__21848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21850),null);
}
} else {
var c_idx = cljs.core.first(s__21848__$2);
return cljs.core.cons((function (){var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_idx,c_idx], null);
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cells,coord,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locked","locked",-1658763820),true], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"current-value","current-value",2066017989),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cw_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),coord], null)))], null);
})(),banzai$puzzle$crossword$core$all_cells_$_iter__21845_$_iter__21847(cljs.core.rest(s__21848__$2)));
}
} else {
return null;
}
break;
}
});})(s__21846__$1,r_idx,xs__6360__auto__,temp__5804__auto__,map__21844,map__21844__$1,_cw_puzzle,col_count,row_count,cells))
,null,null));
});})(s__21846__$1,r_idx,xs__6360__auto__,temp__5804__auto__,map__21844,map__21844__$1,_cw_puzzle,col_count,row_count,cells))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(col_count)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,banzai$puzzle$crossword$core$all_cells_$_iter__21845(cljs.core.rest(s__21846__$1)));
} else {
var G__21987 = cljs.core.rest(s__21846__$1);
s__21846__$1 = G__21987;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(row_count));
});
banzai.puzzle.crossword.core.find_coord = (function banzai$puzzle$crossword$core$find_coord(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21988 = arguments.length;
var i__5727__auto___21989 = (0);
while(true){
if((i__5727__auto___21989 < len__5726__auto___21988)){
args__5732__auto__.push((arguments[i__5727__auto___21989]));

var G__21990 = (i__5727__auto___21989 + (1));
i__5727__auto___21989 = G__21990;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return banzai.puzzle.crossword.core.find_coord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(banzai.puzzle.crossword.core.find_coord.cljs$core$IFn$_invoke$arity$variadic = (function (cw_puzzle,p__21860,coord,directives){
var map__21861 = p__21860;
var map__21861__$1 = cljs.core.__destructure_map(map__21861);
var cw_state = map__21861__$1;
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21861__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822));
var vec__21862 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function banzai$puzzle$crossword$core$r_locked(p__21871){
var vec__21872 = p__21871;
var _coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21872,(0),null);
var map__21875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21872,(1),null);
var map__21875__$1 = cljs.core.__destructure_map(map__21875);
var locked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21875__$1,new cljs.core.Keyword(null,"locked","locked",-1658763820));
return locked;
}),cljs.core.split_with((function banzai$puzzle$crossword$core$sw_not_equal(p__21876){
var vec__21877 = p__21876;
var _coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21877,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_coord,coord);
}),banzai.puzzle.crossword.core.all_cells(cw_puzzle,cw_state)));
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21862,(0),null);
var vec__21865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21862,(1),null);
var seq__21866 = cljs.core.seq(vec__21865);
var first__21867 = cljs.core.first(seq__21866);
var seq__21866__$1 = cljs.core.next(seq__21866);
var vec__21868 = first__21867;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21868,(0),null);
var curr_entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21868,(1),null);
var after = seq__21866__$1;
var curr_word = (new cljs.core.Delay((function (){
return cljs.core.some((function (p1__21851_SHARP_){
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,banzai.puzzle.crossword.core.word__GT_axis(p1__21851_SHARP_));
if(and__5000__auto__){
return p1__21851_SHARP_;
} else {
return and__5000__auto__;
}
}),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(curr_entry));
}),null));
var editable_coord = (function banzai$puzzle$crossword$core$editable_coord(coord__$1){
var G__21880 = cw_puzzle;
var G__21880__$1 = (((G__21880 == null))?null:new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(G__21880));
var G__21880__$2 = (((G__21880__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__21880__$1,coord__$1));
var G__21880__$3 = (((G__21880__$2 == null))?null:new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(G__21880__$2));
if((G__21880__$3 == null)){
return null;
} else {
var and__5000__auto__ = G__21880__$3;
if(cljs.core.truth_(and__5000__auto__)){
return coord__$1;
} else {
return and__5000__auto__;
}
}
});
var G__21884 = cljs.core.seq(directives);
var vec__21885 = G__21884;
var seq__21886 = cljs.core.seq(vec__21885);
var first__21887 = cljs.core.first(seq__21886);
var seq__21886__$1 = cljs.core.next(seq__21886);
var directive = first__21887;
var directives__$1 = seq__21886__$1;
var G__21884__$1 = G__21884;
while(true){
var vec__21888 = G__21884__$1;
var seq__21889 = cljs.core.seq(vec__21888);
var first__21890 = cljs.core.first(seq__21889);
var seq__21889__$1 = cljs.core.next(seq__21889);
var directive__$1 = first__21890;
var directives__$2 = seq__21889__$1;
if(cljs.core.not(directive__$1)){
return coord;
} else {
var or__5002__auto__ = (function (){var pred__21891 = cljs.core._EQ_;
var expr__21892 = directive__$1;
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","current","find-coord/current",-1957691626),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","current","find-coord/current",-1957691626),expr__21892)))){
return coord;
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","prev","find-coord/prev",1698741943),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","prev","find-coord/prev",1698741943),expr__21892)))){
return cljs.core.first(cljs.core.last(before));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","next","find-coord/next",615904882),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","next","find-coord/next",615904882),expr__21892)))){
return cljs.core.first(cljs.core.first(after));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","left","find-coord/left",614993790),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","left","find-coord/left",614993790),expr__21892)))){
return editable_coord(cljs.core.update.cljs$core$IFn$_invoke$arity$3(coord,(1),cljs.core.dec));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","right","find-coord/right",545033238),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","right","find-coord/right",545033238),expr__21892)))){
return editable_coord(cljs.core.update.cljs$core$IFn$_invoke$arity$3(coord,(1),cljs.core.inc));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","up","find-coord/up",-1153818832),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","up","find-coord/up",-1153818832),expr__21892)))){
return editable_coord(cljs.core.update.cljs$core$IFn$_invoke$arity$3(coord,(0),cljs.core.dec));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","down","find-coord/down",300223073),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","down","find-coord/down",300223073),expr__21892)))){
return editable_coord(cljs.core.update.cljs$core$IFn$_invoke$arity$3(coord,(0),cljs.core.inc));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","prev-in-word","find-coord/prev-in-word",1518316447),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","prev-in-word","find-coord/prev-in-word",1518316447),expr__21892)))){
return cljs.core.some(((function (G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function banzai$puzzle$crossword$core$prev_in_word(n_coord){
var and__5000__auto__ = (cljs.core.compare(n_coord,coord) < (0));
if(and__5000__auto__){
return n_coord;
} else {
return and__5000__auto__;
}
});})(G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,cljs.core.reverse(banzai.puzzle.crossword.core.word__GT_coords(cljs.core.deref(curr_word))));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","next-in-word","find-coord/next-in-word",529694638),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","next-in-word","find-coord/next-in-word",529694638),expr__21892)))){
return cljs.core.some(((function (G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function banzai$puzzle$crossword$core$next_in_word(n_coord){
var and__5000__auto__ = (cljs.core.compare(n_coord,coord) > (0));
if(and__5000__auto__){
return n_coord;
} else {
return and__5000__auto__;
}
});})(G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,banzai.puzzle.crossword.core.word__GT_coords(cljs.core.deref(curr_word)));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","prev-word-in-axis","find-coord/prev-word-in-axis",-778211049),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","prev-word-in-axis","find-coord/prev-word-in-axis",-778211049),expr__21892)))){
return cljs.core.some(((function (G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function banzai$puzzle$crossword$core$f_nxt_empty(p__21894){
var vec__21895 = p__21894;
var n_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21895,(0),null);
var map__21898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21895,(1),null);
var map__21898__$1 = cljs.core.__destructure_map(map__21898);
var words = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21898__$1,new cljs.core.Keyword(null,"words","words",1924933001));
var cell_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21898__$1,new cljs.core.Keyword(null,"cell-num","cell-num",-726221889));
var and__5000__auto__ = cell_num;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.some(((function (G__21884__$1,and__5000__auto__,vec__21895,n_coord,map__21898,map__21898__$1,words,cell_num,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function (p1__21852_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,banzai.puzzle.crossword.core.word__GT_axis(p1__21852_SHARP_));
});})(G__21884__$1,and__5000__auto__,vec__21895,n_coord,map__21898,map__21898__$1,words,cell_num,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,words);
if(cljs.core.truth_(and__5000__auto____$1)){
return n_coord;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});})(G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(before)));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","next-word-in-axis","find-coord/next-word-in-axis",-54003672),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","next-word-in-axis","find-coord/next-word-in-axis",-54003672),expr__21892)))){
return cljs.core.some(((function (G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function banzai$puzzle$crossword$core$f_nxt_empty(p__21899){
var vec__21900 = p__21899;
var n_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21900,(0),null);
var map__21903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21900,(1),null);
var map__21903__$1 = cljs.core.__destructure_map(map__21903);
var words = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21903__$1,new cljs.core.Keyword(null,"words","words",1924933001));
var cell_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21903__$1,new cljs.core.Keyword(null,"cell-num","cell-num",-726221889));
var and__5000__auto__ = cell_num;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.some(((function (G__21884__$1,and__5000__auto__,vec__21900,n_coord,map__21903,map__21903__$1,words,cell_num,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function (p1__21853_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,banzai.puzzle.crossword.core.word__GT_axis(p1__21853_SHARP_));
});})(G__21884__$1,and__5000__auto__,vec__21900,n_coord,map__21903,map__21903__$1,words,cell_num,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,words);
if(cljs.core.truth_(and__5000__auto____$1)){
return n_coord;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});})(G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(after,before));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","prev-word","find-coord/prev-word",1118660495),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","prev-word","find-coord/prev-word",1118660495),expr__21892)))){
return cljs.core.some(((function (G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function banzai$puzzle$crossword$core$f_nxt_empty(p__21904){
var vec__21905 = p__21904;
var n_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21905,(0),null);
var map__21908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21905,(1),null);
var map__21908__$1 = cljs.core.__destructure_map(map__21908);
var cell_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21908__$1,new cljs.core.Keyword(null,"cell-num","cell-num",-726221889));
var and__5000__auto__ = cell_num;
if(cljs.core.truth_(and__5000__auto__)){
return n_coord;
} else {
return and__5000__auto__;
}
});})(G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(before)));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","next-word","find-coord/next-word",1185902752),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","next-word","find-coord/next-word",1185902752),expr__21892)))){
return cljs.core.some(((function (G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function banzai$puzzle$crossword$core$f_nxt_empty(p__21909){
var vec__21910 = p__21909;
var n_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21910,(0),null);
var map__21913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21910,(1),null);
var map__21913__$1 = cljs.core.__destructure_map(map__21913);
var cell_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21913__$1,new cljs.core.Keyword(null,"cell-num","cell-num",-726221889));
var and__5000__auto__ = cell_num;
if(cljs.core.truth_(and__5000__auto__)){
return n_coord;
} else {
return and__5000__auto__;
}
});})(G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(after,before));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","next-empty-start-in-axis","find-coord/next-empty-start-in-axis",479862156),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","next-empty-start-in-axis","find-coord/next-empty-start-in-axis",479862156),expr__21892)))){
return cljs.core.some(((function (G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function banzai$puzzle$crossword$core$f_nxt_empty(p__21914){
var vec__21915 = p__21914;
var n_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21915,(0),null);
var map__21918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21915,(1),null);
var map__21918__$1 = cljs.core.__destructure_map(map__21918);
var words = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918__$1,new cljs.core.Keyword(null,"words","words",1924933001));
var current_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918__$1,new cljs.core.Keyword(null,"current-value","current-value",2066017989));
var cell_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21918__$1,new cljs.core.Keyword(null,"cell-num","cell-num",-726221889));
var and__5000__auto__ = cell_num;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = clojure.string.blank_QMARK_(current_value);
if(and__5000__auto____$1){
var and__5000__auto____$2 = cljs.core.some(((function (G__21884__$1,and__5000__auto____$1,and__5000__auto__,vec__21915,n_coord,map__21918,map__21918__$1,words,current_value,cell_num,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function (p1__21854_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,banzai.puzzle.crossword.core.word__GT_axis(p1__21854_SHARP_));
});})(G__21884__$1,and__5000__auto____$1,and__5000__auto__,vec__21915,n_coord,map__21918,map__21918__$1,words,current_value,cell_num,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,words);
if(cljs.core.truth_(and__5000__auto____$2)){
return n_coord;
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});})(G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(after,before));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","next-empty-in-axis","find-coord/next-empty-in-axis",1496590359),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","next-empty-in-axis","find-coord/next-empty-in-axis",1496590359),expr__21892)))){
return cljs.core.some(((function (G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function banzai$puzzle$crossword$core$f_nxt_empty(p__21919){
var vec__21920 = p__21919;
var n_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21920,(0),null);
var map__21923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21920,(1),null);
var map__21923__$1 = cljs.core.__destructure_map(map__21923);
var words = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21923__$1,new cljs.core.Keyword(null,"words","words",1924933001));
var current_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21923__$1,new cljs.core.Keyword(null,"current-value","current-value",2066017989));
var and__5000__auto__ = clojure.string.blank_QMARK_(current_value);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.some(((function (G__21884__$1,and__5000__auto__,vec__21920,n_coord,map__21923,map__21923__$1,words,current_value,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function (p1__21855_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis,banzai.puzzle.crossword.core.word__GT_axis(p1__21855_SHARP_));
});})(G__21884__$1,and__5000__auto__,vec__21920,n_coord,map__21923,map__21923__$1,words,current_value,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,words);
if(cljs.core.truth_(and__5000__auto____$1)){
return n_coord;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});})(G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(after,before));
} else {
if(cljs.core.truth_((pred__21891.cljs$core$IFn$_invoke$arity$2 ? pred__21891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("find-coord","next-empty","find-coord/next-empty",-673017498),expr__21892) : pred__21891.call(null, new cljs.core.Keyword("find-coord","next-empty","find-coord/next-empty",-673017498),expr__21892)))){
return cljs.core.some(((function (G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis){
return (function banzai$puzzle$crossword$core$f_nxt_empty(p__21924){
var vec__21925 = p__21924;
var n_coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21925,(0),null);
var map__21928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21925,(1),null);
var map__21928__$1 = cljs.core.__destructure_map(map__21928);
var words = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21928__$1,new cljs.core.Keyword(null,"words","words",1924933001));
var current_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21928__$1,new cljs.core.Keyword(null,"current-value","current-value",2066017989));
var and__5000__auto__ = clojure.string.blank_QMARK_(current_value);
if(and__5000__auto__){
var and__5000__auto____$1 = words;
if(cljs.core.truth_(and__5000__auto____$1)){
return n_coord;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});})(G__21884__$1,pred__21891,expr__21892,vec__21888,seq__21889,first__21890,seq__21889__$1,directive__$1,directives__$2,G__21884,vec__21885,seq__21886,first__21887,seq__21886__$1,directive,directives__$1,vec__21862,before,vec__21865,seq__21866,first__21867,seq__21866__$1,vec__21868,_,curr_entry,after,curr_word,editable_coord,map__21861,map__21861__$1,cw_state,axis))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(after,before));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__21892)].join('')));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__22015 = directives__$2;
G__21884__$1 = G__22015;
continue;
}
}
break;
}
}));

(banzai.puzzle.crossword.core.find_coord.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(banzai.puzzle.crossword.core.find_coord.cljs$lang$applyTo = (function (seq21856){
var G__21857 = cljs.core.first(seq21856);
var seq21856__$1 = cljs.core.next(seq21856);
var G__21858 = cljs.core.first(seq21856__$1);
var seq21856__$2 = cljs.core.next(seq21856__$1);
var G__21859 = cljs.core.first(seq21856__$2);
var seq21856__$3 = cljs.core.next(seq21856__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21857,G__21858,G__21859,seq21856__$3);
}));


//# sourceMappingURL=banzai.puzzle.crossword.core.js.map
