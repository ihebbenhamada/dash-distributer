class Ui_MapDati {
    constructor() {
        this.EVENTS_UI();



    }
 initMap() {
    new google.maps.Map(document.getElementById("map"), {
        mapId: "8e0a97af9386fef",
        center: { lat: 48.85, lng: 2.35 },
        zoom: 12,
    });
}
}
let dati_map = new Ui_MapDati();