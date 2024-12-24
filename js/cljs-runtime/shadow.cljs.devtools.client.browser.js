goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22947 = arguments.length;
var i__5727__auto___22948 = (0);
while(true){
if((i__5727__auto___22948 < len__5726__auto___22947)){
args__5732__auto__.push((arguments[i__5727__auto___22948]));

var G__22949 = (i__5727__auto___22948 + (1));
i__5727__auto___22948 = G__22949;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22505){
var G__22506 = cljs.core.first(seq22505);
var seq22505__$1 = cljs.core.next(seq22505);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22506,seq22505__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22507 = cljs.core.seq(sources);
var chunk__22508 = null;
var count__22509 = (0);
var i__22510 = (0);
while(true){
if((i__22510 < count__22509)){
var map__22515 = chunk__22508.cljs$core$IIndexed$_nth$arity$2(null, i__22510);
var map__22515__$1 = cljs.core.__destructure_map(map__22515);
var src = map__22515__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22515__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22515__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22515__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22515__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22516){var e_22951 = e22516;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22951);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22951.message)].join('')));
}

var G__22952 = seq__22507;
var G__22953 = chunk__22508;
var G__22954 = count__22509;
var G__22955 = (i__22510 + (1));
seq__22507 = G__22952;
chunk__22508 = G__22953;
count__22509 = G__22954;
i__22510 = G__22955;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22507);
if(temp__5804__auto__){
var seq__22507__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22507__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22507__$1);
var G__22956 = cljs.core.chunk_rest(seq__22507__$1);
var G__22957 = c__5525__auto__;
var G__22958 = cljs.core.count(c__5525__auto__);
var G__22959 = (0);
seq__22507 = G__22956;
chunk__22508 = G__22957;
count__22509 = G__22958;
i__22510 = G__22959;
continue;
} else {
var map__22517 = cljs.core.first(seq__22507__$1);
var map__22517__$1 = cljs.core.__destructure_map(map__22517);
var src = map__22517__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22517__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22518){var e_22960 = e22518;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22960);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22960.message)].join('')));
}

var G__22961 = cljs.core.next(seq__22507__$1);
var G__22962 = null;
var G__22963 = (0);
var G__22964 = (0);
seq__22507 = G__22961;
chunk__22508 = G__22962;
count__22509 = G__22963;
i__22510 = G__22964;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22524 = cljs.core.seq(js_requires);
var chunk__22525 = null;
var count__22526 = (0);
var i__22527 = (0);
while(true){
if((i__22527 < count__22526)){
var js_ns = chunk__22525.cljs$core$IIndexed$_nth$arity$2(null, i__22527);
var require_str_22965 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22965);


var G__22966 = seq__22524;
var G__22967 = chunk__22525;
var G__22968 = count__22526;
var G__22969 = (i__22527 + (1));
seq__22524 = G__22966;
chunk__22525 = G__22967;
count__22526 = G__22968;
i__22527 = G__22969;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22524);
if(temp__5804__auto__){
var seq__22524__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22524__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22524__$1);
var G__22971 = cljs.core.chunk_rest(seq__22524__$1);
var G__22972 = c__5525__auto__;
var G__22973 = cljs.core.count(c__5525__auto__);
var G__22974 = (0);
seq__22524 = G__22971;
chunk__22525 = G__22972;
count__22526 = G__22973;
i__22527 = G__22974;
continue;
} else {
var js_ns = cljs.core.first(seq__22524__$1);
var require_str_22975 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22975);


