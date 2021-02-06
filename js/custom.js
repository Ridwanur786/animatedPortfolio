$(document).ready(function(){
$.stellar({
     horizontalScrolling:false,
    verticalScrolling:true,
    verticalOffset:50,
    responsive:true,
    easing:'easeInOut'
});


});
$(document).ready(function(){

    var wow = new WOW({
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       5,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true, // act on asynchronously loaded content (default is true)
        easing:'easeInOut',
        callback: function(box) {

        },
        scrollContainer: null

    });


    wow.init();
});


$(document).ready(function(){

   $('.progress').each(function(i){
       var startColor = '#FF246C';
       var endColor = '#17E073';
        var circle = new ProgressBar.Circle(this,{
            color : '#B7FF43',
            easing:'bounce',
            strokeWidth:8,
            duration:4000,
            trailColor: '#FDFCA8',
            trailWidth: 8,

            text:{
                value:'0',
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#B422F2',
                    fontSize:'25px',
                    position:'absolute',
                    top:'100px',
                    left:'65px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            }

        });



       var value = ($(this).attr('value')/100);
       $(".progress").waypoint(function(){
       circle.animate(value,{
           from:{
               color:startColor
           },
           to:{
               color:endColor
           },
           step:function(state,circle,bar){
               circle.path.setAttribute('stroke',state.color);
               console.log(circle);
               circle.setText((circle.value()*100).toFixed(0) + '%');


           }


       });

 },{ offset:"60%"});

   });

});





$('#textarea1').trigger('autoresize');

// Show sideNav
$(document).ready(function(){
$('.button-collapse').sidenav({
     menuWidth: 200, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    closeOnHover:true,
        draggable: true ,// Choose whether you can drag to open on touch screens,
 easing: 'easeInOut'
    }
);
});

function onScrollInit(items, trigger){

    items.each(function(){

        var osElement = $(this),
            osAnimationClass=osElement.attr('data-os-animation'),
            osAnimationDelay = osElement.attr('data-os-animation-delay'),
            osAnimationDuration = osElement.attr('data-os-animation-duration');
osElement.css({

    '-webkit-animation-delay':osAnimationDelay,
    '-moz-animation-delay': osAnimationDelay,
    'animation-delay': osAnimationDelay,
    '-webkit-animation-duration':osAnimationDuration,
    '-moz-animation-duration': osAnimationDuration,
    'animation-duration' : osAnimationDuration
});
        var osTrigger = (trigger) ? trigger : osElement;

        osTrigger.waypoint(function(){
            osElement.addClass('wow').addClass(osAnimationClass);
        },
            {
                triggerOnce:true, offset:'60%'
            });
    });
}

onScrollInit( $('.os-animation') );
onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));

$(document).ready(function() {

    var $carousel = $('.carousel');


$carousel .slick({
            slideToShow:1,
            lazyLoad:'onDemand',
            autoplay:true,
            speed:500,
            autoplaySpeed:4000,
            autoHeight:true,
            navigation:true,
            arrows:true,
            prevArrow:'<div class="icon_left btn-floating btn-large left"><i class="material-icons black ">keyboard_arrow_left</i></div>',
            nextArrow:'<div class="icon_right btn-floating btn-large right"><i class="material-icons large black">keyboard_arrow_right</i></div>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]

        })
        .magnificPopup({
            type: 'image',
            delegate: 'a:not(.slick-cloned)',
            gallery: {
                enabled: true
            },
            callbacks: {
                open: function() {
                    var current = $carousel.slick('slickCurrentSlide');
                    $carousel.magnificPopup('goTo', current);
                },
                beforeClose: function() {
                    $carousel.slick('slickGoTo', parseInt(this.index));
                }
            }
        });
});

$(document).ready(function(){
    $('.collapsible').collapsible();
});

  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');