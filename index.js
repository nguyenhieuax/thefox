$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots: false,
    responsiveClass:true,
    navText: ["<img src='img/pre.png'>","<img src='img/next.png'>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})
    

$(function(){
    $(window).scroll(function(){

        //xác định vị trí hiện tại
        currentPositon = $(window).scrollTop();
        console.log(currentPositon);

        //Thực hiện addClass, removeClass
        if(currentPositon>1){
            $('.navbar').addClass('upgrade');
        }
        else  if(currentPositon<1)
        {
            $('.navbar').removeClass('upgrade');
        }

    })

}
)

$(window).load("#home", function () {

    
}); 