var G__22976 = cljs.core.next(seq__22524__$1);
var G__22977 = null;
var G__22978 = (0);
var G__22979 = (0);
seq__22524 = G__22976;
chunk__22525 = G__22977;
count__22526 = G__22978;
i__22527 = G__22979;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22559){
var map__22560 = p__22559;
var map__22560__$1 = cljs.core.__destructure_map(map__22560);
var msg = map__22560__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22560__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22560__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22561(s__22562){
return (new cljs.core.LazySeq(null,(function (){
var s__22562__$1 = s__22562;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22562__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22567 = cljs.core.first(xs__6360__auto__);
var map__22567__$1 = cljs.core.__destructure_map(map__22567);
var src = map__22567__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22567__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22567__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22562__$1,map__22567,map__22567__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22560,map__22560__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22561_$_iter__22563(s__22564){
return (new cljs.core.LazySeq(null,((function (s__22562__$1,map__22567,map__22567__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22560,map__22560__$1,msg,info,reload_info){
return (function (){
var s__22564__$1 = s__22564;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22564__$1);
if(temp__5804__auto____$1){
var s__22564__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22564__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22564__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22566 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22565 = (0);
while(true){
if((i__22565 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22565);
cljs.core.chunk_append(b__22566,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22980 = (i__22565 + (1));
i__22565 = G__22980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22566),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22561_$_iter__22563(cljs.core.chunk_rest(s__22564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22566),null);
}
} else {
var warning = cljs.core.first(s__22564__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22561_$_iter__22563(cljs.core.rest(s__22564__$2)));
}
} else {
return null;
}
break;
}
});})(s__22562__$1,map__22567,map__22567__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22560,map__22560__$1,msg,info,reload_info))
,null,null));
});})(s__22562__$1,map__22567,map__22567__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22560,map__22560__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22561(cljs.core.rest(s__22562__$1)));
} else {
var G__22981 = cljs.core.rest(s__22562__$1);
s__22562__$1 = G__22981;
continue;
}
} else {
var G__22982 = cljs.core.rest(s__22562__$1);
s__22562__$1 = G__22982;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22570_22983 = cljs.core.seq(warnings);
var chunk__22571_22984 = null;
var count__22572_22985 = (0);
var i__22573_22986 = (0);
while(true){
if((i__22573_22986 < count__22572_22985)){
var map__22576_22987 = chunk__22571_22984.cljs$core$IIndexed$_nth$arity$2(null, i__22573_22986);
var map__22576_22988__$1 = cljs.core.__destructure_map(map__22576_22987);
var w_22989 = map__22576_22988__$1;
var msg_22990__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576_22988__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576_22988__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576_22988__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576_22988__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22993)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22991),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22992),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22990__$1)].join(''));


var G__22994 = seq__22570_22983;
var G__22995 = chunk__22571_22984;
var G__22996 = count__22572_22985;
var G__22997 = (i__22573_22986 + (1));
seq__22570_22983 = G__22994;
chunk__22571_22984 = G__22995;
count__22572_22985 = G__22996;
i__22573_22986 = G__22997;
continue;
} else {
var temp__5804__auto___22998 = cljs.core.seq(seq__22570_22983);
if(temp__5804__auto___22998){
var seq__22570_22999__$1 = temp__5804__auto___22998;
if(cljs.core.chunked_seq_QMARK_(seq__22570_22999__$1)){
var c__5525__auto___23000 = cljs.core.chunk_first(seq__22570_22999__$1);
var G__23001 = cljs.core.chunk_rest(seq__22570_22999__$1);
var G__23002 = c__5525__auto___23000;
var G__23003 = cljs.core.count(c__5525__auto___23000);
var G__23004 = (0);
seq__22570_22983 = G__23001;
chunk__22571_22984 = G__23002;
count__22572_22985 = G__23003;
i__22573_22986 = G__23004;
continue;
} else {
var map__22577_23005 = cljs.core.first(seq__22570_22999__$1);
var map__22577_23006__$1 = cljs.core.__destructure_map(map__22577_23005);
var w_23007 = map__22577_23006__$1;
var msg_23008__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22577_23006__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22577_23006__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22577_23006__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22577_23006__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23011)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23009),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23010),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23008__$1)].join(''));


