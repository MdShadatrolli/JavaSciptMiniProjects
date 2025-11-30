const decreaseBtn=document.getElementById("decrease");
const resetBtn=document.getElementById("resetBtn");
const increaseBtn=document.getElementById("increase");
const countLabel=document.getElementById("countlabel");
let count=0;
increaseBtn.onclick=function(){
    count+=1;
    countLabel.textContent=count;
}
decreaseBtn.onclick=function(){
    count-=1;
    countLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}