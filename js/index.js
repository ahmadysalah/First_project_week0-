//dom project 1////

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2019"
  },
};

// write your code here 

const nav=document.querySelector('nav');
const nav_btn=document.querySelectorAll('nav > a');

nav_btn.forEach((nav_btn,index)=> {
  nav_btn.textContent=siteContent.nav['nav-item-'+(index+1)]});
/*
nav_btn[0].textContent="Services";
nav_btn[1].textContent="Product";
nav_btn[2].textContent="Vision";
nav_btn[3].textContent="Features";
nav_btn[4].textContent="About";
nav_btn[5].textContent="Contact";
*/

///////////logo//////////
const ImageLogo=document.querySelector('img');
ImageLogo.setAttribute('src',siteContent.nav["img-src"]);

////////////// section div /////////////
const H1_section=document.querySelector('.cta-text > h1');
const button_section=document.querySelector('.cta-text > button');
var Image_sec= document.querySelector('#cta-img');

H1_section.textContent= siteContent.cta.h1;
button_section.textContent= siteContent.cta.button;
Image_sec.setAttribute('src','img/header-img.png')

/////////////main/////////////

const mainh4=document.querySelectorAll('.text-content > h4');



mainh4[0].textContent=siteContent["main-content"]["features-h4"]
mainh4[1].textContent=siteContent['main-content']['about-h4'];
mainh4[2].textContent=siteContent["main-content"]["services-h4"]
mainh4[3].textContent=siteContent["main-content"]['product-h4'];
mainh4[4].textContent=siteContent["main-content"]['vision-h4'];

const mainp=document.querySelectorAll('.text-content > p');
mainp[0].textContent=siteContent["main-content"]['features-content'];
mainp[1].textContent=siteContent["main-content"]['about-content'];
mainp[2].textContent=siteContent["main-content"]['services-content'];
mainp[3].textContent=siteContent["main-content"]['product-content'];
mainp[4].textContent=siteContent["main-content"]['vision-content'];

var Image_Mid= document.querySelector('.middle-img');
Image_Mid.setAttribute('src','img/mid-page.jpg')
//////////contact////////
const h4_contact=document.querySelector('.contact > h4');
const p_contact=document.querySelectorAll('.contact > p');

h4_contact.textContent=siteContent["contact"]["contact-h4"];
p_contact[0].textContent=siteContent["contact"]["address"];
p_contact[1].textContent=siteContent["contact"]["phone"];
p_contact[2].textContent=siteContent["contact"]["email"];

///////////////footer ///////
const p_footer=document.querySelector('footer > p');
p_footer.textContent=siteContent["footer"]["copyright"];
//////////make nav green////////

nav_btn.forEach((nav_btn)=> {
  nav_btn.style.color="green" } );

  ///////add to nav///////////////////////
  const new_nav=['Vision','Site Map']
  for(let i=0; i<2;i++){
  const nav_a = document.createElement('a');
  nav_a.textContent=new_nav[i]
  nav_a.style.color="green";
  nav.appendChild(nav_a);
  }

  ///////////////click ////////
  button_section.addEventListener('click', () => {
    button_section.textContent="U clicked on Me";
  button_section.style.cssText='background:#008CBA;'
  });
