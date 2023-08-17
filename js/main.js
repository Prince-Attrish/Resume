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

});