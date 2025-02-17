'use strict';

//Navbar Toggling Function

const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const menu = document.querySelector('.nav');
const menuLinkBtn = document.querySelectorAll('.nav-link');

const menuToggle = () => menu.classList.toggle('active');
menuOpenBtn.addEventListener('click', menuToggle);
menuCloseBtn.addEventListener('click', menuToggle);

for(let i = 0; i < menuLinkBtn.length; i++){
    menuLinkBtn[i].addEventListener('click', menuToggle);
}

//Tab Navigation
// Tab Navigation
//Tab Navigation
const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');

//Tab Navigation
tabButtons.forEach(button => {
    button.addEventListener('click', function () {
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContent.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        document.querySelector(`.${this.classList[0]}.tab-content`).classList.add('active');
    });
});





//Portfolio Carousel

const portfolioCarouselCards = document.querySelectorAll('.portfolio-carousel-card');
const portfolioCarouselInner = document.querySelector('.portfolio-carousel-inner');
const portfolioCarouselNext = document.querySelector('#portfolio-carousel-next');
const portfolioCarouselPrev = document.querySelector('#portfolio-carousel-prev');

const totalPortfoCard = portfolioCarouselCards.length;
let portfoCount = 0;

const carouselFunc = function(countParam){

    if(countParam >= totalPortfoCard - 1) portfoCount = totalPortfoCard - 1;
    if(countParam <= 0) portfoCount = 0;

    portfolioCarouselInner.style.transform = `translateX(-${100 / totalPortfoCard * portfoCount}%)`;
}

portfolioCarouselNext.addEventListener('click', function() {
    portfoCount++;
    carouselFunc(portfoCount);
});

portfolioCarouselPrev.addEventListener('click', function(){
    portfoCount--;
    carouselFunc(portfoCount);
});

document.querySelector('.download-cv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'resume.pdf';  // Change to your resume file path
    link.download = 'Your_Resume.pdf'; // Change to the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
