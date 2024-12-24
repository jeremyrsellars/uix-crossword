goog.provide('banzai.puzzle.crossword.uix');
banzai.puzzle.crossword.uix.CrosswordPuzzleCluePane = (function banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane(props__12868__auto__){
var clj_props__12869__auto__ = uix.core.glue_args(props__12868__auto__);
var vec__21935 = [clj_props__12869__auto__];
var map__21938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935,(0),null);
var map__21938__$1 = cljs.core.__destructure_map(map__21938);
var map__21941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21938__$1,new cljs.core.Keyword(null,"puzzle","puzzle",-825926240));
var map__21941__$1 = cljs.core.__destructure_map(map__21941);
var cw_puzzle = map__21941__$1;
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21941__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var clues = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21941__$1,new cljs.core.Keyword("crossword","clues","crossword/clues",-1480943904));
var cw_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21938__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__21942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21938__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var map__21942__$1 = cljs.core.__destructure_map(map__21942);
var words_key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21942__$1,new cljs.core.Keyword(null,"words-key","words-key",-681165021),new cljs.core.Keyword(null,"words","words",1924933001));
var ProcessCmd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21938__$1,new cljs.core.Keyword(null,"ProcessCmd","ProcessCmd",-820562129));
var f__12870__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___22101 = banzai.puzzle.crossword.uix.CrosswordPuzzleCluePane.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___22101)){
var f__12808__auto___22102 = temp__5804__auto___22101;
(f__12808__auto___22102.cljs$core$IFn$_invoke$arity$0 ? f__12808__auto___22102.cljs$core$IFn$_invoke$arity$0() : f__12808__auto___22102.call(null, ));
} else {
}
} else {
}

var grouped_words = cljs.core.group_by(banzai.puzzle.crossword.core.word__GT_axis,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cw_puzzle,words_key));
return uix.compiler.aot._GT_el("ol",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"ml-4 text-white")}],[(function (){var iter__5480__auto__ = (function banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969(s__21970){
return (new cljs.core.LazySeq(null,(function (){
var s__21970__$1 = s__21970;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21970__$1);
if(temp__5804__auto__){
var s__21970__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21970__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21970__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21972 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21971 = (0);
while(true){
if((i__21971 < size__5479__auto__)){
var vec__21974 = cljs.core._nth(c__5478__auto__,i__21971);
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21974,(0),null);
var words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21974,(1),null);
cljs.core.chunk_append(b__21972,uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[{'key':uix.compiler.attributes.keyword__GT_string(axis)}],[uix.compiler.aot._GT_el("h3",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"capitalize text-xl")}],[cljs.core.name(axis)]),uix.compiler.aot._GT_el("ol",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Symbol(null,"mb-4","mb-4",1270861314,null))}],[(function (){var iter__5480__auto__ = ((function (i__21971,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__21977(s__21978){
return (new cljs.core.LazySeq(null,((function (i__21971,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function (){
var s__21978__$1 = s__21978;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21978__$1);
if(temp__5804__auto____$1){
var s__21978__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21978__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__21978__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__21980 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__21979 = (0);
while(true){
if((i__21979 < size__5479__auto____$1)){
var vec__21982 = cljs.core._nth(c__5478__auto____$1,i__21979);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21982,(0),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21982,(1),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21982,(2),null);
cljs.core.chunk_append(b__21980,uix.compiler.aot._GT_el("li",[{'key':uix.compiler.attributes.keyword__GT_string(coord),'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297).cljs$core$IFn$_invoke$arity$1(cw_state)),banzai.puzzle.crossword.core.word__GT_coords(word)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(cw_state),banzai.puzzle.crossword.core.word__GT_axis(word)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bg-yellow-100","bg-yellow-100",-1219820244,null),new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bg-slate-100","bg-slate-100",812446239,null),new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null)], null)):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"font-bold","font-bold",1912789557,null)], 0))}],[uix.compiler.aot._GT_el("label",[{'htmlFor':(banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1 ? banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1(coord) : banzai.puzzle.crossword.ui.coord_id.call(null, coord)),'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,new cljs.core.Symbol(null,"hover:bg-yellow-200","hover:bg-yellow-200",-203811796,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"hover:text-slate-800","hover:text-slate-800",-1324325411,null),new cljs.core.Symbol(null,"cursor-pointer","cursor-pointer",-897693090,null),new cljs.core.Symbol(null,"pad-r-1em","pad-r-1em",1256546994,null)], 0)),'onClick':((function (i__21979,i__21971,vec__21982,coord,word,cell,c__5478__auto____$1,size__5479__auto____$1,b__21980,s__21978__$2,temp__5804__auto____$1,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function (_){
var G__21985_22103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"axis","axis",-1215390822),axis], null)], null);
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__21985_22103) : ProcessCmd.call(null, G__21985_22103));

return banzai.puzzle.crossword.ui.focus_coord(coord);
});})(i__21979,i__21971,vec__21982,coord,word,cell,c__5478__auto____$1,size__5479__auto____$1,b__21980,s__21978__$2,temp__5804__auto____$1,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cell-num","cell-num",-726221889).cljs$core$IFn$_invoke$arity$1(cell)),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clues,banzai.puzzle.crossword.core.word__GT_answer(word)))].join(''),["span",null,null,false],false),[])])]));

var G__22104 = (i__21979 + (1));
i__21979 = G__22104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21980),banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__21977(cljs.core.chunk_rest(s__21978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21980),null);
}
} else {
var vec__21991 = cljs.core.first(s__21978__$2);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21991,(0),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21991,(1),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21991,(2),null);
return cljs.core.cons(uix.compiler.aot._GT_el("li",[{'key':uix.compiler.attributes.keyword__GT_string(coord),'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297).cljs$core$IFn$_invoke$arity$1(cw_state)),banzai.puzzle.crossword.core.word__GT_coords(word)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(cw_state),banzai.puzzle.crossword.core.word__GT_axis(word)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bg-yellow-100","bg-yellow-100",-1219820244,null),new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bg-slate-100","bg-slate-100",812446239,null),new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null)], null)):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"font-bold","font-bold",1912789557,null)], 0))}],[uix.compiler.aot._GT_el("label",[{'htmlFor':(banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1 ? banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1(coord) : banzai.puzzle.crossword.ui.coord_id.call(null, coord)),'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,new cljs.core.Symbol(null,"hover:bg-yellow-200","hover:bg-yellow-200",-203811796,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"hover:text-slate-800","hover:text-slate-800",-1324325411,null),new cljs.core.Symbol(null,"cursor-pointer","cursor-pointer",-897693090,null),new cljs.core.Symbol(null,"pad-r-1em","pad-r-1em",1256546994,null)], 0)),'onClick':((function (i__21971,vec__21991,coord,word,cell,s__21978__$2,temp__5804__auto____$1,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function (_){
var G__21994_22105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"axis","axis",-1215390822),axis], null)], null);
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__21994_22105) : ProcessCmd.call(null, G__21994_22105));

return banzai.puzzle.crossword.ui.focus_coord(coord);
});})(i__21971,vec__21991,coord,word,cell,s__21978__$2,temp__5804__auto____$1,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cell-num","cell-num",-726221889).cljs$core$IFn$_invoke$arity$1(cell)),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clues,banzai.puzzle.crossword.core.word__GT_answer(word)))].join(''),["span",null,null,false],false),[])])]),banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__21977(cljs.core.rest(s__21978__$2)));
}
} else {
return null;
}
break;
}
});})(i__21971,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
,null,null));
});})(i__21971,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
;
return iter__5480__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (i__21971,iter__5480__auto__,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_number(p__21995){
var vec__21996 = p__21995;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21996,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21996,(1),null);
var map__21999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21996,(2),null);
var map__21999__$1 = cljs.core.__destructure_map(map__21999);
var cell_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21999__$1,new cljs.core.Keyword(null,"cell-num","cell-num",-726221889));
return cell_num;
});})(i__21971,iter__5480__auto__,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
,(function (){var iter__5480__auto____$1 = ((function (i__21971,iter__5480__auto__,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__22000(s__22001){
return (new cljs.core.LazySeq(null,((function (i__21971,iter__5480__auto__,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function (){
var s__22001__$1 = s__22001;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22001__$1);
if(temp__5804__auto____$1){
var s__22001__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22001__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__22001__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__22003 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__22002 = (0);
while(true){
if((i__22002 < size__5479__auto____$1)){
var word = cljs.core._nth(c__5478__auto____$1,i__22002);
cljs.core.chunk_append(b__22003,(function (){var coord = banzai.puzzle.crossword.core.word__GT_coord(word);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,word,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells,coord)], null);
})());

var G__22106 = (i__22002 + (1));
i__22002 = G__22106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22003),banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__22000(cljs.core.chunk_rest(s__22001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22003),null);
}
} else {
var word = cljs.core.first(s__22001__$2);
return cljs.core.cons((function (){var coord = banzai.puzzle.crossword.core.word__GT_coord(word);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,word,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells,coord)], null);
})(),banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__22000(cljs.core.rest(s__22001__$2)));
}
} else {
return null;
}
break;
}
});})(i__21971,iter__5480__auto__,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
,null,null));
});})(i__21971,iter__5480__auto__,vec__21974,axis,words,c__5478__auto__,size__5479__auto__,b__21972,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
;
return iter__5480__auto____$1(words);
})()));
})()])]));

