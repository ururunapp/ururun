'use strict';
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
const header=document.getElementById('header');
const progress=document.getElementById('progress');
menuBtn.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(opened));menuBtn.setAttribute('aria-label',opened?'Fechar menu':'Abrir menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
function onScroll(){header.classList.toggle('scrolled',window.scrollY>30);const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?window.scrollY/max*100:0)+'%'}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
document.getElementById('year').textContent=new Date().getFullYear();
