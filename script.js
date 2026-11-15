const book=document.getElementById("book");
const cover=document.getElementById("cover");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const status=document.getElementById("page-status");
const spreads=[...document.querySelectorAll(".spread")];
let page=0;
const labels=["Cover","About & Projects","Experience & Let's Talk","Thank You"];

function render(){
  book.classList.toggle("open",page>0);
  book.dataset.page=String(Math.min(page,3));
  cover.setAttribute("aria-label",page===0?"Open portfolio cover":"Close portfolio cover");
  spreads.forEach((spread,index)=>{
    const active=(page===1&&index===0)||(page===2&&index===1)||(page===3&&index===2);
    spread.classList.toggle("active",active);
    spread.setAttribute("aria-hidden",String(!active));
  });
  status.textContent=`${labels[page]} · ${page+1} / ${labels.length}`;
  prev.disabled=page===0;
  next.disabled=page===labels.length-1;
}
function goTo(nextPage){
  page=Math.max(0,Math.min(labels.length-1,nextPage));
  render();
}
cover.addEventListener("click",()=>goTo(page===0?1:0));
next.addEventListener("click",()=>goTo(page+1));
prev.addEventListener("click",()=>goTo(page-1));
document.querySelectorAll(".spread").forEach(spread=>{
  spread.addEventListener("click",event=>{
    if(event.target.closest("a")) return;
    if(page<labels.length-1) goTo(page+1);
  });
});
document.addEventListener("keydown",event=>{
  if(event.key==="ArrowRight") goTo(page+1);
  if(event.key==="ArrowLeft") goTo(page-1);
  if(event.key==="Escape") goTo(0);
});
render();
