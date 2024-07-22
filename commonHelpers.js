import{A as b,i as l,S as L}from"./assets/vendor-cf73e4e9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&g(c)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function g(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}})();function p(o){return o.map(e=>`<li class="gallery-item">
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
</li>`).join("")}const F=b.create({baseURL:"https://pixabay.com"});async function h(o,e){return(await F.get("/api/",{params:{key:"45015838-73ef95672254612a035b0fb4a",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const r={formEl:document.querySelector(".js-form"),inputSearchEl:document.querySelector(".input-search"),btnSearchEl:document.querySelector(".btn-search"),markupEl:document.querySelector(".markup"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load")};m();u();let n=1,a=0;const E=15;let i;r.formEl.addEventListener("submit",A);async function A(o){try{if(o.preventDefault(),y(),n=1,r.markupEl.innerHTML="",i=r.formEl.elements.image.value.trim(),!i)return;r.formEl.reset();const e=await h(i);if(a=Math.ceil(e.totalHits/E),!e.hits.length&&a===0){l.show({title:"Oops",titleColor:"#FAFAFB",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",timeout:3e3});return}S(e.hits),w.refresh()}catch{l.error({title:"Error",titleColor:"#FAFAFB",message:"Sorry, something wrong",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",timeout:3e3})}finally{f(),m()}}r.btnLoadMore.addEventListener("click",async()=>{n+=1,y();try{const o=await h(i,n),e=p(o.hits);r.markupEl.insertAdjacentHTML("beforeend",e)}catch{l.error({title:"Error",titleColor:"#FAFAFB",message:"Sorry, something wrong",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",timeout:3e3})}finally{k(),f(),m()}});function S(o){const e=p(o);r.markupEl.innerHTML=e}const w=new L(".gallery-item a",{captionsData:"alt",captionDelay:250});function C(){r.btnLoadMore.classList.remove("hidden")}function u(){r.btnLoadMore.classList.add("hidden")}function f(){n===a&&a!==1?(u(),l.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#4D3B03",backgroundColor:"#06D8A8",position:"bottomRight",timeout:4e3})):a<=1?u():C()}function y(){r.loader.classList.remove("hidden")}function m(){r.loader.classList.add("hidden")}function k(){const e=r.markupEl.firstElementChild.getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