var G__22111 = (i__21971 + (1));
i__21971 = G__22111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21972),banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969(cljs.core.chunk_rest(s__21970__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21972),null);
}
} else {
var vec__22004 = cljs.core.first(s__21970__$2);
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22004,(0),null);
var words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22004,(1),null);
return cljs.core.cons(uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[{'key':uix.compiler.attributes.keyword__GT_string(axis)}],[uix.compiler.aot._GT_el("h3",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"capitalize text-xl")}],[cljs.core.name(axis)]),uix.compiler.aot._GT_el("ol",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Symbol(null,"mb-4","mb-4",1270861314,null))}],[(function (){var iter__5480__auto__ = ((function (vec__22004,axis,words,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__22007(s__22008){
return (new cljs.core.LazySeq(null,(function (){
var s__22008__$1 = s__22008;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22008__$1);
if(temp__5804__auto____$1){
var s__22008__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22008__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22008__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22010 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22009 = (0);
while(true){
if((i__22009 < size__5479__auto__)){
var vec__22011 = cljs.core._nth(c__5478__auto__,i__22009);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011,(0),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011,(1),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22011,(2),null);
cljs.core.chunk_append(b__22010,uix.compiler.aot._GT_el("li",[{'key':uix.compiler.attributes.keyword__GT_string(coord),'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297).cljs$core$IFn$_invoke$arity$1(cw_state)),banzai.puzzle.crossword.core.word__GT_coords(word)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(cw_state),banzai.puzzle.crossword.core.word__GT_axis(word)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bg-yellow-100","bg-yellow-100",-1219820244,null),new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bg-slate-100","bg-slate-100",812446239,null),new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null)], null)):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"font-bold","font-bold",1912789557,null)], 0))}],[uix.compiler.aot._GT_el("label",[{'htmlFor':(banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1 ? banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1(coord) : banzai.puzzle.crossword.ui.coord_id.call(null, coord)),'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,new cljs.core.Symbol(null,"hover:bg-yellow-200","hover:bg-yellow-200",-203811796,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"hover:text-slate-800","hover:text-slate-800",-1324325411,null),new cljs.core.Symbol(null,"cursor-pointer","cursor-pointer",-897693090,null),new cljs.core.Symbol(null,"pad-r-1em","pad-r-1em",1256546994,null)], 0)),'onClick':((function (i__22009,vec__22011,coord,word,cell,c__5478__auto__,size__5479__auto__,b__22010,s__22008__$2,temp__5804__auto____$1,vec__22004,axis,words,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function (_){
var G__22014_22114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"axis","axis",-1215390822),axis], null)], null);
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__22014_22114) : ProcessCmd.call(null, G__22014_22114));

return banzai.puzzle.crossword.ui.focus_coord(coord);
});})(i__22009,vec__22011,coord,word,cell,c__5478__auto__,size__5479__auto__,b__22010,s__22008__$2,temp__5804__auto____$1,vec__22004,axis,words,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cell-num","cell-num",-726221889).cljs$core$IFn$_invoke$arity$1(cell)),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clues,banzai.puzzle.crossword.core.word__GT_answer(word)))].join(''),["span",null,null,false],false),[])])]));

var G__22115 = (i__22009 + (1));
i__22009 = G__22115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22010),banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__22007(cljs.core.chunk_rest(s__22008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22010),null);
}
} else {
var vec__22016 = cljs.core.first(s__22008__$2);
var coord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,(0),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,(1),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,(2),null);
return cljs.core.cons(uix.compiler.aot._GT_el("li",[{'key':uix.compiler.attributes.keyword__GT_string(coord),'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297).cljs$core$IFn$_invoke$arity$1(cw_state)),banzai.puzzle.crossword.core.word__GT_coords(word)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(cw_state),banzai.puzzle.crossword.core.word__GT_axis(word)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bg-yellow-100","bg-yellow-100",-1219820244,null),new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bg-slate-100","bg-slate-100",812446239,null),new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null)], null)):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"font-bold","font-bold",1912789557,null)], 0))}],[uix.compiler.aot._GT_el("label",[{'htmlFor':(banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1 ? banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1(coord) : banzai.puzzle.crossword.ui.coord_id.call(null, coord)),'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,new cljs.core.Symbol(null,"hover:bg-yellow-200","hover:bg-yellow-200",-203811796,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"hover:text-slate-800","hover:text-slate-800",-1324325411,null),new cljs.core.Symbol(null,"cursor-pointer","cursor-pointer",-897693090,null),new cljs.core.Symbol(null,"pad-r-1em","pad-r-1em",1256546994,null)], 0)),'onClick':((function (vec__22016,coord,word,cell,s__22008__$2,temp__5804__auto____$1,vec__22004,axis,words,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function (_){
var G__22019_22116 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"axis","axis",-1215390822),axis], null)], null);
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__22019_22116) : ProcessCmd.call(null, G__22019_22116));

return banzai.puzzle.crossword.ui.focus_coord(coord);
});})(vec__22016,coord,word,cell,s__22008__$2,temp__5804__auto____$1,vec__22004,axis,words,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cell-num","cell-num",-726221889).cljs$core$IFn$_invoke$arity$1(cell)),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clues,banzai.puzzle.crossword.core.word__GT_answer(word)))].join(''),["span",null,null,false],false),[])])]),banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__22007(cljs.core.rest(s__22008__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__22004,axis,words,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
;
return iter__5480__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (iter__5480__auto__,vec__22004,axis,words,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_number(p__22020){
var vec__22021 = p__22020;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22021,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22021,(1),null);
var map__22024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22021,(2),null);
var map__22024__$1 = cljs.core.__destructure_map(map__22024);
var cell_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22024__$1,new cljs.core.Keyword(null,"cell-num","cell-num",-726221889));
return cell_num;
});})(iter__5480__auto__,vec__22004,axis,words,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
,(function (){var iter__5480__auto____$1 = ((function (iter__5480__auto__,vec__22004,axis,words,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd){
return (function banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__22025(s__22026){
return (new cljs.core.LazySeq(null,(function (){
var s__22026__$1 = s__22026;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22026__$1);
if(temp__5804__auto____$1){
var s__22026__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22026__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22026__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22028 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22027 = (0);
while(true){
if((i__22027 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__22027);
cljs.core.chunk_append(b__22028,(function (){var coord = banzai.puzzle.crossword.core.word__GT_coord(word);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,word,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells,coord)], null);
})());

var G__22121 = (i__22027 + (1));
i__22027 = G__22121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22028),banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__22025(cljs.core.chunk_rest(s__22026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22028),null);
}
} else {
var word = cljs.core.first(s__22026__$2);
return cljs.core.cons((function (){var coord = banzai.puzzle.crossword.core.word__GT_coord(word);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord,word,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells,coord)], null);
})(),banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969_$_iter__22025(cljs.core.rest(s__22026__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(iter__5480__auto__,vec__22004,axis,words,s__21970__$2,temp__5804__auto__,grouped_words,clj_props__12869__auto__,vec__21935,map__21938,map__21938__$1,map__21941,map__21941__$1,cw_puzzle,cells,clues,cw_state,map__21942,map__21942__$1,words_key,ProcessCmd))
;
return iter__5480__auto____$1(words);
})()));
})()])]),banzai$puzzle$crossword$uix$CrosswordPuzzleCluePane_$_iter__21969(cljs.core.rest(s__21970__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(grouped_words);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__22029 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__22030 = banzai.puzzle.crossword.uix.CrosswordPuzzleCluePane;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__22030);

try{if(((cljs.core.map_QMARK_(clj_props__12869__auto__)) || ((clj_props__12869__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__12869__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__12869__auto__) (clojure.core/nil? clj-props__12869__auto__))"].join('')));
}

return f__12870__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__22029);
}} else {
return f__12870__auto__();
}
});

