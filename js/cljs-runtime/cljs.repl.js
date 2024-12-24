goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21153){
var map__21155 = p__21153;
var map__21155__$1 = cljs.core.__destructure_map(map__21155);
var m = map__21155__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21155__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21155__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21164_21494 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21165_21495 = null;
var count__21166_21496 = (0);
var i__21167_21497 = (0);
while(true){
if((i__21167_21497 < count__21166_21496)){
var f_21499 = chunk__21165_21495.cljs$core$IIndexed$_nth$arity$2(null, i__21167_21497);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21499], 0));


var G__21501 = seq__21164_21494;
var G__21502 = chunk__21165_21495;
var G__21503 = count__21166_21496;
var G__21504 = (i__21167_21497 + (1));
seq__21164_21494 = G__21501;
chunk__21165_21495 = G__21502;
count__21166_21496 = G__21503;
i__21167_21497 = G__21504;
continue;
} else {
var temp__5804__auto___21505 = cljs.core.seq(seq__21164_21494);
if(temp__5804__auto___21505){
var seq__21164_21506__$1 = temp__5804__auto___21505;
if(cljs.core.chunked_seq_QMARK_(seq__21164_21506__$1)){
var c__5525__auto___21507 = cljs.core.chunk_first(seq__21164_21506__$1);
var G__21509 = cljs.core.chunk_rest(seq__21164_21506__$1);
var G__21510 = c__5525__auto___21507;
var G__21511 = cljs.core.count(c__5525__auto___21507);
var G__21512 = (0);
seq__21164_21494 = G__21509;
chunk__21165_21495 = G__21510;
count__21166_21496 = G__21511;
i__21167_21497 = G__21512;
continue;
} else {
var f_21515 = cljs.core.first(seq__21164_21506__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21515], 0));


var G__21516 = cljs.core.next(seq__21164_21506__$1);
var G__21517 = null;
var G__21518 = (0);
var G__21519 = (0);
seq__21164_21494 = G__21516;
chunk__21165_21495 = G__21517;
count__21166_21496 = G__21518;
i__21167_21497 = G__21519;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21522 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21522], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21522)))?cljs.core.second(arglists_21522):arglists_21522)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21182_21533 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21183_21534 = null;
var count__21184_21535 = (0);
var i__21185_21536 = (0);
while(true){
if((i__21185_21536 < count__21184_21535)){
var vec__21205_21539 = chunk__21183_21534.cljs$core$IIndexed$_nth$arity$2(null, i__21185_21536);
var name_21540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21205_21539,(0),null);
var map__21208_21541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21205_21539,(1),null);
var map__21208_21543__$1 = cljs.core.__destructure_map(map__21208_21541);
var doc_21544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21208_21543__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21208_21543__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21540], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21545], 0));

if(cljs.core.truth_(doc_21544)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21544], 0));
} else {
}


var G__21548 = seq__21182_21533;
var G__21549 = chunk__21183_21534;
var G__21550 = count__21184_21535;
var G__21551 = (i__21185_21536 + (1));
seq__21182_21533 = G__21548;
chunk__21183_21534 = G__21549;
count__21184_21535 = G__21550;
i__21185_21536 = G__21551;
continue;
} else {
var temp__5804__auto___21552 = cljs.core.seq(seq__21182_21533);
if(temp__5804__auto___21552){
var seq__21182_21556__$1 = temp__5804__auto___21552;
if(cljs.core.chunked_seq_QMARK_(seq__21182_21556__$1)){
var c__5525__auto___21557 = cljs.core.chunk_first(seq__21182_21556__$1);
var G__21558 = cljs.core.chunk_rest(seq__21182_21556__$1);
var G__21559 = c__5525__auto___21557;
var G__21560 = cljs.core.count(c__5525__auto___21557);
var G__21561 = (0);
seq__21182_21533 = G__21558;
chunk__21183_21534 = G__21559;
count__21184_21535 = G__21560;
i__21185_21536 = G__21561;
continue;
} else {
var vec__21213_21564 = cljs.core.first(seq__21182_21556__$1);
var name_21565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21213_21564,(0),null);
var map__21216_21566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21213_21564,(1),null);
var map__21216_21567__$1 = cljs.core.__destructure_map(map__21216_21566);
var doc_21568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21216_21567__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21216_21567__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21565], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21569], 0));

if(cljs.core.truth_(doc_21568)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21568], 0));
} else {
}


var G__21576 = cljs.core.next(seq__21182_21556__$1);
var G__21577 = null;
var G__21578 = (0);
var G__21579 = (0);
seq__21182_21533 = G__21576;
chunk__21183_21534 = G__21577;
count__21184_21535 = G__21578;
i__21185_21536 = G__21579;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__21223 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21224 = null;
var count__21225 = (0);
var i__21226 = (0);
while(true){
if((i__21226 < count__21225)){
var role = chunk__21224.cljs$core$IIndexed$_nth$arity$2(null, i__21226);
var temp__5804__auto___21581__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21581__$1)){
var spec_21582 = temp__5804__auto___21581__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21582)], 0));
} else {
}


