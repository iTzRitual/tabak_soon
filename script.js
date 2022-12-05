// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 50.4347436, lng: 16.2388802 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      mapId: "3450d6976b362340",
      zoom: 16,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;
  