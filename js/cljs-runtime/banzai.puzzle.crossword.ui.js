goog.provide('banzai.puzzle.crossword.ui');
/**
 * Returns the cell element id for a coordinate.
 */
banzai.puzzle.crossword.ui.coord_id = banzai.puzzle.crossword.ui.browser.coord_id;
banzai.puzzle.crossword.ui.keydown_command = (function banzai$puzzle$crossword$ui$keydown_command(p__21734,data){
var map__21735 = p__21734;
var map__21735__$1 = cljs.core.__destructure_map(map__21735);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21735__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var shift_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21735__$1,new cljs.core.Keyword(null,"shift-key","shift-key",-1628705067));
var ctrl_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21735__$1,new cljs.core.Keyword(null,"ctrl-key","ctrl-key",1649890501));
var alt_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21735__$1,new cljs.core.Keyword(null,"alt-key","alt-key",-965170049));
var meta_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21735__$1,new cljs.core.Keyword(null,"meta-key","meta-key",280559106));
if(cljs.core.truth_((function (){var or__5002__auto__ = ctrl_key;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = alt_key;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return meta_key;
}
}
})())){
return null;
} else {
var G__21740 = key;
switch (G__21740) {
case "Tab":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("find-coord","directives","find-coord/directives",-1070737379),((cljs.core.not(shift_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("find-coord","next-word-in-axis","find-coord/next-word-in-axis",-54003672),new cljs.core.Keyword("find-coord","next-word","find-coord/next-word",1185902752)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("find-coord","prev-word-in-axis","find-coord/prev-word-in-axis",-778211049),new cljs.core.Keyword("find-coord","prev-word","find-coord/prev-word",1118660495)], null)))], null);

break;
case "Backspace":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-coord","set-coord",1324194164,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"value","value",305978217),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("find-coord","directives","find-coord/directives",-1070737379),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("find-coord","prev-in-word","find-coord/prev-in-word",1518316447),new cljs.core.Keyword("find-coord","prev","find-coord/prev",1698741943)], null)], 0))], null);

break;
case "Delete":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-coord","set-coord",1324194164,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"value","value",305978217),null)], null);

break;
case "ArrowUp":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("find-coord","directives","find-coord/directives",-1070737379),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("find-coord","up","find-coord/up",-1153818832),new cljs.core.Keyword("find-coord","prev-in-word","find-coord/prev-in-word",1518316447),new cljs.core.Keyword("find-coord","prev","find-coord/prev",1698741943)], null))], null);

break;
case "ArrowLeft":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("find-coord","directives","find-coord/directives",-1070737379),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("find-coord","left","find-coord/left",614993790),new cljs.core.Keyword("find-coord","prev-in-word","find-coord/prev-in-word",1518316447),new cljs.core.Keyword("find-coord","prev","find-coord/prev",1698741943)], null))], null);

break;
case "ArrowDown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("find-coord","directives","find-coord/directives",-1070737379),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("find-coord","down","find-coord/down",300223073),new cljs.core.Keyword("find-coord","next-in-word","find-coord/next-in-word",529694638),new cljs.core.Keyword("find-coord","next","find-coord/next",615904882)], null))], null);

break;
case "ArrowRight":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("find-coord","directives","find-coord/directives",-1070737379),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("find-coord","right","find-coord/right",545033238),new cljs.core.Keyword("find-coord","next-in-word","find-coord/next-in-word",529694638),new cljs.core.Keyword("find-coord","next","find-coord/next",615904882)], null))], null);

break;
default:
if(((1) === cljs.core.count(key))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-coord","set-coord",1324194164,null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"value","value",305978217),clojure.string.upper_case(key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("find-coord","directives","find-coord/directives",-1070737379),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("find-coord","next-in-word","find-coord/next-in-word",529694638),new cljs.core.Keyword("find-coord","next","find-coord/next",615904882)], null)], 0))], null);
} else {
return null;
}

}
}
});
banzai.puzzle.crossword.ui.focus_coord = (function banzai$puzzle$crossword$ui$focus_coord(coord){
var and__5000__auto__ = coord;
if(cljs.core.truth_(and__5000__auto__)){
return banzai.puzzle.crossword.ui.browser.focus_coord(coord);
} else {
return and__5000__auto__;
}
});

//# sourceMappingURL=banzai.puzzle.crossword.ui.js.map
