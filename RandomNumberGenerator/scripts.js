const generateBtn=document.getElementById("Generate");
const label=document.getElementById("myLabel");
const max=document.getElementById("maxInput");
const min=document.getElementById("minInput");
const submit=document.getElementById("submit");

submit.onclick=function(){
    min.value=Number(min.value);
    max.value=Number(max.value);
    if(min.value>=max.value){
        window.alert("Invalid input: Min should be less than Max");

    }
    else{
        window.alert(`Values are set: Min=${min.value}, Max=${max.value}`);
    } 

      
};
generateBtn.onclick=function(){
    const minv=Number(min.value);
    const maxv=Number(max.value);
    const randomNumber=Math.floor(Math.random()*(maxv-minv+1)) + minv;
    label.textContent=randomNumber;
};