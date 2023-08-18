$(document).ready(function() {
    $('#ripples').ripples({
        resolution: 512,
        dropRadius: 10
    });

    const bars = document.querySelectorAll('.progress__bar');
    
    bars.forEach((bar) => {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];

        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })


    // Image Fillter

    var $wrapper = $('.portfolio__wrapper');

    // Initialize Isotope for all
    $wrapper.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationOptions : {
            duration : 750,
            easing : 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Initialize Isotope for each tab
            $wrapper.isotope({
                filter : selector,
                layoutMode : 'masonry',
                animationOptions : {
                    duration : 750,
                    easing : 'linear'
                }
            });

            
            links.forEach(link => {
                link.classList.remove('active');
            })
            
            e.target.classList.add('active');

        });
    });

    // Magnific Popup
    $('.magnific_popup').magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        },
        zoom : {
            enable : true
        }
    });

    // Slick Slider
    $('.slider').slick({
        arrows: false,
        autoplay: true
    });

    // Print resume
    var printBtn = document.getElementById('print');

    printBtn.addEventListener('click', () => {
        print();
    })

});