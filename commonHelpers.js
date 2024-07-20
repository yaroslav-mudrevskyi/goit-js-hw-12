import{i as n,S as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(s){return s.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
  </a>
     <ul class="image-desc">
        <li class="image-subtitle"> 
            <h3 class="image-desc-title">Likes</h3>
            <p class="image-desc-text">${t.likes}</p>
        </li>
         <li class="image-subtitle"> 
            <h3 class="image-desc-title">Views</h3>
            <p class="image-desc-text">${t.views}</p>
        </li>
        <li class="image-subtitle"> 
            <h3 class="image-desc-title">Comments</h3>
            <p class="image-desc-text">${t.comments}</p>
        </li>
        <li class="image-subtitle"> 
            <h3 class="image-desc-title">Downloads</h3>
            <p class="image-desc-text">${t.downloads}</p>
        </li>
     </ul>
</li>`).join("")}function d(s){const t="https://pixabay.com",o="/api/",a=new URLSearchParams({key:"45015838-73ef95672254612a035b0fb4a",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}${o}?${a}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const i={formEl:document.querySelector(".js-form"),inputSearchEl:document.querySelector(".input-search"),btnSearchEl:document.querySelector(".btn-search"),markupEl:document.querySelector(".markup"),loader:document.querySelector(".loader")};c();i.formEl.addEventListener("submit",g);function g(s){s.preventDefault(),h(),i.markupEl.innerHTML="";const t=i.formEl.elements.image.value.trim();t&&(i.formEl.reset(),d(t).then(o=>{if(!o.hits.length){n.show({title:"Oops",titleColor:"#FAFAFB",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",timeout:3e3});return}p(o.hits),f.refresh()}).catch(o=>{n.error({title:"Error",titleColor:"#FAFAFB",message:"Sorry, something wrong",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",timeout:3e3})}).finally(()=>{c()}))}function p(s){const t=m(s);i.markupEl.innerHTML=t}const f=new u(".gallery-item a",{captionsData:"alt",captionDelay:250});function h(){i.loader.classList.remove("hidden")}function c(){i.loader.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