(banzai.puzzle.crossword.uix.CrosswordPuzzleCluePane.uix_component_QMARK_ = true);

(banzai.puzzle.crossword.uix.CrosswordPuzzleCluePane.displayName = "banzai.puzzle.crossword.uix/CrosswordPuzzleCluePane");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__12817__auto___22124 = window.uix.dev.signature_BANG_();
(sig__12817__auto___22124.cljs$core$IFn$_invoke$arity$4 ? sig__12817__auto___22124.cljs$core$IFn$_invoke$arity$4(banzai.puzzle.crossword.uix.CrosswordPuzzleCluePane,"",null,null) : sig__12817__auto___22124.call(null, banzai.puzzle.crossword.uix.CrosswordPuzzleCluePane,"",null,null));

window.uix.dev.register_BANG_(banzai.puzzle.crossword.uix.CrosswordPuzzleCluePane,banzai.puzzle.crossword.uix.CrosswordPuzzleCluePane.displayName);

(banzai.puzzle.crossword.uix.CrosswordPuzzleCluePane.fast_refresh_signature = sig__12817__auto___22124);
} else {
}
} else {
}
banzai.puzzle.crossword.uix.CrosswordPuzzleGridPane = (function banzai$puzzle$crossword$uix$CrosswordPuzzleGridPane(props__12868__auto__){
var clj_props__12869__auto__ = uix.core.glue_args(props__12868__auto__);
var vec__22031 = [clj_props__12869__auto__];
var map__22034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22031,(0),null);
var map__22034__$1 = cljs.core.__destructure_map(map__22034);
var map__22035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22034__$1,new cljs.core.Keyword(null,"puzzle","puzzle",-825926240));
var map__22035__$1 = cljs.core.__destructure_map(map__22035);
var cw_puzzle = map__22035__$1;
var col_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22035__$1,new cljs.core.Keyword(null,"col-count","col-count",2044540340));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22035__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var map__22036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22034__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__22036__$1 = cljs.core.__destructure_map(map__22036);
var cw_state = map__22036__$1;
var selected_coord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22036__$1,new cljs.core.Keyword(null,"selected-coord","selected-coord",-543869297));
var selected_word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22036__$1,new cljs.core.Keyword(null,"selected-word","selected-word",1662423723));
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22036__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822));
var ProcessCmd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22034__$1,new cljs.core.Keyword(null,"ProcessCmd","ProcessCmd",-820562129));
var f__12870__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___22125 = banzai.puzzle.crossword.uix.CrosswordPuzzleGridPane.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___22125)){
var f__12808__auto___22127 = temp__5804__auto___22125;
(f__12808__auto___22127.cljs$core$IFn$_invoke$arity$0 ? f__12808__auto___22127.cljs$core$IFn$_invoke$arity$0() : f__12808__auto___22127.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Symbol(null,"relative","relative",1663328389,null))}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"absolute","absolute",-999049291,null),new cljs.core.Symbol(null,"w-full","w-full",528965522,null),new cljs.core.Symbol(null,"h-full","h-full",-1683570291,null),new cljs.core.Symbol(null,"bg-cover","bg-cover",-1788926722,null),new cljs.core.Symbol(null,"bg-center","bg-center",1063001512,null),new cljs.core.Symbol(null,"bg-no-repeat","bg-no-repeat",-1877699579,null)], null)),'style':{'backgroundImage':"url(https://static-app-misc.teachbanzai.com/img/income-and-expenses-thumb.jpg)"}}],[]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.Symbol(null,"m-6","m-6",1289217824,null)], null)),'style':{'gridTemplateColumns':uix.compiler.attributes.keyword__GT_string(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(col_count,"3rem"))),'gridTemplateRows':uix.compiler.attributes.keyword__GT_string(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(row_count,"3rem")))}}],[(function (){var selected_word_coords = cljs.core.set((function (){var G__22037 = selected_word;
if((G__22037 == null)){
return null;
} else {
return banzai.puzzle.crossword.core.word__GT_coords(G__22037);
}
})());
var iter__5480__auto__ = (function banzai$puzzle$crossword$uix$CrosswordPuzzleGridPane_$_iter__22038(s__22039){
return (new cljs.core.LazySeq(null,(function (){
var s__22039__$1 = s__22039;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22039__$1);
if(temp__5804__auto__){
var s__22039__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22039__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22039__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22041 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22040 = (0);
while(true){
if((i__22040 < size__5479__auto__)){
var vec__22042 = cljs.core._nth(c__5478__auto__,i__22040);
var vec__22045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22042,(0),null);
var r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22045,(0),null);
var c_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22045,(1),null);
var cell = vec__22045;
var map__22048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22042,(1),null);
var map__22048__$1 = cljs.core.__destructure_map(map__22048);
var cell_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22048__$1,new cljs.core.Keyword(null,"cell-num","cell-num",-726221889));
var current_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22048__$1,new cljs.core.Keyword(null,"current-value","current-value",2066017989));
var correct_letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22048__$1,new cljs.core.Keyword(null,"correct-letter","correct-letter",-1325513078));
var locked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22048__$1,new cljs.core.Keyword(null,"locked","locked",-1658763820));
cljs.core.chunk_append(b__22041,(function (){var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_idx,c_idx], null);
var active_word_QMARK_ = cljs.core.contains_QMARK_(selected_word_coords,coord);
var cell_format = (cljs.core.truth_(locked)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bg-black","bg-black",-544131918,null),new cljs.core.Symbol(null,"border-black","border-black",-1874891272,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"border-slate-500","border-slate-500",795678228,null),new cljs.core.Symbol(null,"border-1","border-1",-347401081,null)], null));
var text_format = (cljs.core.truth_(current_value)?"text-black":"text-slate-500");
var focused_cell_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_coord,coord);
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[{'key':cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0))}],[(cljs.core.truth_(locked)?null:uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var G__22049 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"content-editable","content-editable",636764967),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-input","on-input",-267523366),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),new cljs.core.Keyword(null,"suppress-content-editable-warning","suppress-content-editable-warning",1672859966),new cljs.core.Keyword(null,"suppressContentEditableWarning","suppressContentEditableWarning",996489054)],[new cljs.core.Symbol(null,"locked","locked",-18232293,null),true,((function (i__22040,coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22042,vec__22045,r_idx,c_idx,cell,map__22048,map__22048__$1,cell_num,current_value,correct_letter,locked,c__5478__auto__,size__5479__auto__,b__22041,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd){
return (function (_){
var G__22050_22133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null);
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__22050_22133) : ProcessCmd.call(null, G__22050_22133));

return banzai.puzzle.crossword.ui.focus_coord(coord);
});})(i__22040,coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22042,vec__22045,r_idx,c_idx,cell,map__22048,map__22048__$1,cell_num,current_value,correct_letter,locked,c__5478__auto__,size__5479__auto__,b__22041,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd))
,((function (i__22040,coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22042,vec__22045,r_idx,c_idx,cell,map__22048,map__22048__$1,cell_num,current_value,correct_letter,locked,c__5478__auto__,size__5479__auto__,b__22041,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd){
return (function (_){
var G__22051 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deselect-coord","deselect-coord",-584364120,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null);
return (ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__22051) : ProcessCmd.call(null, G__22051));
});})(i__22040,coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22042,vec__22045,r_idx,c_idx,cell,map__22048,map__22048__$1,cell_num,current_value,correct_letter,locked,c__5478__auto__,size__5479__auto__,b__22041,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd))
,((function (i__22040,coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22042,vec__22045,r_idx,c_idx,cell,map__22048,map__22048__$1,cell_num,current_value,correct_letter,locked,c__5478__auto__,size__5479__auto__,b__22041,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd){
return (function (e){
if(focused_cell_QMARK_){
var G__22052_22134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"axis","axis",-1215390822),(function (){var fexpr__22053 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"across","across",-2072531706),new cljs.core.Keyword(null,"down","down",1565245570)], null);
return (fexpr__22053.cljs$core$IFn$_invoke$arity$2 ? fexpr__22053.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"across","across",-2072531706)) : fexpr__22053.call(null, axis,new cljs.core.Keyword(null,"across","across",-2072531706)));
})()], null)], null);
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__22052_22134) : ProcessCmd.call(null, G__22052_22134));

