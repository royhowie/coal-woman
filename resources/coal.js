$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['coal', 'coin', 'info', 'donate'],

        menu: '#menu',
        lockAnchors: false,
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['coal', 'coin', 'info', 'donate'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom'

        // scrollingSpeed: 1000
    });
});
