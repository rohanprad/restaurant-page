const contentDiv = document.querySelector('#content');
const contactDiv = document.createElement('div');
contactDiv.id = "contacts-container"
const facebookDiv = document.createElement('div');
const igDiv = document.createElement('div');
const gmailDiv = document.createElement('div');
const phoneDiv = document.createElement('div');
facebookDiv.className = "contact-div";
igDiv.className = "contact-div";
gmailDiv.className = "contact-div";
phoneDiv.className = "contact-div";

facebookDiv.innerHTML = "<h2>Facebook</h2>";
igDiv.innerHTML = "<h2>Instagram</h2>";
gmailDiv.innerHTML = "<h2>Email</h2>";
phoneDiv.innerHTML = "<h2>Phone</h2>";

contactDiv.appendChild(facebookDiv);
contactDiv.appendChild(igDiv);
contactDiv.appendChild(gmailDiv);
contactDiv.appendChild(phoneDiv);


export function loadContactPage(){
    contentDiv.innerHTML = ""; 
    contentDiv.appendChild(contactDiv); 
}
