
// GOOGLE MAP
var map = '';
var center;

function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(13.758468, 100.567481),
    scrollwheel: false
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  google.maps.event.addDomListener(map, 'idle', function () {
    calculateCenter();
  });

  google.maps.event.addDomListener(window, 'resize', function () {
    map.setCenter(center);
  });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
  document.body.appendChild(script);
}

$(function () {
  loadGoogleMap();
});

// NIVO LIGHTBOX
$('#portfolio a').nivoLightbox({
  effect: 'fadeScale',
});

// HIDE MOBILE MENU AFTER CLIKING ON A LINK
$('.navbar-collapse a').click(function () {
  $(".navbar-collapse").collapse('hide');
});

fetch('BeritaTerkini.json')
  .then(response => response.json())
  .then(data => {
    // Mengurai data JSON dan memasukkannya ke dalam elemen HTML
    const daftarNama = document.getElementById('daftar-nama');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.nama} (${item.usia} tahun) - ${item.alamat}`;
      daftarNama.appendChild(li);
    });
  });