var G__23012 = cljs.core.next(seq__22570_22999__$1);
var G__23013 = null;
var G__23014 = (0);
var G__23015 = (0);
seq__22570_22983 = G__23012;
chunk__22571_22984 = G__23013;
count__22572_22985 = G__23014;
i__22573_22986 = G__23015;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22558_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22558_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22581){
var map__22582 = p__22581;
var map__22582__$1 = cljs.core.__destructure_map(map__22582);
var msg = map__22582__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22582__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22582__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22583 = cljs.core.seq(updates);
var chunk__22598 = null;
var count__22599 = (0);
var i__22600 = (0);
while(true){
if((i__22600 < count__22599)){
var path = chunk__22598.cljs$core$IIndexed$_nth$arity$2(null, i__22600);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22779_23017 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22783_23018 = null;
var count__22784_23019 = (0);
var i__22785_23020 = (0);
while(true){
if((i__22785_23020 < count__22784_23019)){
var node_23021 = chunk__22783_23018.cljs$core$IIndexed$_nth$arity$2(null, i__22785_23020);
if(cljs.core.not(node_23021.shadow$old)){
var path_match_23022 = shadow.cljs.devtools.client.browser.match_paths(node_23021.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23022)){
var new_link_23023 = (function (){var G__22814 = node_23021.cloneNode(true);
G__22814.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23022),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22814;
})();
(node_23021.shadow$old = true);

(new_link_23023.onload = ((function (seq__22779_23017,chunk__22783_23018,count__22784_23019,i__22785_23020,seq__22583,chunk__22598,count__22599,i__22600,new_link_23023,path_match_23022,node_23021,path,map__22582,map__22582__$1,msg,updates,reload_info){
return (function (e){
var seq__22815_23024 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22817_23025 = null;
var count__22818_23026 = (0);
var i__22819_23027 = (0);
while(true){
if((i__22819_23027 < count__22818_23026)){
var map__22823_23028 = chunk__22817_23025.cljs$core$IIndexed$_nth$arity$2(null, i__22819_23027);
var map__22823_23029__$1 = cljs.core.__destructure_map(map__22823_23028);
var task_23030 = map__22823_23029__$1;
var fn_str_23031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22823_23029__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22823_23029__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23033 = goog.getObjectByName(fn_str_23031,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23032)].join(''));

(fn_obj_23033.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23033.cljs$core$IFn$_invoke$arity$2(path,new_link_23023) : fn_obj_23033.call(null, path,new_link_23023));


var G__23034 = seq__22815_23024;
var G__23035 = chunk__22817_23025;
var G__23036 = count__22818_23026;
var G__23037 = (i__22819_23027 + (1));
seq__22815_23024 = G__23034;
chunk__22817_23025 = G__23035;
count__22818_23026 = G__23036;
i__22819_23027 = G__23037;
continue;
} else {
var temp__5804__auto___23038 = cljs.core.seq(seq__22815_23024);
if(temp__5804__auto___23038){
var seq__22815_23039__$1 = temp__5804__auto___23038;
if(cljs.core.chunked_seq_QMARK_(seq__22815_23039__$1)){
var c__5525__auto___23040 = cljs.core.chunk_first(seq__22815_23039__$1);
var G__23041 = cljs.core.chunk_rest(seq__22815_23039__$1);
var G__23042 = c__5525__auto___23040;
var G__23043 = cljs.core.count(c__5525__auto___23040);
var G__23044 = (0);
seq__22815_23024 = G__23041;
chunk__22817_23025 = G__23042;
count__22818_23026 = G__23043;
i__22819_23027 = G__23044;
continue;
} else {
var map__22824_23045 = cljs.core.first(seq__22815_23039__$1);
var map__22824_23046__$1 = cljs.core.__destructure_map(map__22824_23045);
var task_23047 = map__22824_23046__$1;
var fn_str_23048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824_23046__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824_23046__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23050 = goog.getObjectByName(fn_str_23048,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23049)].join(''));

(fn_obj_23050.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23050.cljs$core$IFn$_invoke$arity$2(path,new_link_23023) : fn_obj_23050.call(null, path,new_link_23023));


var G__23051 = cljs.core.next(seq__22815_23039__$1);
var G__23052 = null;
var G__23053 = (0);
var G__23054 = (0);
seq__22815_23024 = G__23051;
chunk__22817_23025 = G__23052;
count__22818_23026 = G__23053;
i__22819_23027 = G__23054;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23021);
});})(seq__22779_23017,chunk__22783_23018,count__22784_23019,i__22785_23020,seq__22583,chunk__22598,count__22599,i__22600,new_link_23023,path_match_23022,node_23021,path,map__22582,map__22582__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23022], 0));

goog.dom.insertSiblingAfter(new_link_23023,node_23021);


var G__23055 = seq__22779_23017;
var G__23056 = chunk__22783_23018;
var G__23057 = count__22784_23019;
var G__23058 = (i__22785_23020 + (1));
seq__22779_23017 = G__23055;
chunk__22783_23018 = G__23056;
count__22784_23019 = G__23057;
i__22785_23020 = G__23058;
continue;
} else {
var G__23059 = seq__22779_23017;
var G__23060 = chunk__22783_23018;
var G__23061 = count__22784_23019;
var G__23062 = (i__22785_23020 + (1));
seq__22779_23017 = G__23059;
chunk__22783_23018 = G__23060;
count__22784_23019 = G__23061;
i__22785_23020 = G__23062;
continue;
}
} else {
var G__23063 = seq__22779_23017;
var G__23064 = chunk__22783_23018;
var G__23065 = count__22784_23019;
var G__23066 = (i__22785_23020 + (1));
seq__22779_23017 = G__23063;
chunk__22783_23018 = G__23064;
count__22784_23019 = G__23065;
i__22785_23020 = G__23066;
continue;
}
} else {
var temp__5804__auto___23067 = cljs.core.seq(seq__22779_23017);
if(temp__5804__auto___23067){
var seq__22779_23068__$1 = temp__5804__auto___23067;
if(cljs.core.chunked_seq_QMARK_(seq__22779_23068__$1)){
var c__5525__auto___23069 = cljs.core.chunk_first(seq__22779_23068__$1);
var G__23070 = cljs.core.chunk_rest(seq__22779_23068__$1);
var G__23071 = c__5525__auto___23069;
var G__23072 = cljs.core.count(c__5525__auto___23069);
var G__23073 = (0);
seq__22779_23017 = G__23070;
chunk__22783_23018 = G__23071;
count__22784_23019 = G__23072;
i__22785_23020 = G__23073;
continue;
} else {
var node_23074 = cljs.core.first(seq__22779_23068__$1);
if(cljs.core.not(node_23074.shadow$old)){
var path_match_23075 = shadow.cljs.devtools.client.browser.match_paths(node_23074.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23075)){
var new_link_23076 = (function (){var G__22828 = node_23074.cloneNode(true);
G__22828.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23075),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22828;
})();
(node_23074.shadow$old = true);

(new_link_23076.onload = ((function (seq__22779_23017,chunk__22783_23018,count__22784_23019,i__22785_23020,seq__22583,chunk__22598,count__22599,i__22600,new_link_23076,path_match_23075,node_23074,seq__22779_23068__$1,temp__5804__auto___23067,path,map__22582,map__22582__$1,msg,updates,reload_info){
return (function (e){
var seq__22829_23077 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22831_23078 = null;
var count__22832_23079 = (0);
var i__22833_23080 = (0);
while(true){
if((i__22833_23080 < count__22832_23079)){
var map__22838_23081 = chunk__22831_23078.cljs$core$IIndexed$_nth$arity$2(null, i__22833_23080);
var map__22838_23082__$1 = cljs.core.__destructure_map(map__22838_23081);
var task_23083 = map__22838_23082__$1;
var fn_str_23084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22838_23082__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22838_23082__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23086 = goog.getObjectByName(fn_str_23084,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23085)].join(''));

(fn_obj_23086.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23086.cljs$core$IFn$_invoke$arity$2(path,new_link_23076) : fn_obj_23086.call(null, path,new_link_23076));


var G__23087 = seq__22829_23077;
var G__23088 = chunk__22831_23078;
var G__23089 = count__22832_23079;
var G__23090 = (i__22833_23080 + (1));
seq__22829_23077 = G__23087;
chunk__22831_23078 = G__23088;
count__22832_23079 = G__23089;
i__22833_23080 = G__23090;
continue;
} else {
var temp__5804__auto___23091__$1 = cljs.core.seq(seq__22829_23077);
if(temp__5804__auto___23091__$1){
var seq__22829_23092__$1 = temp__5804__auto___23091__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22829_23092__$1)){
var c__5525__auto___23093 = cljs.core.chunk_first(seq__22829_23092__$1);
var G__23094 = cljs.core.chunk_rest(seq__22829_23092__$1);
var G__23095 = c__5525__auto___23093;
var G__23096 = cljs.core.count(c__5525__auto___23093);
var G__23097 = (0);
seq__22829_23077 = G__23094;
chunk__22831_23078 = G__23095;
count__22832_23079 = G__23096;
i__22833_23080 = G__23097;
continue;
} else {
var map__22840_23098 = cljs.core.first(seq__22829_23092__$1);
var map__22840_23099__$1 = cljs.core.__destructure_map(map__22840_23098);
var task_23100 = map__22840_23099__$1;
var fn_str_23101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22840_23099__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22840_23099__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23103 = goog.getObjectByName(fn_str_23101,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23102)].join(''));

(fn_obj_23103.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23103.cljs$core$IFn$_invoke$arity$2(path,new_link_23076) : fn_obj_23103.call(null, path,new_link_23076));


var G__23104 = cljs.core.next(seq__22829_23092__$1);
var G__23105 = null;
var G__23106 = (0);
var G__23107 = (0);
seq__22829_23077 = G__23104;
chunk__22831_23078 = G__23105;
count__22832_23079 = G__23106;
i__22833_23080 = G__23107;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23074);
});})(seq__22779_23017,chunk__22783_23018,count__22784_23019,i__22785_23020,seq__22583,chunk__22598,count__22599,i__22600,new_link_23076,path_match_23075,node_23074,seq__22779_23068__$1,temp__5804__auto___23067,path,map__22582,map__22582__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23075], 0));

goog.dom.insertSiblingAfter(new_link_23076,node_23074);


var G__23108 = cljs.core.next(seq__22779_23068__$1);
var G__23109 = null;
var G__23110 = (0);
var G__23111 = (0);
seq__22779_23017 = G__23108;
chunk__22783_23018 = G__23109;
count__22784_23019 = G__23110;
i__22785_23020 = G__23111;
continue;
} else {
var G__23112 = cljs.core.next(seq__22779_23068__$1);
var G__23113 = null;
var G__23114 = (0);
var G__23115 = (0);
seq__22779_23017 = G__23112;
chunk__22783_23018 = G__23113;
count__22784_23019 = G__23114;
i__22785_23020 = G__23115;
continue;
}
} else {
var G__23116 = cljs.core.next(seq__22779_23068__$1);
var G__23117 = null;
var G__23118 = (0);
var G__23119 = (0);
seq__22779_23017 = G__23116;
chunk__22783_23018 = G__23117;
count__22784_23019 = G__23118;
i__22785_23020 = G__23119;
continue;
}
}
} else {
}
}
break;
}