return e.target.focus();
} else {
return null;
}
});})(i__22040,coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22042,vec__22045,r_idx,c_idx,cell,map__22048,map__22048__$1,cell_num,current_value,correct_letter,locked,c__5478__auto__,size__5479__auto__,b__22041,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(r_idx + (1)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(c_idx + (1))], null),(banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1 ? banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1(coord) : banzai.puzzle.crossword.ui.coord_id.call(null, coord)),cljs.core.vec(cljs.core.flatten(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [text_format,cell_format,new cljs.core.Symbol(null,"z-10","z-10",632128640,null),(cljs.core.truth_(locked)?null:"border"),((focused_cell_QMARK_)?new cljs.core.Symbol(null,"bg-yellow-200","bg-yellow-200",-1748715761,null):((active_word_QMARK_)?new cljs.core.Symbol(null,"bg-blue-200","bg-blue-200",-355443960,null):new cljs.core.Symbol(null,"bg-white","bg-white",187289854,null)
)),new cljs.core.Symbol(null,"justify-center","justify-center",320331129,null),new cljs.core.Symbol(null,"items-center","items-center",-597734706,null),"text-xl bold grid items-center focus:outline-none height-[3rem] m-[-1px_-1px_0_0] caret-transparent"], null))),((function (i__22040,coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22042,vec__22045,r_idx,c_idx,cell,map__22048,map__22048__$1,cell_num,current_value,correct_letter,locked,c__5478__auto__,size__5479__auto__,b__22041,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd){
return (function (e){
var value = (function (){var G__22054 = e.nativeEvent.data;
if((G__22054 == null)){
return null;
} else {
return clojure.string.upper_case(G__22054);
}
})();
var next_coord = banzai.puzzle.crossword.core.find_coord.cljs$core$IFn$_invoke$arity$variadic(cw_puzzle,cw_state,coord,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("find-coord","next-in-word","find-coord/next-in-word",529694638),new cljs.core.Keyword("find-coord","next-empty-start-in-axis","find-coord/next-empty-start-in-axis",479862156),new cljs.core.Keyword("find-coord","next-empty-in-axis","find-coord/next-empty-in-axis",1496590359),new cljs.core.Keyword("find-coord","next-empty","find-coord/next-empty",-673017498)], 0));
var prev_value = (function (){var s = current_value;
var s__$1 = (function (){var or__5002__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})();
var s__$2 = [clojure.string.upper_case(s__$1),clojure.string.lower_case(s__$1)].join('');
var s__$3 = cljs.core.frequencies(s__$2);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.second),s__$3);
})();
var best_s = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(prev_value,value);
var best_char = (function (){var temp__5802__auto__ = cljs.core.first(best_s);
if(cljs.core.truth_(temp__5802__auto__)){
var bc = temp__5802__auto__;
return bc;
} else {
return cljs.core.last(value);
}
})();
(e.target.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(best_char));

var G__22055_22135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-coord","set-coord",1324194164,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"empty","empty",767870958)], null)], null);
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__22055_22135) : ProcessCmd.call(null, G__22055_22135));

