import React, { useEffect, useState } from "react";
import usePropertyForm from "@/Hooks/usePropertyForm";
import { usePage } from "@inertiajs/react";

// Import sections
import LocationSection from "./PropertyForm/LocationSection";
import PriceSection from "./PropertyForm/PriceSection";
import DetailsSection from "./PropertyForm/DetailsSection";
import AmenitiesSection from "./PropertyForm/AmenitiesSection";
import ImagesSection from "./PropertyForm/ImagesSection";

export default function PropertyForm({
  cities,
  property = null,
  submitAction,
}) {
  const { flash } = usePage().props;
  // Állapot a kiválasztott képeknek közvetlenül a komponensben
  const [selectedImage, setSelectedImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [address, setAddress] = useState("");
  // Új state a kerület tárolására - ez nem kerül az adatbázisba
  const [district, setDistrict] = useState("");

  // Ellenőrizzük, hogy Budapest van-e kiválasztva
  const [isBudapest, setIsBudapest] = useState(false);

  const {
    data,
    setData,
    errors,
    processing,
    existingImages,
    hideFeaturedImage,
    featuredImagePreview,
    detachImage,
    detachFeaturedImage,
    handleFeaturedImageChange,
    handleSubmit,
  } = usePropertyForm(property, submitAction, flash);

  // Ellenőrizzük, hogy a kiválasztott város Budapest-e
  useEffect(() => {
    if (data.city_id) {
      const selectedCity = cities.find(
        (city) => city.id.toString() === data.city_id.toString()
      );
      if (selectedCity && selectedCity.name.toLowerCase() === "budapest") {
        setIsBudapest(true);
      } else {
        setIsBudapest(false);
        setDistrict(""); // Reseteljük a kerületet, ha nem Budapest a város
      }
    }
  }, [data.city_id, cities]);

  // Cím összeállítása geocoding-hoz, most már a kerületet is figyelembe véve
  useEffect(() => {
    if (data.city_id && data.street) {
      const selectedCity = cities.find(
        (city) => city.id.toString() === data.city_id.toString()
      );
      if (selectedCity) {
        if (isBudapest && district) {
          // Ha Budapest és van kerület megadva
          setAddress(
            `${data.street}, ${district} kerület, ${selectedCity.name}, Hungary`
          );
        } else {
          setAddress(`${data.street}, ${selectedCity.name}, Hungary`);
        }
      }
    }
  }, [data.city_id, data.street, cities, district, isBudapest]);

  // Gombnyomásra manuális geocoding
  const handleGeocodeClick = (e) => {
    e.preventDefault();

    if (!data.city_id || !data.street) {
      alert(
        "Kérlek add meg a várost és az utcát a koordináták kiszámításához!"
      );
      return;
    }

    const selectedCity = cities.find(
      (city) => city.id.toString() === data.city_id.toString()
    );
    if (!selectedCity) return;

    let fullAddress;
    if (isBudapest && district) {
      fullAddress = `${data.street}, ${district} kerület, ${selectedCity.name}, Hungary`;
    } else {
      fullAddress = `${data.street}, ${selectedCity.name}, Hungary`;
    }

    // Nominatim geocoding API használata
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        fullAddress
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          handleLocationFound(lat, lon);
        } else {
          alert("Nem sikerült megtalálni a koordinátákat ehhez a címhez.");
        }
      })
      .catch((error) => {
        console.error("Geocoding hiba:", error);
        alert("Hiba történt a koordináták keresése közben.");
      });
  };

  // Koordináták frissítése
  const handleLocationFound = (lat, lng) => {
    setData((prevData) => ({
      ...prevData,
      latitude: lat,
      longitude: lng,
    }));
  };

  // A képek kezelése a komponensen belül
  const handleImagesChange = (files) => {
    console.log("Files received:", files);
    if (Array.isArray(files)) {
      const newImages = [...selectedImage, ...files];
      const newPreviews = [...imagePreview];

      files.forEach((file) => {
        newPreviews.push(URL.createObjectURL(file));
      });

      setSelectedImage(newImages);
      setImagePreview(newPreviews);
      setData("images", newImages);
    } else if (files) {
      const newImages = [...selectedImage, files];
      setSelectedImage(newImages);
      setImagePreview([...imagePreview, URL.createObjectURL(files)]);
      setData("images", newImages);
    }
  };

  // A kép eltávolítás kezelése a komponensen belül
  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImage];
    updatedImages.splice(index, 1);

    const updatedPreviews = [...imagePreview];
    URL.revokeObjectURL(updatedPreviews[index]);
    updatedPreviews.splice(index, 1);

    setSelectedImage(updatedImages);
    setImagePreview(updatedPreviews);
    setData("images", updatedImages);
  };

  // Képek törlése
  const handleClearImages = () => {
    setSelectedImage([]);
    setImagePreview([]);
    setData("images", []);
  };

  // Memória felszabadítása komponens lecsatolásakor
  useEffect(() => {
    return () => {
      imagePreview.forEach((url) => URL.revokeObjectURL(url));
      if (featuredImagePreview) {
        URL.revokeObjectURL(featuredImagePreview);
      }
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
      encType="multipart/form-data"
    >
      <LocationSection
        data={data}
        setData={setData}
        errors={errors}
        cities={cities}
        isBudapest={isBudapest}
        district={district}
        setDistrict={setDistrict}
        handleGeocodeClick={handleGeocodeClick}
      />

      <PriceSection data={data} setData={setData} errors={errors} />

      <DetailsSection data={data} setData={setData} errors={errors} />

      <AmenitiesSection data={data} setData={setData} errors={errors} />

      <ImagesSection
        property={property}
        errors={errors}
        existingImages={existingImages}
        hideFeaturedImage={hideFeaturedImage}
        featuredImagePreview={featuredImagePreview}
        detachImage={detachImage}
        detachFeaturedImage={detachFeaturedImage}
        handleFeaturedImageChange={handleFeaturedImageChange}
        handleImagesChange={handleImagesChange}
        handleRemoveImage={handleRemoveImage}
        handleClearImages={handleClearImages}
        imagePreview={imagePreview}
      />

      {/* Submit gomb */}
      <div className="p-6 text-center">
        <button
          type="submit"
          disabled={processing}
          className="w-full px-4 py-2 bg-gradient-to-r from-[#114d56] to-[#1881929d] text-[white] rounded hover:bg-opacity-90 transition hover:text-[#85cbd6] text-xl"
        >
          {processing ? "Feldolgozás..." : property ? "Frissítés" : "Mentés"}
        </button>
      </div>
    </form>
  );
}
