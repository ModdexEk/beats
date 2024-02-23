    ymaps.ready(init);
    function init(){

        var myMap = new ymaps.Map("map", {
            center: [56.828833, 60.648816],
            zoom: 12,
            controls: []
        });

        var coords = [
            [56.826669, 60.518010],
            [56.790133, 60.594571],
            [56.886292, 60.594228],
            [56.851132, 60.733274]
        ];
        
        var myCollection = new ymaps.GeoObjectCollection({}, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: './img/marker.svg',
            iconImageSize: [58, 73],
            iconImageOffset: [-29, -73]
        });

        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i]));
        }
        
        myMap.geoObjects.add(myCollection);

        myMap.behaviors.disable('scrollZoom');
    }
