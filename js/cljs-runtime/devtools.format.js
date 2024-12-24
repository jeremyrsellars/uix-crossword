goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_12770 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._header[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5351__auto__.call(null, value));
} else {
var m__5349__auto__ = (devtools.format._header["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5349__auto__.call(null, value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_12770(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_12772 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._has_body[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5351__auto__.call(null, value));
} else {
var m__5349__auto__ = (devtools.format._has_body["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5349__auto__.call(null, value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_12772(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_12778 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._body[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5351__auto__.call(null, value));
} else {
var m__5349__auto__ = (devtools.format._body["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5349__auto__.call(null, value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_12778(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12648 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12648["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12649 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12649["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12650 = temp__5802__auto____$2;
return (o12650["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12653 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12653["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12654 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12654["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12655 = temp__5802__auto____$2;
return (o12655["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12660 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12660["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12661 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12661["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12662 = temp__5802__auto____$2;
return (o12662["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12676 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12676["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12677 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12677["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12678 = temp__5802__auto____$2;
return (o12678["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12681 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12681["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12682 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12682["templating"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12683 = temp__5802__auto____$2;
return (o12683["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12685 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12685["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12686 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12686["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12687 = temp__5802__auto____$2;
return (o12687["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5802__auto__ = (devtools.context.get_root.call(null, )["devtools"]);
if(cljs.core.truth_(temp__5802__auto__)){
var o12694 = temp__5802__auto__;
var temp__5802__auto____$1 = (o12694["formatters"]);
if(cljs.core.truth_(temp__5802__auto____$1)){
var o12695 = temp__5802__auto____$1;
var temp__5802__auto____$2 = (o12695["markup"]);
if(cljs.core.truth_(temp__5802__auto____$2)){
var o12696 = temp__5802__auto____$2;
return (o12696["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12794 = arguments.length;
var i__5727__auto___12795 = (0);
while(true){
if((i__5727__auto___12795 < len__5726__auto___12794)){
args__5732__auto__.push((arguments[i__5727__auto___12795]));

var G__12796 = (i__5727__auto___12795 + (1));
i__5727__auto___12795 = G__12796;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq12703){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12703));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12804 = arguments.length;
var i__5727__auto___12805 = (0);
while(true){
if((i__5727__auto___12805 < len__5726__auto___12804)){
args__5732__auto__.push((arguments[i__5727__auto___12805]));

var G__12807 = (i__5727__auto___12805 + (1));
i__5727__auto___12805 = G__12807;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq12707){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12707));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12821 = arguments.length;
var i__5727__auto___12822 = (0);
while(true){
if((i__5727__auto___12822 < len__5726__auto___12821)){
args__5732__auto__.push((arguments[i__5727__auto___12822]));

var G__12825 = (i__5727__auto___12822 + (1));
i__5727__auto___12822 = G__12825;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq12710){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12710));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12844 = arguments.length;
var i__5727__auto___12847 = (0);
while(true){
if((i__5727__auto___12847 < len__5726__auto___12844)){
args__5732__auto__.push((arguments[i__5727__auto___12847]));

var G__12848 = (i__5727__auto___12847 + (1));
i__5727__auto___12847 = G__12848;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq12713){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12713));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12851 = arguments.length;
var i__5727__auto___12852 = (0);
while(true){
if((i__5727__auto___12852 < len__5726__auto___12851)){
args__5732__auto__.push((arguments[i__5727__auto___12852]));

var G__12853 = (i__5727__auto___12852 + (1));
i__5727__auto___12852 = G__12853;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq12715){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12715));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12858 = arguments.length;
var i__5727__auto___12859 = (0);
while(true){
if((i__5727__auto___12859 < len__5726__auto___12858)){
args__5732__auto__.push((arguments[i__5727__auto___12859]));

var G__12872 = (i__5727__auto___12859 + (1));
i__5727__auto___12859 = G__12872;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq12718){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12718));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12874 = arguments.length;
var i__5727__auto___12875 = (0);
while(true){
if((i__5727__auto___12875 < len__5726__auto___12874)){
args__5732__auto__.push((arguments[i__5727__auto___12875]));

var G__12877 = (i__5727__auto___12875 + (1));
i__5727__auto___12875 = G__12877;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq12726){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12726));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12880 = arguments.length;
var i__5727__auto___12881 = (0);
while(true){
if((i__5727__auto___12881 < len__5726__auto___12880)){
args__5732__auto__.push((arguments[i__5727__auto___12881]));

var G__12882 = (i__5727__auto___12881 + (1));
i__5727__auto___12881 = G__12882;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__12735){
var vec__12736 = p__12735;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12736,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__12730_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__12730_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq12731){
var G__12732 = cljs.core.first(seq12731);
var seq12731__$1 = cljs.core.next(seq12731);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12732,seq12731__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__12741 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__12742 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__12743 = (function (){var G__12744 = new cljs.core.Keyword(null,"li","li",723558921);
var G__12745 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__12746 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null, target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__12744,G__12745,G__12746) : devtools.format.make_template_fn.call(null, G__12744,G__12745,G__12746));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__12741,G__12742,G__12743) : devtools.format.make_template_fn.call(null, G__12741,G__12742,G__12743));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12892 = arguments.length;
var i__5727__auto___12893 = (0);
while(true){
if((i__5727__auto___12893 < len__5726__auto___12892)){
args__5732__auto__.push((arguments[i__5727__auto___12893]));

var G__12895 = (i__5727__auto___12893 + (1));
i__5727__auto___12893 = G__12895;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq12751){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12751));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12909 = arguments.length;
var i__5727__auto___12915 = (0);
while(true){
if((i__5727__auto___12915 < len__5726__auto___12909)){
args__5732__auto__.push((arguments[i__5727__auto___12915]));

var G__12919 = (i__5727__auto___12915 + (1));
i__5727__auto___12915 = G__12919;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq12757){
var G__12758 = cljs.core.first(seq12757);
var seq12757__$1 = cljs.core.next(seq12757);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12758,seq12757__$1);
}));


//# sourceMappingURL=devtools.format.js.map
