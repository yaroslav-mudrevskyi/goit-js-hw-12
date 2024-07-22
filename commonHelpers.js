import{A as u,i as n,S as m}from"./assets/vendor-cf73e4e9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function d(s){return s.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>
     <ul class="image-desc">
        <li class="image-subtitle"> 
            <h3 class="image-desc-title">Likes</h3>
            <p class="image-desc-text">${e.likes}</p>
        </li>
         <li class="image-subtitle"> 
            <h3 class="image-desc-title">Views</h3>
            <p class="image-desc-text">${e.views}</p>
        </li>
        <li class="image-subtitle"> 
            <h3 class="image-desc-title">Comments</h3>
            <p class="image-desc-text">${e.comments}</p>
        </li>
        <li class="image-subtitle"> 
            <h3 class="image-desc-title">Downloads</h3>
            <p class="image-desc-text">${e.downloads}</p>
        </li>
     </ul>
</li>`).join("")}const g=u.create({baseURL:"https://pixabay.com"});async function p(s){return(await g.get("/api/",{params:{key:"45015838-73ef95672254612a035b0fb4a",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const o={formEl:document.querySelector(".js-form"),inputSearchEl:document.querySelector(".input-search"),btnSearchEl:document.querySelector(".btn-search"),markupEl:document.querySelector(".markup"),loader:document.querySelector(".loader")};c();o.formEl.addEventListener("submit",f);async function f(s){try{s.preventDefault(),b(),o.markupEl.innerHTML="";const e=o.formEl.elements.image.value.trim();if(!e)return;o.formEl.reset();const a=await p(e);if(!a.hits.length){n.show({title:"Oops",titleColor:"#FAFAFB",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",timeout:3e3});return}h(a.hits),y.refresh()}catch{n.error({title:"Error",titleColor:"#FAFAFB",message:"Sorry, something wrong",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",timeout:3e3})}finally{c()}}function h(s){const e=d(s);o.markupEl.innerHTML=e}const y=new m(".gallery-item a",{captionsData:"alt",captionDelay:250});function b(){o.loader.classList.remove("hidden")}function c(){o.loader.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
