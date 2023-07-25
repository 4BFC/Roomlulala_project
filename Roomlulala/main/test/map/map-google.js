window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map_google"), {
        center: { lat: 37.5522859, lng: 126.9225656 },
        zoom: 13 //14
    });

    const rooms = [ // 홍대 방탈출 카페
    { label: "C", name: "크라임씬 방탈출카페 코티지가든", lat: 37.5487718, lng: 126.9174037},
    { label: "E", name: "이스케이퍼스", lat: 37.5595427,lng: 126.9260677},
    { label: "B", name: "브레이크아웃 이스케이프 홍대본점", lat: 37.552887,lng: 126.924829},
    { label: "M", name: "미스터리룸이스케이프홍대2호점", lat: 37.5496617,lng: 126.9194436},
    { label: "S", name: "서울이스케이프룸 홍대2호점", lat:37.550061 ,lng: 126.9223922}
];

const bounds = new google.maps.LatLngBounds();
const infoWindow = new google.maps.InfoWindow();

    rooms.forEach(({label, name, lat, lng }) => {
        const marker = new google.maps.Marker({ // Marker 클래스는 객체를 인자로 받음
            position: { lat, lng },
            label,
            map
        });
        bounds.extend(marker.position);

        marker.addListener("click", () => {
            map.panTo(marker.position);
            infoWindow.setContent(name);
            infoWindow.open({
                anchor: marker,
                map
            });
        })
    });

    map.fitBounds(bounds);
};
// 두 번째 인자는 지도를 어떻게 보여줄 것인가, 어느 지점을 기준으로
// lat 위도, lng 경도
// 위도 경도 값은 url에서 찾을 수 있음 
// 라스트 이스케이프 위도, 경도 값 37.5007641 127.0282168

