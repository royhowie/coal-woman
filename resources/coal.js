$(document).ready(function() {
    var coinDropped = false
    $('#fullpage').fullpage({
        anchors: [1, 2, 3, 4, 5, 6].map(String),
        // anchors: ['coal', 'coin', 'info', 'donate'],
        lockAnchors: false,
        loopHorizontal: false,
        // navigation: true,
        // navigationPosition: 'right',
        slidesNavPosition: 'bottom',
        slidesNavigation: true,
        onLeave: function (index, next, direction) {
            console.log('args:', arguments)

            if (index == 2 && next == 3 && direction == 'down' && !coinDropped) {
                console.log('hello!')
                coinDropped = true
            }
        }
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
