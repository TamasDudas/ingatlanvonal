import { Head, usePage, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import DescriptionProperty from "@/Components/DescriptionProperty";
import FeatureProperty from "@/Components/FeatureProperty";
import MainFeatureProperty from "@/Components/MainFeatureProperty";
import FeaturedImage from "@/Components/FeaturedImage";
import Map from "@/Components/Map";

export default function Property({ property }) {
  const { city, pictures } = property;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const { auth } = usePage().props;
  const loggedIn = !!auth.user;

  // Formázó függvény az ezres elválasztáshoz

  // Összes kép a lightbox számára
  const galleryImages = pictures.map((picture, idx) => ({
    id: picture.id,
    url: `/storage/${picture.url}`,
    alt: `Ingatlan kép ${idx + 1}`,
    lightboxSrc: `/storage/${picture.url}`,
    lightboxAlt: `Ingatlan kép - ${property.street}`,
  }));

  // Lightbox számára már csak a megfelelő mezőket használjuk
  const lightboxSlides = galleryImages.map((img) => ({
    src: img.lightboxSrc,
    alt: img.lightboxAlt,
  }));
  const { pageReload } = usePage().props.flash || {};

  useEffect(() => {
    if (pageReload) {
      setTimeout(() => {
        window.location.reload();
      }, 50);
    }
  }, [pageReload]);

  const handleEdit = () => {
    router.visit(route("property.edit", property.id));
  };

  return (
    <div className="container mx-auto p-4">
      <Head title={property.street} />

      <MainFeatureProperty property={property} city={city} />

      {/* Ingatlan adatok */}
      <div className="w-full relative overflow-hidden mb-6 rounded-lg">
        <FeaturedImage propertyImage={property} />
      </div>
      <div className="text-transparent rounded-lg shadow-lg p-6 mb-6 text-[#114d56] max-w-6xl mx-auto">
        {/* Tulajdonságok két oszlopban középen arányosan */}
        <div className="max-w-5xl mx-auto">
          {/* Flexbox a tökéletes középre igazításhoz */}
          <FeatureProperty property={property} />

          <DescriptionProperty description={property.description} />
        </div>

        {/* Képgaléria - Teljes grid elrendezés */}
        <div className="mt-8 max-w-5xl mx-auto">
          <h3 className="font-bold text-xl mb-4">Képgaléria</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {galleryImages.map((image, idx) => (
              <div
                key={image.id}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => {
                  setIndex(idx);
                  setOpen(true);
                }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Térkép komponens hozzáadása */}
        {property.latitude && property.longitude && (
          <div className="mt-8 max-w-5xl mx-auto">
            <Map
              latitude={property.latitude}
              longitude={property.longitude}
              address={`${property.street}, ${city?.name || ""}`}
            />
          </div>
        )}

        {/* Szerkesztés gomb */}
        {loggedIn && (
          <div className="mt-8 flex justify-center">
            <button
              className=" bg-[#165862] hover:bg-[#32a8ba] text-white rounded-md p-2 transition-colors duration-200"
              onClick={handleEdit}
            >
              Szerkesztés
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={lightboxSlides}
        index={index}
        plugins={[Zoom, Thumbnails]}
      />
    </div>
  );
}