var G__23120 = seq__22583;
var G__23121 = chunk__22598;
var G__23122 = count__22599;
var G__23123 = (i__22600 + (1));
seq__22583 = G__23120;
chunk__22598 = G__23121;
count__22599 = G__23122;
i__22600 = G__23123;
continue;
} else {
var G__23124 = seq__22583;
var G__23125 = chunk__22598;
var G__23126 = count__22599;
var G__23127 = (i__22600 + (1));
seq__22583 = G__23124;
chunk__22598 = G__23125;
count__22599 = G__23126;
i__22600 = G__23127;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22583);
if(temp__5804__auto__){
var seq__22583__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22583__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22583__$1);
var G__23128 = cljs.core.chunk_rest(seq__22583__$1);
var G__23129 = c__5525__auto__;
var G__23130 = cljs.core.count(c__5525__auto__);
var G__23131 = (0);
seq__22583 = G__23128;
chunk__22598 = G__23129;
count__22599 = G__23130;
i__22600 = G__23131;
continue;
} else {
var path = cljs.core.first(seq__22583__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22843_23132 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22847_23133 = null;
var count__22848_23134 = (0);
var i__22849_23135 = (0);
while(true){
if((i__22849_23135 < count__22848_23134)){
var node_23136 = chunk__22847_23133.cljs$core$IIndexed$_nth$arity$2(null, i__22849_23135);
if(cljs.core.not(node_23136.shadow$old)){
var path_match_23137 = shadow.cljs.devtools.client.browser.match_paths(node_23136.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23137)){
var new_link_23138 = (function (){var G__22875 = node_23136.cloneNode(true);
G__22875.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23137),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22875;
})();
(node_23136.shadow$old = true);

(new_link_23138.onload = ((function (seq__22843_23132,chunk__22847_23133,count__22848_23134,i__22849_23135,seq__22583,chunk__22598,count__22599,i__22600,new_link_23138,path_match_23137,node_23136,path,seq__22583__$1,temp__5804__auto__,map__22582,map__22582__$1,msg,updates,reload_info){
return (function (e){
var seq__22876_23139 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22878_23140 = null;
var count__22879_23141 = (0);
var i__22880_23142 = (0);
while(true){
if((i__22880_23142 < count__22879_23141)){
var map__22884_23143 = chunk__22878_23140.cljs$core$IIndexed$_nth$arity$2(null, i__22880_23142);
var map__22884_23144__$1 = cljs.core.__destructure_map(map__22884_23143);
var task_23145 = map__22884_23144__$1;
var fn_str_23146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22884_23144__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22884_23144__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23148 = goog.getObjectByName(fn_str_23146,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23147)].join(''));

(fn_obj_23148.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23148.cljs$core$IFn$_invoke$arity$2(path,new_link_23138) : fn_obj_23148.call(null, path,new_link_23138));


var G__23149 = seq__22876_23139;
var G__23150 = chunk__22878_23140;
var G__23151 = count__22879_23141;
var G__23152 = (i__22880_23142 + (1));
seq__22876_23139 = G__23149;
chunk__22878_23140 = G__23150;
count__22879_23141 = G__23151;
i__22880_23142 = G__23152;
continue;
} else {
var temp__5804__auto___23153__$1 = cljs.core.seq(seq__22876_23139);
if(temp__5804__auto___23153__$1){
var seq__22876_23154__$1 = temp__5804__auto___23153__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22876_23154__$1)){
var c__5525__auto___23155 = cljs.core.chunk_first(seq__22876_23154__$1);
var G__23156 = cljs.core.chunk_rest(seq__22876_23154__$1);
var G__23157 = c__5525__auto___23155;
var G__23158 = cljs.core.count(c__5525__auto___23155);
var G__23159 = (0);
seq__22876_23139 = G__23156;
chunk__22878_23140 = G__23157;
count__22879_23141 = G__23158;
i__22880_23142 = G__23159;
continue;
} else {
var map__22885_23160 = cljs.core.first(seq__22876_23154__$1);
var map__22885_23161__$1 = cljs.core.__destructure_map(map__22885_23160);
var task_23162 = map__22885_23161__$1;
var fn_str_23163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22885_23161__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22885_23161__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23165 = goog.getObjectByName(fn_str_23163,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23164)].join(''));

(fn_obj_23165.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23165.cljs$core$IFn$_invoke$arity$2(path,new_link_23138) : fn_obj_23165.call(null, path,new_link_23138));


var G__23166 = cljs.core.next(seq__22876_23154__$1);
var G__23167 = null;
var G__23168 = (0);
var G__23169 = (0);
seq__22876_23139 = G__23166;
chunk__22878_23140 = G__23167;
count__22879_23141 = G__23168;
i__22880_23142 = G__23169;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23136);
});})(seq__22843_23132,chunk__22847_23133,count__22848_23134,i__22849_23135,seq__22583,chunk__22598,count__22599,i__22600,new_link_23138,path_match_23137,node_23136,path,seq__22583__$1,temp__5804__auto__,map__22582,map__22582__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23137], 0));

goog.dom.insertSiblingAfter(new_link_23138,node_23136);


var G__23170 = seq__22843_23132;
var G__23171 = chunk__22847_23133;
var G__23172 = count__22848_23134;
var G__23173 = (i__22849_23135 + (1));
seq__22843_23132 = G__23170;
chunk__22847_23133 = G__23171;
count__22848_23134 = G__23172;
i__22849_23135 = G__23173;
continue;
} else {
var G__23174 = seq__22843_23132;
var G__23175 = chunk__22847_23133;
var G__23176 = count__22848_23134;
var G__23177 = (i__22849_23135 + (1));
seq__22843_23132 = G__23174;
chunk__22847_23133 = G__23175;
count__22848_23134 = G__23176;
i__22849_23135 = G__23177;
continue;
}
} else {
var G__23178 = seq__22843_23132;
var G__23179 = chunk__22847_23133;
var G__23180 = count__22848_23134;
var G__23181 = (i__22849_23135 + (1));
seq__22843_23132 = G__23178;
chunk__22847_23133 = G__23179;
count__22848_23134 = G__23180;
i__22849_23135 = G__23181;
continue;
}
} else {
var temp__5804__auto___23182__$1 = cljs.core.seq(seq__22843_23132);
if(temp__5804__auto___23182__$1){
var seq__22843_23183__$1 = temp__5804__auto___23182__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22843_23183__$1)){
var c__5525__auto___23184 = cljs.core.chunk_first(seq__22843_23183__$1);
var G__23185 = cljs.core.chunk_rest(seq__22843_23183__$1);
var G__23186 = c__5525__auto___23184;
var G__23187 = cljs.core.count(c__5525__auto___23184);
var G__23188 = (0);
seq__22843_23132 = G__23185;
chunk__22847_23133 = G__23186;
count__22848_23134 = G__23187;
i__22849_23135 = G__23188;
continue;
} else {
var node_23189 = cljs.core.first(seq__22843_23183__$1);
if(cljs.core.not(node_23189.shadow$old)){
var path_match_23190 = shadow.cljs.devtools.client.browser.match_paths(node_23189.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23190)){
var new_link_23191 = (function (){var G__22886 = node_23189.cloneNode(true);
G__22886.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23190),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22886;
})();
(node_23189.shadow$old = true);

(new_link_23191.onload = ((function (seq__22843_23132,chunk__22847_23133,count__22848_23134,i__22849_23135,seq__22583,chunk__22598,count__22599,i__22600,new_link_23191,path_match_23190,node_23189,seq__22843_23183__$1,temp__5804__auto___23182__$1,path,seq__22583__$1,temp__5804__auto__,map__22582,map__22582__$1,msg,updates,reload_info){
return (function (e){
var seq__22887_23192 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22889_23193 = null;
var count__22890_23194 = (0);
var i__22891_23195 = (0);
while(true){
if((i__22891_23195 < count__22890_23194)){
var map__22895_23196 = chunk__22889_23193.cljs$core$IIndexed$_nth$arity$2(null, i__22891_23195);
var map__22895_23197__$1 = cljs.core.__destructure_map(map__22895_23196);
var task_23198 = map__22895_23197__$1;
var fn_str_23199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895_23197__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22895_23197__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23201 = goog.getObjectByName(fn_str_23199,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23200)].join(''));

(fn_obj_23201.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23201.cljs$core$IFn$_invoke$arity$2(path,new_link_23191) : fn_obj_23201.call(null, path,new_link_23191));


var G__23202 = seq__22887_23192;
var G__23203 = chunk__22889_23193;
var G__23204 = count__22890_23194;
var G__23205 = (i__22891_23195 + (1));
seq__22887_23192 = G__23202;
chunk__22889_23193 = G__23203;
count__22890_23194 = G__23204;
i__22891_23195 = G__23205;
continue;
} else {
var temp__5804__auto___23206__$2 = cljs.core.seq(seq__22887_23192);
if(temp__5804__auto___23206__$2){
var seq__22887_23207__$1 = temp__5804__auto___23206__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22887_23207__$1)){
var c__5525__auto___23208 = cljs.core.chunk_first(seq__22887_23207__$1);
var G__23209 = cljs.core.chunk_rest(seq__22887_23207__$1);
var G__23210 = c__5525__auto___23208;
var G__23211 = cljs.core.count(c__5525__auto___23208);
var G__23212 = (0);
seq__22887_23192 = G__23209;
chunk__22889_23193 = G__23210;
count__22890_23194 = G__23211;
i__22891_23195 = G__23212;
continue;
} else {
var map__22898_23213 = cljs.core.first(seq__22887_23207__$1);
var map__22898_23214__$1 = cljs.core.__destructure_map(map__22898_23213);
var task_23215 = map__22898_23214__$1;
var fn_str_23216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22898_23214__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22898_23214__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23218 = goog.getObjectByName(fn_str_23216,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23217)].join(''));

(fn_obj_23218.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23218.cljs$core$IFn$_invoke$arity$2(path,new_link_23191) : fn_obj_23218.call(null, path,new_link_23191));


var G__23219 = cljs.core.next(seq__22887_23207__$1);
var G__23220 = null;
var G__23221 = (0);
var G__23222 = (0);
seq__22887_23192 = G__23219;
chunk__22889_23193 = G__23220;
count__22890_23194 = G__23221;
i__22891_23195 = G__23222;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23189);
});})(seq__22843_23132,chunk__22847_23133,count__22848_23134,i__22849_23135,seq__22583,chunk__22598,count__22599,i__22600,new_link_23191,path_match_23190,node_23189,seq__22843_23183__$1,temp__5804__auto___23182__$1,path,seq__22583__$1,temp__5804__auto__,map__22582,map__22582__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23190], 0));

