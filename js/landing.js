var myCenter = new google.maps.LatLng(-37.81411, 144.96327999999999);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var image = 'images/maker.png';
    var marker = new google.maps.Marker({
        position: myCenter,
        icon: image
    });
    infoBubble = new InfoBubble({
        maxWidth: 300
    });
    infoBubble = new InfoBubble({
        map: map,
        content: '<div class="mylabel"><h4>Почтовый адрес </h4> <p> 423800, Татарстан, г. Набережные Челны, район БСИ, промзона, ул<p> <h4>Почтовый адрес </h4> <p> 423800, Татарстан, г. Набережные Челны, район БСИ, промзона, ул<p> </div>',
        shadowStyle: 1,
        padding: 0,
        backgroundColor: '#00518f',
        borderRadius: 5,
        arrowSize: 10,
        borderWidth: 1,
        minWidth: 300,
        minHeight: 300,
        borderColor: '#2c2c2c',
        disableAutoPan: false,
        hideCloseButton: true,
        arrowPosition: 30,
        arrowPosition: 7,
        backgroundClassName: 'phoney',
        pixelOffset: new google.maps.Size(800, 720),
        backgroundClassName: 'transparent',
        arrowStyle: 2
    });
    google.maps.event.addListener(marker, 'click', function() {
        infoBubble.open(map, marker);
    });
    marker.setMap(map);
    map.setOptions({
        styles: styles
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {
    var top = $('#Hubs-listings').offset().top;
    $(window).scroll(function() {
        if ($(this).scrollTop() > top) {
            $('#second-menu').fadeIn();
        } else {
            $('#second-menu').fadeOut();
        }
    });
});

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(
                /^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +
            ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$('a[href^="Hubs-listings"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset(100).top
        }, 1000);
    }
});