import{o as i,c as l,a}from"./vendor.461ebe4f.js";const f=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};f();var u="/vue-3-demo/images/some-pic.png",p=(o,r)=>{const n=o.__vccOpts||o;for(const[c,e]of r)n[c]=e;return n};const d={},m={src:u,alt:""};function _(o,r){return i(),l("img",m)}var g=p(d,[["render",_]]);const y=a(g);y.mount("#app");
