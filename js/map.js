initMap();

async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [60.615424, 56.829406],
                zoom: 12,
                controls: [],
            }
        } );



    map.addChild(new YMapDefaultSchemeLayer());
    /* map.behaviors.disable('scrollZoom'); */
}
const markerElement = document.createElement('div');
markerElement.className = 'marker-class';
markerElement.innerText = "I'm marker!";

const marker = new YMapMarker(
  {
    source: '<p>Nhfkfkf</>',
    coordinates: [56.827189, 60.585449],
    draggable: true,
    mapFollowsOnDrag: true
  },
  markerElement
);

map.addChild(marker);

/* const init = () => {
    myMap = new ymap.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    })
}

ymaps.ready(init);
 */




/* 
initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [37.588144, 55.733842],

                // Уровень масштабирования
                zoom: 10
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
} */