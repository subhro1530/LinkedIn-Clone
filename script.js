const prev = document.getElementById("prev")
const next = document.getElementById("next")
const sl1 = document.getElementById("sl-1")
const sl2 = document.getElementById("sl-2")
const sl3 = document.getElementById("sl-3")
let i = 1;
function incr(k){
    if(k==1)
    {
        console.log("k=1","i="+i)
        sl1.classList.remove("one")
        sl2.classList.add("two")
        sl3.classList.add("three")
    }
    else if(k==2)
    {
        console.log("k=2","i="+i)
        sl2.classList.remove("two")
        sl1.classList.add("one")
        sl3.classList.add("three")
    }
    else if(k==3)
    {
        console.log("k=3","i="+i)
        sl3.classList.remove("three")
        sl1.classList.add("one")
        sl2.classList.add("two")
    }
    if(k>3){
        console.log("k>3","i="+i)
        i=0
        incr(++i)
    }
    if(k<1){
        console.log("k<1","i="+i)
        i=4;
        incr(--i)
    }
}
next.addEventListener("click",()=>{
    incr(++i)
});
prev.addEventListener("click",()=>{
    incr(--i)
});