goog.dom.insertSiblingAfter(new_link_23191,node_23189);


var G__23223 = cljs.core.next(seq__22843_23183__$1);
var G__23224 = null;
var G__23225 = (0);
var G__23226 = (0);
seq__22843_23132 = G__23223;
chunk__22847_23133 = G__23224;
count__22848_23134 = G__23225;
i__22849_23135 = G__23226;
continue;
} else {
var G__23227 = cljs.core.next(seq__22843_23183__$1);
var G__23228 = null;
var G__23229 = (0);
var G__23230 = (0);
seq__22843_23132 = G__23227;
chunk__22847_23133 = G__23228;
count__22848_23134 = G__23229;
i__22849_23135 = G__23230;
continue;
}
} else {
var G__23231 = cljs.core.next(seq__22843_23183__$1);
var G__23232 = null;
var G__23233 = (0);
var G__23234 = (0);
seq__22843_23132 = G__23231;
chunk__22847_23133 = G__23232;
count__22848_23134 = G__23233;
i__22849_23135 = G__23234;
continue;
}
}
} else {
}
}
break;
}


var G__23235 = cljs.core.next(seq__22583__$1);
var G__23236 = null;
var G__23237 = (0);
var G__23238 = (0);
seq__22583 = G__23235;
chunk__22598 = G__23236;
count__22599 = G__23237;
i__22600 = G__23238;
continue;
} else {
var G__23239 = cljs.core.next(seq__22583__$1);
var G__23240 = null;
var G__23241 = (0);
var G__23242 = (0);
seq__22583 = G__23239;
chunk__22598 = G__23240;
count__22599 = G__23241;
i__22600 = G__23242;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22917){
var map__22919 = p__22917;
var map__22919__$1 = cljs.core.__destructure_map(map__22919);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22919__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22923,done,error){
var map__22924 = p__22923;
var map__22924__$1 = cljs.core.__destructure_map(map__22924);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22924__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22926,done,error){
var map__22927 = p__22926;
var map__22927__$1 = cljs.core.__destructure_map(map__22927);
var msg = map__22927__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22927__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22927__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22927__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22928){
var map__22929 = p__22928;
var map__22929__$1 = cljs.core.__destructure_map(map__22929);
var src = map__22929__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22929__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22930 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22930) : done.call(null, G__22930));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22931){
var map__22932 = p__22931;
var map__22932__$1 = cljs.core.__destructure_map(map__22932);
var msg__$1 = map__22932__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22932__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e22933){var ex = e22933;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22934){
var map__22935 = p__22934;
var map__22935__$1 = cljs.core.__destructure_map(map__22935);
var env = map__22935__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22935__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22941){
var map__22942 = p__22941;
var map__22942__$1 = cljs.core.__destructure_map(map__22942);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22942__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22942__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22943){
var map__22944 = p__22943;
var map__22944__$1 = cljs.core.__destructure_map(map__22944);
var svc = map__22944__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22944__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