banzai.puzzle.crossword.ui.focus_coord(next_coord);

return e.preventDefault();
});})(i__22040,coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22042,vec__22045,r_idx,c_idx,cell,map__22048,map__22048__$1,cell_num,current_value,correct_letter,locked,c__5478__auto__,size__5479__auto__,b__22041,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd))
,((function (i__22040,coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22042,vec__22045,r_idx,c_idx,cell,map__22048,map__22048__$1,cell_num,current_value,correct_letter,locked,c__5478__auto__,size__5479__auto__,b__22041,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd){
return (function (e){
var temp__5804__auto____$1 = banzai.puzzle.crossword.ui.keydown_command(banzai.puzzle.crossword.ui.browser.keydown_event_data(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var vec__22056 = temp__5804__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22056,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22056,(1),null);
var cmd = vec__22056;
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(cmd) : ProcessCmd.call(null, cmd));

var temp__5804__auto___22136__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(banzai.puzzle.crossword.core.find_coord,cw_puzzle,cw_state,coord,new cljs.core.Keyword("find-coord","directives","find-coord/directives",-1070737379).cljs$core$IFn$_invoke$arity$1(args));
if(cljs.core.truth_(temp__5804__auto___22136__$2)){
var next_coord_22137 = temp__5804__auto___22136__$2;
banzai.puzzle.crossword.ui.focus_coord(next_coord_22137);

e.preventDefault();
} else {
}

var temp__5804__auto____$2 = cljs.core.find(args,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(temp__5804__auto____$2)){
var vec__22059 = temp__5804__auto____$2;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,(1),null);
return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(i__22040,coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22042,vec__22045,r_idx,c_idx,cell,map__22048,map__22048__$1,cell_num,current_value,correct_letter,locked,c__5478__auto__,size__5479__auto__,b__22041,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd))
,"true",true]);
if(cljs.core.not(locked)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22049,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0));
} else {
return G__22049;
}
})(),["div",null,null,false],false),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_value)])),(cljs.core.truth_(cell_num)?uix.compiler.aot._GT_el("div",[{'key':new cljs.core.Symbol(null,"unlocked","unlocked",-6711428,null),'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"relative","relative",1663328389,null),new cljs.core.Symbol(null,"left-0","left-0",-1775871216,null),new cljs.core.Symbol(null,"top-1","top-1",-856681541,null)], 0)),'style':{'gridRowStart':uix.compiler.attributes.keyword__GT_string((r_idx + (1))),'gridColumnStart':uix.compiler.attributes.keyword__GT_string((c_idx + (1)))}}],[uix.compiler.aot._GT_el("sup",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"relative","relative",1663328389,null),new cljs.core.Symbol(null,"m-1","m-1",-372504921,null),new cljs.core.Symbol(null,"z-20","z-20",-302164228,null)], 0))}],[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_num)])]):null)]);
})());

var G__22138 = (i__22040 + (1));
i__22040 = G__22138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22041),banzai$puzzle$crossword$uix$CrosswordPuzzleGridPane_$_iter__22038(cljs.core.chunk_rest(s__22039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22041),null);
}
} else {
var vec__22062 = cljs.core.first(s__22039__$2);
var vec__22065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22062,(0),null);
var r_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22065,(0),null);
var c_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22065,(1),null);
var cell = vec__22065;
var map__22068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22062,(1),null);
var map__22068__$1 = cljs.core.__destructure_map(map__22068);
var cell_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22068__$1,new cljs.core.Keyword(null,"cell-num","cell-num",-726221889));
var current_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22068__$1,new cljs.core.Keyword(null,"current-value","current-value",2066017989));
var correct_letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22068__$1,new cljs.core.Keyword(null,"correct-letter","correct-letter",-1325513078));
var locked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22068__$1,new cljs.core.Keyword(null,"locked","locked",-1658763820));
return cljs.core.cons((function (){var coord = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_idx,c_idx], null);
var active_word_QMARK_ = cljs.core.contains_QMARK_(selected_word_coords,coord);
var cell_format = (cljs.core.truth_(locked)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bg-black","bg-black",-544131918,null),new cljs.core.Symbol(null,"border-black","border-black",-1874891272,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"border-slate-500","border-slate-500",795678228,null),new cljs.core.Symbol(null,"border-1","border-1",-347401081,null)], null));
var text_format = (cljs.core.truth_(current_value)?"text-black":"text-slate-500");
var focused_cell_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_coord,coord);
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,[{'key':cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0))}],[(cljs.core.truth_(locked)?null:uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var G__22069 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"content-editable","content-editable",636764967),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-input","on-input",-267523366),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),new cljs.core.Keyword(null,"suppress-content-editable-warning","suppress-content-editable-warning",1672859966),new cljs.core.Keyword(null,"suppressContentEditableWarning","suppressContentEditableWarning",996489054)],[new cljs.core.Symbol(null,"locked","locked",-18232293,null),true,((function (coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22062,vec__22065,r_idx,c_idx,cell,map__22068,map__22068__$1,cell_num,current_value,correct_letter,locked,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd){
return (function (_){
var G__22070_22139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null);
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__22070_22139) : ProcessCmd.call(null, G__22070_22139));

