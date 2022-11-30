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
            element.removeClass('in-view');
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

// $('.content-container').each(function(){
//     const dataValue = $(this).find('.elementor-counter-number').data('to-value');
//     const reviewImg = $(this).find('.img-container > img');
    
//     if(dataValue===5){
//         $(reviewImg).each(function(){
//             $(this).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         });
//     }else if(dataValue > 4 && dataValue < 5){
//         $(reviewImg[0]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[1]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[2]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[3]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[4]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-mixes.png');
//     }else if(dataValue===4){
//         $(reviewImg[0]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[1]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[2]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[3]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[4]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//     }else if(dataValue > 3 && dataValue < 4){
//         $(reviewImg[0]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[1]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[2]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[3]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-mixes.png');
//         $(reviewImg[4]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//     }else if(dataValue===3){
//         $(reviewImg[0]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[1]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[2]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[3]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[4]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//     }else if(dataValue > 2 && dataValue < 3){
//         $(reviewImg[0]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[1]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[2]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-mixes.png');
//         $(reviewImg[3]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[4]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//     }else if(dataValue===2){
//         $(reviewImg[0]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[1]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[2]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[3]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[4]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//     }else if(dataValue > 1 && dataValue < 2){
//         $(reviewImg[0]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[1]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-mixes.png');
//         $(reviewImg[2]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[3]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[4]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//     }else if(dataValue===1){
//         $(reviewImg[0]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-color.png');
//         $(reviewImg[1]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[2]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[3]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[4]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//     }else if(dataValue > 0 && dataValue < 1){
//         $(reviewImg[0]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-mixes.png');
//         $(reviewImg[1]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[2]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[3]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         $(reviewImg[4]).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//     }else{
//         $(reviewImg).each(function(){
//             $(this).attr('src','http://offerclaw.com/wp-content/uploads/2022/11/fire-outline.png');
//         });
//     }
// });