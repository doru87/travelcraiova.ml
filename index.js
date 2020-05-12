const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);

const nextButton = document.querySelector(".button-right");
const prevButton = document.querySelector(".button-left");

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

slides.forEach((slide,index) => {
    slide.style.left = slideWidth * index + 'px';
})

nextButton.addEventListener('click', e => {

    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    track.style.transform = 'translateX(-' + nextSlide.style.left + ')';
	currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
    
})

prevButton.addEventListener('click', e => {

    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    track.style.transform = 'translateX(-' + prevSlide.style.left + ')';
	currentSlide.classList.remove('current-slide');
	prevSlide.classList.add('current-slide');
})

const customerReviews = document.querySelector(".customer-reviews .container");
const reviews = Array.from(customerReviews.children);
    reviews.forEach (review => {
        const arrow = review.querySelector(".review-panel").querySelector(".arrow")

        arrow.addEventListener('click', e => {
            if(arrow.querySelector("i").classList.contains("fa-angle-double-down")){
                arrow.parentElement.parentElement.querySelector('.comment').style.display="block";
                arrow.parentElement.parentElement.querySelector('.comment').style.height="auto";

                var screen = window.matchMedia("screen and (max-width: 1000px)");
                if (screen.matches){
                    arrow.parentElement.parentElement.style.marginBottom="250px";
                }
            
                arrow.querySelector("i").classList.remove("fa-angle-double-down");
                arrow.querySelector("i").classList.add("fa-angle-double-up");
                review.querySelector(".dots").style.display="block"
            } else {
                arrow.parentElement.parentElement.querySelector('.comment').style.display="none";
                arrow.parentElement.parentElement.style.marginBottom="0px";
                arrow.querySelector("i").classList.remove("fa-angle-double-up");
                arrow.querySelector("i").classList.add("fa-angle-double-down");
                review.querySelector(".dots").style.display="none"
            }
        
        })
    })
