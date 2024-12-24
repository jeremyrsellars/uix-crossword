goog.provide('app.ui');
app.ui.button = (function app$ui$button(props__12868__auto__){
var clj_props__12869__auto__ = uix.core.glue_args(props__12868__auto__);
var vec__22107 = [clj_props__12869__auto__];
var map__22110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22107,(0),null);
var map__22110__$1 = cljs.core.__destructure_map(map__22110);
var props = map__22110__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22110__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__12870__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___22126 = app.ui.button.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___22126)){
var f__12808__auto___22128 = temp__5804__auto___22126;
(f__12808__auto___22128.cljs$core$IFn$_invoke$arity$0 ? f__12808__auto___22128.cljs$core$IFn$_invoke$arity$0() : f__12808__auto___22128.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("button",uix.compiler.attributes.interpret_attrs(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"children","children",-940561982)),["button",null,"bg-sky-500 text-slate-50 rounded-full w-10 h-10",false],false),[children]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__22112 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__22113 = app.ui.button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__22113);

try{if(((cljs.core.map_QMARK_(clj_props__12869__auto__)) || ((clj_props__12869__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__12869__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__12869__auto__) (clojure.core/nil? clj-props__12869__auto__))"].join('')));
}

return f__12870__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__22112);
}} else {
return f__12870__auto__();
}
});

(app.ui.button.uix_component_QMARK_ = true);

(app.ui.button.displayName = "app.ui/button");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__12817__auto___22129 = window.uix.dev.signature_BANG_();
(sig__12817__auto___22129.cljs$core$IFn$_invoke$arity$4 ? sig__12817__auto___22129.cljs$core$IFn$_invoke$arity$4(app.ui.button,"",null,null) : sig__12817__auto___22129.call(null, app.ui.button,"",null,null));

window.uix.dev.register_BANG_(app.ui.button,app.ui.button.displayName);

(app.ui.button.fast_refresh_signature = sig__12817__auto___22129);
} else {
}
} else {
}
app.ui.app = (function app$ui$app(){
var f__12866__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___22130 = app.ui.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___22130)){
var f__12808__auto___22131 = temp__5804__auto___22130;
(f__12808__auto___22131.cljs$core$IFn$_invoke$arity$0 ? f__12808__auto___22131.cljs$core$IFn$_invoke$arity$0() : f__12808__auto___22131.call(null, ));
} else {
}
} else {
}

var puzzle = banzai.puzzle.crossword.core.example_cw_puzzle;
var state = banzai.puzzle.crossword.core.example_cw_state;
var vec__22117 = uix.core.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"puzzle","puzzle",-825926240),banzai.puzzle.crossword.core.comprehend_puzzle((function (){var or__5002__auto__ = puzzle;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return banzai.puzzle.crossword.core.example_cw_puzzle;
}
})()),new cljs.core.Keyword(null,"state","state",-1988618099),(function (){var or__5002__auto__ = state;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return banzai.puzzle.crossword.core.example_cw_state;
}
})()], null));
var st = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22117,(0),null);
var set_st = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22117,(1),null);
var map__22120 = st;
var map__22120__$1 = cljs.core.__destructure_map(map__22120);
var state__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22120__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var puzzle__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22120__$1,new cljs.core.Keyword(null,"puzzle","puzzle",-825926240));
return uix.compiler.aot._GT_el("div",[{'className':"flex flex-col justify-center min-h-screen bg-gray-800"}],[uix.compiler.alpha.component_element(banzai.puzzle.crossword.uix.PuzzlePage,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"puzzle","puzzle",-825926240),puzzle__$1,new cljs.core.Keyword(null,"state","state",-1988618099),state__$1,new cljs.core.Keyword(null,"set-state","set-state",1344116913),set_st], null)],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__22122 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__22123 = app.ui.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__22123);

try{return f__12866__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__22122);
}} else {
return f__12866__auto__();
}
});

(app.ui.app.uix_component_QMARK_ = true);

(app.ui.app.displayName = "app.ui/app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__12817__auto___22132 = window.uix.dev.signature_BANG_();
(sig__12817__auto___22132.cljs$core$IFn$_invoke$arity$4 ? sig__12817__auto___22132.cljs$core$IFn$_invoke$arity$4(app.ui.app,"(use-state {:puzzle (cw/comprehend-puzzle (or puzzle cw/example-cw-puzzle)), :state (or state cw/example-cw-state)})",null,null) : sig__12817__auto___22132.call(null, app.ui.app,"(use-state {:puzzle (cw/comprehend-puzzle (or puzzle cw/example-cw-puzzle)), :state (or state cw/example-cw-state)})",null,null));

window.uix.dev.register_BANG_(app.ui.app,app.ui.app.displayName);

(app.ui.app.fast_refresh_signature = sig__12817__auto___22132);
} else {
}
} else {
}

//# sourceMappingURL=app.ui.js.map
