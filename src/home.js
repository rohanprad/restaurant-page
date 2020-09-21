const contentDiv = document.querySelector('#content');
const image = document.createElement('img');
image.src = "https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
image.alt = "Homepage Image";
image.className = "home-img";
const aboutDiv = document.createElement('div');
aboutDiv.id = "description";
aboutDiv.innerHTML = "<h2>About Us</h2><p>Nunc quis libero eget sem ultricies hendrerit. Nulla augue felis, gravida ac ullamcorper eu, pellentesque eget nisi. Cras consequat odio non enim suscipit mattis. Praesent ornare diam sed ipsum feugiat, ac eleifend tortor imperdiet. Maecenas quis consequat arcu, ac egestas orci. Mauris ac odio fermentum, gravida est condimentum, venenatis augue. Aliquam pulvinar porttitor dignissim. Donec at eros ut nisl rutrum ullamcorper eget in mauris. In ac sagittis mauris. Suspendisse malesuada eros vitae orci maximus efficitur. Aliquam et pellentesque massa, ut pellentesque mi.</p>"


export function loadHomepage(){
    contentDiv.innerHTML = ""; 
    contentDiv.appendChild(image);
    contentDiv.appendChild(aboutDiv);
}

