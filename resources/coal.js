$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['coal', 'coin', 'info', 'donate'],
        lockAnchors: false,
        loopHorizontal: false,
        navigation: true,
        navigationPosition: 'right',
        slidesNavPosition: 'bottom',
        slidesNavigation: true,
    })

    // Map each picture to its corresponding slide.
    ;[  '#susan-luery',
        '#st-croix-pic',
        '#maquette-aerial'
    ].forEach(function (key, index) {
        $(key).click(function () {
            $.fn.fullpage.moveTo(3, index + 1)
        })
    })
})
