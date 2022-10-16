const container = document.querySelector('.container');
const heading = document.querySelector('h2');
const selectedColor = document.querySelector('.selected-color');

const colors = ['red','orange','yellow','green','blue','indigo','violet'];

for(let color of colors){
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);

    box.style.backgroundColor= color;

    box.addEventListener('click',function(){
        heading.innerText = "You have selected: ";
        selectedColor.innerText = box.style.backgroundColor;
        selectedColor.style.backgroundColor = box.style.backgroundColor;
    });
}
console.log("Hello");