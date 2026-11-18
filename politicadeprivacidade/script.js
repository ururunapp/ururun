'use strict';
// Página pública: não solicita login, localização nem dados pessoais.
document.getElementById('year').textContent = String(new Date().getFullYear());
const backtop = document.getElementById('backtop');
backtop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
const navLinks = Array.from(document.querySelectorAll('.sidebar nav a'));
const sections = Array.from(document.querySelectorAll('.content section[id]'));
const observer = new IntersectionObserver(entries => {for(const entry of entries){if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}}},{rootMargin:'-15% 0px -70% 0px'});
sections.forEach(section=>observer.observe(section));
window.addEventListener('scroll',()=>backtop.classList.toggle('visible',window.scrollY>450),{passive:true});
