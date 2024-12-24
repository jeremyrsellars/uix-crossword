goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16604 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16604(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16605 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16605(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15400 = coll;
var G__15401 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15400,G__15401) : shadow.dom.lazy_native_coll_seq.call(null, G__15400,G__15401));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__15443 = arguments.length;
switch (G__15443) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__15458 = arguments.length;
switch (G__15458) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__15464 = arguments.length;
switch (G__15464) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__15484 = arguments.length;
switch (G__15484) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__15517 = arguments.length;
switch (G__15517) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__15527 = arguments.length;
switch (G__15527) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e15530){if((e15530 instanceof Object)){
var e = e15530;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15530;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__15536 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15537 = null;
var count__15538 = (0);
var i__15539 = (0);
while(true){
if((i__15539 < count__15538)){
var el = chunk__15537.cljs$core$IIndexed$_nth$arity$2(null, i__15539);
var handler_16620__$1 = ((function (seq__15536,chunk__15537,count__15538,i__15539,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__15536,chunk__15537,count__15538,i__15539,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16620__$1);


var G__16621 = seq__15536;
var G__16622 = chunk__15537;
var G__16623 = count__15538;
var G__16624 = (i__15539 + (1));
seq__15536 = G__16621;
chunk__15537 = G__16622;
count__15538 = G__16623;
i__15539 = G__16624;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15536);
if(temp__5804__auto__){
var seq__15536__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15536__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15536__$1);
var G__16625 = cljs.core.chunk_rest(seq__15536__$1);
var G__16626 = c__5525__auto__;
var G__16627 = cljs.core.count(c__5525__auto__);
var G__16628 = (0);
seq__15536 = G__16625;
chunk__15537 = G__16626;
count__15538 = G__16627;
i__15539 = G__16628;
continue;
} else {
var el = cljs.core.first(seq__15536__$1);
var handler_16629__$1 = ((function (seq__15536,chunk__15537,count__15538,i__15539,el,seq__15536__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__15536,chunk__15537,count__15538,i__15539,el,seq__15536__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16629__$1);


var G__16635 = cljs.core.next(seq__15536__$1);
var G__16636 = null;
var G__16637 = (0);
var G__16638 = (0);
seq__15536 = G__16635;
chunk__15537 = G__16636;
count__15538 = G__16637;
i__15539 = G__16638;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__15559 = arguments.length;
switch (G__15559) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__15574 = cljs.core.seq(events);
var chunk__15575 = null;
var count__15576 = (0);
var i__15577 = (0);
while(true){
if((i__15577 < count__15576)){
var vec__15586 = chunk__15575.cljs$core$IIndexed$_nth$arity$2(null, i__15577);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15586,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15586,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16646 = seq__15574;
var G__16647 = chunk__15575;
var G__16648 = count__15576;
var G__16649 = (i__15577 + (1));
seq__15574 = G__16646;
chunk__15575 = G__16647;
count__15576 = G__16648;
i__15577 = G__16649;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15574);
if(temp__5804__auto__){
var seq__15574__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15574__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15574__$1);
var G__16651 = cljs.core.chunk_rest(seq__15574__$1);
var G__16652 = c__5525__auto__;
var G__16653 = cljs.core.count(c__5525__auto__);
var G__16654 = (0);
seq__15574 = G__16651;
chunk__15575 = G__16652;
count__15576 = G__16653;
i__15577 = G__16654;
continue;
} else {
var vec__15590 = cljs.core.first(seq__15574__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15590,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15590,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16655 = cljs.core.next(seq__15574__$1);
var G__16656 = null;
var G__16657 = (0);
var G__16658 = (0);
seq__15574 = G__16655;
chunk__15575 = G__16656;
count__15576 = G__16657;
i__15577 = G__16658;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__15600 = cljs.core.seq(styles);
var chunk__15601 = null;
var count__15602 = (0);
var i__15603 = (0);
while(true){
if((i__15603 < count__15602)){
var vec__15610 = chunk__15601.cljs$core$IIndexed$_nth$arity$2(null, i__15603);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15610,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15610,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16662 = seq__15600;
var G__16663 = chunk__15601;
var G__16664 = count__15602;
var G__16665 = (i__15603 + (1));
seq__15600 = G__16662;
chunk__15601 = G__16663;
count__15602 = G__16664;
i__15603 = G__16665;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15600);
if(temp__5804__auto__){
var seq__15600__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15600__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15600__$1);
var G__16666 = cljs.core.chunk_rest(seq__15600__$1);
var G__16667 = c__5525__auto__;
var G__16668 = cljs.core.count(c__5525__auto__);
var G__16669 = (0);
seq__15600 = G__16666;
chunk__15601 = G__16667;
count__15602 = G__16668;
i__15603 = G__16669;
continue;
} else {
var vec__15613 = cljs.core.first(seq__15600__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15613,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15613,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16670 = cljs.core.next(seq__15600__$1);
var G__16671 = null;
var G__16672 = (0);
var G__16673 = (0);
seq__15600 = G__16670;
chunk__15601 = G__16671;
count__15602 = G__16672;
i__15603 = G__16673;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__15634_16674 = key;
var G__15634_16675__$1 = (((G__15634_16674 instanceof cljs.core.Keyword))?G__15634_16674.fqn:null);
switch (G__15634_16675__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16678 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_16678,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_16678,"aria-");
}
})())){
el.setAttribute(ks_16678,value);
} else {
(el[ks_16678] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__15663){
var map__15664 = p__15663;
var map__15664__$1 = cljs.core.__destructure_map(map__15664);
var props = map__15664__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15664__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__15665 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15665,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15665,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15665,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__15668 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__15668,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__15668;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__15670 = arguments.length;
switch (G__15670) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__15688){
var vec__15689 = p__15688;
var seq__15690 = cljs.core.seq(vec__15689);
var first__15691 = cljs.core.first(seq__15690);
var seq__15690__$1 = cljs.core.next(seq__15690);
var nn = first__15691;
var first__15691__$1 = cljs.core.first(seq__15690__$1);
var seq__15690__$2 = cljs.core.next(seq__15690__$1);
var np = first__15691__$1;
var nc = seq__15690__$2;
var node = vec__15689;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15701 = nn;
var G__15702 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15701,G__15702) : create_fn.call(null, G__15701,G__15702));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15706 = nn;
var G__15707 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15706,G__15707) : create_fn.call(null, G__15706,G__15707));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15712 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15712,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15712,(1),null);
var seq__15717_16689 = cljs.core.seq(node_children);
var chunk__15719_16690 = null;
var count__15720_16691 = (0);
var i__15721_16692 = (0);
while(true){
if((i__15721_16692 < count__15720_16691)){
var child_struct_16693 = chunk__15719_16690.cljs$core$IIndexed$_nth$arity$2(null, i__15721_16692);
var children_16694 = shadow.dom.dom_node(child_struct_16693);
if(cljs.core.seq_QMARK_(children_16694)){
var seq__15792_16695 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16694));
var chunk__15794_16696 = null;
var count__15795_16697 = (0);
var i__15796_16698 = (0);
while(true){
if((i__15796_16698 < count__15795_16697)){
var child_16699 = chunk__15794_16696.cljs$core$IIndexed$_nth$arity$2(null, i__15796_16698);
if(cljs.core.truth_(child_16699)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16699);


var G__16702 = seq__15792_16695;
var G__16703 = chunk__15794_16696;
var G__16704 = count__15795_16697;
var G__16705 = (i__15796_16698 + (1));
seq__15792_16695 = G__16702;
chunk__15794_16696 = G__16703;
count__15795_16697 = G__16704;
i__15796_16698 = G__16705;
continue;
} else {
var G__16706 = seq__15792_16695;
var G__16707 = chunk__15794_16696;
var G__16708 = count__15795_16697;
var G__16709 = (i__15796_16698 + (1));
seq__15792_16695 = G__16706;
chunk__15794_16696 = G__16707;
count__15795_16697 = G__16708;
i__15796_16698 = G__16709;
continue;
}
} else {
var temp__5804__auto___16710 = cljs.core.seq(seq__15792_16695);
if(temp__5804__auto___16710){
var seq__15792_16711__$1 = temp__5804__auto___16710;
if(cljs.core.chunked_seq_QMARK_(seq__15792_16711__$1)){
var c__5525__auto___16712 = cljs.core.chunk_first(seq__15792_16711__$1);
var G__16714 = cljs.core.chunk_rest(seq__15792_16711__$1);
var G__16715 = c__5525__auto___16712;
var G__16716 = cljs.core.count(c__5525__auto___16712);
var G__16717 = (0);
seq__15792_16695 = G__16714;
chunk__15794_16696 = G__16715;
count__15795_16697 = G__16716;
i__15796_16698 = G__16717;
continue;
} else {
var child_16718 = cljs.core.first(seq__15792_16711__$1);
if(cljs.core.truth_(child_16718)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16718);


var G__16719 = cljs.core.next(seq__15792_16711__$1);
var G__16720 = null;
var G__16721 = (0);
var G__16722 = (0);
seq__15792_16695 = G__16719;
chunk__15794_16696 = G__16720;
count__15795_16697 = G__16721;
i__15796_16698 = G__16722;
continue;
} else {
var G__16723 = cljs.core.next(seq__15792_16711__$1);
var G__16724 = null;
var G__16725 = (0);
var G__16726 = (0);
seq__15792_16695 = G__16723;
chunk__15794_16696 = G__16724;
count__15795_16697 = G__16725;
i__15796_16698 = G__16726;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16694);
}


var G__16727 = seq__15717_16689;
var G__16728 = chunk__15719_16690;
var G__16729 = count__15720_16691;
var G__16730 = (i__15721_16692 + (1));
seq__15717_16689 = G__16727;
chunk__15719_16690 = G__16728;
count__15720_16691 = G__16729;
i__15721_16692 = G__16730;
continue;
} else {
var temp__5804__auto___16731 = cljs.core.seq(seq__15717_16689);
if(temp__5804__auto___16731){
var seq__15717_16732__$1 = temp__5804__auto___16731;
if(cljs.core.chunked_seq_QMARK_(seq__15717_16732__$1)){
var c__5525__auto___16733 = cljs.core.chunk_first(seq__15717_16732__$1);
var G__16734 = cljs.core.chunk_rest(seq__15717_16732__$1);
var G__16735 = c__5525__auto___16733;
var G__16736 = cljs.core.count(c__5525__auto___16733);
var G__16737 = (0);
seq__15717_16689 = G__16734;
chunk__15719_16690 = G__16735;
count__15720_16691 = G__16736;
i__15721_16692 = G__16737;
continue;
} else {
var child_struct_16738 = cljs.core.first(seq__15717_16732__$1);
var children_16739 = shadow.dom.dom_node(child_struct_16738);
if(cljs.core.seq_QMARK_(children_16739)){
var seq__15802_16740 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16739));
var chunk__15804_16741 = null;
var count__15805_16742 = (0);
var i__15806_16743 = (0);
while(true){
if((i__15806_16743 < count__15805_16742)){
var child_16744 = chunk__15804_16741.cljs$core$IIndexed$_nth$arity$2(null, i__15806_16743);
if(cljs.core.truth_(child_16744)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16744);


var G__16745 = seq__15802_16740;
var G__16746 = chunk__15804_16741;
var G__16747 = count__15805_16742;
var G__16748 = (i__15806_16743 + (1));
seq__15802_16740 = G__16745;
chunk__15804_16741 = G__16746;
count__15805_16742 = G__16747;
i__15806_16743 = G__16748;
continue;
} else {
var G__16749 = seq__15802_16740;
var G__16750 = chunk__15804_16741;
var G__16751 = count__15805_16742;
var G__16752 = (i__15806_16743 + (1));
seq__15802_16740 = G__16749;
chunk__15804_16741 = G__16750;
count__15805_16742 = G__16751;
i__15806_16743 = G__16752;
continue;
}
} else {
var temp__5804__auto___16753__$1 = cljs.core.seq(seq__15802_16740);
if(temp__5804__auto___16753__$1){
var seq__15802_16754__$1 = temp__5804__auto___16753__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15802_16754__$1)){
var c__5525__auto___16755 = cljs.core.chunk_first(seq__15802_16754__$1);
var G__16756 = cljs.core.chunk_rest(seq__15802_16754__$1);
var G__16757 = c__5525__auto___16755;
var G__16758 = cljs.core.count(c__5525__auto___16755);
var G__16759 = (0);
seq__15802_16740 = G__16756;
chunk__15804_16741 = G__16757;
count__15805_16742 = G__16758;
i__15806_16743 = G__16759;
continue;
} else {
var child_16760 = cljs.core.first(seq__15802_16754__$1);
if(cljs.core.truth_(child_16760)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16760);


var G__16761 = cljs.core.next(seq__15802_16754__$1);
var G__16762 = null;
var G__16763 = (0);
var G__16764 = (0);
seq__15802_16740 = G__16761;
chunk__15804_16741 = G__16762;
count__15805_16742 = G__16763;
i__15806_16743 = G__16764;
continue;
} else {
var G__16765 = cljs.core.next(seq__15802_16754__$1);
var G__16766 = null;
var G__16767 = (0);
var G__16768 = (0);
seq__15802_16740 = G__16765;
chunk__15804_16741 = G__16766;
count__15805_16742 = G__16767;
i__15806_16743 = G__16768;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16739);
}


var G__16769 = cljs.core.next(seq__15717_16732__$1);
var G__16770 = null;
var G__16771 = (0);
var G__16772 = (0);
seq__15717_16689 = G__16769;
chunk__15719_16690 = G__16770;
count__15720_16691 = G__16771;
i__15721_16692 = G__16772;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__15842 = cljs.core.seq(node);
var chunk__15843 = null;
var count__15844 = (0);
var i__15845 = (0);
while(true){
if((i__15845 < count__15844)){
var n = chunk__15843.cljs$core$IIndexed$_nth$arity$2(null, i__15845);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16775 = seq__15842;
var G__16776 = chunk__15843;
var G__16777 = count__15844;
var G__16778 = (i__15845 + (1));
seq__15842 = G__16775;
chunk__15843 = G__16776;
count__15844 = G__16777;
i__15845 = G__16778;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15842);
if(temp__5804__auto__){
var seq__15842__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15842__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15842__$1);
var G__16779 = cljs.core.chunk_rest(seq__15842__$1);
var G__16780 = c__5525__auto__;
var G__16781 = cljs.core.count(c__5525__auto__);
var G__16782 = (0);
seq__15842 = G__16779;
chunk__15843 = G__16780;
count__15844 = G__16781;
i__15845 = G__16782;
continue;
} else {
var n = cljs.core.first(seq__15842__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16784 = cljs.core.next(seq__15842__$1);
var G__16785 = null;
var G__16786 = (0);
var G__16787 = (0);
seq__15842 = G__16784;
chunk__15843 = G__16785;
count__15844 = G__16786;
i__15845 = G__16787;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__15872 = arguments.length;
switch (G__15872) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__15885 = arguments.length;
switch (G__15885) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15910 = arguments.length;
switch (G__15910) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16806 = arguments.length;
var i__5727__auto___16808 = (0);
while(true){
if((i__5727__auto___16808 < len__5726__auto___16806)){
args__5732__auto__.push((arguments[i__5727__auto___16808]));

var G__16813 = (i__5727__auto___16808 + (1));
i__5727__auto___16808 = G__16813;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15932_16814 = cljs.core.seq(nodes);
var chunk__15933_16815 = null;
var count__15934_16816 = (0);
var i__15935_16817 = (0);
while(true){
if((i__15935_16817 < count__15934_16816)){
var node_16824 = chunk__15933_16815.cljs$core$IIndexed$_nth$arity$2(null, i__15935_16817);
fragment.appendChild(shadow.dom._to_dom(node_16824));


var G__16825 = seq__15932_16814;
var G__16826 = chunk__15933_16815;
var G__16827 = count__15934_16816;
var G__16828 = (i__15935_16817 + (1));
seq__15932_16814 = G__16825;
chunk__15933_16815 = G__16826;
count__15934_16816 = G__16827;
i__15935_16817 = G__16828;
continue;
} else {
var temp__5804__auto___16829 = cljs.core.seq(seq__15932_16814);
if(temp__5804__auto___16829){
var seq__15932_16830__$1 = temp__5804__auto___16829;
if(cljs.core.chunked_seq_QMARK_(seq__15932_16830__$1)){
var c__5525__auto___16831 = cljs.core.chunk_first(seq__15932_16830__$1);
var G__16832 = cljs.core.chunk_rest(seq__15932_16830__$1);
var G__16833 = c__5525__auto___16831;
var G__16834 = cljs.core.count(c__5525__auto___16831);
var G__16835 = (0);
seq__15932_16814 = G__16832;
chunk__15933_16815 = G__16833;
count__15934_16816 = G__16834;
i__15935_16817 = G__16835;
continue;
} else {
var node_16836 = cljs.core.first(seq__15932_16830__$1);
fragment.appendChild(shadow.dom._to_dom(node_16836));


var G__16837 = cljs.core.next(seq__15932_16830__$1);
var G__16838 = null;
var G__16839 = (0);
var G__16840 = (0);
seq__15932_16814 = G__16837;
chunk__15933_16815 = G__16838;
count__15934_16816 = G__16839;
i__15935_16817 = G__16840;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15920){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15920));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15955_16852 = cljs.core.seq(scripts);
var chunk__15956_16853 = null;
var count__15957_16854 = (0);
var i__15958_16855 = (0);
while(true){
if((i__15958_16855 < count__15957_16854)){
var vec__15965_16857 = chunk__15956_16853.cljs$core$IIndexed$_nth$arity$2(null, i__15958_16855);
var script_tag_16858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965_16857,(0),null);
var script_body_16859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965_16857,(1),null);
eval(script_body_16859);


var G__16865 = seq__15955_16852;
var G__16866 = chunk__15956_16853;
var G__16867 = count__15957_16854;
var G__16868 = (i__15958_16855 + (1));
seq__15955_16852 = G__16865;
chunk__15956_16853 = G__16866;
count__15957_16854 = G__16867;
i__15958_16855 = G__16868;
continue;
} else {
var temp__5804__auto___16870 = cljs.core.seq(seq__15955_16852);
if(temp__5804__auto___16870){
var seq__15955_16871__$1 = temp__5804__auto___16870;
if(cljs.core.chunked_seq_QMARK_(seq__15955_16871__$1)){
var c__5525__auto___16873 = cljs.core.chunk_first(seq__15955_16871__$1);
var G__16874 = cljs.core.chunk_rest(seq__15955_16871__$1);
var G__16875 = c__5525__auto___16873;
var G__16876 = cljs.core.count(c__5525__auto___16873);
var G__16877 = (0);
seq__15955_16852 = G__16874;
chunk__15956_16853 = G__16875;
count__15957_16854 = G__16876;
i__15958_16855 = G__16877;
continue;
} else {
var vec__15970_16878 = cljs.core.first(seq__15955_16871__$1);
var script_tag_16879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970_16878,(0),null);
var script_body_16880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15970_16878,(1),null);
eval(script_body_16880);


var G__16881 = cljs.core.next(seq__15955_16871__$1);
var G__16882 = null;
var G__16883 = (0);
var G__16884 = (0);
seq__15955_16852 = G__16881;
chunk__15956_16853 = G__16882;
count__15957_16854 = G__16883;
i__15958_16855 = G__16884;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15974){
var vec__15975 = p__15974;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15975,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15975,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15991 = arguments.length;
switch (G__15991) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__16011 = cljs.core.seq(style_keys);
var chunk__16012 = null;
var count__16013 = (0);
var i__16014 = (0);
while(true){
if((i__16014 < count__16013)){
var it = chunk__16012.cljs$core$IIndexed$_nth$arity$2(null, i__16014);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16890 = seq__16011;
var G__16891 = chunk__16012;
var G__16892 = count__16013;
var G__16893 = (i__16014 + (1));
seq__16011 = G__16890;
chunk__16012 = G__16891;
count__16013 = G__16892;
i__16014 = G__16893;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16011);
if(temp__5804__auto__){
var seq__16011__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16011__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16011__$1);
var G__16895 = cljs.core.chunk_rest(seq__16011__$1);
var G__16896 = c__5525__auto__;
var G__16897 = cljs.core.count(c__5525__auto__);
var G__16898 = (0);
seq__16011 = G__16895;
chunk__16012 = G__16896;
count__16013 = G__16897;
i__16014 = G__16898;
continue;
} else {
var it = cljs.core.first(seq__16011__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16902 = cljs.core.next(seq__16011__$1);
var G__16903 = null;
var G__16904 = (0);
var G__16905 = (0);
seq__16011 = G__16902;
chunk__16012 = G__16903;
count__16013 = G__16904;
i__16014 = G__16905;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16022,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16039 = k16022;
var G__16039__$1 = (((G__16039 instanceof cljs.core.Keyword))?G__16039.fqn:null);
switch (G__16039__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16022,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16041){
var vec__16042 = p__16041;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16042,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16042,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16021){
var self__ = this;
var G__16021__$1 = this;
return (new cljs.core.RecordIter((0),G__16021__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16023,other16024){
var self__ = this;
var this16023__$1 = this;
return (((!((other16024 == null)))) && ((((this16023__$1.constructor === other16024.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16023__$1.x,other16024.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16023__$1.y,other16024.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16023__$1.__extmap,other16024.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16022){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16078 = k16022;
var G__16078__$1 = (((G__16078 instanceof cljs.core.Keyword))?G__16078.fqn:null);
switch (G__16078__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16022);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16021){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16084 = cljs.core.keyword_identical_QMARK_;
var expr__16085 = k__5309__auto__;
if(cljs.core.truth_((pred__16084.cljs$core$IFn$_invoke$arity$2 ? pred__16084.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16085) : pred__16084.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__16085)))){
return (new shadow.dom.Coordinate(G__16021,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16084.cljs$core$IFn$_invoke$arity$2 ? pred__16084.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16085) : pred__16084.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__16085)))){
return (new shadow.dom.Coordinate(self__.x,G__16021,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16021),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16021){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16021,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16026){
var extmap__5342__auto__ = (function (){var G__16115 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16026,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16026)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16115);
} else {
return G__16115;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16026),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16026),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16154,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16161 = k16154;
var G__16161__$1 = (((G__16161 instanceof cljs.core.Keyword))?G__16161.fqn:null);
switch (G__16161__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16154,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16162){
var vec__16163 = p__16162;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16163,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16163,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16153){
var self__ = this;
var G__16153__$1 = this;
return (new cljs.core.RecordIter((0),G__16153__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16155,other16156){
var self__ = this;
var this16155__$1 = this;
return (((!((other16156 == null)))) && ((((this16155__$1.constructor === other16156.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16155__$1.w,other16156.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16155__$1.h,other16156.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16155__$1.__extmap,other16156.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16154){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16206 = k16154;
var G__16206__$1 = (((G__16206 instanceof cljs.core.Keyword))?G__16206.fqn:null);
switch (G__16206__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16154);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16153){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16211 = cljs.core.keyword_identical_QMARK_;
var expr__16212 = k__5309__auto__;
if(cljs.core.truth_((pred__16211.cljs$core$IFn$_invoke$arity$2 ? pred__16211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16212) : pred__16211.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__16212)))){
return (new shadow.dom.Size(G__16153,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16211.cljs$core$IFn$_invoke$arity$2 ? pred__16211.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16212) : pred__16211.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__16212)))){
return (new shadow.dom.Size(self__.w,G__16153,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16153),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16153){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16153,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16157){
var extmap__5342__auto__ = (function (){var G__16236 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16157,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16157)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16236);
} else {
return G__16236;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16157),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16157),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16955 = (i + (1));
var G__16956 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16955;
ret = G__16956;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16264){
var vec__16267 = p__16264;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16267,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16267,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16277 = arguments.length;
switch (G__16277) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16962 = ps;
var G__16963 = (i + (1));
el__$1 = G__16962;
i = G__16963;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16344 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16344,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16350_16964 = cljs.core.seq(props);
var chunk__16351_16965 = null;
var count__16352_16966 = (0);
var i__16353_16967 = (0);
while(true){
if((i__16353_16967 < count__16352_16966)){
var vec__16425_16968 = chunk__16351_16965.cljs$core$IIndexed$_nth$arity$2(null, i__16353_16967);
var k_16969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16425_16968,(0),null);
var v_16970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16425_16968,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16969);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16969),v_16970);


var G__16972 = seq__16350_16964;
var G__16973 = chunk__16351_16965;
var G__16974 = count__16352_16966;
var G__16975 = (i__16353_16967 + (1));
seq__16350_16964 = G__16972;
chunk__16351_16965 = G__16973;
count__16352_16966 = G__16974;
i__16353_16967 = G__16975;
continue;
} else {
var temp__5804__auto___16976 = cljs.core.seq(seq__16350_16964);
if(temp__5804__auto___16976){
var seq__16350_16977__$1 = temp__5804__auto___16976;
if(cljs.core.chunked_seq_QMARK_(seq__16350_16977__$1)){
var c__5525__auto___16978 = cljs.core.chunk_first(seq__16350_16977__$1);
var G__16979 = cljs.core.chunk_rest(seq__16350_16977__$1);
var G__16980 = c__5525__auto___16978;
var G__16981 = cljs.core.count(c__5525__auto___16978);
var G__16982 = (0);
seq__16350_16964 = G__16979;
chunk__16351_16965 = G__16980;
count__16352_16966 = G__16981;
i__16353_16967 = G__16982;
continue;
} else {
var vec__16456_16983 = cljs.core.first(seq__16350_16977__$1);
var k_16984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16456_16983,(0),null);
var v_16985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16456_16983,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16984);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16984),v_16985);


var G__16987 = cljs.core.next(seq__16350_16977__$1);
var G__16988 = null;
var G__16989 = (0);
var G__16990 = (0);
seq__16350_16964 = G__16987;
chunk__16351_16965 = G__16988;
count__16352_16966 = G__16989;
i__16353_16967 = G__16990;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16500 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16500,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16500,(1),null);
var seq__16505_16992 = cljs.core.seq(node_children);
var chunk__16508_16993 = null;
var count__16509_16994 = (0);
var i__16510_16995 = (0);
while(true){
if((i__16510_16995 < count__16509_16994)){
var child_struct_16996 = chunk__16508_16993.cljs$core$IIndexed$_nth$arity$2(null, i__16510_16995);
if((!((child_struct_16996 == null)))){
if(typeof child_struct_16996 === 'string'){
var text_16997 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16997),child_struct_16996].join(''));
} else {
var children_16998 = shadow.dom.svg_node(child_struct_16996);
if(cljs.core.seq_QMARK_(children_16998)){
var seq__16569_16999 = cljs.core.seq(children_16998);
var chunk__16571_17000 = null;
var count__16572_17001 = (0);
var i__16573_17002 = (0);
while(true){
if((i__16573_17002 < count__16572_17001)){
var child_17003 = chunk__16571_17000.cljs$core$IIndexed$_nth$arity$2(null, i__16573_17002);
if(cljs.core.truth_(child_17003)){
node.appendChild(child_17003);


var G__17004 = seq__16569_16999;
var G__17005 = chunk__16571_17000;
var G__17006 = count__16572_17001;
var G__17007 = (i__16573_17002 + (1));
seq__16569_16999 = G__17004;
chunk__16571_17000 = G__17005;
count__16572_17001 = G__17006;
i__16573_17002 = G__17007;
continue;
} else {
var G__17008 = seq__16569_16999;
var G__17009 = chunk__16571_17000;
var G__17010 = count__16572_17001;
var G__17011 = (i__16573_17002 + (1));
seq__16569_16999 = G__17008;
chunk__16571_17000 = G__17009;
count__16572_17001 = G__17010;
i__16573_17002 = G__17011;
continue;
}
} else {
var temp__5804__auto___17012 = cljs.core.seq(seq__16569_16999);
if(temp__5804__auto___17012){
var seq__16569_17013__$1 = temp__5804__auto___17012;
if(cljs.core.chunked_seq_QMARK_(seq__16569_17013__$1)){
var c__5525__auto___17014 = cljs.core.chunk_first(seq__16569_17013__$1);
var G__17015 = cljs.core.chunk_rest(seq__16569_17013__$1);
var G__17016 = c__5525__auto___17014;
var G__17018 = cljs.core.count(c__5525__auto___17014);
var G__17020 = (0);
seq__16569_16999 = G__17015;
chunk__16571_17000 = G__17016;
count__16572_17001 = G__17018;
i__16573_17002 = G__17020;
continue;
} else {
var child_17021 = cljs.core.first(seq__16569_17013__$1);
if(cljs.core.truth_(child_17021)){
node.appendChild(child_17021);


var G__17022 = cljs.core.next(seq__16569_17013__$1);
var G__17023 = null;
var G__17024 = (0);
var G__17025 = (0);
seq__16569_16999 = G__17022;
chunk__16571_17000 = G__17023;
count__16572_17001 = G__17024;
i__16573_17002 = G__17025;
continue;
} else {
var G__17026 = cljs.core.next(seq__16569_17013__$1);
var G__17027 = null;
var G__17028 = (0);
var G__17029 = (0);
seq__16569_16999 = G__17026;
chunk__16571_17000 = G__17027;
count__16572_17001 = G__17028;
i__16573_17002 = G__17029;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16998);
}
}


var G__17030 = seq__16505_16992;
var G__17031 = chunk__16508_16993;
var G__17032 = count__16509_16994;
var G__17033 = (i__16510_16995 + (1));
seq__16505_16992 = G__17030;
chunk__16508_16993 = G__17031;
count__16509_16994 = G__17032;
i__16510_16995 = G__17033;
continue;
} else {
var G__17034 = seq__16505_16992;
var G__17035 = chunk__16508_16993;
var G__17036 = count__16509_16994;
var G__17037 = (i__16510_16995 + (1));
seq__16505_16992 = G__17034;
chunk__16508_16993 = G__17035;
count__16509_16994 = G__17036;
i__16510_16995 = G__17037;
continue;
}
} else {
var temp__5804__auto___17038 = cljs.core.seq(seq__16505_16992);
if(temp__5804__auto___17038){
var seq__16505_17039__$1 = temp__5804__auto___17038;
if(cljs.core.chunked_seq_QMARK_(seq__16505_17039__$1)){
var c__5525__auto___17040 = cljs.core.chunk_first(seq__16505_17039__$1);
var G__17041 = cljs.core.chunk_rest(seq__16505_17039__$1);
var G__17042 = c__5525__auto___17040;
var G__17043 = cljs.core.count(c__5525__auto___17040);
var G__17044 = (0);
seq__16505_16992 = G__17041;
chunk__16508_16993 = G__17042;
count__16509_16994 = G__17043;
i__16510_16995 = G__17044;
continue;
} else {
var child_struct_17045 = cljs.core.first(seq__16505_17039__$1);
if((!((child_struct_17045 == null)))){
if(typeof child_struct_17045 === 'string'){
var text_17046 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_17046),child_struct_17045].join(''));
} else {
var children_17048 = shadow.dom.svg_node(child_struct_17045);
if(cljs.core.seq_QMARK_(children_17048)){
var seq__16580_17049 = cljs.core.seq(children_17048);
var chunk__16582_17050 = null;
var count__16583_17051 = (0);
var i__16584_17052 = (0);
while(true){
if((i__16584_17052 < count__16583_17051)){
var child_17054 = chunk__16582_17050.cljs$core$IIndexed$_nth$arity$2(null, i__16584_17052);
if(cljs.core.truth_(child_17054)){
node.appendChild(child_17054);


var G__17055 = seq__16580_17049;
var G__17056 = chunk__16582_17050;
var G__17057 = count__16583_17051;
var G__17058 = (i__16584_17052 + (1));
seq__16580_17049 = G__17055;
chunk__16582_17050 = G__17056;
count__16583_17051 = G__17057;
i__16584_17052 = G__17058;
continue;
} else {
var G__17060 = seq__16580_17049;
var G__17061 = chunk__16582_17050;
var G__17062 = count__16583_17051;
var G__17063 = (i__16584_17052 + (1));
seq__16580_17049 = G__17060;
chunk__16582_17050 = G__17061;
count__16583_17051 = G__17062;
i__16584_17052 = G__17063;
continue;
}
} else {
var temp__5804__auto___17065__$1 = cljs.core.seq(seq__16580_17049);
if(temp__5804__auto___17065__$1){
var seq__16580_17067__$1 = temp__5804__auto___17065__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16580_17067__$1)){
var c__5525__auto___17068 = cljs.core.chunk_first(seq__16580_17067__$1);
var G__17070 = cljs.core.chunk_rest(seq__16580_17067__$1);
var G__17071 = c__5525__auto___17068;
var G__17072 = cljs.core.count(c__5525__auto___17068);
var G__17073 = (0);
seq__16580_17049 = G__17070;
chunk__16582_17050 = G__17071;
count__16583_17051 = G__17072;
i__16584_17052 = G__17073;
continue;
} else {
var child_17074 = cljs.core.first(seq__16580_17067__$1);
if(cljs.core.truth_(child_17074)){
node.appendChild(child_17074);


var G__17076 = cljs.core.next(seq__16580_17067__$1);
var G__17077 = null;
var G__17078 = (0);
var G__17079 = (0);
seq__16580_17049 = G__17076;
chunk__16582_17050 = G__17077;
count__16583_17051 = G__17078;
i__16584_17052 = G__17079;
continue;
} else {
var G__17081 = cljs.core.next(seq__16580_17067__$1);
var G__17082 = null;
var G__17083 = (0);
var G__17084 = (0);
seq__16580_17049 = G__17081;
chunk__16582_17050 = G__17082;
count__16583_17051 = G__17083;
i__16584_17052 = G__17084;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_17048);
}
}


var G__17085 = cljs.core.next(seq__16505_17039__$1);
var G__17086 = null;
var G__17087 = (0);
var G__17088 = (0);
seq__16505_16992 = G__17085;
chunk__16508_16993 = G__17086;
count__16509_16994 = G__17087;
i__16510_16995 = G__17088;
continue;
} else {
var G__17089 = cljs.core.next(seq__16505_17039__$1);
var G__17090 = null;
var G__17091 = (0);
var G__17092 = (0);
seq__16505_16992 = G__17089;
chunk__16508_16993 = G__17090;
count__16509_16994 = G__17091;
i__16510_16995 = G__17092;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17098 = arguments.length;
var i__5727__auto___17099 = (0);
while(true){
if((i__5727__auto___17099 < len__5726__auto___17098)){
args__5732__auto__.push((arguments[i__5727__auto___17099]));

var G__17100 = (i__5727__auto___17099 + (1));
i__5727__auto___17099 = G__17100;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16598){
var G__16599 = cljs.core.first(seq16598);
var seq16598__$1 = cljs.core.next(seq16598);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16599,seq16598__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
