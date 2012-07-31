mapbox.auto('map','matt.map-7pq00fdn', function(map) {

    document.getElementById('austria').onclick = function() {
        map.centerzoom({ lat: 47.58, lon: 14.2 }, 7, true);
    };
    document.getElementById('belarus').onclick = function() {
        map.centerzoom({ lat: 53.7, lon: 27.9 }, 6, true);
    };
    document.getElementById('cz').onclick = function() {
        map.centerzoom({ lat: 49.8, lon: 15.5 }, 7, true);
    };
    document.getElementById('france').onclick = function() {
        map.centerzoom({ lat: 46.6, lon: 2.5 }, 6, true);
    };
    document.getElementById('germany').onclick = function() {
        map.centerzoom({ lat: 51.1, lon: 10.5 }, 6, true);
    };
    document.getElementById('latvia').onclick = function() {
        map.centerzoom({ lat: 57, lon: 24.6 }, 7, true);
    };
    document.getElementById('lithuania').onclick = function() {
        map.centerzoom({ lat: 55.4, lon: 24 }, 7, true);
    };
    document.getElementById('netherlands').onclick = function() {
        map.centerzoom({ lat: 52.3, lon: 5.5 }, 7, true);
    };
    document.getElementById('poland').onclick = function() {
        map.centerzoom({ lat: 52.3, lon: 19.6 }, 6, true);
    };
    document.getElementById('ukraine').onclick = function() {
        map.centerzoom({ lat: 49.2, lon: 31.5 }, 6, true);
    };
    document.getElementById('uk').onclick = function() {
        map.centerzoom({ lat: 51.5, lon: 0 }, 7, true);
    };
    
});