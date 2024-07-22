import{A as b,i,S as L}from"./assets/vendor-cf73e4e9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function d(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(t){if(t.ep)return;t.ep=!0;const o=d(t);fetch(t.href,o)}})();function g(r){return r.map(e=>`<li class="gallery-item">
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
</li>`).join("")}const F=b.create({baseURL:"https://pixabay.com"});async function p(r,e){return(await F.get("/api/",{params:{key:"45015838-73ef95672254612a035b0fb4a",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:100}})).data}const s={formEl:document.querySelector(".js-form"),inputSearchEl:document.querySelector(".input-search"),btnSearchEl:document.querySelector(".btn-search"),markupEl:document.querySelector(".markup"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load")};u();f();let l=1,n=0;const E=15;let a;s.formEl.addEventListener("submit",S);async function S(r){try{if(r.preventDefault(),y(),l=1,s.markupEl.innerHTML="",a=s.formEl.elements.image.value.trim(),!a)return;s.formEl.reset();const e=await p(a);if(!e.hits.length){i.show({title:"Oops",titleColor:"#FAFAFB",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",timeout:3e3});return}n=Math.ceil(e.totalHits/E),console.log(n),A(e.hits),w.refresh()}catch{i.error({title:"Error",titleColor:"#FAFAFB",message:"Sorry, something wrong",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",timeout:3e3})}finally{h(),u()}}s.btnLoadMore.addEventListener("click",async()=>{l+=1,y();try{const r=await p(a,l),e=g(r.hits);s.markupEl.insertAdjacentHTML("beforeend",e)}catch{i.error({title:"Error",titleColor:"#FAFAFB",message:"Sorry, something wrong",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",timeout:3e3})}finally{h(),u()}});function A(r){const e=g(r);s.markupEl.innerHTML=e}const w=new L(".gallery-item a",{captionsData:"alt",captionDelay:250});function M(){s.btnLoadMore.classList.remove("hidden")}function f(){s.btnLoadMore.classList.add("hidden")}function h(){l>=n?(f(),i.info({message:n===0?"We're sorry, no any result.":"We're sorry, but you've reached the end of search results."})):M()}function y(){s.loader.classList.remove("hidden")}function u(){s.loader.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
