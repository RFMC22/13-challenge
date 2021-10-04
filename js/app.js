const question = document.querySelectorAll(".question");
const  text = document.querySelectorAll(".text");
const img = document.querySelectorAll(".arrow");
const h5 = document.querySelectorAll("h5");

question.forEach((elemento,i) =>{
    elemento.addEventListener('click',function(){
        text.forEach((text, i) =>{
            text.style.display = "none";
            img[i].style.transform = "rotate(0deg)";
            h5[i].style.fontWeight = "400";
        })
        text[i].style.display = "block";
        img[i].style.transform = "rotate(180deg)";
        h5[i].style.fontWeight = "700";
    })
});