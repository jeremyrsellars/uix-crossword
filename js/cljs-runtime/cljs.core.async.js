goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18316 = (function (f,blockable,meta18317){
this.f = f;
this.blockable = blockable;
this.meta18317 = meta18317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18318,meta18317__$1){
var self__ = this;
var _18318__$1 = this;
return (new cljs.core.async.t_cljs$core$async18316(self__.f,self__.blockable,meta18317__$1));
}));

(cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18318){
var self__ = this;
var _18318__$1 = this;
return self__.meta18317;
}));

(cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18317","meta18317",-1518972084,null)], null);
}));

(cljs.core.async.t_cljs$core$async18316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18316");

(cljs.core.async.t_cljs$core$async18316.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18316.
 */
cljs.core.async.__GT_t_cljs$core$async18316 = (function cljs$core$async$__GT_t_cljs$core$async18316(f,blockable,meta18317){
return (new cljs.core.async.t_cljs$core$async18316(f,blockable,meta18317));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18315 = arguments.length;
switch (G__18315) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async18316(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18341 = arguments.length;
switch (G__18341) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18345 = arguments.length;
switch (G__18345) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18354 = arguments.length;
switch (G__18354) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20604 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20604) : fn1.call(null, val_20604));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20604) : fn1.call(null, val_20604));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18360 = arguments.length;
switch (G__18360) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___20612 = n;
var x_20613 = (0);
while(true){
if((x_20613 < n__5593__auto___20612)){
(a[x_20613] = x_20613);

var G__20614 = (x_20613 + (1));
x_20613 = G__20614;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18365 = (function (flag,meta18366){
this.flag = flag;
this.meta18366 = meta18366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18367,meta18366__$1){
var self__ = this;
var _18367__$1 = this;
return (new cljs.core.async.t_cljs$core$async18365(self__.flag,meta18366__$1));
}));

(cljs.core.async.t_cljs$core$async18365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18367){
var self__ = this;
var _18367__$1 = this;
return self__.meta18366;
}));

(cljs.core.async.t_cljs$core$async18365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18366","meta18366",-1452418785,null)], null);
}));

(cljs.core.async.t_cljs$core$async18365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18365");

(cljs.core.async.t_cljs$core$async18365.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18365.
 */
cljs.core.async.__GT_t_cljs$core$async18365 = (function cljs$core$async$__GT_t_cljs$core$async18365(flag,meta18366){
return (new cljs.core.async.t_cljs$core$async18365(flag,meta18366));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18365(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18381 = (function (flag,cb,meta18382){
this.flag = flag;
this.cb = cb;
this.meta18382 = meta18382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18383,meta18382__$1){
var self__ = this;
var _18383__$1 = this;
return (new cljs.core.async.t_cljs$core$async18381(self__.flag,self__.cb,meta18382__$1));
}));

(cljs.core.async.t_cljs$core$async18381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18383){
var self__ = this;
var _18383__$1 = this;
return self__.meta18382;
}));

(cljs.core.async.t_cljs$core$async18381.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18381.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18382","meta18382",1101448687,null)], null);
}));

