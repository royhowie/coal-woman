$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String),
        lockAnchors: false,
        navigation: false,
        slidesNavigation: false
    })
    $('#coin0').click(function () {
        $.fn.fullpage.moveTo(10)
    })
})