var G__21584 = seq__21223;
var G__21585 = chunk__21224;
var G__21586 = count__21225;
var G__21587 = (i__21226 + (1));
seq__21223 = G__21584;
chunk__21224 = G__21585;
count__21225 = G__21586;
i__21226 = G__21587;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__21223);
if(temp__5804__auto____$1){
var seq__21223__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21223__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21223__$1);
var G__21590 = cljs.core.chunk_rest(seq__21223__$1);
var G__21591 = c__5525__auto__;
var G__21592 = cljs.core.count(c__5525__auto__);
var G__21593 = (0);
seq__21223 = G__21590;
chunk__21224 = G__21591;
count__21225 = G__21592;
i__21226 = G__21593;
continue;
} else {
var role = cljs.core.first(seq__21223__$1);
var temp__5804__auto___21595__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21595__$2)){
var spec_21598 = temp__5804__auto___21595__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21598)], 0));
} else {
}


var G__21600 = cljs.core.next(seq__21223__$1);
var G__21601 = null;
var G__21602 = (0);
var G__21603 = (0);
seq__21223 = G__21600;
chunk__21224 = G__21601;
count__21225 = G__21602;
i__21226 = G__21603;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21281 = datafied_throwable;
var map__21281__$1 = cljs.core.__destructure_map(map__21281);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21281__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21281__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21281__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21282 = cljs.core.last(via);
var map__21282__$1 = cljs.core.__destructure_map(map__21282);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21282__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21282__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21282__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21283 = data;
var map__21283__$1 = cljs.core.__destructure_map(map__21283);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21283__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21283__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21283__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21284 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21284__$1 = cljs.core.__destructure_map(map__21284);
var top_data = map__21284__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21284__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21294 = phase;
var G__21294__$1 = (((G__21294 instanceof cljs.core.Keyword))?G__21294.fqn:null);
switch (G__21294__$1) {
case "read-source":
var map__21303 = data;
var map__21303__$1 = cljs.core.__destructure_map(map__21303);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21303__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21303__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21304 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21304__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21304,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21304);
var G__21304__$2 = (cljs.core.truth_((function (){var fexpr__21309 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21309.cljs$core$IFn$_invoke$arity$1 ? fexpr__21309.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21309.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21304__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21304__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21304__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21304__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21314 = top_data;
var G__21314__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21314,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21314);
var G__21314__$2 = (cljs.core.truth_((function (){var fexpr__21320 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21320.cljs$core$IFn$_invoke$arity$1 ? fexpr__21320.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21320.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21314__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21314__$1);
var G__21314__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21314__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21314__$2);
var G__21314__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21314__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21314__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21314__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21314__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21336 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21336,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21336,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21336,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21336,(3),null);
var G__21339 = top_data;
var G__21339__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21339,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21339);
var G__21339__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21339__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21339__$1);
var G__21339__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21339__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21339__$2);
var G__21339__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21339__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21339__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21339__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21339__$4;
}

break;
case "execution":
var vec__21347 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21347,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21347,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21347,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21347,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21277_SHARP_){
var or__5002__auto__ = (p1__21277_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__21355 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21355.cljs$core$IFn$_invoke$arity$1 ? fexpr__21355.cljs$core$IFn$_invoke$arity$1(p1__21277_SHARP_) : fexpr__21355.call(null, p1__21277_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__21365 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21365__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21365,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21365);
var G__21365__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21365__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21365__$1);
var G__21365__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21365__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21365__$2);
var G__21365__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21365__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21365__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21365__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21365__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21294__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21402){
var map__21408 = p__21402;
var map__21408__$1 = cljs.core.__destructure_map(map__21408);
var triage_data = map__21408__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21421 = phase;
var G__21421__$1 = (((G__21421 instanceof cljs.core.Keyword))?G__21421.fqn:null);
switch (G__21421__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21426 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21427 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21428 = loc;
var G__21429 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21434_21644 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21435_21645 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21436_21646 = true;
var _STAR_print_fn_STAR__temp_val__21437_21647 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21436_21646);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21437_21647);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21389_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21389_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21435_21645);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21434_21644);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21426,G__21427,G__21428,G__21429) : format.call(null, G__21426,G__21427,G__21428,G__21429));

break;
case "macroexpansion":
var G__21449 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21450 = cause_type;
var G__21451 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21452 = loc;
var G__21453 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21449,G__21450,G__21451,G__21452,G__21453) : format.call(null, G__21449,G__21450,G__21451,G__21452,G__21453));

break;
case "compile-syntax-check":
var G__21455 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21456 = cause_type;
var G__21457 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21458 = loc;
var G__21459 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21455,G__21456,G__21457,G__21458,G__21459) : format.call(null, G__21455,G__21456,G__21457,G__21458,G__21459));

break;
case "compilation":
var G__21462 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21463 = cause_type;
var G__21464 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21465 = loc;
var G__21466 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21462,G__21463,G__21464,G__21465,G__21466) : format.call(null, G__21462,G__21463,G__21464,G__21465,G__21466));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21469 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21470 = symbol;
var G__21471 = loc;
var G__21472 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21473_21671 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21474_21673 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21475_21674 = true;
var _STAR_print_fn_STAR__temp_val__21476_21675 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21475_21674);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21476_21675);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21395_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21395_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21474_21673);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21473_21671);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21469,G__21470,G__21471,G__21472) : format.call(null, G__21469,G__21470,G__21471,G__21472));
} else {
var G__21480 = "Execution error%s at %s(%s).\n%s\n";
var G__21481 = cause_type;
var G__21482 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21483 = loc;
var G__21484 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21480,G__21481,G__21482,G__21483,G__21484) : format.call(null, G__21480,G__21481,G__21482,G__21483,G__21484));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21421__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