(cljs.core.async.t_cljs$core$async18381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18381");

(cljs.core.async.t_cljs$core$async18381.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18381.
 */
cljs.core.async.__GT_t_cljs$core$async18381 = (function cljs$core$async$__GT_t_cljs$core$async18381(flag,cb,meta18382){
return (new cljs.core.async.t_cljs$core$async18381(flag,cb,meta18382));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18381(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18426_SHARP_){
var G__18435 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18426_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18435) : fret.call(null, G__18435));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18427_SHARP_){
var G__18437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18427_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18437) : fret.call(null, G__18437));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20627 = (i + (1));
i = G__20627;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20630 = arguments.length;
var i__5727__auto___20631 = (0);
while(true){
if((i__5727__auto___20631 < len__5726__auto___20630)){
args__5732__auto__.push((arguments[i__5727__auto___20631]));

var G__20632 = (i__5727__auto___20631 + (1));
i__5727__auto___20631 = G__20632;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18456){
var map__18457 = p__18456;
var map__18457__$1 = cljs.core.__destructure_map(map__18457);
var opts = map__18457__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18446){
var G__18447 = cljs.core.first(seq18446);
var seq18446__$1 = cljs.core.next(seq18446);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18447,seq18446__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18487 = arguments.length;
switch (G__18487) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18249__auto___20640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_18561){
var state_val_18566 = (state_18561[(1)]);
if((state_val_18566 === (7))){
var inst_18555 = (state_18561[(2)]);
var state_18561__$1 = state_18561;
var statearr_18592_20641 = state_18561__$1;
(statearr_18592_20641[(2)] = inst_18555);

(statearr_18592_20641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (1))){
var state_18561__$1 = state_18561;
var statearr_18597_20643 = state_18561__$1;
(statearr_18597_20643[(2)] = null);

(statearr_18597_20643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (4))){
var inst_18535 = (state_18561[(7)]);
var inst_18535__$1 = (state_18561[(2)]);
var inst_18536 = (inst_18535__$1 == null);
var state_18561__$1 = (function (){var statearr_18598 = state_18561;
(statearr_18598[(7)] = inst_18535__$1);

return statearr_18598;
})();
if(cljs.core.truth_(inst_18536)){
var statearr_18599_20646 = state_18561__$1;
(statearr_18599_20646[(1)] = (5));

} else {
var statearr_18600_20647 = state_18561__$1;
(statearr_18600_20647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (13))){
var state_18561__$1 = state_18561;
var statearr_18605_20648 = state_18561__$1;
(statearr_18605_20648[(2)] = null);

(statearr_18605_20648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (6))){
var inst_18535 = (state_18561[(7)]);
var state_18561__$1 = state_18561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18561__$1,(11),to,inst_18535);
} else {
if((state_val_18566 === (3))){
var inst_18558 = (state_18561[(2)]);
var state_18561__$1 = state_18561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18561__$1,inst_18558);
} else {
if((state_val_18566 === (12))){
var state_18561__$1 = state_18561;
var statearr_18606_20651 = state_18561__$1;
(statearr_18606_20651[(2)] = null);

(statearr_18606_20651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (2))){
var state_18561__$1 = state_18561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18561__$1,(4),from);
} else {
if((state_val_18566 === (11))){
var inst_18546 = (state_18561[(2)]);
var state_18561__$1 = state_18561;
if(cljs.core.truth_(inst_18546)){
var statearr_18608_20653 = state_18561__$1;
(statearr_18608_20653[(1)] = (12));

} else {
var statearr_18609_20654 = state_18561__$1;
(statearr_18609_20654[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (9))){
var state_18561__$1 = state_18561;
var statearr_18610_20655 = state_18561__$1;
(statearr_18610_20655[(2)] = null);

(statearr_18610_20655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (5))){
var state_18561__$1 = state_18561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18611_20656 = state_18561__$1;
(statearr_18611_20656[(1)] = (8));

} else {
var statearr_18612_20657 = state_18561__$1;
(statearr_18612_20657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (14))){
var inst_18553 = (state_18561[(2)]);
var state_18561__$1 = state_18561;
var statearr_18617_20658 = state_18561__$1;
(statearr_18617_20658[(2)] = inst_18553);

(statearr_18617_20658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (10))){
var inst_18543 = (state_18561[(2)]);
var state_18561__$1 = state_18561;
var statearr_18626_20659 = state_18561__$1;
(statearr_18626_20659[(2)] = inst_18543);

(statearr_18626_20659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18566 === (8))){
var inst_18539 = cljs.core.async.close_BANG_(to);
var state_18561__$1 = state_18561;
var statearr_18635_20660 = state_18561__$1;
(statearr_18635_20660[(2)] = inst_18539);

(statearr_18635_20660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__18091__auto__ = null;
var cljs$core$async$state_machine__18091__auto____0 = (function (){
var statearr_18637 = [null,null,null,null,null,null,null,null];
(statearr_18637[(0)] = cljs$core$async$state_machine__18091__auto__);

(statearr_18637[(1)] = (1));

return statearr_18637;
});
var cljs$core$async$state_machine__18091__auto____1 = (function (state_18561){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_18561);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e18638){var ex__18094__auto__ = e18638;
var statearr_18639_20661 = state_18561;
(statearr_18639_20661[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_18561[(4)]))){
var statearr_18640_20666 = state_18561;
(statearr_18640_20666[(1)] = cljs.core.first((state_18561[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20667 = state_18561;
state_18561 = G__20667;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$state_machine__18091__auto__ = function(state_18561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18091__auto____1.call(this,state_18561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18091__auto____0;
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18091__auto____1;
return cljs$core$async$state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_18641 = f__18250__auto__();
(statearr_18641[(6)] = c__18249__auto___20640);

return statearr_18641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18643){
var vec__18644 = p__18643;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18644,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18644,(1),null);
var job = vec__18644;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18249__auto___20672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_18652){
var state_val_18653 = (state_18652[(1)]);
if((state_val_18653 === (1))){
var state_18652__$1 = state_18652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18652__$1,(2),res,v);
} else {
if((state_val_18653 === (2))){
var inst_18649 = (state_18652[(2)]);
var inst_18650 = cljs.core.async.close_BANG_(res);
var state_18652__$1 = (function (){var statearr_18654 = state_18652;
(statearr_18654[(7)] = inst_18649);

return statearr_18654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18652__$1,inst_18650);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0 = (function (){
var statearr_18655 = [null,null,null,null,null,null,null,null];
(statearr_18655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__);

(statearr_18655[(1)] = (1));

return statearr_18655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1 = (function (state_18652){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_18652);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e18656){var ex__18094__auto__ = e18656;
var statearr_18658_20683 = state_18652;
(statearr_18658_20683[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_18652[(4)]))){
var statearr_18659_20684 = state_18652;
(statearr_18659_20684[(1)] = cljs.core.first((state_18652[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20688 = state_18652;
state_18652 = G__20688;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__ = function(state_18652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1.call(this,state_18652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_18660 = f__18250__auto__();
(statearr_18660[(6)] = c__18249__auto___20672);

return statearr_18660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18661){
var vec__18662 = p__18661;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18662,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18662,(1),null);
var job = vec__18662;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___20693 = n;
var __20694 = (0);
while(true){
if((__20694 < n__5593__auto___20693)){
var G__18665_20695 = type;
var G__18665_20696__$1 = (((G__18665_20695 instanceof cljs.core.Keyword))?G__18665_20695.fqn:null);
switch (G__18665_20696__$1) {
case "compute":
var c__18249__auto___20698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20694,c__18249__auto___20698,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async){
return (function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = ((function (__20694,c__18249__auto___20698,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async){
return (function (state_18679){
var state_val_18680 = (state_18679[(1)]);
if((state_val_18680 === (1))){
var state_18679__$1 = state_18679;
var statearr_18681_20699 = state_18679__$1;
(statearr_18681_20699[(2)] = null);

(statearr_18681_20699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (2))){
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18679__$1,(4),jobs);
} else {
if((state_val_18680 === (3))){
var inst_18677 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18679__$1,inst_18677);
} else {
if((state_val_18680 === (4))){
var inst_18669 = (state_18679[(2)]);
var inst_18670 = process__$1(inst_18669);
var state_18679__$1 = state_18679;
if(cljs.core.truth_(inst_18670)){
var statearr_18683_20700 = state_18679__$1;
(statearr_18683_20700[(1)] = (5));

} else {
var statearr_18684_20707 = state_18679__$1;
(statearr_18684_20707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (5))){
var state_18679__$1 = state_18679;
var statearr_18685_20708 = state_18679__$1;
(statearr_18685_20708[(2)] = null);

(statearr_18685_20708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (6))){
var state_18679__$1 = state_18679;
var statearr_18686_20709 = state_18679__$1;
(statearr_18686_20709[(2)] = null);

(statearr_18686_20709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18680 === (7))){
var inst_18675 = (state_18679[(2)]);
var state_18679__$1 = state_18679;
var statearr_18687_20710 = state_18679__$1;
(statearr_18687_20710[(2)] = inst_18675);

(statearr_18687_20710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20694,c__18249__auto___20698,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async))
;
return ((function (__20694,switch__18090__auto__,c__18249__auto___20698,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0 = (function (){
var statearr_18689 = [null,null,null,null,null,null,null];
(statearr_18689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__);

(statearr_18689[(1)] = (1));

return statearr_18689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1 = (function (state_18679){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_18679);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e18690){var ex__18094__auto__ = e18690;
var statearr_18691_20721 = state_18679;
(statearr_18691_20721[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_18679[(4)]))){
var statearr_18692_20722 = state_18679;
(statearr_18692_20722[(1)] = cljs.core.first((state_18679[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20723 = state_18679;
state_18679 = G__20723;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__ = function(state_18679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1.call(this,state_18679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__;
})()
;})(__20694,switch__18090__auto__,c__18249__auto___20698,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async))
})();
var state__18251__auto__ = (function (){var statearr_18693 = f__18250__auto__();
(statearr_18693[(6)] = c__18249__auto___20698);

return statearr_18693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
});})(__20694,c__18249__auto___20698,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async))
);


break;
case "async":
var c__18249__auto___20724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20694,c__18249__auto___20724,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async){
return (function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = ((function (__20694,c__18249__auto___20724,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async){
return (function (state_18707){
var state_val_18708 = (state_18707[(1)]);
if((state_val_18708 === (1))){
var state_18707__$1 = state_18707;
var statearr_18709_20725 = state_18707__$1;
(statearr_18709_20725[(2)] = null);

(statearr_18709_20725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18708 === (2))){
var state_18707__$1 = state_18707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18707__$1,(4),jobs);
} else {
if((state_val_18708 === (3))){
var inst_18705 = (state_18707[(2)]);
var state_18707__$1 = state_18707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18707__$1,inst_18705);
} else {
if((state_val_18708 === (4))){
var inst_18697 = (state_18707[(2)]);
var inst_18698 = async(inst_18697);
var state_18707__$1 = state_18707;
if(cljs.core.truth_(inst_18698)){
var statearr_18710_20727 = state_18707__$1;
(statearr_18710_20727[(1)] = (5));

} else {
var statearr_18711_20728 = state_18707__$1;
(statearr_18711_20728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18708 === (5))){
var state_18707__$1 = state_18707;
var statearr_18712_20733 = state_18707__$1;
(statearr_18712_20733[(2)] = null);

(statearr_18712_20733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18708 === (6))){
var state_18707__$1 = state_18707;
var statearr_18713_20734 = state_18707__$1;
(statearr_18713_20734[(2)] = null);

(statearr_18713_20734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18708 === (7))){
var inst_18703 = (state_18707[(2)]);
var state_18707__$1 = state_18707;
var statearr_18714_20735 = state_18707__$1;
(statearr_18714_20735[(2)] = inst_18703);

(statearr_18714_20735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20694,c__18249__auto___20724,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async))
;
return ((function (__20694,switch__18090__auto__,c__18249__auto___20724,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0 = (function (){
var statearr_18716 = [null,null,null,null,null,null,null];
(statearr_18716[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__);

(statearr_18716[(1)] = (1));

return statearr_18716;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1 = (function (state_18707){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_18707);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e18717){var ex__18094__auto__ = e18717;
var statearr_18718_20736 = state_18707;
(statearr_18718_20736[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_18707[(4)]))){
var statearr_18719_20737 = state_18707;
(statearr_18719_20737[(1)] = cljs.core.first((state_18707[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20738 = state_18707;
state_18707 = G__20738;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__ = function(state_18707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1.call(this,state_18707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__;
})()
;})(__20694,switch__18090__auto__,c__18249__auto___20724,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async))
})();
var state__18251__auto__ = (function (){var statearr_18720 = f__18250__auto__();
(statearr_18720[(6)] = c__18249__auto___20724);

return statearr_18720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
});})(__20694,c__18249__auto___20724,G__18665_20695,G__18665_20696__$1,n__5593__auto___20693,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18665_20696__$1)].join('')));

}

var G__20744 = (__20694 + (1));
__20694 = G__20744;
continue;
} else {
}
break;
}

var c__18249__auto___20745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_18742){
var state_val_18743 = (state_18742[(1)]);
if((state_val_18743 === (7))){
var inst_18738 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
var statearr_18744_20751 = state_18742__$1;
(statearr_18744_20751[(2)] = inst_18738);

(statearr_18744_20751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (1))){
var state_18742__$1 = state_18742;
var statearr_18746_20755 = state_18742__$1;
(statearr_18746_20755[(2)] = null);

(statearr_18746_20755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (4))){
var inst_18723 = (state_18742[(7)]);
var inst_18723__$1 = (state_18742[(2)]);
var inst_18724 = (inst_18723__$1 == null);
var state_18742__$1 = (function (){var statearr_18747 = state_18742;
(statearr_18747[(7)] = inst_18723__$1);

return statearr_18747;
})();
if(cljs.core.truth_(inst_18724)){
var statearr_18748_20756 = state_18742__$1;
(statearr_18748_20756[(1)] = (5));

} else {
var statearr_18749_20757 = state_18742__$1;
(statearr_18749_20757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (6))){
var inst_18728 = (state_18742[(8)]);
var inst_18723 = (state_18742[(7)]);
var inst_18728__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18730 = [inst_18723,inst_18728__$1];
var inst_18731 = (new cljs.core.PersistentVector(null,2,(5),inst_18729,inst_18730,null));
var state_18742__$1 = (function (){var statearr_18750 = state_18742;
(statearr_18750[(8)] = inst_18728__$1);

return statearr_18750;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18742__$1,(8),jobs,inst_18731);
} else {
if((state_val_18743 === (3))){
var inst_18740 = (state_18742[(2)]);
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18742__$1,inst_18740);
} else {
if((state_val_18743 === (2))){
var state_18742__$1 = state_18742;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18742__$1,(4),from);
} else {
if((state_val_18743 === (9))){
var inst_18735 = (state_18742[(2)]);
var state_18742__$1 = (function (){var statearr_18751 = state_18742;
(statearr_18751[(9)] = inst_18735);

return statearr_18751;
})();
var statearr_18752_20759 = state_18742__$1;
(statearr_18752_20759[(2)] = null);

(statearr_18752_20759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (5))){
var inst_18726 = cljs.core.async.close_BANG_(jobs);
var state_18742__$1 = state_18742;
var statearr_18753_20760 = state_18742__$1;
(statearr_18753_20760[(2)] = inst_18726);

(statearr_18753_20760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18743 === (8))){
var inst_18728 = (state_18742[(8)]);
var inst_18733 = (state_18742[(2)]);
var state_18742__$1 = (function (){var statearr_18754 = state_18742;
(statearr_18754[(10)] = inst_18733);

return statearr_18754;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18742__$1,(9),results,inst_18728);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0 = (function (){
var statearr_18755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__);

(statearr_18755[(1)] = (1));

return statearr_18755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1 = (function (state_18742){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_18742);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e18756){var ex__18094__auto__ = e18756;
var statearr_18757_20770 = state_18742;
(statearr_18757_20770[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_18742[(4)]))){
var statearr_18759_20771 = state_18742;
(statearr_18759_20771[(1)] = cljs.core.first((state_18742[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20772 = state_18742;
state_18742 = G__20772;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__ = function(state_18742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1.call(this,state_18742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_18760 = f__18250__auto__();
(statearr_18760[(6)] = c__18249__auto___20745);

return statearr_18760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


var c__18249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_18799){
var state_val_18800 = (state_18799[(1)]);
if((state_val_18800 === (7))){
var inst_18795 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
var statearr_18801_20773 = state_18799__$1;
(statearr_18801_20773[(2)] = inst_18795);

(statearr_18801_20773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (20))){
var state_18799__$1 = state_18799;
var statearr_18802_20774 = state_18799__$1;
(statearr_18802_20774[(2)] = null);

(statearr_18802_20774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (1))){
var state_18799__$1 = state_18799;
var statearr_18803_20775 = state_18799__$1;
(statearr_18803_20775[(2)] = null);

(statearr_18803_20775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (4))){
var inst_18763 = (state_18799[(7)]);
var inst_18763__$1 = (state_18799[(2)]);
var inst_18764 = (inst_18763__$1 == null);
var state_18799__$1 = (function (){var statearr_18804 = state_18799;
(statearr_18804[(7)] = inst_18763__$1);

return statearr_18804;
})();
if(cljs.core.truth_(inst_18764)){
var statearr_18805_20776 = state_18799__$1;
(statearr_18805_20776[(1)] = (5));

} else {
var statearr_18806_20777 = state_18799__$1;
(statearr_18806_20777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (15))){
var inst_18776 = (state_18799[(8)]);
var state_18799__$1 = state_18799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18799__$1,(18),to,inst_18776);
} else {
if((state_val_18800 === (21))){
var inst_18790 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
var statearr_18807_20778 = state_18799__$1;
(statearr_18807_20778[(2)] = inst_18790);

(statearr_18807_20778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (13))){
var inst_18792 = (state_18799[(2)]);
var state_18799__$1 = (function (){var statearr_18809 = state_18799;
(statearr_18809[(9)] = inst_18792);

return statearr_18809;
})();
var statearr_18810_20780 = state_18799__$1;
(statearr_18810_20780[(2)] = null);

(statearr_18810_20780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (6))){
var inst_18763 = (state_18799[(7)]);
var state_18799__$1 = state_18799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18799__$1,(11),inst_18763);
} else {
if((state_val_18800 === (17))){
var inst_18785 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
if(cljs.core.truth_(inst_18785)){
var statearr_18811_20784 = state_18799__$1;
(statearr_18811_20784[(1)] = (19));

} else {
var statearr_18812_20785 = state_18799__$1;
(statearr_18812_20785[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (3))){
var inst_18797 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18799__$1,inst_18797);
} else {
if((state_val_18800 === (12))){
var inst_18773 = (state_18799[(10)]);
var state_18799__$1 = state_18799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18799__$1,(14),inst_18773);
} else {
if((state_val_18800 === (2))){
var state_18799__$1 = state_18799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18799__$1,(4),results);
} else {
if((state_val_18800 === (19))){
var state_18799__$1 = state_18799;
var statearr_18813_20786 = state_18799__$1;
(statearr_18813_20786[(2)] = null);

(statearr_18813_20786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (11))){
var inst_18773 = (state_18799[(2)]);
var state_18799__$1 = (function (){var statearr_18814 = state_18799;
(statearr_18814[(10)] = inst_18773);

return statearr_18814;
})();
var statearr_18815_20787 = state_18799__$1;
(statearr_18815_20787[(2)] = null);

(statearr_18815_20787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (9))){
var state_18799__$1 = state_18799;
var statearr_18817_20788 = state_18799__$1;
(statearr_18817_20788[(2)] = null);

(statearr_18817_20788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (5))){
var state_18799__$1 = state_18799;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18818_20789 = state_18799__$1;
(statearr_18818_20789[(1)] = (8));

} else {
var statearr_18819_20790 = state_18799__$1;
(statearr_18819_20790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (14))){
var inst_18776 = (state_18799[(8)]);
var inst_18778 = (state_18799[(11)]);
var inst_18776__$1 = (state_18799[(2)]);
var inst_18777 = (inst_18776__$1 == null);
var inst_18778__$1 = cljs.core.not(inst_18777);
var state_18799__$1 = (function (){var statearr_18820 = state_18799;
(statearr_18820[(8)] = inst_18776__$1);

(statearr_18820[(11)] = inst_18778__$1);

return statearr_18820;
})();
if(inst_18778__$1){
var statearr_18821_20800 = state_18799__$1;
(statearr_18821_20800[(1)] = (15));

} else {
var statearr_18822_20801 = state_18799__$1;
(statearr_18822_20801[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (16))){
var inst_18778 = (state_18799[(11)]);
var state_18799__$1 = state_18799;
var statearr_18823_20802 = state_18799__$1;
(statearr_18823_20802[(2)] = inst_18778);

(statearr_18823_20802[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (10))){
var inst_18770 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
var statearr_18824_20807 = state_18799__$1;
(statearr_18824_20807[(2)] = inst_18770);

(statearr_18824_20807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (18))){
var inst_18782 = (state_18799[(2)]);
var state_18799__$1 = state_18799;
var statearr_18826_20809 = state_18799__$1;
(statearr_18826_20809[(2)] = inst_18782);

(statearr_18826_20809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18800 === (8))){
var inst_18767 = cljs.core.async.close_BANG_(to);
var state_18799__$1 = state_18799;
var statearr_18827_20810 = state_18799__$1;
(statearr_18827_20810[(2)] = inst_18767);

(statearr_18827_20810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0 = (function (){
var statearr_18828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__);

(statearr_18828[(1)] = (1));

return statearr_18828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1 = (function (state_18799){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_18799);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e18829){var ex__18094__auto__ = e18829;
var statearr_18830_20811 = state_18799;
(statearr_18830_20811[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_18799[(4)]))){
var statearr_18831_20812 = state_18799;
(statearr_18831_20812[(1)] = cljs.core.first((state_18799[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20813 = state_18799;
state_18799 = G__20813;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__ = function(state_18799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1.call(this,state_18799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_18833 = f__18250__auto__();
(statearr_18833[(6)] = c__18249__auto__);

return statearr_18833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));

return c__18249__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18835 = arguments.length;
switch (G__18835) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18838 = arguments.length;
switch (G__18838) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18842 = arguments.length;
switch (G__18842) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18249__auto___20827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_18869){
var state_val_18870 = (state_18869[(1)]);
if((state_val_18870 === (7))){
var inst_18865 = (state_18869[(2)]);
var state_18869__$1 = state_18869;
var statearr_18872_20831 = state_18869__$1;
(statearr_18872_20831[(2)] = inst_18865);

(statearr_18872_20831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (1))){
var state_18869__$1 = state_18869;
var statearr_18873_20832 = state_18869__$1;
(statearr_18873_20832[(2)] = null);

(statearr_18873_20832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (4))){
var inst_18846 = (state_18869[(7)]);
var inst_18846__$1 = (state_18869[(2)]);
var inst_18847 = (inst_18846__$1 == null);
var state_18869__$1 = (function (){var statearr_18874 = state_18869;
(statearr_18874[(7)] = inst_18846__$1);

return statearr_18874;
})();
if(cljs.core.truth_(inst_18847)){
var statearr_18875_20833 = state_18869__$1;
(statearr_18875_20833[(1)] = (5));

} else {
var statearr_18876_20834 = state_18869__$1;
(statearr_18876_20834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (13))){
var state_18869__$1 = state_18869;
var statearr_18877_20835 = state_18869__$1;
(statearr_18877_20835[(2)] = null);

(statearr_18877_20835[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (6))){
var inst_18846 = (state_18869[(7)]);
var inst_18852 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18846) : p.call(null, inst_18846));
var state_18869__$1 = state_18869;
if(cljs.core.truth_(inst_18852)){
var statearr_18878_20836 = state_18869__$1;
(statearr_18878_20836[(1)] = (9));

} else {
var statearr_18879_20837 = state_18869__$1;
(statearr_18879_20837[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (3))){
var inst_18867 = (state_18869[(2)]);
var state_18869__$1 = state_18869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18869__$1,inst_18867);
} else {
if((state_val_18870 === (12))){
var state_18869__$1 = state_18869;
var statearr_18881_20838 = state_18869__$1;
(statearr_18881_20838[(2)] = null);

(statearr_18881_20838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (2))){
var state_18869__$1 = state_18869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18869__$1,(4),ch);
} else {
if((state_val_18870 === (11))){
var inst_18846 = (state_18869[(7)]);
var inst_18856 = (state_18869[(2)]);
var state_18869__$1 = state_18869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18869__$1,(8),inst_18856,inst_18846);
} else {
if((state_val_18870 === (9))){
var state_18869__$1 = state_18869;
var statearr_18882_20839 = state_18869__$1;
(statearr_18882_20839[(2)] = tc);

(statearr_18882_20839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (5))){
var inst_18849 = cljs.core.async.close_BANG_(tc);
var inst_18850 = cljs.core.async.close_BANG_(fc);
var state_18869__$1 = (function (){var statearr_18883 = state_18869;
(statearr_18883[(8)] = inst_18849);

return statearr_18883;
})();
var statearr_18884_20843 = state_18869__$1;
(statearr_18884_20843[(2)] = inst_18850);

(statearr_18884_20843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (14))){
var inst_18863 = (state_18869[(2)]);
var state_18869__$1 = state_18869;
var statearr_18885_20844 = state_18869__$1;
(statearr_18885_20844[(2)] = inst_18863);

(statearr_18885_20844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (10))){
var state_18869__$1 = state_18869;
var statearr_18887_20845 = state_18869__$1;
(statearr_18887_20845[(2)] = fc);

(statearr_18887_20845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (8))){
var inst_18858 = (state_18869[(2)]);
var state_18869__$1 = state_18869;
if(cljs.core.truth_(inst_18858)){
var statearr_18888_20846 = state_18869__$1;
(statearr_18888_20846[(1)] = (12));

} else {
var statearr_18889_20847 = state_18869__$1;
(statearr_18889_20847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__18091__auto__ = null;
var cljs$core$async$state_machine__18091__auto____0 = (function (){
var statearr_18890 = [null,null,null,null,null,null,null,null,null];
(statearr_18890[(0)] = cljs$core$async$state_machine__18091__auto__);

(statearr_18890[(1)] = (1));

return statearr_18890;
});
var cljs$core$async$state_machine__18091__auto____1 = (function (state_18869){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_18869);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e18891){var ex__18094__auto__ = e18891;
var statearr_18892_20848 = state_18869;
(statearr_18892_20848[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_18869[(4)]))){
var statearr_18893_20849 = state_18869;
(statearr_18893_20849[(1)] = cljs.core.first((state_18869[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20850 = state_18869;
state_18869 = G__20850;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$state_machine__18091__auto__ = function(state_18869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18091__auto____1.call(this,state_18869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18091__auto____0;
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18091__auto____1;
return cljs$core$async$state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_18895 = f__18250__auto__();
(statearr_18895[(6)] = c__18249__auto___20827);

return statearr_18895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_18918){
var state_val_18919 = (state_18918[(1)]);
if((state_val_18919 === (7))){
var inst_18914 = (state_18918[(2)]);
var state_18918__$1 = state_18918;
var statearr_18920_20851 = state_18918__$1;
(statearr_18920_20851[(2)] = inst_18914);

(statearr_18920_20851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18919 === (1))){
var inst_18896 = init;
var inst_18897 = inst_18896;
var state_18918__$1 = (function (){var statearr_18922 = state_18918;
(statearr_18922[(7)] = inst_18897);

return statearr_18922;
})();
var statearr_18923_20852 = state_18918__$1;
(statearr_18923_20852[(2)] = null);

(statearr_18923_20852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18919 === (4))){
var inst_18900 = (state_18918[(8)]);
var inst_18900__$1 = (state_18918[(2)]);
var inst_18901 = (inst_18900__$1 == null);
var state_18918__$1 = (function (){var statearr_18924 = state_18918;
(statearr_18924[(8)] = inst_18900__$1);

return statearr_18924;
})();
if(cljs.core.truth_(inst_18901)){
var statearr_18925_20856 = state_18918__$1;
(statearr_18925_20856[(1)] = (5));

} else {
var statearr_18926_20857 = state_18918__$1;
(statearr_18926_20857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18919 === (6))){
var inst_18900 = (state_18918[(8)]);
var inst_18904 = (state_18918[(9)]);
var inst_18897 = (state_18918[(7)]);
var inst_18904__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18897,inst_18900) : f.call(null, inst_18897,inst_18900));
var inst_18906 = cljs.core.reduced_QMARK_(inst_18904__$1);
var state_18918__$1 = (function (){var statearr_18927 = state_18918;
(statearr_18927[(9)] = inst_18904__$1);

return statearr_18927;
})();
if(inst_18906){
var statearr_18928_20858 = state_18918__$1;
(statearr_18928_20858[(1)] = (8));

} else {
var statearr_18929_20859 = state_18918__$1;
(statearr_18929_20859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18919 === (3))){
var inst_18916 = (state_18918[(2)]);
var state_18918__$1 = state_18918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18918__$1,inst_18916);
} else {
if((state_val_18919 === (2))){
var state_18918__$1 = state_18918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18918__$1,(4),ch);
} else {
if((state_val_18919 === (9))){
var inst_18904 = (state_18918[(9)]);
var inst_18897 = inst_18904;
var state_18918__$1 = (function (){var statearr_18931 = state_18918;
(statearr_18931[(7)] = inst_18897);

return statearr_18931;
})();
var statearr_18932_20860 = state_18918__$1;
(statearr_18932_20860[(2)] = null);

(statearr_18932_20860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18919 === (5))){
var inst_18897 = (state_18918[(7)]);
var state_18918__$1 = state_18918;
var statearr_18933_20861 = state_18918__$1;
(statearr_18933_20861[(2)] = inst_18897);

(statearr_18933_20861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18919 === (10))){
var inst_18912 = (state_18918[(2)]);
var state_18918__$1 = state_18918;
var statearr_18934_20862 = state_18918__$1;
(statearr_18934_20862[(2)] = inst_18912);

(statearr_18934_20862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18919 === (8))){
var inst_18904 = (state_18918[(9)]);
var inst_18908 = cljs.core.deref(inst_18904);
var state_18918__$1 = state_18918;
var statearr_18935_20863 = state_18918__$1;
(statearr_18935_20863[(2)] = inst_18908);

(statearr_18935_20863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__18091__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18091__auto____0 = (function (){
var statearr_18937 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18937[(0)] = cljs$core$async$reduce_$_state_machine__18091__auto__);

(statearr_18937[(1)] = (1));

return statearr_18937;
});
var cljs$core$async$reduce_$_state_machine__18091__auto____1 = (function (state_18918){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_18918);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e18938){var ex__18094__auto__ = e18938;
var statearr_18939_20864 = state_18918;
(statearr_18939_20864[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_18918[(4)]))){
var statearr_18940_20865 = state_18918;
(statearr_18940_20865[(1)] = cljs.core.first((state_18918[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20866 = state_18918;
state_18918 = G__20866;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18091__auto__ = function(state_18918){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18091__auto____1.call(this,state_18918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18091__auto____0;
cljs$core$async$reduce_$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18091__auto____1;
return cljs$core$async$reduce_$_state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_18941 = f__18250__auto__();
(statearr_18941[(6)] = c__18249__auto__);

return statearr_18941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));

return c__18249__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__18249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_18948){
var state_val_18949 = (state_18948[(1)]);
if((state_val_18949 === (1))){
var inst_18943 = cljs.core.async.reduce(f__$1,init,ch);
var state_18948__$1 = state_18948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18948__$1,(2),inst_18943);
} else {
if((state_val_18949 === (2))){
var inst_18945 = (state_18948[(2)]);
var inst_18946 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18945) : f__$1.call(null, inst_18945));
var state_18948__$1 = state_18948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18948__$1,inst_18946);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18091__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18091__auto____0 = (function (){
var statearr_18951 = [null,null,null,null,null,null,null];
(statearr_18951[(0)] = cljs$core$async$transduce_$_state_machine__18091__auto__);

(statearr_18951[(1)] = (1));

return statearr_18951;
});
var cljs$core$async$transduce_$_state_machine__18091__auto____1 = (function (state_18948){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_18948);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e18952){var ex__18094__auto__ = e18952;
var statearr_18953_20872 = state_18948;
(statearr_18953_20872[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_18948[(4)]))){
var statearr_18954_20873 = state_18948;
(statearr_18954_20873[(1)] = cljs.core.first((state_18948[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20874 = state_18948;
state_18948 = G__20874;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18091__auto__ = function(state_18948){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18091__auto____1.call(this,state_18948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18091__auto____0;
cljs$core$async$transduce_$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18091__auto____1;
return cljs$core$async$transduce_$_state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_18955 = f__18250__auto__();
(statearr_18955[(6)] = c__18249__auto__);

return statearr_18955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));

return c__18249__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18958 = arguments.length;
switch (G__18958) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_18983){
var state_val_18985 = (state_18983[(1)]);
if((state_val_18985 === (7))){
var inst_18965 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_18986_20876 = state_18983__$1;
(statearr_18986_20876[(2)] = inst_18965);

(statearr_18986_20876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (1))){
var inst_18959 = cljs.core.seq(coll);
var inst_18960 = inst_18959;
var state_18983__$1 = (function (){var statearr_18987 = state_18983;
(statearr_18987[(7)] = inst_18960);

return statearr_18987;
})();
var statearr_18988_20880 = state_18983__$1;
(statearr_18988_20880[(2)] = null);

(statearr_18988_20880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (4))){
var inst_18960 = (state_18983[(7)]);
var inst_18963 = cljs.core.first(inst_18960);
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18983__$1,(7),ch,inst_18963);
} else {
if((state_val_18985 === (13))){
var inst_18977 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_18989_20881 = state_18983__$1;
(statearr_18989_20881[(2)] = inst_18977);

(statearr_18989_20881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (6))){
var inst_18968 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
if(cljs.core.truth_(inst_18968)){
var statearr_18991_20882 = state_18983__$1;
(statearr_18991_20882[(1)] = (8));

} else {
var statearr_18992_20883 = state_18983__$1;
(statearr_18992_20883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (3))){
var inst_18981 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18983__$1,inst_18981);
} else {
if((state_val_18985 === (12))){
var state_18983__$1 = state_18983;
var statearr_18993_20884 = state_18983__$1;
(statearr_18993_20884[(2)] = null);

(statearr_18993_20884[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (2))){
var inst_18960 = (state_18983[(7)]);
var state_18983__$1 = state_18983;
if(cljs.core.truth_(inst_18960)){
var statearr_18994_20885 = state_18983__$1;
(statearr_18994_20885[(1)] = (4));

} else {
var statearr_18995_20886 = state_18983__$1;
(statearr_18995_20886[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (11))){
var inst_18974 = cljs.core.async.close_BANG_(ch);
var state_18983__$1 = state_18983;
var statearr_18996_20887 = state_18983__$1;
(statearr_18996_20887[(2)] = inst_18974);

(statearr_18996_20887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (9))){
var state_18983__$1 = state_18983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18997_20888 = state_18983__$1;
(statearr_18997_20888[(1)] = (11));

} else {
var statearr_18998_20889 = state_18983__$1;
(statearr_18998_20889[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (5))){
var inst_18960 = (state_18983[(7)]);
var state_18983__$1 = state_18983;
var statearr_18999_20890 = state_18983__$1;
(statearr_18999_20890[(2)] = inst_18960);

(statearr_18999_20890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (10))){
var inst_18979 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_19001_20891 = state_18983__$1;
(statearr_19001_20891[(2)] = inst_18979);

(statearr_19001_20891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (8))){
var inst_18960 = (state_18983[(7)]);
var inst_18970 = cljs.core.next(inst_18960);
var inst_18960__$1 = inst_18970;
var state_18983__$1 = (function (){var statearr_19002 = state_18983;
(statearr_19002[(7)] = inst_18960__$1);

return statearr_19002;
})();
var statearr_19003_20892 = state_18983__$1;
(statearr_19003_20892[(2)] = null);

(statearr_19003_20892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__18091__auto__ = null;
var cljs$core$async$state_machine__18091__auto____0 = (function (){
var statearr_19004 = [null,null,null,null,null,null,null,null];
(statearr_19004[(0)] = cljs$core$async$state_machine__18091__auto__);

(statearr_19004[(1)] = (1));

return statearr_19004;
});
var cljs$core$async$state_machine__18091__auto____1 = (function (state_18983){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_18983);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e19005){var ex__18094__auto__ = e19005;
var statearr_19006_20896 = state_18983;
(statearr_19006_20896[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_18983[(4)]))){
var statearr_19008_20897 = state_18983;
(statearr_19008_20897[(1)] = cljs.core.first((state_18983[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20898 = state_18983;
state_18983 = G__20898;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$state_machine__18091__auto__ = function(state_18983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18091__auto____1.call(this,state_18983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18091__auto____0;
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18091__auto____1;
return cljs$core$async$state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_19010 = f__18250__auto__();
(statearr_19010[(6)] = c__18249__auto__);

return statearr_19010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));

return c__18249__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19012 = arguments.length;
switch (G__19012) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20902 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20902(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20903 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20903(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20904 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20904(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20905 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20905(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19017 = (function (ch,cs,meta19018){
this.ch = ch;
this.cs = cs;
this.meta19018 = meta19018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19019,meta19018__$1){
var self__ = this;
var _19019__$1 = this;
return (new cljs.core.async.t_cljs$core$async19017(self__.ch,self__.cs,meta19018__$1));
}));

(cljs.core.async.t_cljs$core$async19017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19019){
var self__ = this;
var _19019__$1 = this;
return self__.meta19018;
}));

(cljs.core.async.t_cljs$core$async19017.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19017.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19017.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19017.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19017.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19017.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19018","meta19018",-1236531997,null)], null);
}));

(cljs.core.async.t_cljs$core$async19017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19017");

(cljs.core.async.t_cljs$core$async19017.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19017.
 */
cljs.core.async.__GT_t_cljs$core$async19017 = (function cljs$core$async$__GT_t_cljs$core$async19017(ch,cs,meta19018){
return (new cljs.core.async.t_cljs$core$async19017(ch,cs,meta19018));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async19017(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18249__auto___20908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_19177){
var state_val_19178 = (state_19177[(1)]);
if((state_val_19178 === (7))){
var inst_19170 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19184_20909 = state_19177__$1;
(statearr_19184_20909[(2)] = inst_19170);

(statearr_19184_20909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (20))){
var inst_19062 = (state_19177[(7)]);
var inst_19075 = cljs.core.first(inst_19062);
var inst_19076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19075,(0),null);
var inst_19077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19075,(1),null);
var state_19177__$1 = (function (){var statearr_19188 = state_19177;
(statearr_19188[(8)] = inst_19076);

return statearr_19188;
})();
if(cljs.core.truth_(inst_19077)){
var statearr_19189_20910 = state_19177__$1;
(statearr_19189_20910[(1)] = (22));

} else {
var statearr_19191_20911 = state_19177__$1;
(statearr_19191_20911[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (27))){
var inst_19109 = (state_19177[(9)]);
var inst_19116 = (state_19177[(10)]);
var inst_19031 = (state_19177[(11)]);
var inst_19111 = (state_19177[(12)]);
var inst_19116__$1 = cljs.core._nth(inst_19109,inst_19111);
var inst_19119 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19116__$1,inst_19031,done);
var state_19177__$1 = (function (){var statearr_19195 = state_19177;
(statearr_19195[(10)] = inst_19116__$1);

return statearr_19195;
})();
if(cljs.core.truth_(inst_19119)){
var statearr_19197_20912 = state_19177__$1;
(statearr_19197_20912[(1)] = (30));

} else {
var statearr_19198_20913 = state_19177__$1;
(statearr_19198_20913[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (1))){
var state_19177__$1 = state_19177;
var statearr_19201_20914 = state_19177__$1;
(statearr_19201_20914[(2)] = null);

(statearr_19201_20914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (24))){
var inst_19062 = (state_19177[(7)]);
var inst_19084 = (state_19177[(2)]);
var inst_19085 = cljs.core.next(inst_19062);
var inst_19040 = inst_19085;
var inst_19041 = null;
var inst_19042 = (0);
var inst_19043 = (0);
var state_19177__$1 = (function (){var statearr_19204 = state_19177;
(statearr_19204[(13)] = inst_19043);

(statearr_19204[(14)] = inst_19084);

(statearr_19204[(15)] = inst_19041);

(statearr_19204[(16)] = inst_19042);

(statearr_19204[(17)] = inst_19040);

return statearr_19204;
})();
var statearr_19207_20919 = state_19177__$1;
(statearr_19207_20919[(2)] = null);

(statearr_19207_20919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (39))){
var state_19177__$1 = state_19177;
var statearr_19213_20920 = state_19177__$1;
(statearr_19213_20920[(2)] = null);

(statearr_19213_20920[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (4))){
var inst_19031 = (state_19177[(11)]);
var inst_19031__$1 = (state_19177[(2)]);
var inst_19032 = (inst_19031__$1 == null);
var state_19177__$1 = (function (){var statearr_19217 = state_19177;
(statearr_19217[(11)] = inst_19031__$1);

return statearr_19217;
})();
if(cljs.core.truth_(inst_19032)){
var statearr_19219_20921 = state_19177__$1;
(statearr_19219_20921[(1)] = (5));

} else {
var statearr_19220_20923 = state_19177__$1;
(statearr_19220_20923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (15))){
var inst_19043 = (state_19177[(13)]);
var inst_19041 = (state_19177[(15)]);
var inst_19042 = (state_19177[(16)]);
var inst_19040 = (state_19177[(17)]);
var inst_19058 = (state_19177[(2)]);
var inst_19059 = (inst_19043 + (1));
var tmp19209 = inst_19041;
var tmp19210 = inst_19042;
var tmp19211 = inst_19040;
var inst_19040__$1 = tmp19211;
var inst_19041__$1 = tmp19209;
var inst_19042__$1 = tmp19210;
var inst_19043__$1 = inst_19059;
var state_19177__$1 = (function (){var statearr_19225 = state_19177;
(statearr_19225[(13)] = inst_19043__$1);

(statearr_19225[(15)] = inst_19041__$1);

(statearr_19225[(16)] = inst_19042__$1);

(statearr_19225[(18)] = inst_19058);

(statearr_19225[(17)] = inst_19040__$1);

return statearr_19225;
})();
var statearr_19227_20929 = state_19177__$1;
(statearr_19227_20929[(2)] = null);

(statearr_19227_20929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (21))){
var inst_19089 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19233_20930 = state_19177__$1;
(statearr_19233_20930[(2)] = inst_19089);

(statearr_19233_20930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (31))){
var inst_19116 = (state_19177[(10)]);
var inst_19123 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_19116);
var state_19177__$1 = state_19177;
var statearr_19237_20931 = state_19177__$1;
(statearr_19237_20931[(2)] = inst_19123);

(statearr_19237_20931[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (32))){
var inst_19109 = (state_19177[(9)]);
var inst_19110 = (state_19177[(19)]);
var inst_19108 = (state_19177[(20)]);
var inst_19111 = (state_19177[(12)]);
var inst_19125 = (state_19177[(2)]);
var inst_19126 = (inst_19111 + (1));
var tmp19230 = inst_19109;
var tmp19231 = inst_19110;
var tmp19232 = inst_19108;
var inst_19108__$1 = tmp19232;
var inst_19109__$1 = tmp19230;
var inst_19110__$1 = tmp19231;
var inst_19111__$1 = inst_19126;
var state_19177__$1 = (function (){var statearr_19240 = state_19177;
(statearr_19240[(9)] = inst_19109__$1);

(statearr_19240[(19)] = inst_19110__$1);

(statearr_19240[(20)] = inst_19108__$1);

(statearr_19240[(12)] = inst_19111__$1);

(statearr_19240[(21)] = inst_19125);

return statearr_19240;
})();
var statearr_19244_20932 = state_19177__$1;
(statearr_19244_20932[(2)] = null);

(statearr_19244_20932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (40))){
var inst_19140 = (state_19177[(22)]);
var inst_19146 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_19140);
var state_19177__$1 = state_19177;
var statearr_19249_20933 = state_19177__$1;
(statearr_19249_20933[(2)] = inst_19146);

(statearr_19249_20933[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (33))){
var inst_19129 = (state_19177[(23)]);
var inst_19132 = cljs.core.chunked_seq_QMARK_(inst_19129);
var state_19177__$1 = state_19177;
if(inst_19132){
var statearr_19250_20934 = state_19177__$1;
(statearr_19250_20934[(1)] = (36));

} else {
var statearr_19252_20935 = state_19177__$1;
(statearr_19252_20935[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (13))){
var inst_19052 = (state_19177[(24)]);
var inst_19055 = cljs.core.async.close_BANG_(inst_19052);
var state_19177__$1 = state_19177;
var statearr_19253_20937 = state_19177__$1;
(statearr_19253_20937[(2)] = inst_19055);

(statearr_19253_20937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (22))){
var inst_19076 = (state_19177[(8)]);
var inst_19081 = cljs.core.async.close_BANG_(inst_19076);
var state_19177__$1 = state_19177;
var statearr_19254_20938 = state_19177__$1;
(statearr_19254_20938[(2)] = inst_19081);

(statearr_19254_20938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (36))){
var inst_19129 = (state_19177[(23)]);
var inst_19134 = cljs.core.chunk_first(inst_19129);
var inst_19135 = cljs.core.chunk_rest(inst_19129);
var inst_19136 = cljs.core.count(inst_19134);
var inst_19108 = inst_19135;
var inst_19109 = inst_19134;
var inst_19110 = inst_19136;
var inst_19111 = (0);
var state_19177__$1 = (function (){var statearr_19258 = state_19177;
(statearr_19258[(9)] = inst_19109);

(statearr_19258[(19)] = inst_19110);

(statearr_19258[(20)] = inst_19108);

(statearr_19258[(12)] = inst_19111);

return statearr_19258;
})();
var statearr_19259_20939 = state_19177__$1;
(statearr_19259_20939[(2)] = null);

(statearr_19259_20939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (41))){
var inst_19129 = (state_19177[(23)]);
var inst_19148 = (state_19177[(2)]);
var inst_19149 = cljs.core.next(inst_19129);
var inst_19108 = inst_19149;
var inst_19109 = null;
var inst_19110 = (0);
var inst_19111 = (0);
var state_19177__$1 = (function (){var statearr_19261 = state_19177;
(statearr_19261[(9)] = inst_19109);

(statearr_19261[(19)] = inst_19110);

(statearr_19261[(25)] = inst_19148);

(statearr_19261[(20)] = inst_19108);

(statearr_19261[(12)] = inst_19111);

return statearr_19261;
})();
var statearr_19263_20944 = state_19177__$1;
(statearr_19263_20944[(2)] = null);

(statearr_19263_20944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (43))){
var state_19177__$1 = state_19177;
var statearr_19266_20945 = state_19177__$1;
(statearr_19266_20945[(2)] = null);

(statearr_19266_20945[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (29))){
var inst_19157 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19268_20949 = state_19177__$1;
(statearr_19268_20949[(2)] = inst_19157);

(statearr_19268_20949[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (44))){
var inst_19166 = (state_19177[(2)]);
var state_19177__$1 = (function (){var statearr_19272 = state_19177;
(statearr_19272[(26)] = inst_19166);

return statearr_19272;
})();
var statearr_19273_20950 = state_19177__$1;
(statearr_19273_20950[(2)] = null);

(statearr_19273_20950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (6))){
var inst_19099 = (state_19177[(27)]);
var inst_19098 = cljs.core.deref(cs);
var inst_19099__$1 = cljs.core.keys(inst_19098);
var inst_19100 = cljs.core.count(inst_19099__$1);
var inst_19101 = cljs.core.reset_BANG_(dctr,inst_19100);
var inst_19106 = cljs.core.seq(inst_19099__$1);
var inst_19108 = inst_19106;
var inst_19109 = null;
var inst_19110 = (0);
var inst_19111 = (0);
var state_19177__$1 = (function (){var statearr_19278 = state_19177;
(statearr_19278[(9)] = inst_19109);

(statearr_19278[(19)] = inst_19110);

(statearr_19278[(20)] = inst_19108);

(statearr_19278[(27)] = inst_19099__$1);

(statearr_19278[(12)] = inst_19111);

(statearr_19278[(28)] = inst_19101);

return statearr_19278;
})();
var statearr_19280_20951 = state_19177__$1;
(statearr_19280_20951[(2)] = null);

(statearr_19280_20951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (28))){
var inst_19129 = (state_19177[(23)]);
var inst_19108 = (state_19177[(20)]);
var inst_19129__$1 = cljs.core.seq(inst_19108);
var state_19177__$1 = (function (){var statearr_19284 = state_19177;
(statearr_19284[(23)] = inst_19129__$1);

return statearr_19284;
})();
if(inst_19129__$1){
var statearr_19285_20952 = state_19177__$1;
(statearr_19285_20952[(1)] = (33));

} else {
var statearr_19286_20953 = state_19177__$1;
(statearr_19286_20953[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (25))){
var inst_19110 = (state_19177[(19)]);
var inst_19111 = (state_19177[(12)]);
var inst_19113 = (inst_19111 < inst_19110);
var inst_19114 = inst_19113;
var state_19177__$1 = state_19177;
if(cljs.core.truth_(inst_19114)){
var statearr_19290_20955 = state_19177__$1;
(statearr_19290_20955[(1)] = (27));

} else {
var statearr_19292_20956 = state_19177__$1;
(statearr_19292_20956[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (34))){
var state_19177__$1 = state_19177;
var statearr_19294_20957 = state_19177__$1;
(statearr_19294_20957[(2)] = null);

(statearr_19294_20957[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (17))){
var state_19177__$1 = state_19177;
var statearr_19295_20958 = state_19177__$1;
(statearr_19295_20958[(2)] = null);

(statearr_19295_20958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (3))){
var inst_19172 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19177__$1,inst_19172);
} else {
if((state_val_19178 === (12))){
var inst_19094 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19300_20959 = state_19177__$1;
(statearr_19300_20959[(2)] = inst_19094);

(statearr_19300_20959[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (2))){
var state_19177__$1 = state_19177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19177__$1,(4),ch);
} else {
if((state_val_19178 === (23))){
var state_19177__$1 = state_19177;
var statearr_19304_20964 = state_19177__$1;
(statearr_19304_20964[(2)] = null);

(statearr_19304_20964[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (35))){
var inst_19155 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19306_20965 = state_19177__$1;
(statearr_19306_20965[(2)] = inst_19155);

(statearr_19306_20965[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (19))){
var inst_19062 = (state_19177[(7)]);
var inst_19066 = cljs.core.chunk_first(inst_19062);
var inst_19067 = cljs.core.chunk_rest(inst_19062);
var inst_19069 = cljs.core.count(inst_19066);
var inst_19040 = inst_19067;
var inst_19041 = inst_19066;
var inst_19042 = inst_19069;
var inst_19043 = (0);
var state_19177__$1 = (function (){var statearr_19310 = state_19177;
(statearr_19310[(13)] = inst_19043);

(statearr_19310[(15)] = inst_19041);

(statearr_19310[(16)] = inst_19042);

(statearr_19310[(17)] = inst_19040);

return statearr_19310;
})();
var statearr_19312_20966 = state_19177__$1;
(statearr_19312_20966[(2)] = null);

(statearr_19312_20966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (11))){
var inst_19062 = (state_19177[(7)]);
var inst_19040 = (state_19177[(17)]);
var inst_19062__$1 = cljs.core.seq(inst_19040);
var state_19177__$1 = (function (){var statearr_19316 = state_19177;
(statearr_19316[(7)] = inst_19062__$1);

return statearr_19316;
})();
if(inst_19062__$1){
var statearr_19318_20967 = state_19177__$1;
(statearr_19318_20967[(1)] = (16));

} else {
var statearr_19319_20968 = state_19177__$1;
(statearr_19319_20968[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (9))){
var inst_19096 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19322_20969 = state_19177__$1;
(statearr_19322_20969[(2)] = inst_19096);

(statearr_19322_20969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (5))){
var inst_19038 = cljs.core.deref(cs);
var inst_19039 = cljs.core.seq(inst_19038);
var inst_19040 = inst_19039;
var inst_19041 = null;
var inst_19042 = (0);
var inst_19043 = (0);
var state_19177__$1 = (function (){var statearr_19325 = state_19177;
(statearr_19325[(13)] = inst_19043);

(statearr_19325[(15)] = inst_19041);

(statearr_19325[(16)] = inst_19042);

(statearr_19325[(17)] = inst_19040);

return statearr_19325;
})();
var statearr_19329_20970 = state_19177__$1;
(statearr_19329_20970[(2)] = null);

(statearr_19329_20970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (14))){
var state_19177__$1 = state_19177;
var statearr_19331_20971 = state_19177__$1;
(statearr_19331_20971[(2)] = null);

(statearr_19331_20971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (45))){
var inst_19163 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19335_20972 = state_19177__$1;
(statearr_19335_20972[(2)] = inst_19163);

(statearr_19335_20972[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (26))){
var inst_19099 = (state_19177[(27)]);
var inst_19159 = (state_19177[(2)]);
var inst_19160 = cljs.core.seq(inst_19099);
var state_19177__$1 = (function (){var statearr_19337 = state_19177;
(statearr_19337[(29)] = inst_19159);

return statearr_19337;
})();
if(inst_19160){
var statearr_19341_20973 = state_19177__$1;
(statearr_19341_20973[(1)] = (42));

} else {
var statearr_19342_20974 = state_19177__$1;
(statearr_19342_20974[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (16))){
var inst_19062 = (state_19177[(7)]);
var inst_19064 = cljs.core.chunked_seq_QMARK_(inst_19062);
var state_19177__$1 = state_19177;
if(inst_19064){
var statearr_19347_20975 = state_19177__$1;
(statearr_19347_20975[(1)] = (19));

} else {
var statearr_19348_20976 = state_19177__$1;
(statearr_19348_20976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (38))){
var inst_19152 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19350_20977 = state_19177__$1;
(statearr_19350_20977[(2)] = inst_19152);

(statearr_19350_20977[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (30))){
var state_19177__$1 = state_19177;
var statearr_19354_20978 = state_19177__$1;
(statearr_19354_20978[(2)] = null);

(statearr_19354_20978[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (10))){
var inst_19043 = (state_19177[(13)]);
var inst_19041 = (state_19177[(15)]);
var inst_19051 = cljs.core._nth(inst_19041,inst_19043);
var inst_19052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19051,(0),null);
var inst_19053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19051,(1),null);
var state_19177__$1 = (function (){var statearr_19359 = state_19177;
(statearr_19359[(24)] = inst_19052);

return statearr_19359;
})();
if(cljs.core.truth_(inst_19053)){
var statearr_19361_20979 = state_19177__$1;
(statearr_19361_20979[(1)] = (13));

} else {
var statearr_19362_20980 = state_19177__$1;
(statearr_19362_20980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (18))){
var inst_19092 = (state_19177[(2)]);
var state_19177__$1 = state_19177;
var statearr_19366_20981 = state_19177__$1;
(statearr_19366_20981[(2)] = inst_19092);

(statearr_19366_20981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (42))){
var state_19177__$1 = state_19177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19177__$1,(45),dchan);
} else {
if((state_val_19178 === (37))){
var inst_19129 = (state_19177[(23)]);
var inst_19031 = (state_19177[(11)]);
var inst_19140 = (state_19177[(22)]);
var inst_19140__$1 = cljs.core.first(inst_19129);
var inst_19142 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19140__$1,inst_19031,done);
var state_19177__$1 = (function (){var statearr_19372 = state_19177;
(statearr_19372[(22)] = inst_19140__$1);

return statearr_19372;
})();
if(cljs.core.truth_(inst_19142)){
var statearr_19373_20986 = state_19177__$1;
(statearr_19373_20986[(1)] = (39));

} else {
var statearr_19376_20987 = state_19177__$1;
(statearr_19376_20987[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19178 === (8))){
var inst_19043 = (state_19177[(13)]);
var inst_19042 = (state_19177[(16)]);
var inst_19045 = (inst_19043 < inst_19042);
var inst_19046 = inst_19045;
var state_19177__$1 = state_19177;
if(cljs.core.truth_(inst_19046)){
var statearr_19379_20988 = state_19177__$1;
(statearr_19379_20988[(1)] = (10));

} else {
var statearr_19380_20989 = state_19177__$1;
(statearr_19380_20989[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__18091__auto__ = null;
var cljs$core$async$mult_$_state_machine__18091__auto____0 = (function (){
var statearr_19388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19388[(0)] = cljs$core$async$mult_$_state_machine__18091__auto__);

(statearr_19388[(1)] = (1));

return statearr_19388;
});
var cljs$core$async$mult_$_state_machine__18091__auto____1 = (function (state_19177){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_19177);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e19390){var ex__18094__auto__ = e19390;
var statearr_19393_20991 = state_19177;
(statearr_19393_20991[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_19177[(4)]))){
var statearr_19395_20992 = state_19177;
(statearr_19395_20992[(1)] = cljs.core.first((state_19177[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20993 = state_19177;
state_19177 = G__20993;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18091__auto__ = function(state_19177){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18091__auto____1.call(this,state_19177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18091__auto____0;
cljs$core$async$mult_$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18091__auto____1;
return cljs$core$async$mult_$_state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_19400 = f__18250__auto__();
(statearr_19400[(6)] = c__18249__auto___20908);

return statearr_19400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19408 = arguments.length;
switch (G__19408) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_21001 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_21001(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21002 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_21002(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21003 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21003(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21004 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_21004(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21006 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21006(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21007 = arguments.length;
var i__5727__auto___21008 = (0);
while(true){
if((i__5727__auto___21008 < len__5726__auto___21007)){
args__5732__auto__.push((arguments[i__5727__auto___21008]));

var G__21009 = (i__5727__auto___21008 + (1));
i__5727__auto___21008 = G__21009;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19429){
var map__19430 = p__19429;
var map__19430__$1 = cljs.core.__destructure_map(map__19430);
var opts = map__19430__$1;
var statearr_19431_21011 = state;
(statearr_19431_21011[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19432_21012 = state;
(statearr_19432_21012[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19433_21013 = state;
(statearr_19433_21013[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19423){
var G__19424 = cljs.core.first(seq19423);
var seq19423__$1 = cljs.core.next(seq19423);
var G__19425 = cljs.core.first(seq19423__$1);
var seq19423__$2 = cljs.core.next(seq19423__$1);
var G__19426 = cljs.core.first(seq19423__$2);
var seq19423__$3 = cljs.core.next(seq19423__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19424,G__19425,G__19426,seq19423__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19434 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19435){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19435 = meta19435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19436,meta19435__$1){
var self__ = this;
var _19436__$1 = this;
return (new cljs.core.async.t_cljs$core$async19434(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19435__$1));
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19436){
var self__ = this;
var _19436__$1 = this;
return self__.meta19435;
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19434.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19435","meta19435",158260694,null)], null);
}));

(cljs.core.async.t_cljs$core$async19434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19434");

(cljs.core.async.t_cljs$core$async19434.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19434.
 */
cljs.core.async.__GT_t_cljs$core$async19434 = (function cljs$core$async$__GT_t_cljs$core$async19434(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19435){
return (new cljs.core.async.t_cljs$core$async19434(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19435));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async19434(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__18249__auto___21018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_19514){
var state_val_19515 = (state_19514[(1)]);
if((state_val_19515 === (7))){
var inst_19466 = (state_19514[(2)]);
var state_19514__$1 = state_19514;
if(cljs.core.truth_(inst_19466)){
var statearr_19517_21019 = state_19514__$1;
(statearr_19517_21019[(1)] = (8));

} else {
var statearr_19518_21020 = state_19514__$1;
(statearr_19518_21020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (20))){
var inst_19459 = (state_19514[(7)]);
var state_19514__$1 = state_19514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19514__$1,(23),out,inst_19459);
} else {
if((state_val_19515 === (1))){
var inst_19440 = calc_state();
var inst_19441 = cljs.core.__destructure_map(inst_19440);
var inst_19442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19441,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19441,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19441,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19445 = inst_19440;
var state_19514__$1 = (function (){var statearr_19527 = state_19514;
(statearr_19527[(8)] = inst_19442);

(statearr_19527[(9)] = inst_19444);

(statearr_19527[(10)] = inst_19445);

(statearr_19527[(11)] = inst_19443);

return statearr_19527;
})();
var statearr_19528_21021 = state_19514__$1;
(statearr_19528_21021[(2)] = null);

(statearr_19528_21021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (24))){
var inst_19448 = (state_19514[(12)]);
var inst_19445 = inst_19448;
var state_19514__$1 = (function (){var statearr_19529 = state_19514;
(statearr_19529[(10)] = inst_19445);

return statearr_19529;
})();
var statearr_19533_21022 = state_19514__$1;
(statearr_19533_21022[(2)] = null);

(statearr_19533_21022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (4))){
var inst_19459 = (state_19514[(7)]);
var inst_19461 = (state_19514[(13)]);
var inst_19458 = (state_19514[(2)]);
var inst_19459__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19458,(0),null);
var inst_19460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19458,(1),null);
var inst_19461__$1 = (inst_19459__$1 == null);
var state_19514__$1 = (function (){var statearr_19535 = state_19514;
(statearr_19535[(7)] = inst_19459__$1);

(statearr_19535[(13)] = inst_19461__$1);

(statearr_19535[(14)] = inst_19460);

return statearr_19535;
})();
if(cljs.core.truth_(inst_19461__$1)){
var statearr_19539_21023 = state_19514__$1;
(statearr_19539_21023[(1)] = (5));

} else {
var statearr_19540_21024 = state_19514__$1;
(statearr_19540_21024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (15))){
var inst_19449 = (state_19514[(15)]);
var inst_19480 = (state_19514[(16)]);
var inst_19480__$1 = cljs.core.empty_QMARK_(inst_19449);
var state_19514__$1 = (function (){var statearr_19542 = state_19514;
(statearr_19542[(16)] = inst_19480__$1);

return statearr_19542;
})();
if(inst_19480__$1){
var statearr_19543_21025 = state_19514__$1;
(statearr_19543_21025[(1)] = (17));

} else {
var statearr_19544_21026 = state_19514__$1;
(statearr_19544_21026[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (21))){
var inst_19448 = (state_19514[(12)]);
var inst_19445 = inst_19448;
var state_19514__$1 = (function (){var statearr_19548 = state_19514;
(statearr_19548[(10)] = inst_19445);

return statearr_19548;
})();
var statearr_19549_21027 = state_19514__$1;
(statearr_19549_21027[(2)] = null);

(statearr_19549_21027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (13))){
var inst_19473 = (state_19514[(2)]);
var inst_19474 = calc_state();
var inst_19445 = inst_19474;
var state_19514__$1 = (function (){var statearr_19551 = state_19514;
(statearr_19551[(17)] = inst_19473);

(statearr_19551[(10)] = inst_19445);

return statearr_19551;
})();
var statearr_19552_21028 = state_19514__$1;
(statearr_19552_21028[(2)] = null);

(statearr_19552_21028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (22))){
var inst_19504 = (state_19514[(2)]);
var state_19514__$1 = state_19514;
var statearr_19554_21029 = state_19514__$1;
(statearr_19554_21029[(2)] = inst_19504);

(statearr_19554_21029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (6))){
var inst_19460 = (state_19514[(14)]);
var inst_19464 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19460,change);
var state_19514__$1 = state_19514;
var statearr_19555_21030 = state_19514__$1;
(statearr_19555_21030[(2)] = inst_19464);

(statearr_19555_21030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (25))){
var state_19514__$1 = state_19514;
var statearr_19556_21031 = state_19514__$1;
(statearr_19556_21031[(2)] = null);

(statearr_19556_21031[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (17))){
var inst_19450 = (state_19514[(18)]);
var inst_19460 = (state_19514[(14)]);
var inst_19482 = (inst_19450.cljs$core$IFn$_invoke$arity$1 ? inst_19450.cljs$core$IFn$_invoke$arity$1(inst_19460) : inst_19450.call(null, inst_19460));
var inst_19483 = cljs.core.not(inst_19482);
var state_19514__$1 = state_19514;
var statearr_19557_21036 = state_19514__$1;
(statearr_19557_21036[(2)] = inst_19483);

(statearr_19557_21036[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (3))){
var inst_19508 = (state_19514[(2)]);
var state_19514__$1 = state_19514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19514__$1,inst_19508);
} else {
if((state_val_19515 === (12))){
var state_19514__$1 = state_19514;
var statearr_19565_21038 = state_19514__$1;
(statearr_19565_21038[(2)] = null);

(statearr_19565_21038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (2))){
var inst_19445 = (state_19514[(10)]);
var inst_19448 = (state_19514[(12)]);
var inst_19448__$1 = cljs.core.__destructure_map(inst_19445);
var inst_19449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19448__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19448__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19448__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19514__$1 = (function (){var statearr_19567 = state_19514;
(statearr_19567[(15)] = inst_19449);

(statearr_19567[(18)] = inst_19450);

(statearr_19567[(12)] = inst_19448__$1);

return statearr_19567;
})();
return cljs.core.async.ioc_alts_BANG_(state_19514__$1,(4),inst_19451);
} else {
if((state_val_19515 === (23))){
var inst_19491 = (state_19514[(2)]);
var state_19514__$1 = state_19514;
if(cljs.core.truth_(inst_19491)){
var statearr_19568_21039 = state_19514__$1;
(statearr_19568_21039[(1)] = (24));

} else {
var statearr_19572_21040 = state_19514__$1;
(statearr_19572_21040[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (19))){
var inst_19486 = (state_19514[(2)]);
var state_19514__$1 = state_19514;
var statearr_19574_21042 = state_19514__$1;
(statearr_19574_21042[(2)] = inst_19486);

(statearr_19574_21042[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (11))){
var inst_19460 = (state_19514[(14)]);
var inst_19470 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19460);
var state_19514__$1 = state_19514;
var statearr_19575_21043 = state_19514__$1;
(statearr_19575_21043[(2)] = inst_19470);

(statearr_19575_21043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (9))){
var inst_19449 = (state_19514[(15)]);
var inst_19477 = (state_19514[(19)]);
var inst_19460 = (state_19514[(14)]);
var inst_19477__$1 = (inst_19449.cljs$core$IFn$_invoke$arity$1 ? inst_19449.cljs$core$IFn$_invoke$arity$1(inst_19460) : inst_19449.call(null, inst_19460));
var state_19514__$1 = (function (){var statearr_19580 = state_19514;
(statearr_19580[(19)] = inst_19477__$1);

return statearr_19580;
})();
if(cljs.core.truth_(inst_19477__$1)){
var statearr_19581_21046 = state_19514__$1;
(statearr_19581_21046[(1)] = (14));

} else {
var statearr_19582_21048 = state_19514__$1;
(statearr_19582_21048[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (5))){
var inst_19461 = (state_19514[(13)]);
var state_19514__$1 = state_19514;
var statearr_19583_21050 = state_19514__$1;
(statearr_19583_21050[(2)] = inst_19461);

(statearr_19583_21050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (14))){
var inst_19477 = (state_19514[(19)]);
var state_19514__$1 = state_19514;
var statearr_19587_21051 = state_19514__$1;
(statearr_19587_21051[(2)] = inst_19477);

(statearr_19587_21051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (26))){
var inst_19500 = (state_19514[(2)]);
var state_19514__$1 = state_19514;
var statearr_19589_21052 = state_19514__$1;
(statearr_19589_21052[(2)] = inst_19500);

(statearr_19589_21052[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (16))){
var inst_19488 = (state_19514[(2)]);
var state_19514__$1 = state_19514;
if(cljs.core.truth_(inst_19488)){
var statearr_19590_21054 = state_19514__$1;
(statearr_19590_21054[(1)] = (20));

} else {
var statearr_19591_21055 = state_19514__$1;
(statearr_19591_21055[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (10))){
var inst_19506 = (state_19514[(2)]);
var state_19514__$1 = state_19514;
var statearr_19593_21056 = state_19514__$1;
(statearr_19593_21056[(2)] = inst_19506);

(statearr_19593_21056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (18))){
var inst_19480 = (state_19514[(16)]);
var state_19514__$1 = state_19514;
var statearr_19594_21057 = state_19514__$1;
(statearr_19594_21057[(2)] = inst_19480);

(statearr_19594_21057[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19515 === (8))){
var inst_19459 = (state_19514[(7)]);
var inst_19468 = (inst_19459 == null);
var state_19514__$1 = state_19514;
if(cljs.core.truth_(inst_19468)){
var statearr_19595_21062 = state_19514__$1;
(statearr_19595_21062[(1)] = (11));

} else {
var statearr_19596_21063 = state_19514__$1;
(statearr_19596_21063[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__18091__auto__ = null;
var cljs$core$async$mix_$_state_machine__18091__auto____0 = (function (){
var statearr_19604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19604[(0)] = cljs$core$async$mix_$_state_machine__18091__auto__);

(statearr_19604[(1)] = (1));

return statearr_19604;
});
var cljs$core$async$mix_$_state_machine__18091__auto____1 = (function (state_19514){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_19514);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e19606){var ex__18094__auto__ = e19606;
var statearr_19607_21064 = state_19514;
(statearr_19607_21064[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_19514[(4)]))){
var statearr_19608_21065 = state_19514;
(statearr_19608_21065[(1)] = cljs.core.first((state_19514[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21066 = state_19514;
state_19514 = G__21066;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18091__auto__ = function(state_19514){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18091__auto____1.call(this,state_19514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18091__auto____0;
cljs$core$async$mix_$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18091__auto____1;
return cljs$core$async$mix_$_state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_19613 = f__18250__auto__();
(statearr_19613[(6)] = c__18249__auto___21018);

return statearr_19613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_21067 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_21067(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21068 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_21068(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21069 = (function() {
var G__21070 = null;
var G__21070__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__21070__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__21070 = function(p,v){
switch(arguments.length){
case 1:
return G__21070__1.call(this,p);
case 2:
return G__21070__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21070.cljs$core$IFn$_invoke$arity$1 = G__21070__1;
G__21070.cljs$core$IFn$_invoke$arity$2 = G__21070__2;
return G__21070;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19644 = arguments.length;
switch (G__19644) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21069(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21069(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19655 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19656){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19656 = meta19656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19657,meta19656__$1){
var self__ = this;
var _19657__$1 = this;
return (new cljs.core.async.t_cljs$core$async19655(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19656__$1));
}));

(cljs.core.async.t_cljs$core$async19655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19657){
var self__ = this;
var _19657__$1 = this;
return self__.meta19656;
}));

(cljs.core.async.t_cljs$core$async19655.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19655.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19655.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19655.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19655.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19655.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19656","meta19656",171864973,null)], null);
}));

(cljs.core.async.t_cljs$core$async19655.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19655");

(cljs.core.async.t_cljs$core$async19655.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19655");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19655.
 */
cljs.core.async.__GT_t_cljs$core$async19655 = (function cljs$core$async$__GT_t_cljs$core$async19655(ch,topic_fn,buf_fn,mults,ensure_mult,meta19656){
return (new cljs.core.async.t_cljs$core$async19655(ch,topic_fn,buf_fn,mults,ensure_mult,meta19656));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19652 = arguments.length;
switch (G__19652) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19649_SHARP_){
if(cljs.core.truth_((p1__19649_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19649_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19649_SHARP_.call(null, topic)))){
return p1__19649_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19649_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19655(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__18249__auto___21085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_19729){
var state_val_19730 = (state_19729[(1)]);
if((state_val_19730 === (7))){
var inst_19725 = (state_19729[(2)]);
var state_19729__$1 = state_19729;
var statearr_19731_21087 = state_19729__$1;
(statearr_19731_21087[(2)] = inst_19725);

(statearr_19731_21087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (20))){
var state_19729__$1 = state_19729;
var statearr_19732_21088 = state_19729__$1;
(statearr_19732_21088[(2)] = null);

(statearr_19732_21088[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (1))){
var state_19729__$1 = state_19729;
var statearr_19733_21089 = state_19729__$1;
(statearr_19733_21089[(2)] = null);

(statearr_19733_21089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (24))){
var inst_19708 = (state_19729[(7)]);
var inst_19717 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19708);
var state_19729__$1 = state_19729;
var statearr_19734_21090 = state_19729__$1;
(statearr_19734_21090[(2)] = inst_19717);

(statearr_19734_21090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (4))){
var inst_19660 = (state_19729[(8)]);
var inst_19660__$1 = (state_19729[(2)]);
var inst_19661 = (inst_19660__$1 == null);
var state_19729__$1 = (function (){var statearr_19737 = state_19729;
(statearr_19737[(8)] = inst_19660__$1);

return statearr_19737;
})();
if(cljs.core.truth_(inst_19661)){
var statearr_19738_21091 = state_19729__$1;
(statearr_19738_21091[(1)] = (5));

} else {
var statearr_19739_21092 = state_19729__$1;
(statearr_19739_21092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (15))){
var inst_19702 = (state_19729[(2)]);
var state_19729__$1 = state_19729;
var statearr_19740_21093 = state_19729__$1;
(statearr_19740_21093[(2)] = inst_19702);

(statearr_19740_21093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (21))){
var inst_19722 = (state_19729[(2)]);
var state_19729__$1 = (function (){var statearr_19741 = state_19729;
(statearr_19741[(9)] = inst_19722);

return statearr_19741;
})();
var statearr_19742_21094 = state_19729__$1;
(statearr_19742_21094[(2)] = null);

(statearr_19742_21094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (13))){
var inst_19684 = (state_19729[(10)]);
var inst_19686 = cljs.core.chunked_seq_QMARK_(inst_19684);
var state_19729__$1 = state_19729;
if(inst_19686){
var statearr_19743_21095 = state_19729__$1;
(statearr_19743_21095[(1)] = (16));

} else {
var statearr_19744_21096 = state_19729__$1;
(statearr_19744_21096[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (22))){
var inst_19714 = (state_19729[(2)]);
var state_19729__$1 = state_19729;
if(cljs.core.truth_(inst_19714)){
var statearr_19745_21097 = state_19729__$1;
(statearr_19745_21097[(1)] = (23));

} else {
var statearr_19746_21098 = state_19729__$1;
(statearr_19746_21098[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (6))){
var inst_19660 = (state_19729[(8)]);
var inst_19710 = (state_19729[(11)]);
var inst_19708 = (state_19729[(7)]);
var inst_19708__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19660) : topic_fn.call(null, inst_19660));
var inst_19709 = cljs.core.deref(mults);
var inst_19710__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19709,inst_19708__$1);
var state_19729__$1 = (function (){var statearr_19748 = state_19729;
(statearr_19748[(11)] = inst_19710__$1);

(statearr_19748[(7)] = inst_19708__$1);

return statearr_19748;
})();
if(cljs.core.truth_(inst_19710__$1)){
var statearr_19750_21099 = state_19729__$1;
(statearr_19750_21099[(1)] = (19));

} else {
var statearr_19751_21100 = state_19729__$1;
(statearr_19751_21100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (25))){
var inst_19719 = (state_19729[(2)]);
var state_19729__$1 = state_19729;
var statearr_19752_21101 = state_19729__$1;
(statearr_19752_21101[(2)] = inst_19719);

(statearr_19752_21101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (17))){
var inst_19684 = (state_19729[(10)]);
var inst_19693 = cljs.core.first(inst_19684);
var inst_19694 = cljs.core.async.muxch_STAR_(inst_19693);
var inst_19695 = cljs.core.async.close_BANG_(inst_19694);
var inst_19696 = cljs.core.next(inst_19684);
var inst_19670 = inst_19696;
var inst_19671 = null;
var inst_19672 = (0);
var inst_19673 = (0);
var state_19729__$1 = (function (){var statearr_19753 = state_19729;
(statearr_19753[(12)] = inst_19671);

(statearr_19753[(13)] = inst_19695);

(statearr_19753[(14)] = inst_19670);

(statearr_19753[(15)] = inst_19673);

(statearr_19753[(16)] = inst_19672);

return statearr_19753;
})();
var statearr_19754_21105 = state_19729__$1;
(statearr_19754_21105[(2)] = null);

(statearr_19754_21105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (3))){
var inst_19727 = (state_19729[(2)]);
var state_19729__$1 = state_19729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19729__$1,inst_19727);
} else {
if((state_val_19730 === (12))){
var inst_19704 = (state_19729[(2)]);
var state_19729__$1 = state_19729;
var statearr_19755_21106 = state_19729__$1;
(statearr_19755_21106[(2)] = inst_19704);

(statearr_19755_21106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (2))){
var state_19729__$1 = state_19729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19729__$1,(4),ch);
} else {
if((state_val_19730 === (23))){
var state_19729__$1 = state_19729;
var statearr_19758_21107 = state_19729__$1;
(statearr_19758_21107[(2)] = null);

(statearr_19758_21107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (19))){
var inst_19660 = (state_19729[(8)]);
var inst_19710 = (state_19729[(11)]);
var inst_19712 = cljs.core.async.muxch_STAR_(inst_19710);
var state_19729__$1 = state_19729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19729__$1,(22),inst_19712,inst_19660);
} else {
if((state_val_19730 === (11))){
var inst_19684 = (state_19729[(10)]);
var inst_19670 = (state_19729[(14)]);
var inst_19684__$1 = cljs.core.seq(inst_19670);
var state_19729__$1 = (function (){var statearr_19759 = state_19729;
(statearr_19759[(10)] = inst_19684__$1);

return statearr_19759;
})();
if(inst_19684__$1){
var statearr_19760_21108 = state_19729__$1;
(statearr_19760_21108[(1)] = (13));

} else {
var statearr_19761_21109 = state_19729__$1;
(statearr_19761_21109[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (9))){
var inst_19706 = (state_19729[(2)]);
var state_19729__$1 = state_19729;
var statearr_19762_21110 = state_19729__$1;
(statearr_19762_21110[(2)] = inst_19706);

(statearr_19762_21110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (5))){
var inst_19667 = cljs.core.deref(mults);
var inst_19668 = cljs.core.vals(inst_19667);
var inst_19669 = cljs.core.seq(inst_19668);
var inst_19670 = inst_19669;
var inst_19671 = null;
var inst_19672 = (0);
var inst_19673 = (0);
var state_19729__$1 = (function (){var statearr_19764 = state_19729;
(statearr_19764[(12)] = inst_19671);

(statearr_19764[(14)] = inst_19670);

(statearr_19764[(15)] = inst_19673);

(statearr_19764[(16)] = inst_19672);

return statearr_19764;
})();
var statearr_19766_21111 = state_19729__$1;
(statearr_19766_21111[(2)] = null);

(statearr_19766_21111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (14))){
var state_19729__$1 = state_19729;
var statearr_19770_21112 = state_19729__$1;
(statearr_19770_21112[(2)] = null);

(statearr_19770_21112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (16))){
var inst_19684 = (state_19729[(10)]);
var inst_19688 = cljs.core.chunk_first(inst_19684);
var inst_19689 = cljs.core.chunk_rest(inst_19684);
var inst_19690 = cljs.core.count(inst_19688);
var inst_19670 = inst_19689;
var inst_19671 = inst_19688;
var inst_19672 = inst_19690;
var inst_19673 = (0);
var state_19729__$1 = (function (){var statearr_19771 = state_19729;
(statearr_19771[(12)] = inst_19671);

(statearr_19771[(14)] = inst_19670);

(statearr_19771[(15)] = inst_19673);

(statearr_19771[(16)] = inst_19672);

return statearr_19771;
})();
var statearr_19773_21113 = state_19729__$1;
(statearr_19773_21113[(2)] = null);

(statearr_19773_21113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (10))){
var inst_19671 = (state_19729[(12)]);
var inst_19670 = (state_19729[(14)]);
var inst_19673 = (state_19729[(15)]);
var inst_19672 = (state_19729[(16)]);
var inst_19678 = cljs.core._nth(inst_19671,inst_19673);
var inst_19679 = cljs.core.async.muxch_STAR_(inst_19678);
var inst_19680 = cljs.core.async.close_BANG_(inst_19679);
var inst_19681 = (inst_19673 + (1));
var tmp19767 = inst_19671;
var tmp19768 = inst_19670;
var tmp19769 = inst_19672;
var inst_19670__$1 = tmp19768;
var inst_19671__$1 = tmp19767;
var inst_19672__$1 = tmp19769;
var inst_19673__$1 = inst_19681;
var state_19729__$1 = (function (){var statearr_19777 = state_19729;
(statearr_19777[(17)] = inst_19680);

(statearr_19777[(12)] = inst_19671__$1);

(statearr_19777[(14)] = inst_19670__$1);

(statearr_19777[(15)] = inst_19673__$1);

(statearr_19777[(16)] = inst_19672__$1);

return statearr_19777;
})();
var statearr_19778_21119 = state_19729__$1;
(statearr_19778_21119[(2)] = null);

(statearr_19778_21119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (18))){
var inst_19699 = (state_19729[(2)]);
var state_19729__$1 = state_19729;
var statearr_19780_21120 = state_19729__$1;
(statearr_19780_21120[(2)] = inst_19699);

(statearr_19780_21120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19730 === (8))){
var inst_19673 = (state_19729[(15)]);
var inst_19672 = (state_19729[(16)]);
var inst_19675 = (inst_19673 < inst_19672);
var inst_19676 = inst_19675;
var state_19729__$1 = state_19729;
if(cljs.core.truth_(inst_19676)){
var statearr_19781_21124 = state_19729__$1;
(statearr_19781_21124[(1)] = (10));

} else {
var statearr_19782_21125 = state_19729__$1;
(statearr_19782_21125[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18091__auto__ = null;
var cljs$core$async$state_machine__18091__auto____0 = (function (){
var statearr_19784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19784[(0)] = cljs$core$async$state_machine__18091__auto__);

(statearr_19784[(1)] = (1));

return statearr_19784;
});
var cljs$core$async$state_machine__18091__auto____1 = (function (state_19729){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_19729);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e19786){var ex__18094__auto__ = e19786;
var statearr_19787_21126 = state_19729;
(statearr_19787_21126[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_19729[(4)]))){
var statearr_19788_21127 = state_19729;
(statearr_19788_21127[(1)] = cljs.core.first((state_19729[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21131 = state_19729;
state_19729 = G__21131;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$state_machine__18091__auto__ = function(state_19729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18091__auto____1.call(this,state_19729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18091__auto____0;
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18091__auto____1;
return cljs$core$async$state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_19791 = f__18250__auto__();
(statearr_19791[(6)] = c__18249__auto___21085);

return statearr_19791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19796 = arguments.length;
switch (G__19796) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19798 = arguments.length;
switch (G__19798) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19819 = arguments.length;
switch (G__19819) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__18249__auto___21145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_19879){
var state_val_19880 = (state_19879[(1)]);
if((state_val_19880 === (7))){
var state_19879__$1 = state_19879;
var statearr_19881_21146 = state_19879__$1;
(statearr_19881_21146[(2)] = null);

(statearr_19881_21146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (1))){
var state_19879__$1 = state_19879;
var statearr_19882_21147 = state_19879__$1;
(statearr_19882_21147[(2)] = null);

(statearr_19882_21147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (4))){
var inst_19835 = (state_19879[(7)]);
var inst_19836 = (state_19879[(8)]);
var inst_19838 = (inst_19836 < inst_19835);
var state_19879__$1 = state_19879;
if(cljs.core.truth_(inst_19838)){
var statearr_19883_21151 = state_19879__$1;
(statearr_19883_21151[(1)] = (6));

} else {
var statearr_19884_21152 = state_19879__$1;
(statearr_19884_21152[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (15))){
var inst_19865 = (state_19879[(9)]);
var inst_19870 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19865);
var state_19879__$1 = state_19879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19879__$1,(17),out,inst_19870);
} else {
if((state_val_19880 === (13))){
var inst_19865 = (state_19879[(9)]);
var inst_19865__$1 = (state_19879[(2)]);
var inst_19866 = cljs.core.some(cljs.core.nil_QMARK_,inst_19865__$1);
var state_19879__$1 = (function (){var statearr_19889 = state_19879;
(statearr_19889[(9)] = inst_19865__$1);

return statearr_19889;
})();
if(cljs.core.truth_(inst_19866)){
var statearr_19890_21156 = state_19879__$1;
(statearr_19890_21156[(1)] = (14));

} else {
var statearr_19891_21157 = state_19879__$1;
(statearr_19891_21157[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (6))){
var state_19879__$1 = state_19879;
var statearr_19892_21158 = state_19879__$1;
(statearr_19892_21158[(2)] = null);

(statearr_19892_21158[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (17))){
var inst_19872 = (state_19879[(2)]);
var state_19879__$1 = (function (){var statearr_19898 = state_19879;
(statearr_19898[(10)] = inst_19872);

return statearr_19898;
})();
var statearr_19899_21160 = state_19879__$1;
(statearr_19899_21160[(2)] = null);

(statearr_19899_21160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (3))){
var inst_19877 = (state_19879[(2)]);
var state_19879__$1 = state_19879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19879__$1,inst_19877);
} else {
if((state_val_19880 === (12))){
var _ = (function (){var statearr_19900 = state_19879;
(statearr_19900[(4)] = cljs.core.rest((state_19879[(4)])));

return statearr_19900;
})();
var state_19879__$1 = state_19879;
var ex19896 = (state_19879__$1[(2)]);
var statearr_19901_21162 = state_19879__$1;
(statearr_19901_21162[(5)] = ex19896);


if((ex19896 instanceof Object)){
var statearr_19902_21163 = state_19879__$1;
(statearr_19902_21163[(1)] = (11));

(statearr_19902_21163[(5)] = null);

} else {
throw ex19896;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (2))){
var inst_19834 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19835 = cnt;
var inst_19836 = (0);
var state_19879__$1 = (function (){var statearr_19903 = state_19879;
(statearr_19903[(11)] = inst_19834);

(statearr_19903[(7)] = inst_19835);

(statearr_19903[(8)] = inst_19836);

return statearr_19903;
})();
var statearr_19904_21169 = state_19879__$1;
(statearr_19904_21169[(2)] = null);

(statearr_19904_21169[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (11))){
var inst_19840 = (state_19879[(2)]);
var inst_19841 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19879__$1 = (function (){var statearr_19905 = state_19879;
(statearr_19905[(12)] = inst_19840);

return statearr_19905;
})();
var statearr_19906_21170 = state_19879__$1;
(statearr_19906_21170[(2)] = inst_19841);

(statearr_19906_21170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (9))){
var inst_19836 = (state_19879[(8)]);
var _ = (function (){var statearr_19907 = state_19879;
(statearr_19907[(4)] = cljs.core.cons((12),(state_19879[(4)])));

return statearr_19907;
})();
var inst_19851 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19836) : chs__$1.call(null, inst_19836));
var inst_19852 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19836) : done.call(null, inst_19836));
var inst_19853 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19851,inst_19852);
var ___$1 = (function (){var statearr_19909 = state_19879;
(statearr_19909[(4)] = cljs.core.rest((state_19879[(4)])));

return statearr_19909;
})();
var state_19879__$1 = state_19879;
var statearr_19911_21171 = state_19879__$1;
(statearr_19911_21171[(2)] = inst_19853);

(statearr_19911_21171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (5))){
var inst_19863 = (state_19879[(2)]);
var state_19879__$1 = (function (){var statearr_19912 = state_19879;
(statearr_19912[(13)] = inst_19863);

return statearr_19912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19879__$1,(13),dchan);
} else {
if((state_val_19880 === (14))){
var inst_19868 = cljs.core.async.close_BANG_(out);
var state_19879__$1 = state_19879;
var statearr_19913_21172 = state_19879__$1;
(statearr_19913_21172[(2)] = inst_19868);

(statearr_19913_21172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (16))){
var inst_19875 = (state_19879[(2)]);
var state_19879__$1 = state_19879;
var statearr_19914_21173 = state_19879__$1;
(statearr_19914_21173[(2)] = inst_19875);

(statearr_19914_21173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (10))){
var inst_19836 = (state_19879[(8)]);
var inst_19856 = (state_19879[(2)]);
var inst_19857 = (inst_19836 + (1));
var inst_19836__$1 = inst_19857;
var state_19879__$1 = (function (){var statearr_19916 = state_19879;
(statearr_19916[(8)] = inst_19836__$1);

(statearr_19916[(14)] = inst_19856);

return statearr_19916;
})();
var statearr_19918_21174 = state_19879__$1;
(statearr_19918_21174[(2)] = null);

(statearr_19918_21174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (8))){
var inst_19861 = (state_19879[(2)]);
var state_19879__$1 = state_19879;
var statearr_19922_21175 = state_19879__$1;
(statearr_19922_21175[(2)] = inst_19861);

(statearr_19922_21175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__18091__auto__ = null;
var cljs$core$async$state_machine__18091__auto____0 = (function (){
var statearr_19923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19923[(0)] = cljs$core$async$state_machine__18091__auto__);

(statearr_19923[(1)] = (1));

return statearr_19923;
});
var cljs$core$async$state_machine__18091__auto____1 = (function (state_19879){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_19879);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e19924){var ex__18094__auto__ = e19924;
var statearr_19925_21180 = state_19879;
(statearr_19925_21180[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_19879[(4)]))){
var statearr_19926_21181 = state_19879;
(statearr_19926_21181[(1)] = cljs.core.first((state_19879[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21188 = state_19879;
state_19879 = G__21188;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$state_machine__18091__auto__ = function(state_19879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18091__auto____1.call(this,state_19879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18091__auto____0;
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18091__auto____1;
return cljs$core$async$state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_19927 = f__18250__auto__();
(statearr_19927[(6)] = c__18249__auto___21145);

return statearr_19927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19930 = arguments.length;
switch (G__19930) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18249__auto___21194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_19962){
var state_val_19963 = (state_19962[(1)]);
if((state_val_19963 === (7))){
var inst_19941 = (state_19962[(7)]);
var inst_19942 = (state_19962[(8)]);
var inst_19941__$1 = (state_19962[(2)]);
var inst_19942__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19941__$1,(0),null);
var inst_19943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19941__$1,(1),null);
var inst_19944 = (inst_19942__$1 == null);
var state_19962__$1 = (function (){var statearr_19969 = state_19962;
(statearr_19969[(7)] = inst_19941__$1);

(statearr_19969[(8)] = inst_19942__$1);

(statearr_19969[(9)] = inst_19943);

return statearr_19969;
})();
if(cljs.core.truth_(inst_19944)){
var statearr_19970_21200 = state_19962__$1;
(statearr_19970_21200[(1)] = (8));

} else {
var statearr_19972_21201 = state_19962__$1;
(statearr_19972_21201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19963 === (1))){
var inst_19931 = cljs.core.vec(chs);
var inst_19932 = inst_19931;
var state_19962__$1 = (function (){var statearr_19974 = state_19962;
(statearr_19974[(10)] = inst_19932);

return statearr_19974;
})();
var statearr_19975_21202 = state_19962__$1;
(statearr_19975_21202[(2)] = null);

(statearr_19975_21202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19963 === (4))){
var inst_19932 = (state_19962[(10)]);
var state_19962__$1 = state_19962;
return cljs.core.async.ioc_alts_BANG_(state_19962__$1,(7),inst_19932);
} else {
if((state_val_19963 === (6))){
var inst_19958 = (state_19962[(2)]);
var state_19962__$1 = state_19962;
var statearr_19976_21203 = state_19962__$1;
(statearr_19976_21203[(2)] = inst_19958);

(statearr_19976_21203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19963 === (3))){
var inst_19960 = (state_19962[(2)]);
var state_19962__$1 = state_19962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19962__$1,inst_19960);
} else {
if((state_val_19963 === (2))){
var inst_19932 = (state_19962[(10)]);
var inst_19934 = cljs.core.count(inst_19932);
var inst_19935 = (inst_19934 > (0));
var state_19962__$1 = state_19962;
if(cljs.core.truth_(inst_19935)){
var statearr_19978_21209 = state_19962__$1;
(statearr_19978_21209[(1)] = (4));

} else {
var statearr_19980_21210 = state_19962__$1;
(statearr_19980_21210[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19963 === (11))){
var inst_19932 = (state_19962[(10)]);
var inst_19951 = (state_19962[(2)]);
var tmp19977 = inst_19932;
var inst_19932__$1 = tmp19977;
var state_19962__$1 = (function (){var statearr_19982 = state_19962;
(statearr_19982[(11)] = inst_19951);

(statearr_19982[(10)] = inst_19932__$1);

return statearr_19982;
})();
var statearr_19983_21212 = state_19962__$1;
(statearr_19983_21212[(2)] = null);

(statearr_19983_21212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19963 === (9))){
var inst_19942 = (state_19962[(8)]);
var state_19962__$1 = state_19962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19962__$1,(11),out,inst_19942);
} else {
if((state_val_19963 === (5))){
var inst_19956 = cljs.core.async.close_BANG_(out);
var state_19962__$1 = state_19962;
var statearr_19987_21217 = state_19962__$1;
(statearr_19987_21217[(2)] = inst_19956);

(statearr_19987_21217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19963 === (10))){
var inst_19954 = (state_19962[(2)]);
var state_19962__$1 = state_19962;
var statearr_19988_21220 = state_19962__$1;
(statearr_19988_21220[(2)] = inst_19954);

(statearr_19988_21220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19963 === (8))){
var inst_19941 = (state_19962[(7)]);
var inst_19942 = (state_19962[(8)]);
var inst_19943 = (state_19962[(9)]);
var inst_19932 = (state_19962[(10)]);
var inst_19946 = (function (){var cs = inst_19932;
var vec__19937 = inst_19941;
var v = inst_19942;
var c = inst_19943;
return (function (p1__19928_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19928_SHARP_);
});
})();
var inst_19947 = cljs.core.filterv(inst_19946,inst_19932);
var inst_19932__$1 = inst_19947;
var state_19962__$1 = (function (){var statearr_19989 = state_19962;
(statearr_19989[(10)] = inst_19932__$1);

return statearr_19989;
})();
var statearr_19990_21222 = state_19962__$1;
(statearr_19990_21222[(2)] = null);

(statearr_19990_21222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__18091__auto__ = null;
var cljs$core$async$state_machine__18091__auto____0 = (function (){
var statearr_19991 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19991[(0)] = cljs$core$async$state_machine__18091__auto__);

(statearr_19991[(1)] = (1));

return statearr_19991;
});
var cljs$core$async$state_machine__18091__auto____1 = (function (state_19962){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_19962);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e19992){var ex__18094__auto__ = e19992;
var statearr_19993_21227 = state_19962;
(statearr_19993_21227[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_19962[(4)]))){
var statearr_19994_21228 = state_19962;
(statearr_19994_21228[(1)] = cljs.core.first((state_19962[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21229 = state_19962;
state_19962 = G__21229;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$state_machine__18091__auto__ = function(state_19962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18091__auto____1.call(this,state_19962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18091__auto____0;
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18091__auto____1;
return cljs$core$async$state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_19995 = f__18250__auto__();
(statearr_19995[(6)] = c__18249__auto___21194);

return statearr_19995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20001 = arguments.length;
switch (G__20001) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18249__auto___21235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_20029){
var state_val_20030 = (state_20029[(1)]);
if((state_val_20030 === (7))){
var inst_20011 = (state_20029[(7)]);
var inst_20011__$1 = (state_20029[(2)]);
var inst_20012 = (inst_20011__$1 == null);
var inst_20013 = cljs.core.not(inst_20012);
var state_20029__$1 = (function (){var statearr_20031 = state_20029;
(statearr_20031[(7)] = inst_20011__$1);

return statearr_20031;
})();
if(inst_20013){
var statearr_20032_21236 = state_20029__$1;
(statearr_20032_21236[(1)] = (8));

} else {
var statearr_20033_21237 = state_20029__$1;
(statearr_20033_21237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20030 === (1))){
var inst_20006 = (0);
var state_20029__$1 = (function (){var statearr_20034 = state_20029;
(statearr_20034[(8)] = inst_20006);

return statearr_20034;
})();
var statearr_20035_21238 = state_20029__$1;
(statearr_20035_21238[(2)] = null);

(statearr_20035_21238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20030 === (4))){
var state_20029__$1 = state_20029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20029__$1,(7),ch);
} else {
if((state_val_20030 === (6))){
var inst_20024 = (state_20029[(2)]);
var state_20029__$1 = state_20029;
var statearr_20036_21244 = state_20029__$1;
(statearr_20036_21244[(2)] = inst_20024);

(statearr_20036_21244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20030 === (3))){
var inst_20026 = (state_20029[(2)]);
var inst_20027 = cljs.core.async.close_BANG_(out);
var state_20029__$1 = (function (){var statearr_20038 = state_20029;
(statearr_20038[(9)] = inst_20026);

return statearr_20038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20029__$1,inst_20027);
} else {
if((state_val_20030 === (2))){
var inst_20006 = (state_20029[(8)]);
var inst_20008 = (inst_20006 < n);
var state_20029__$1 = state_20029;
if(cljs.core.truth_(inst_20008)){
var statearr_20040_21253 = state_20029__$1;
(statearr_20040_21253[(1)] = (4));

} else {
var statearr_20041_21263 = state_20029__$1;
(statearr_20041_21263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20030 === (11))){
var inst_20006 = (state_20029[(8)]);
var inst_20016 = (state_20029[(2)]);
var inst_20017 = (inst_20006 + (1));
var inst_20006__$1 = inst_20017;
var state_20029__$1 = (function (){var statearr_20042 = state_20029;
(statearr_20042[(8)] = inst_20006__$1);

(statearr_20042[(10)] = inst_20016);

return statearr_20042;
})();
var statearr_20043_21264 = state_20029__$1;
(statearr_20043_21264[(2)] = null);

(statearr_20043_21264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20030 === (9))){
var state_20029__$1 = state_20029;
var statearr_20044_21265 = state_20029__$1;
(statearr_20044_21265[(2)] = null);

(statearr_20044_21265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20030 === (5))){
var state_20029__$1 = state_20029;
var statearr_20045_21266 = state_20029__$1;
(statearr_20045_21266[(2)] = null);

(statearr_20045_21266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20030 === (10))){
var inst_20021 = (state_20029[(2)]);
var state_20029__$1 = state_20029;
var statearr_20049_21268 = state_20029__$1;
(statearr_20049_21268[(2)] = inst_20021);

(statearr_20049_21268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20030 === (8))){
var inst_20011 = (state_20029[(7)]);
var state_20029__$1 = state_20029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20029__$1,(11),out,inst_20011);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__18091__auto__ = null;
var cljs$core$async$state_machine__18091__auto____0 = (function (){
var statearr_20050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20050[(0)] = cljs$core$async$state_machine__18091__auto__);

(statearr_20050[(1)] = (1));

return statearr_20050;
});
var cljs$core$async$state_machine__18091__auto____1 = (function (state_20029){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_20029);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e20051){var ex__18094__auto__ = e20051;
var statearr_20052_21278 = state_20029;
(statearr_20052_21278[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_20029[(4)]))){
var statearr_20053_21279 = state_20029;
(statearr_20053_21279[(1)] = cljs.core.first((state_20029[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21280 = state_20029;
state_20029 = G__21280;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$state_machine__18091__auto__ = function(state_20029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18091__auto____1.call(this,state_20029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18091__auto____0;
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18091__auto____1;
return cljs$core$async$state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_20054 = f__18250__auto__();
(statearr_20054[(6)] = c__18249__auto___21235);

return statearr_20054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20059 = (function (f,ch,meta20057,_,fn1,meta20060){
this.f = f;
this.ch = ch;
this.meta20057 = meta20057;
this._ = _;
this.fn1 = fn1;
this.meta20060 = meta20060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20061,meta20060__$1){
var self__ = this;
var _20061__$1 = this;
return (new cljs.core.async.t_cljs$core$async20059(self__.f,self__.ch,self__.meta20057,self__._,self__.fn1,meta20060__$1));
}));

(cljs.core.async.t_cljs$core$async20059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20061){
var self__ = this;
var _20061__$1 = this;
return self__.meta20060;
}));

(cljs.core.async.t_cljs$core$async20059.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20059.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20059.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20059.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20055_SHARP_){
var G__20062 = (((p1__20055_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20055_SHARP_) : self__.f.call(null, p1__20055_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20062) : f1.call(null, G__20062));
});
}));

(cljs.core.async.t_cljs$core$async20059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20057","meta20057",-26715911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20056","cljs.core.async/t_cljs$core$async20056",358583909,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20060","meta20060",778507876,null)], null);
}));

(cljs.core.async.t_cljs$core$async20059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20059");

(cljs.core.async.t_cljs$core$async20059.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20059.
 */
cljs.core.async.__GT_t_cljs$core$async20059 = (function cljs$core$async$__GT_t_cljs$core$async20059(f,ch,meta20057,_,fn1,meta20060){
return (new cljs.core.async.t_cljs$core$async20059(f,ch,meta20057,_,fn1,meta20060));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20056 = (function (f,ch,meta20057){
this.f = f;
this.ch = ch;
this.meta20057 = meta20057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20058,meta20057__$1){
var self__ = this;
var _20058__$1 = this;
return (new cljs.core.async.t_cljs$core$async20056(self__.f,self__.ch,meta20057__$1));
}));

(cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20058){
var self__ = this;
var _20058__$1 = this;
return self__.meta20057;
}));

(cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async20059(self__.f,self__.ch,self__.meta20057,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20063 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20063) : self__.f.call(null, G__20063));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20057","meta20057",-26715911,null)], null);
}));

(cljs.core.async.t_cljs$core$async20056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20056");

(cljs.core.async.t_cljs$core$async20056.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20056.
 */
cljs.core.async.__GT_t_cljs$core$async20056 = (function cljs$core$async$__GT_t_cljs$core$async20056(f,ch,meta20057){
return (new cljs.core.async.t_cljs$core$async20056(f,ch,meta20057));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20056(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20064 = (function (f,ch,meta20065){
this.f = f;
this.ch = ch;
this.meta20065 = meta20065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20066,meta20065__$1){
var self__ = this;
var _20066__$1 = this;
return (new cljs.core.async.t_cljs$core$async20064(self__.f,self__.ch,meta20065__$1));
}));

(cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20066){
var self__ = this;
var _20066__$1 = this;
return self__.meta20065;
}));

(cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20065","meta20065",-519357829,null)], null);
}));

(cljs.core.async.t_cljs$core$async20064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20064");

(cljs.core.async.t_cljs$core$async20064.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20064.
 */
cljs.core.async.__GT_t_cljs$core$async20064 = (function cljs$core$async$__GT_t_cljs$core$async20064(f,ch,meta20065){
return (new cljs.core.async.t_cljs$core$async20064(f,ch,meta20065));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20064(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20071 = (function (p,ch,meta20072){
this.p = p;
this.ch = ch;
this.meta20072 = meta20072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20073,meta20072__$1){
var self__ = this;
var _20073__$1 = this;
return (new cljs.core.async.t_cljs$core$async20071(self__.p,self__.ch,meta20072__$1));
}));

(cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20073){
var self__ = this;
var _20073__$1 = this;
return self__.meta20072;
}));

(cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20072","meta20072",509879841,null)], null);
}));

(cljs.core.async.t_cljs$core$async20071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20071");

(cljs.core.async.t_cljs$core$async20071.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async20071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20071.
 */
cljs.core.async.__GT_t_cljs$core$async20071 = (function cljs$core$async$__GT_t_cljs$core$async20071(p,ch,meta20072){
return (new cljs.core.async.t_cljs$core$async20071(p,ch,meta20072));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async20071(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20079 = arguments.length;
switch (G__20079) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18249__auto___21375 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_20120){
var state_val_20121 = (state_20120[(1)]);
if((state_val_20121 === (7))){
var inst_20110 = (state_20120[(2)]);
var state_20120__$1 = state_20120;
var statearr_20122_21376 = state_20120__$1;
(statearr_20122_21376[(2)] = inst_20110);

(statearr_20122_21376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20121 === (1))){
var state_20120__$1 = state_20120;
var statearr_20123_21377 = state_20120__$1;
(statearr_20123_21377[(2)] = null);

(statearr_20123_21377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20121 === (4))){
var inst_20096 = (state_20120[(7)]);
var inst_20096__$1 = (state_20120[(2)]);
var inst_20097 = (inst_20096__$1 == null);
var state_20120__$1 = (function (){var statearr_20132 = state_20120;
(statearr_20132[(7)] = inst_20096__$1);

return statearr_20132;
})();
if(cljs.core.truth_(inst_20097)){
var statearr_20139_21386 = state_20120__$1;
(statearr_20139_21386[(1)] = (5));

} else {
var statearr_20140_21387 = state_20120__$1;
(statearr_20140_21387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20121 === (6))){
var inst_20096 = (state_20120[(7)]);
var inst_20101 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20096) : p.call(null, inst_20096));
var state_20120__$1 = state_20120;
if(cljs.core.truth_(inst_20101)){
var statearr_20141_21388 = state_20120__$1;
(statearr_20141_21388[(1)] = (8));

} else {
var statearr_20145_21390 = state_20120__$1;
(statearr_20145_21390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20121 === (3))){
var inst_20112 = (state_20120[(2)]);
var state_20120__$1 = state_20120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20120__$1,inst_20112);
} else {
if((state_val_20121 === (2))){
var state_20120__$1 = state_20120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20120__$1,(4),ch);
} else {
if((state_val_20121 === (11))){
var inst_20104 = (state_20120[(2)]);
var state_20120__$1 = state_20120;
var statearr_20149_21396 = state_20120__$1;
(statearr_20149_21396[(2)] = inst_20104);

(statearr_20149_21396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20121 === (9))){
var state_20120__$1 = state_20120;
var statearr_20150_21397 = state_20120__$1;
(statearr_20150_21397[(2)] = null);

(statearr_20150_21397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20121 === (5))){
var inst_20099 = cljs.core.async.close_BANG_(out);
var state_20120__$1 = state_20120;
var statearr_20151_21403 = state_20120__$1;
(statearr_20151_21403[(2)] = inst_20099);

(statearr_20151_21403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20121 === (10))){
var inst_20107 = (state_20120[(2)]);
var state_20120__$1 = (function (){var statearr_20153 = state_20120;
(statearr_20153[(8)] = inst_20107);

return statearr_20153;
})();
var statearr_20155_21409 = state_20120__$1;
(statearr_20155_21409[(2)] = null);

(statearr_20155_21409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20121 === (8))){
var inst_20096 = (state_20120[(7)]);
var state_20120__$1 = state_20120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20120__$1,(11),out,inst_20096);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__18091__auto__ = null;
var cljs$core$async$state_machine__18091__auto____0 = (function (){
var statearr_20156 = [null,null,null,null,null,null,null,null,null];
(statearr_20156[(0)] = cljs$core$async$state_machine__18091__auto__);

(statearr_20156[(1)] = (1));

return statearr_20156;
});
var cljs$core$async$state_machine__18091__auto____1 = (function (state_20120){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_20120);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e20158){var ex__18094__auto__ = e20158;
var statearr_20159_21411 = state_20120;
(statearr_20159_21411[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_20120[(4)]))){
var statearr_20160_21415 = state_20120;
(statearr_20160_21415[(1)] = cljs.core.first((state_20120[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21420 = state_20120;
state_20120 = G__21420;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$state_machine__18091__auto__ = function(state_20120){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18091__auto____1.call(this,state_20120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18091__auto____0;
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18091__auto____1;
return cljs$core$async$state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_20161 = f__18250__auto__();
(statearr_20161[(6)] = c__18249__auto___21375);

return statearr_20161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20166 = arguments.length;
switch (G__20166) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18249__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_20228){
var state_val_20229 = (state_20228[(1)]);
if((state_val_20229 === (7))){
var inst_20224 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
var statearr_20230_21438 = state_20228__$1;
(statearr_20230_21438[(2)] = inst_20224);

(statearr_20230_21438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (20))){
var inst_20194 = (state_20228[(7)]);
var inst_20205 = (state_20228[(2)]);
var inst_20206 = cljs.core.next(inst_20194);
var inst_20180 = inst_20206;
var inst_20181 = null;
var inst_20182 = (0);
var inst_20183 = (0);
var state_20228__$1 = (function (){var statearr_20231 = state_20228;
(statearr_20231[(8)] = inst_20182);

(statearr_20231[(9)] = inst_20183);

(statearr_20231[(10)] = inst_20181);

(statearr_20231[(11)] = inst_20180);

(statearr_20231[(12)] = inst_20205);

return statearr_20231;
})();
var statearr_20232_21443 = state_20228__$1;
(statearr_20232_21443[(2)] = null);

(statearr_20232_21443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (1))){
var state_20228__$1 = state_20228;
var statearr_20233_21448 = state_20228__$1;
(statearr_20233_21448[(2)] = null);

(statearr_20233_21448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (4))){
var inst_20169 = (state_20228[(13)]);
var inst_20169__$1 = (state_20228[(2)]);
var inst_20170 = (inst_20169__$1 == null);
var state_20228__$1 = (function (){var statearr_20234 = state_20228;
(statearr_20234[(13)] = inst_20169__$1);

return statearr_20234;
})();
if(cljs.core.truth_(inst_20170)){
var statearr_20235_21454 = state_20228__$1;
(statearr_20235_21454[(1)] = (5));

} else {
var statearr_20236_21460 = state_20228__$1;
(statearr_20236_21460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (15))){
var state_20228__$1 = state_20228;
var statearr_20240_21467 = state_20228__$1;
(statearr_20240_21467[(2)] = null);

(statearr_20240_21467[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (21))){
var state_20228__$1 = state_20228;
var statearr_20241_21468 = state_20228__$1;
(statearr_20241_21468[(2)] = null);

(statearr_20241_21468[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (13))){
var inst_20182 = (state_20228[(8)]);
var inst_20183 = (state_20228[(9)]);
var inst_20181 = (state_20228[(10)]);
var inst_20180 = (state_20228[(11)]);
var inst_20190 = (state_20228[(2)]);
var inst_20191 = (inst_20183 + (1));
var tmp20237 = inst_20182;
var tmp20238 = inst_20181;
var tmp20239 = inst_20180;
var inst_20180__$1 = tmp20239;
var inst_20181__$1 = tmp20238;
var inst_20182__$1 = tmp20237;
var inst_20183__$1 = inst_20191;
var state_20228__$1 = (function (){var statearr_20242 = state_20228;
(statearr_20242[(8)] = inst_20182__$1);

(statearr_20242[(9)] = inst_20183__$1);

(statearr_20242[(10)] = inst_20181__$1);

(statearr_20242[(14)] = inst_20190);

(statearr_20242[(11)] = inst_20180__$1);

return statearr_20242;
})();
var statearr_20243_21478 = state_20228__$1;
(statearr_20243_21478[(2)] = null);

(statearr_20243_21478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (22))){
var state_20228__$1 = state_20228;
var statearr_20244_21479 = state_20228__$1;
(statearr_20244_21479[(2)] = null);

(statearr_20244_21479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (6))){
var inst_20169 = (state_20228[(13)]);
var inst_20178 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20169) : f.call(null, inst_20169));
var inst_20179 = cljs.core.seq(inst_20178);
var inst_20180 = inst_20179;
var inst_20181 = null;
var inst_20182 = (0);
var inst_20183 = (0);
var state_20228__$1 = (function (){var statearr_20245 = state_20228;
(statearr_20245[(8)] = inst_20182);

(statearr_20245[(9)] = inst_20183);

(statearr_20245[(10)] = inst_20181);

(statearr_20245[(11)] = inst_20180);

return statearr_20245;
})();
var statearr_20246_21485 = state_20228__$1;
(statearr_20246_21485[(2)] = null);

(statearr_20246_21485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (17))){
var inst_20194 = (state_20228[(7)]);
var inst_20198 = cljs.core.chunk_first(inst_20194);
var inst_20199 = cljs.core.chunk_rest(inst_20194);
var inst_20200 = cljs.core.count(inst_20198);
var inst_20180 = inst_20199;
var inst_20181 = inst_20198;
var inst_20182 = inst_20200;
var inst_20183 = (0);
var state_20228__$1 = (function (){var statearr_20247 = state_20228;
(statearr_20247[(8)] = inst_20182);

(statearr_20247[(9)] = inst_20183);

(statearr_20247[(10)] = inst_20181);

(statearr_20247[(11)] = inst_20180);

return statearr_20247;
})();
var statearr_20248_21486 = state_20228__$1;
(statearr_20248_21486[(2)] = null);

(statearr_20248_21486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (3))){
var inst_20226 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20228__$1,inst_20226);
} else {
if((state_val_20229 === (12))){
var inst_20214 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
var statearr_20249_21487 = state_20228__$1;
(statearr_20249_21487[(2)] = inst_20214);

(statearr_20249_21487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (2))){
var state_20228__$1 = state_20228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20228__$1,(4),in$);
} else {
if((state_val_20229 === (23))){
var inst_20222 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
var statearr_20255_21489 = state_20228__$1;
(statearr_20255_21489[(2)] = inst_20222);

(statearr_20255_21489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (19))){
var inst_20209 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
var statearr_20259_21490 = state_20228__$1;
(statearr_20259_21490[(2)] = inst_20209);

(statearr_20259_21490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (11))){
var inst_20194 = (state_20228[(7)]);
var inst_20180 = (state_20228[(11)]);
var inst_20194__$1 = cljs.core.seq(inst_20180);
var state_20228__$1 = (function (){var statearr_20263 = state_20228;
(statearr_20263[(7)] = inst_20194__$1);

return statearr_20263;
})();
if(inst_20194__$1){
var statearr_20264_21491 = state_20228__$1;
(statearr_20264_21491[(1)] = (14));

} else {
var statearr_20265_21492 = state_20228__$1;
(statearr_20265_21492[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (9))){
var inst_20216 = (state_20228[(2)]);
var inst_20217 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20228__$1 = (function (){var statearr_20266 = state_20228;
(statearr_20266[(15)] = inst_20216);

return statearr_20266;
})();
if(cljs.core.truth_(inst_20217)){
var statearr_20267_21493 = state_20228__$1;
(statearr_20267_21493[(1)] = (21));

} else {
var statearr_20268_21498 = state_20228__$1;
(statearr_20268_21498[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (5))){
var inst_20172 = cljs.core.async.close_BANG_(out);
var state_20228__$1 = state_20228;
var statearr_20269_21500 = state_20228__$1;
(statearr_20269_21500[(2)] = inst_20172);

(statearr_20269_21500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (14))){
var inst_20194 = (state_20228[(7)]);
var inst_20196 = cljs.core.chunked_seq_QMARK_(inst_20194);
var state_20228__$1 = state_20228;
if(inst_20196){
var statearr_20270_21508 = state_20228__$1;
(statearr_20270_21508[(1)] = (17));

} else {
var statearr_20271_21513 = state_20228__$1;
(statearr_20271_21513[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (16))){
var inst_20212 = (state_20228[(2)]);
var state_20228__$1 = state_20228;
var statearr_20272_21520 = state_20228__$1;
(statearr_20272_21520[(2)] = inst_20212);

(statearr_20272_21520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20229 === (10))){
var inst_20183 = (state_20228[(9)]);
var inst_20181 = (state_20228[(10)]);
var inst_20188 = cljs.core._nth(inst_20181,inst_20183);
var state_20228__$1 = state_20228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20228__$1,(13),out,inst_20188);
} else {
if((state_val_20229 === (18))){
var inst_20194 = (state_20228[(7)]);
var inst_20203 = cljs.core.first(inst_20194);
var state_20228__$1 = state_20228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20228__$1,(20),out,inst_20203);
} else {
if((state_val_20229 === (8))){
var inst_20182 = (state_20228[(8)]);
var inst_20183 = (state_20228[(9)]);
var inst_20185 = (inst_20183 < inst_20182);
var inst_20186 = inst_20185;
var state_20228__$1 = state_20228;
if(cljs.core.truth_(inst_20186)){
var statearr_20273_21523 = state_20228__$1;
(statearr_20273_21523[(1)] = (10));

} else {
var statearr_20274_21524 = state_20228__$1;
(statearr_20274_21524[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18091__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18091__auto____0 = (function (){
var statearr_20275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20275[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18091__auto__);

(statearr_20275[(1)] = (1));

return statearr_20275;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18091__auto____1 = (function (state_20228){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_20228);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e20276){var ex__18094__auto__ = e20276;
var statearr_20277_21537 = state_20228;
(statearr_20277_21537[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_20228[(4)]))){
var statearr_20278_21542 = state_20228;
(statearr_20278_21542[(1)] = cljs.core.first((state_20228[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21546 = state_20228;
state_20228 = G__21546;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18091__auto__ = function(state_20228){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18091__auto____1.call(this,state_20228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18091__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18091__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_20279 = f__18250__auto__();
(statearr_20279[(6)] = c__18249__auto__);

return statearr_20279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));

return c__18249__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20281 = arguments.length;
switch (G__20281) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20285 = arguments.length;
switch (G__20285) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20289 = arguments.length;
switch (G__20289) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18249__auto___21594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_20316){
var state_val_20317 = (state_20316[(1)]);
if((state_val_20317 === (7))){
var inst_20310 = (state_20316[(2)]);
var state_20316__$1 = state_20316;
var statearr_20319_21599 = state_20316__$1;
(statearr_20319_21599[(2)] = inst_20310);

(statearr_20319_21599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20317 === (1))){
var inst_20292 = null;
var state_20316__$1 = (function (){var statearr_20320 = state_20316;
(statearr_20320[(7)] = inst_20292);

return statearr_20320;
})();
var statearr_20321_21604 = state_20316__$1;
(statearr_20321_21604[(2)] = null);

(statearr_20321_21604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20317 === (4))){
var inst_20295 = (state_20316[(8)]);
var inst_20295__$1 = (state_20316[(2)]);
var inst_20296 = (inst_20295__$1 == null);
var inst_20297 = cljs.core.not(inst_20296);
var state_20316__$1 = (function (){var statearr_20322 = state_20316;
(statearr_20322[(8)] = inst_20295__$1);

return statearr_20322;
})();
if(inst_20297){
var statearr_20323_21605 = state_20316__$1;
(statearr_20323_21605[(1)] = (5));

} else {
var statearr_20324_21607 = state_20316__$1;
(statearr_20324_21607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20317 === (6))){
var state_20316__$1 = state_20316;
var statearr_20325_21608 = state_20316__$1;
(statearr_20325_21608[(2)] = null);

(statearr_20325_21608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20317 === (3))){
var inst_20312 = (state_20316[(2)]);
var inst_20313 = cljs.core.async.close_BANG_(out);
var state_20316__$1 = (function (){var statearr_20326 = state_20316;
(statearr_20326[(9)] = inst_20312);

return statearr_20326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20316__$1,inst_20313);
} else {
if((state_val_20317 === (2))){
var state_20316__$1 = state_20316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20316__$1,(4),ch);
} else {
if((state_val_20317 === (11))){
var inst_20295 = (state_20316[(8)]);
var inst_20304 = (state_20316[(2)]);
var inst_20292 = inst_20295;
var state_20316__$1 = (function (){var statearr_20327 = state_20316;
(statearr_20327[(7)] = inst_20292);

(statearr_20327[(10)] = inst_20304);

return statearr_20327;
})();
var statearr_20328_21612 = state_20316__$1;
(statearr_20328_21612[(2)] = null);

(statearr_20328_21612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20317 === (9))){
var inst_20295 = (state_20316[(8)]);
var state_20316__$1 = state_20316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20316__$1,(11),out,inst_20295);
} else {
if((state_val_20317 === (5))){
var inst_20295 = (state_20316[(8)]);
var inst_20292 = (state_20316[(7)]);
var inst_20299 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20295,inst_20292);
var state_20316__$1 = state_20316;
if(inst_20299){
var statearr_20330_21613 = state_20316__$1;
(statearr_20330_21613[(1)] = (8));

} else {
var statearr_20331_21614 = state_20316__$1;
(statearr_20331_21614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20317 === (10))){
var inst_20307 = (state_20316[(2)]);
var state_20316__$1 = state_20316;
var statearr_20332_21615 = state_20316__$1;
(statearr_20332_21615[(2)] = inst_20307);

(statearr_20332_21615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20317 === (8))){
var inst_20292 = (state_20316[(7)]);
var tmp20329 = inst_20292;
var inst_20292__$1 = tmp20329;
var state_20316__$1 = (function (){var statearr_20333 = state_20316;
(statearr_20333[(7)] = inst_20292__$1);

return statearr_20333;
})();
var statearr_20334_21619 = state_20316__$1;
(statearr_20334_21619[(2)] = null);

(statearr_20334_21619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__18091__auto__ = null;
var cljs$core$async$state_machine__18091__auto____0 = (function (){
var statearr_20335 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20335[(0)] = cljs$core$async$state_machine__18091__auto__);

(statearr_20335[(1)] = (1));

return statearr_20335;
});
var cljs$core$async$state_machine__18091__auto____1 = (function (state_20316){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_20316);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e20339){var ex__18094__auto__ = e20339;
var statearr_20340_21621 = state_20316;
(statearr_20340_21621[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_20316[(4)]))){
var statearr_20341_21622 = state_20316;
(statearr_20341_21622[(1)] = cljs.core.first((state_20316[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21623 = state_20316;
state_20316 = G__21623;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$state_machine__18091__auto__ = function(state_20316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18091__auto____1.call(this,state_20316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18091__auto____0;
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18091__auto____1;
return cljs$core$async$state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_20342 = f__18250__auto__();
(statearr_20342[(6)] = c__18249__auto___21594);

return statearr_20342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20344 = arguments.length;
switch (G__20344) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18249__auto___21629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_20402){
var state_val_20403 = (state_20402[(1)]);
if((state_val_20403 === (7))){
var inst_20395 = (state_20402[(2)]);
var state_20402__$1 = state_20402;
var statearr_20407_21630 = state_20402__$1;
(statearr_20407_21630[(2)] = inst_20395);

(statearr_20407_21630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20403 === (1))){
var inst_20358 = (new Array(n));
var inst_20359 = inst_20358;
var inst_20360 = (0);
var state_20402__$1 = (function (){var statearr_20408 = state_20402;
(statearr_20408[(7)] = inst_20359);

(statearr_20408[(8)] = inst_20360);

return statearr_20408;
})();
var statearr_20412_21631 = state_20402__$1;
(statearr_20412_21631[(2)] = null);

(statearr_20412_21631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20403 === (4))){
var inst_20363 = (state_20402[(9)]);
var inst_20363__$1 = (state_20402[(2)]);
var inst_20364 = (inst_20363__$1 == null);
var inst_20365 = cljs.core.not(inst_20364);
var state_20402__$1 = (function (){var statearr_20420 = state_20402;
(statearr_20420[(9)] = inst_20363__$1);

return statearr_20420;
})();
if(inst_20365){
var statearr_20421_21633 = state_20402__$1;
(statearr_20421_21633[(1)] = (5));

} else {
var statearr_20425_21634 = state_20402__$1;
(statearr_20425_21634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20403 === (15))){
var inst_20389 = (state_20402[(2)]);
var state_20402__$1 = state_20402;
var statearr_20430_21635 = state_20402__$1;
(statearr_20430_21635[(2)] = inst_20389);

(statearr_20430_21635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20403 === (13))){
var state_20402__$1 = state_20402;
var statearr_20431_21637 = state_20402__$1;
(statearr_20431_21637[(2)] = null);

(statearr_20431_21637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20403 === (6))){
var inst_20360 = (state_20402[(8)]);
var inst_20381 = (inst_20360 > (0));
var state_20402__$1 = state_20402;
if(cljs.core.truth_(inst_20381)){
var statearr_20432_21639 = state_20402__$1;
(statearr_20432_21639[(1)] = (12));

} else {
var statearr_20433_21640 = state_20402__$1;
(statearr_20433_21640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20403 === (3))){
var inst_20397 = (state_20402[(2)]);
var state_20402__$1 = state_20402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20402__$1,inst_20397);
} else {
if((state_val_20403 === (12))){
var inst_20359 = (state_20402[(7)]);
var inst_20387 = cljs.core.vec(inst_20359);
var state_20402__$1 = state_20402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20402__$1,(15),out,inst_20387);
} else {
if((state_val_20403 === (2))){
var state_20402__$1 = state_20402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20402__$1,(4),ch);
} else {
if((state_val_20403 === (11))){
var inst_20375 = (state_20402[(2)]);
var inst_20376 = (new Array(n));
var inst_20359 = inst_20376;
var inst_20360 = (0);
var state_20402__$1 = (function (){var statearr_20436 = state_20402;
(statearr_20436[(7)] = inst_20359);

(statearr_20436[(8)] = inst_20360);

(statearr_20436[(10)] = inst_20375);

return statearr_20436;
})();
var statearr_20437_21641 = state_20402__$1;
(statearr_20437_21641[(2)] = null);

(statearr_20437_21641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20403 === (9))){
var inst_20359 = (state_20402[(7)]);
var inst_20373 = cljs.core.vec(inst_20359);
var state_20402__$1 = state_20402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20402__$1,(11),out,inst_20373);
} else {
if((state_val_20403 === (5))){
var inst_20363 = (state_20402[(9)]);
var inst_20359 = (state_20402[(7)]);
var inst_20368 = (state_20402[(11)]);
var inst_20360 = (state_20402[(8)]);
var inst_20367 = (inst_20359[inst_20360] = inst_20363);
var inst_20368__$1 = (inst_20360 + (1));
var inst_20369 = (inst_20368__$1 < n);
var state_20402__$1 = (function (){var statearr_20438 = state_20402;
(statearr_20438[(12)] = inst_20367);

(statearr_20438[(11)] = inst_20368__$1);

return statearr_20438;
})();
if(cljs.core.truth_(inst_20369)){
var statearr_20439_21648 = state_20402__$1;
(statearr_20439_21648[(1)] = (8));

} else {
var statearr_20440_21649 = state_20402__$1;
(statearr_20440_21649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20403 === (14))){
var inst_20392 = (state_20402[(2)]);
var inst_20393 = cljs.core.async.close_BANG_(out);
var state_20402__$1 = (function (){var statearr_20442 = state_20402;
(statearr_20442[(13)] = inst_20392);

return statearr_20442;
})();
var statearr_20443_21650 = state_20402__$1;
(statearr_20443_21650[(2)] = inst_20393);

(statearr_20443_21650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20403 === (10))){
var inst_20379 = (state_20402[(2)]);
var state_20402__$1 = state_20402;
var statearr_20444_21653 = state_20402__$1;
(statearr_20444_21653[(2)] = inst_20379);

(statearr_20444_21653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20403 === (8))){
var inst_20359 = (state_20402[(7)]);
var inst_20368 = (state_20402[(11)]);
var tmp20441 = inst_20359;
var inst_20359__$1 = tmp20441;
var inst_20360 = inst_20368;
var state_20402__$1 = (function (){var statearr_20445 = state_20402;
(statearr_20445[(7)] = inst_20359__$1);

(statearr_20445[(8)] = inst_20360);

return statearr_20445;
})();
var statearr_20446_21656 = state_20402__$1;
(statearr_20446_21656[(2)] = null);

(statearr_20446_21656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__18091__auto__ = null;
var cljs$core$async$state_machine__18091__auto____0 = (function (){
var statearr_20447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20447[(0)] = cljs$core$async$state_machine__18091__auto__);

(statearr_20447[(1)] = (1));

return statearr_20447;
});
var cljs$core$async$state_machine__18091__auto____1 = (function (state_20402){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_20402);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e20448){var ex__18094__auto__ = e20448;
var statearr_20449_21661 = state_20402;
(statearr_20449_21661[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_20402[(4)]))){
var statearr_20450_21666 = state_20402;
(statearr_20450_21666[(1)] = cljs.core.first((state_20402[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21672 = state_20402;
state_20402 = G__21672;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$state_machine__18091__auto__ = function(state_20402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18091__auto____1.call(this,state_20402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18091__auto____0;
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18091__auto____1;
return cljs$core$async$state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_20451 = f__18250__auto__();
(statearr_20451[(6)] = c__18249__auto___21629);

return statearr_20451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20453 = arguments.length;
switch (G__20453) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18249__auto___21688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18250__auto__ = (function (){var switch__18090__auto__ = (function (state_20500){
var state_val_20501 = (state_20500[(1)]);
if((state_val_20501 === (7))){
var inst_20496 = (state_20500[(2)]);
var state_20500__$1 = state_20500;
var statearr_20513_21695 = state_20500__$1;
(statearr_20513_21695[(2)] = inst_20496);

(statearr_20513_21695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (1))){
var inst_20454 = [];
var inst_20456 = inst_20454;
var inst_20457 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20500__$1 = (function (){var statearr_20514 = state_20500;
(statearr_20514[(7)] = inst_20456);

(statearr_20514[(8)] = inst_20457);

return statearr_20514;
})();
var statearr_20515_21701 = state_20500__$1;
(statearr_20515_21701[(2)] = null);

(statearr_20515_21701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (4))){
var inst_20461 = (state_20500[(9)]);
var inst_20461__$1 = (state_20500[(2)]);
var inst_20462 = (inst_20461__$1 == null);
var inst_20463 = cljs.core.not(inst_20462);
var state_20500__$1 = (function (){var statearr_20517 = state_20500;
(statearr_20517[(9)] = inst_20461__$1);

return statearr_20517;
})();
if(inst_20463){
var statearr_20518_21706 = state_20500__$1;
(statearr_20518_21706[(1)] = (5));

} else {
var statearr_20519_21707 = state_20500__$1;
(statearr_20519_21707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (15))){
var inst_20456 = (state_20500[(7)]);
var inst_20488 = cljs.core.vec(inst_20456);
var state_20500__$1 = state_20500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20500__$1,(18),out,inst_20488);
} else {
if((state_val_20501 === (13))){
var inst_20483 = (state_20500[(2)]);
var state_20500__$1 = state_20500;
var statearr_20521_21708 = state_20500__$1;
(statearr_20521_21708[(2)] = inst_20483);

(statearr_20521_21708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (6))){
var inst_20456 = (state_20500[(7)]);
var inst_20485 = inst_20456.length;
var inst_20486 = (inst_20485 > (0));
var state_20500__$1 = state_20500;
if(cljs.core.truth_(inst_20486)){
var statearr_20522_21712 = state_20500__$1;
(statearr_20522_21712[(1)] = (15));

} else {
var statearr_20523_21713 = state_20500__$1;
(statearr_20523_21713[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (17))){
var inst_20493 = (state_20500[(2)]);
var inst_20494 = cljs.core.async.close_BANG_(out);
var state_20500__$1 = (function (){var statearr_20524 = state_20500;
(statearr_20524[(10)] = inst_20493);

return statearr_20524;
})();
var statearr_20525_21714 = state_20500__$1;
(statearr_20525_21714[(2)] = inst_20494);

(statearr_20525_21714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (3))){
var inst_20498 = (state_20500[(2)]);
var state_20500__$1 = state_20500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20500__$1,inst_20498);
} else {
if((state_val_20501 === (12))){
var inst_20456 = (state_20500[(7)]);
var inst_20476 = cljs.core.vec(inst_20456);
var state_20500__$1 = state_20500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20500__$1,(14),out,inst_20476);
} else {
if((state_val_20501 === (2))){
var state_20500__$1 = state_20500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20500__$1,(4),ch);
} else {
if((state_val_20501 === (11))){
var inst_20465 = (state_20500[(11)]);
var inst_20461 = (state_20500[(9)]);
var inst_20456 = (state_20500[(7)]);
var inst_20473 = inst_20456.push(inst_20461);
var tmp20526 = inst_20456;
var inst_20456__$1 = tmp20526;
var inst_20457 = inst_20465;
var state_20500__$1 = (function (){var statearr_20527 = state_20500;
(statearr_20527[(7)] = inst_20456__$1);

(statearr_20527[(12)] = inst_20473);

(statearr_20527[(8)] = inst_20457);

return statearr_20527;
})();
var statearr_20528_21723 = state_20500__$1;
(statearr_20528_21723[(2)] = null);

(statearr_20528_21723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (9))){
var inst_20457 = (state_20500[(8)]);
var inst_20469 = cljs.core.keyword_identical_QMARK_(inst_20457,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20500__$1 = state_20500;
var statearr_20529_21724 = state_20500__$1;
(statearr_20529_21724[(2)] = inst_20469);

(statearr_20529_21724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (5))){
var inst_20465 = (state_20500[(11)]);
var inst_20461 = (state_20500[(9)]);
var inst_20466 = (state_20500[(13)]);
var inst_20457 = (state_20500[(8)]);
var inst_20465__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20461) : f.call(null, inst_20461));
var inst_20466__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20465__$1,inst_20457);
var state_20500__$1 = (function (){var statearr_20530 = state_20500;
(statearr_20530[(11)] = inst_20465__$1);

(statearr_20530[(13)] = inst_20466__$1);

return statearr_20530;
})();
if(inst_20466__$1){
var statearr_20531_21726 = state_20500__$1;
(statearr_20531_21726[(1)] = (8));

} else {
var statearr_20532_21727 = state_20500__$1;
(statearr_20532_21727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (14))){
var inst_20465 = (state_20500[(11)]);
var inst_20461 = (state_20500[(9)]);
var inst_20478 = (state_20500[(2)]);
var inst_20479 = [];
var inst_20480 = inst_20479.push(inst_20461);
var inst_20456 = inst_20479;
var inst_20457 = inst_20465;
var state_20500__$1 = (function (){var statearr_20533 = state_20500;
(statearr_20533[(14)] = inst_20478);

(statearr_20533[(15)] = inst_20480);

(statearr_20533[(7)] = inst_20456);

(statearr_20533[(8)] = inst_20457);

return statearr_20533;
})();
var statearr_20534_21731 = state_20500__$1;
(statearr_20534_21731[(2)] = null);

(statearr_20534_21731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (16))){
var state_20500__$1 = state_20500;
var statearr_20535_21732 = state_20500__$1;
(statearr_20535_21732[(2)] = null);

(statearr_20535_21732[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (10))){
var inst_20471 = (state_20500[(2)]);
var state_20500__$1 = state_20500;
if(cljs.core.truth_(inst_20471)){
var statearr_20536_21734 = state_20500__$1;
(statearr_20536_21734[(1)] = (11));

} else {
var statearr_20537_21735 = state_20500__$1;
(statearr_20537_21735[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (18))){
var inst_20490 = (state_20500[(2)]);
var state_20500__$1 = state_20500;
var statearr_20540_21736 = state_20500__$1;
(statearr_20540_21736[(2)] = inst_20490);

(statearr_20540_21736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (8))){
var inst_20466 = (state_20500[(13)]);
var state_20500__$1 = state_20500;
var statearr_20541_21737 = state_20500__$1;
(statearr_20541_21737[(2)] = inst_20466);

(statearr_20541_21737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});
return (function() {
var cljs$core$async$state_machine__18091__auto__ = null;
var cljs$core$async$state_machine__18091__auto____0 = (function (){
var statearr_20543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20543[(0)] = cljs$core$async$state_machine__18091__auto__);

(statearr_20543[(1)] = (1));

return statearr_20543;
});
var cljs$core$async$state_machine__18091__auto____1 = (function (state_20500){
while(true){
var ret_value__18092__auto__ = (function (){try{while(true){
var result__18093__auto__ = switch__18090__auto__(state_20500);
if(cljs.core.keyword_identical_QMARK_(result__18093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18093__auto__;
}
break;
}
}catch (e20544){var ex__18094__auto__ = e20544;
var statearr_20545_21739 = state_20500;
(statearr_20545_21739[(2)] = ex__18094__auto__);


if(cljs.core.seq((state_20500[(4)]))){
var statearr_20546_21741 = state_20500;
(statearr_20546_21741[(1)] = cljs.core.first((state_20500[(4)])));

} else {
throw ex__18094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21742 = state_20500;
state_20500 = G__21742;
continue;
} else {
return ret_value__18092__auto__;
}
break;
}
});
cljs$core$async$state_machine__18091__auto__ = function(state_20500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18091__auto____1.call(this,state_20500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18091__auto____0;
cljs$core$async$state_machine__18091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18091__auto____1;
return cljs$core$async$state_machine__18091__auto__;
})()
})();
var state__18251__auto__ = (function (){var statearr_20547 = f__18250__auto__();
(statearr_20547[(6)] = c__18249__auto___21688);

return statearr_20547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18251__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