return banzai.puzzle.crossword.ui.focus_coord(coord);
});})(coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22062,vec__22065,r_idx,c_idx,cell,map__22068,map__22068__$1,cell_num,current_value,correct_letter,locked,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd))
,((function (coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22062,vec__22065,r_idx,c_idx,cell,map__22068,map__22068__$1,cell_num,current_value,correct_letter,locked,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd){
return (function (_){
var G__22071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deselect-coord","deselect-coord",-584364120,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null)], null);
return (ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__22071) : ProcessCmd.call(null, G__22071));
});})(coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22062,vec__22065,r_idx,c_idx,cell,map__22068,map__22068__$1,cell_num,current_value,correct_letter,locked,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd))
,((function (coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22062,vec__22065,r_idx,c_idx,cell,map__22068,map__22068__$1,cell_num,current_value,correct_letter,locked,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd){
return (function (e){
if(focused_cell_QMARK_){
var G__22072_22140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"select-coord","select-coord",-844072479,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"axis","axis",-1215390822),(function (){var fexpr__22073 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"across","across",-2072531706),new cljs.core.Keyword(null,"down","down",1565245570)], null);
return (fexpr__22073.cljs$core$IFn$_invoke$arity$2 ? fexpr__22073.cljs$core$IFn$_invoke$arity$2(axis,new cljs.core.Keyword(null,"across","across",-2072531706)) : fexpr__22073.call(null, axis,new cljs.core.Keyword(null,"across","across",-2072531706)));
})()], null)], null);
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__22072_22140) : ProcessCmd.call(null, G__22072_22140));

return e.target.focus();
} else {
return null;
}
});})(coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22062,vec__22065,r_idx,c_idx,cell,map__22068,map__22068__$1,cell_num,current_value,correct_letter,locked,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(r_idx + (1)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(c_idx + (1))], null),(banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1 ? banzai.puzzle.crossword.ui.coord_id.cljs$core$IFn$_invoke$arity$1(coord) : banzai.puzzle.crossword.ui.coord_id.call(null, coord)),cljs.core.vec(cljs.core.flatten(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [text_format,cell_format,new cljs.core.Symbol(null,"z-10","z-10",632128640,null),(cljs.core.truth_(locked)?null:"border"),((focused_cell_QMARK_)?new cljs.core.Symbol(null,"bg-yellow-200","bg-yellow-200",-1748715761,null):((active_word_QMARK_)?new cljs.core.Symbol(null,"bg-blue-200","bg-blue-200",-355443960,null):new cljs.core.Symbol(null,"bg-white","bg-white",187289854,null)
)),new cljs.core.Symbol(null,"justify-center","justify-center",320331129,null),new cljs.core.Symbol(null,"items-center","items-center",-597734706,null),"text-xl bold grid items-center focus:outline-none height-[3rem] m-[-1px_-1px_0_0] caret-transparent"], null))),((function (coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22062,vec__22065,r_idx,c_idx,cell,map__22068,map__22068__$1,cell_num,current_value,correct_letter,locked,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd){
return (function (e){
var value = (function (){var G__22074 = e.nativeEvent.data;
if((G__22074 == null)){
return null;
} else {
return clojure.string.upper_case(G__22074);
}
})();
var next_coord = banzai.puzzle.crossword.core.find_coord.cljs$core$IFn$_invoke$arity$variadic(cw_puzzle,cw_state,coord,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("find-coord","next-in-word","find-coord/next-in-word",529694638),new cljs.core.Keyword("find-coord","next-empty-start-in-axis","find-coord/next-empty-start-in-axis",479862156),new cljs.core.Keyword("find-coord","next-empty-in-axis","find-coord/next-empty-in-axis",1496590359),new cljs.core.Keyword("find-coord","next-empty","find-coord/next-empty",-673017498)], 0));
var prev_value = (function (){var s = current_value;
var s__$1 = (function (){var or__5002__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})();
var s__$2 = [clojure.string.upper_case(s__$1),clojure.string.lower_case(s__$1)].join('');
var s__$3 = cljs.core.frequencies(s__$2);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.second),s__$3);
})();
var best_s = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(prev_value,value);
var best_char = (function (){var temp__5802__auto__ = cljs.core.first(best_s);
if(cljs.core.truth_(temp__5802__auto__)){
var bc = temp__5802__auto__;
return bc;
} else {
return cljs.core.last(value);
}
})();
(e.target.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(best_char));

var G__22075_22141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set-coord","set-coord",1324194164,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"empty","empty",767870958)], null)], null);
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(G__22075_22141) : ProcessCmd.call(null, G__22075_22141));

