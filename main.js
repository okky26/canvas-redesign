$(document).ready(function(){

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.nav__container').toggleClass('active');
    })
    
    $(window).scroll(function(){
        parallaxTop('.hero-content');
        parallaxBottom('.hero-video-content');
    })

    $(window).on('scroll resize', revealOnScroll)
})

let animationTarget = $('.animate')

function revealOnScroll(){
    let windowHeight = $(window).height();
    let scrollPos = ($(window).scrollTop()) - 250;
    let windowBottomPos = (windowHeight + scrollPos);

    $.each(animationTarget, function(){
        let element = $(this);
        let elementHeight = element.outerHeight();
        let elementTopPos = element.offset().top;
        let elementBottomPos = (elementTopPos + elementHeight);

        if(elementBottomPos >= scrollPos && elementTopPos <= windowBottomPos){
            element.addClass('in-view');
        } else {
            element.removeClass('in-view')
        }
    })
}


function parallaxTop(target){

    let xScroll = $(window).scrollTop();

    $(target).css('transform', `translateY(-${xScroll * 0.05}px)`);
}

function parallaxBottom(target){

    let xScroll = $(window).scrollTop();

    $(target).css('transform', `translateY(${xScroll * 0.05}px)`);
}