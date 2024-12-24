goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18321){
var map__18322 = p__18321;
var map__18322__$1 = cljs.core.__destructure_map(map__18322);
var runtime = map__18322__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18322__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18519 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18519)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18343 = runtime;
var G__18344 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18519);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18343,G__18344) : shadow.remote.runtime.shared.process.call(null, G__18343,G__18344));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18356,res){
var map__18357 = p__18356;
var map__18357__$1 = cljs.core.__destructure_map(map__18357);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18357__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18357__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18359 = res;
var G__18359__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18359,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18359);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18359__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18359__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18362 = arguments.length;
switch (G__18362) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18363,msg,handlers,timeout_after_ms){
var map__18364 = p__18363;
var map__18364__$1 = cljs.core.__destructure_map(map__18364);
var runtime = map__18364__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18364__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18548 = arguments.length;
var i__5727__auto___18549 = (0);
while(true){
if((i__5727__auto___18549 < len__5726__auto___18548)){
args__5732__auto__.push((arguments[i__5727__auto___18549]));

var G__18556 = (i__5727__auto___18549 + (1));
i__5727__auto___18549 = G__18556;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18371,ev,args){
var map__18372 = p__18371;
var map__18372__$1 = cljs.core.__destructure_map(map__18372);
var runtime = map__18372__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18372__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18373 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18376 = null;
var count__18377 = (0);
var i__18378 = (0);
while(true){
if((i__18378 < count__18377)){
var ext = chunk__18376.cljs$core$IIndexed$_nth$arity$2(null, i__18378);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18562 = seq__18373;
var G__18563 = chunk__18376;
var G__18564 = count__18377;
var G__18565 = (i__18378 + (1));
seq__18373 = G__18562;
chunk__18376 = G__18563;
count__18377 = G__18564;
i__18378 = G__18565;
continue;
} else {
var G__18567 = seq__18373;
var G__18568 = chunk__18376;
var G__18569 = count__18377;
var G__18570 = (i__18378 + (1));
seq__18373 = G__18567;
chunk__18376 = G__18568;
count__18377 = G__18569;
i__18378 = G__18570;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18373);
if(temp__5804__auto__){
var seq__18373__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18373__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18373__$1);
var G__18571 = cljs.core.chunk_rest(seq__18373__$1);
var G__18572 = c__5525__auto__;
var G__18573 = cljs.core.count(c__5525__auto__);
var G__18574 = (0);
seq__18373 = G__18571;
chunk__18376 = G__18572;
count__18377 = G__18573;
i__18378 = G__18574;
continue;
} else {
var ext = cljs.core.first(seq__18373__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18575 = cljs.core.next(seq__18373__$1);
var G__18576 = null;
var G__18577 = (0);
var G__18578 = (0);
seq__18373 = G__18575;
chunk__18376 = G__18576;
count__18377 = G__18577;
i__18378 = G__18578;
continue;
} else {
var G__18579 = cljs.core.next(seq__18373__$1);
var G__18580 = null;
var G__18581 = (0);
var G__18582 = (0);
seq__18373 = G__18579;
chunk__18376 = G__18580;
count__18377 = G__18581;
i__18378 = G__18582;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18368){
var G__18369 = cljs.core.first(seq18368);
var seq18368__$1 = cljs.core.next(seq18368);
var G__18370 = cljs.core.first(seq18368__$1);
var seq18368__$2 = cljs.core.next(seq18368__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18369,G__18370,seq18368__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18384,p__18385){
var map__18386 = p__18384;
var map__18386__$1 = cljs.core.__destructure_map(map__18386);
var runtime = map__18386__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18386__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18387 = p__18385;
var map__18387__$1 = cljs.core.__destructure_map(map__18387);
var msg = map__18387__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18387__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18388 = cljs.core.deref(state_ref);
var map__18388__$1 = cljs.core.__destructure_map(map__18388);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18388__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18388__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18391,msg){
var map__18392 = p__18391;
var map__18392__$1 = cljs.core.__destructure_map(map__18392);
var runtime = map__18392__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18392__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18394,key,p__18395){
var map__18396 = p__18394;
var map__18396__$1 = cljs.core.__destructure_map(map__18396);
var state = map__18396__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18396__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18397 = p__18395;
var map__18397__$1 = cljs.core.__destructure_map(map__18397);
var spec = map__18397__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18397__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18397__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18399,key,spec){
var map__18400 = p__18399;
var map__18400__$1 = cljs.core.__destructure_map(map__18400);
var runtime = map__18400__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___18602 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___18602 == null)){
} else {
var on_welcome_18603 = temp__5808__auto___18602;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18603.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18603.cljs$core$IFn$_invoke$arity$0() : on_welcome_18603.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18407_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18407_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18408_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18408_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18409_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18409_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18414_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18414_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18415_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18415_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18428,key){
var map__18429 = p__18428;
var map__18429__$1 = cljs.core.__destructure_map(map__18429);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18429__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18432,msg){
var map__18433 = p__18432;
var map__18433__$1 = cljs.core.__destructure_map(map__18433);
var runtime = map__18433__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18433__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18442,p__18443){
var map__18444 = p__18442;
var map__18444__$1 = cljs.core.__destructure_map(map__18444);
var runtime = map__18444__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18444__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18445 = p__18443;
var map__18445__$1 = cljs.core.__destructure_map(map__18445);
var msg = map__18445__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18445__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18445__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18450 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18452 = null;
var count__18453 = (0);
var i__18454 = (0);
while(true){
if((i__18454 < count__18453)){
var map__18462 = chunk__18452.cljs$core$IIndexed$_nth$arity$2(null, i__18454);
var map__18462__$1 = cljs.core.__destructure_map(map__18462);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18462__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18613 = seq__18450;
var G__18614 = chunk__18452;
var G__18615 = count__18453;
var G__18616 = (i__18454 + (1));
seq__18450 = G__18613;
chunk__18452 = G__18614;
count__18453 = G__18615;
i__18454 = G__18616;
continue;
} else {
var G__18618 = seq__18450;
var G__18619 = chunk__18452;
var G__18620 = count__18453;
var G__18621 = (i__18454 + (1));
seq__18450 = G__18618;
chunk__18452 = G__18619;
count__18453 = G__18620;
i__18454 = G__18621;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18450);
if(temp__5804__auto__){
var seq__18450__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18450__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18450__$1);
var G__18622 = cljs.core.chunk_rest(seq__18450__$1);
var G__18623 = c__5525__auto__;
var G__18624 = cljs.core.count(c__5525__auto__);
var G__18625 = (0);
seq__18450 = G__18622;
chunk__18452 = G__18623;
count__18453 = G__18624;
i__18454 = G__18625;
continue;
} else {
var map__18485 = cljs.core.first(seq__18450__$1);
var map__18485__$1 = cljs.core.__destructure_map(map__18485);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18485__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18627 = cljs.core.next(seq__18450__$1);
var G__18628 = null;
var G__18629 = (0);
var G__18630 = (0);
seq__18450 = G__18627;
chunk__18452 = G__18628;
count__18453 = G__18629;
i__18454 = G__18630;
continue;
} else {
var G__18631 = cljs.core.next(seq__18450__$1);
var G__18632 = null;
var G__18633 = (0);
var G__18634 = (0);
seq__18450 = G__18631;
chunk__18452 = G__18632;
count__18453 = G__18633;
i__18454 = G__18634;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