banzai.puzzle.crossword.ui.focus_coord(next_coord);

return e.preventDefault();
});})(coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22062,vec__22065,r_idx,c_idx,cell,map__22068,map__22068__$1,cell_num,current_value,correct_letter,locked,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd))
,((function (coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22062,vec__22065,r_idx,c_idx,cell,map__22068,map__22068__$1,cell_num,current_value,correct_letter,locked,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd){
return (function (e){
var temp__5804__auto____$1 = banzai.puzzle.crossword.ui.keydown_command(banzai.puzzle.crossword.ui.browser.keydown_event_data(e),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coord","coord",-1453656639),coord], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var vec__22076 = temp__5804__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076,(1),null);
var cmd = vec__22076;
(ProcessCmd.cljs$core$IFn$_invoke$arity$1 ? ProcessCmd.cljs$core$IFn$_invoke$arity$1(cmd) : ProcessCmd.call(null, cmd));

var temp__5804__auto___22142__$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(banzai.puzzle.crossword.core.find_coord,cw_puzzle,cw_state,coord,new cljs.core.Keyword("find-coord","directives","find-coord/directives",-1070737379).cljs$core$IFn$_invoke$arity$1(args));
if(cljs.core.truth_(temp__5804__auto___22142__$2)){
var next_coord_22143 = temp__5804__auto___22142__$2;
banzai.puzzle.crossword.ui.focus_coord(next_coord_22143);

e.preventDefault();
} else {
}

var temp__5804__auto____$2 = cljs.core.find(args,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(temp__5804__auto____$2)){
var vec__22079 = temp__5804__auto____$2;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,(1),null);
return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(coord,active_word_QMARK_,cell_format,text_format,focused_cell_QMARK_,vec__22062,vec__22065,r_idx,c_idx,cell,map__22068,map__22068__$1,cell_num,current_value,correct_letter,locked,s__22039__$2,temp__5804__auto__,selected_word_coords,clj_props__12869__auto__,vec__22031,map__22034,map__22034__$1,map__22035,map__22035__$1,cw_puzzle,col_count,row_count,map__22036,map__22036__$1,cw_state,selected_coord,selected_word,axis,ProcessCmd))
,"true",true]);
if(cljs.core.not(locked)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22069,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0));
} else {
return G__22069;
}
})(),["div",null,null,false],false),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_value)])),(cljs.core.truth_(cell_num)?uix.compiler.aot._GT_el("div",[{'key':new cljs.core.Symbol(null,"unlocked","unlocked",-6711428,null),'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"relative","relative",1663328389,null),new cljs.core.Symbol(null,"left-0","left-0",-1775871216,null),new cljs.core.Symbol(null,"top-1","top-1",-856681541,null)], 0)),'style':{'gridRowStart':uix.compiler.attributes.keyword__GT_string((r_idx + (1))),'gridColumnStart':uix.compiler.attributes.keyword__GT_string((c_idx + (1)))}}],[uix.compiler.aot._GT_el("sup",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$variadic(null,new cljs.core.Symbol(null,"text-slate-800","text-slate-800",791677958,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"relative","relative",1663328389,null),new cljs.core.Symbol(null,"m-1","m-1",-372504921,null),new cljs.core.Symbol(null,"z-20","z-20",-302164228,null)], 0))}],[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_num)])]):null)]);
})(),banzai$puzzle$crossword$uix$CrosswordPuzzleGridPane_$_iter__22038(cljs.core.rest(s__22039__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(banzai.puzzle.crossword.core.all_cells(cw_puzzle,cw_state));
})()])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__22082 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__22083 = banzai.puzzle.crossword.uix.CrosswordPuzzleGridPane;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__22083);

try{if(((cljs.core.map_QMARK_(clj_props__12869__auto__)) || ((clj_props__12869__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__12869__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__12869__auto__) (clojure.core/nil? clj-props__12869__auto__))"].join('')));
}

return f__12870__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__22082);
}} else {
return f__12870__auto__();
}
});

(banzai.puzzle.crossword.uix.CrosswordPuzzleGridPane.uix_component_QMARK_ = true);

(banzai.puzzle.crossword.uix.CrosswordPuzzleGridPane.displayName = "banzai.puzzle.crossword.uix/CrosswordPuzzleGridPane");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__12817__auto___22144 = window.uix.dev.signature_BANG_();
(sig__12817__auto___22144.cljs$core$IFn$_invoke$arity$4 ? sig__12817__auto___22144.cljs$core$IFn$_invoke$arity$4(banzai.puzzle.crossword.uix.CrosswordPuzzleGridPane,"",null,null) : sig__12817__auto___22144.call(null, banzai.puzzle.crossword.uix.CrosswordPuzzleGridPane,"",null,null));

window.uix.dev.register_BANG_(banzai.puzzle.crossword.uix.CrosswordPuzzleGridPane,banzai.puzzle.crossword.uix.CrosswordPuzzleGridPane.displayName);

(banzai.puzzle.crossword.uix.CrosswordPuzzleGridPane.fast_refresh_signature = sig__12817__auto___22144);
} else {
}
} else {
}
banzai.puzzle.crossword.uix.CrosswordPuzzle = (function banzai$puzzle$crossword$uix$CrosswordPuzzle(props__12868__auto__){
var clj_props__12869__auto__ = uix.core.glue_args(props__12868__auto__);
var vec__22084 = [clj_props__12869__auto__];
var map__22087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22084,(0),null);
var map__22087__$1 = cljs.core.__destructure_map(map__22087);
var props = map__22087__$1;
var cw_puzzle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22087__$1,new cljs.core.Keyword(null,"puzzle","puzzle",-825926240));
var cw_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22087__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ProcessCmd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22087__$1,new cljs.core.Keyword(null,"ProcessCmd","ProcessCmd",-820562129));
var f__12870__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___22145 = banzai.puzzle.crossword.uix.CrosswordPuzzle.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___22145)){
var f__12808__auto___22146 = temp__5804__auto___22145;
(f__12808__auto___22146.cljs$core$IFn$_invoke$arity$0 ? f__12808__auto___22146.cljs$core$IFn$_invoke$arity$0() : f__12808__auto___22146.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[({})],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"grid lg:grid-cols-2 m-4")}],[uix.compiler.alpha.component_element(banzai.puzzle.crossword.uix.CrosswordPuzzleGridPane,uix.compiler.attributes.interpret_props(props),[]),uix.compiler.alpha.component_element(banzai.puzzle.crossword.uix.CrosswordPuzzleCluePane,uix.compiler.attributes.interpret_props(cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"words-key","words-key",-681165021),new cljs.core.Keyword(null,"words","words",1924933001)], null))),[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__22090 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__22091 = banzai.puzzle.crossword.uix.CrosswordPuzzle;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__22091);

