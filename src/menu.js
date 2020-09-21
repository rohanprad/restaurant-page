const contentDiv = document.querySelector('#content');
const menuDiv = document.createElement('div');
menuDiv.id = "menu-items";

const pastryDiv = document.createElement('div');
pastryDiv.className ='menu-div';
const pastryImage = document.createElement('img');
pastryImage.src = "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg";
pastryImage.alt = "Pastry Image";
const pastryHeader = document.createElement('h2');
pastryHeader.textContent = "Pastries";
pastryDiv.appendChild(pastryImage);
pastryDiv.appendChild(pastryHeader);

const breadDiv = document.createElement('div');
breadDiv.className = 'menu-div';
const breadImage = document.createElement('img');
breadImage.src = "https://cdn.pixabay.com/photo/2014/07/22/09/59/bread-399286_960_720.jpg";
breadImage.alt = "Bread Image";
const breadHeader = document.createElement('h2');
breadHeader.textContent = "Breads";
breadDiv.appendChild(breadImage);
breadDiv.appendChild(breadHeader);

const donutDiv = document.createElement('div');
donutDiv.className ='menu-div';
const donutImage = document.createElement('img');
donutImage.src = "https://cdn.pixabay.com/photo/2016/11/05/20/17/donut-1801316_960_720.jpg";
donutImage.alt = "Donut Image";
const donutHeader = document.createElement('h2');
donutHeader.textContent = "Donuts";
donutDiv.appendChild(donutImage);
donutDiv.appendChild(donutHeader);

menuDiv.appendChild(pastryDiv);
menuDiv.appendChild(breadDiv);
menuDiv.appendChild(donutDiv);

export function loadMenuPage(){
    contentDiv.innerHTML = "";
    contentDiv.appendChild(menuDiv);
}
