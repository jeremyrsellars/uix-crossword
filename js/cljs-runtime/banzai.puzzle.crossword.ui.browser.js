goog.provide('banzai.puzzle.crossword.ui.browser');
/**
 * Returns the cell element id for a coordinate.
 */
banzai.puzzle.crossword.ui.browser.coord_id = cljs.core.pr_str;
banzai.puzzle.crossword.ui.browser.keydown_event_data = (function banzai$puzzle$crossword$ui$browser$keydown_event_data(e){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),e.key,new cljs.core.Keyword(null,"shift-key","shift-key",-1628705067),e.shiftKey,new cljs.core.Keyword(null,"ctrl-key","ctrl-key",1649890501),e.ctrlKey,new cljs.core.Keyword(null,"alt-key","alt-key",-965170049),e.altKey,new cljs.core.Keyword(null,"meta-key","meta-key",280559106),e.metaKey], null);
});
banzai.puzzle.crossword.ui.browser.focus_coord = (function banzai$puzzle$crossword$ui$browser$focus_coord(coord){
var and__5000__auto__ = coord;
if(cljs.core.truth_(and__5000__auto__)){
var G__21720 = document;
var G__21720__$1 = (((G__21720 == null))?null:G__21720.getElementById((banzai.puzzle.crossword.ui.browser.coord_id.cljs$core$IFn$_invoke$arity$1 ? banzai.puzzle.crossword.ui.browser.coord_id.cljs$core$IFn$_invoke$arity$1(coord) : banzai.puzzle.crossword.ui.browser.coord_id.call(null, coord))));
var G__21720__$2 = (((G__21720__$1 == null))?null:(function (){var G__21721 = G__21720__$1;
G__21721.focus();

return G__21721;
})());
if((G__21720__$2 == null)){
return null;
} else {
return cljs.core.boolean$(G__21720__$2);
}
} else {
return and__5000__auto__;
}
});

//# sourceMappingURL=banzai.puzzle.crossword.ui.browser.js.map