try{if(((cljs.core.map_QMARK_(clj_props__12869__auto__)) || ((clj_props__12869__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__12869__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__12869__auto__) (clojure.core/nil? clj-props__12869__auto__))"].join('')));
}

return f__12870__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__22090);
}} else {
return f__12870__auto__();
}
});

(banzai.puzzle.crossword.uix.CrosswordPuzzle.uix_component_QMARK_ = true);

(banzai.puzzle.crossword.uix.CrosswordPuzzle.displayName = "banzai.puzzle.crossword.uix/CrosswordPuzzle");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__12817__auto___22147 = window.uix.dev.signature_BANG_();
(sig__12817__auto___22147.cljs$core$IFn$_invoke$arity$4 ? sig__12817__auto___22147.cljs$core$IFn$_invoke$arity$4(banzai.puzzle.crossword.uix.CrosswordPuzzle,"",null,null) : sig__12817__auto___22147.call(null, banzai.puzzle.crossword.uix.CrosswordPuzzle,"",null,null));

window.uix.dev.register_BANG_(banzai.puzzle.crossword.uix.CrosswordPuzzle,banzai.puzzle.crossword.uix.CrosswordPuzzle.displayName);

(banzai.puzzle.crossword.uix.CrosswordPuzzle.fast_refresh_signature = sig__12817__auto___22147);
} else {
}
} else {
}
banzai.puzzle.crossword.uix.PuzzlePage = (function banzai$puzzle$crossword$uix$PuzzlePage(props__12868__auto__){
var clj_props__12869__auto__ = uix.core.glue_args(props__12868__auto__);
var vec__22093 = [clj_props__12869__auto__];
var map__22096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22093,(0),null);
var map__22096__$1 = cljs.core.__destructure_map(map__22096);
var x = map__22096__$1;
var puzzle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22096__$1,new cljs.core.Keyword(null,"puzzle","puzzle",-825926240));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22096__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var set_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22096__$1,new cljs.core.Keyword(null,"set-state","set-state",1344116913));
var f__12870__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___22148 = banzai.puzzle.crossword.uix.PuzzlePage.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___22148)){
var f__12808__auto___22149 = temp__5804__auto___22148;
(f__12808__auto___22149.cljs$core$IFn$_invoke$arity$0 ? f__12808__auto___22149.cljs$core$IFn$_invoke$arity$0() : f__12808__auto___22149.call(null, ));
} else {
}
} else {
}

var ProcessCmd = (function banzai$puzzle$crossword$uix$PuzzlePage_$_process_c_cmd(cmd){
var map__22097 = banzai.puzzle.crossword.core.mutate.cljs$core$IFn$_invoke$arity$2(x,cmd);
var map__22097__$1 = cljs.core.__destructure_map(map__22097);
var update_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22097__$1,new cljs.core.Keyword(null,"update-state","update-state",-653396259));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22097__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if(cljs.core.truth_(update_state)){
if(cljs.core.fn_QMARK_(update_state)){
} else {
throw (new Error("Assert failed: (fn? update-state)"));
}

var G__22098_22150 = (function (p1__22092_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__22092_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),update_state);
});
(set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__22098_22150) : set_state.call(null, G__22098_22150));
} else {
}

return result;
});
return uix.compiler.aot._GT_el(uix.compiler.aot.fragment,uix.compiler.attributes.interpret_attrs(uix.compiler.aot._GT_el("h1",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"text-xl text-white")}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("Crossword in ",["span",null,null,false],false),[uix.compiler.aot._GT_el("a",[{'href':"https://uix-cljs.dev/",'target':"_blank",'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"cursor-pointer text-blue-500")}],[uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("UIx",["span",null,null,false],false),[])])," - A ReactJS wrapper for ClojureScript"])]),[],false),[uix.compiler.alpha.component_element(banzai.puzzle.crossword.uix.CrosswordPuzzle,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"puzzle","puzzle",-825926240),puzzle,new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"ProcessCmd","ProcessCmd",-820562129),ProcessCmd], null)],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__22099 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__22100 = banzai.puzzle.crossword.uix.PuzzlePage;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__22100);

try{if(((cljs.core.map_QMARK_(clj_props__12869__auto__)) || ((clj_props__12869__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__12869__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__12869__auto__) (clojure.core/nil? clj-props__12869__auto__))"].join('')));
}

return f__12870__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__22099);
}} else {
return f__12870__auto__();
}
});

(banzai.puzzle.crossword.uix.PuzzlePage.uix_component_QMARK_ = true);

(banzai.puzzle.crossword.uix.PuzzlePage.displayName = "banzai.puzzle.crossword.uix/PuzzlePage");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__12817__auto___22151 = window.uix.dev.signature_BANG_();
(sig__12817__auto___22151.cljs$core$IFn$_invoke$arity$4 ? sig__12817__auto___22151.cljs$core$IFn$_invoke$arity$4(banzai.puzzle.crossword.uix.PuzzlePage,"",null,null) : sig__12817__auto___22151.call(null, banzai.puzzle.crossword.uix.PuzzlePage,"",null,null));

window.uix.dev.register_BANG_(banzai.puzzle.crossword.uix.PuzzlePage,banzai.puzzle.crossword.uix.PuzzlePage.displayName);

(banzai.puzzle.crossword.uix.PuzzlePage.fast_refresh_signature = sig__12817__auto___22151);
} else {
}
} else {
}

//# sourceMappingURL=banzai.puzzle.crossword.uix.js.map
