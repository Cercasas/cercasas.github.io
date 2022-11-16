function initMap() {
    const poli = {lat:-22.735225960154775, lng:-47.314566985958166}

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: poli,
    })
    
    const marker_poli = new google.maps.Marker({
        position: poli,
        map: map,
    });
};