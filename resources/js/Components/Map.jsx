import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ latitude, longitude, address }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Ha nincs koordináta, ne jelenítsen meg térképet
    if (!latitude || !longitude) return;

    // Ha a térkép konténer nem létezik, kilépünk
    if (!mapRef.current) return;

    // Töröljük a korábbi térképet, ha létezik
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

    // Leaflet marker ikon beállítása (alapértelmezett ikon javítása)
    const defaultIcon = L.icon({
      iconUrl: "/assets/img/marker-icon.png",
      shadowUrl: "/assets/img/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = defaultIcon;

    // Térkép inicializálása
    const map = L.map(mapRef.current).setView([latitude, longitude], 14);

    // OpenStreetMap alaptérkép hozzáadása
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Marker elhelyezése az ingatlan helyén
    const marker = L.marker([latitude, longitude]).addTo(map);

    // Popup hozzáadása a markerhez, ha van cím
    if (address) {
      marker.bindPopup(address).openPopup();
    }

    // Mentés a referenciába a későbbi tisztítás miatt
    mapInstanceRef.current = map;

    // Frissítés ablakméret változásakor
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(mapRef.current);

    // Tisztítás
    return () => {
      if (mapRef.current) {
        resizeObserver.unobserve(mapRef.current);
      }
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, [latitude, longitude, address]);

  return (
    <div className="mt-8 max-w-5xl mx-auto">
      <h3 className="font-bold text-xl mb-4">Ingatlan helye</h3>
      <div ref={mapRef} className="h-[400px] w-full rounded-lg shadow-md"></div>
    </div>
  );
}
