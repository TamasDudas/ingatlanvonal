import { useForm, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function usePropertyForm(
  property = null,
  submitAction,
  flash = null
) {
  // Állapotok inicializálása
  const [selectedImage, setSelectedImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [existingImages, setExistingImages] = useState(
    property?.pictures || []
  );
  const [hideFeaturedImage, setHideFeaturedImage] = useState(false);
  const [detachedImages, setDetachedImages] = useState([]);
  const [selectedFeaturedImage, setSelectedFeaturedImage] = useState(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState(null);

  useEffect(() => {
    if (flash && flash.pageReload) {
      window.location.reload();
    }
  }, [flash]);

  // Form inicializálása
  const { data, setData, post, processing, errors } = useForm(
    property
      ? {
          city_id: property.city_id || "",
          street: property.street || "",
          latitude: property.latitude || "",
          longitude: property.longitude || "",
          rental_price: property.rental_price || "",
          size: property.size || "",
          sale_price: property.sale_price || "",
          minimum_rental_period: property.minimum_rental_period || "",
          year_built: property.year_built || "",
          building_floors: property.building_floors || "",
          floor: property.floor || "",
          balcony: property.balcony || "",
          furniture: property.furniture || "",
          appliances: property.appliances || "",
          view: property.view || "",
          heating_type: property.heating_type || "",
          parking: property.parking || "",

          // Boolean mezőket módosítjuk szövegre
          air_conditioning: property.air_conditioning || "",
          smoking: property.smoking || "",
          pets: property.pets || "",
          elevator: property.elevator || "",

          floor_area: property.floor_area || "",
          short_description: property.short_description || "",
          description: property.description || "",
          featured_image: null,
          featured_image_action: property?.featured_image ? "keep" : "none",
          images: [],
          images_to_remove: [],
          detach_images: [],
          detach_featured_image: false,
        }
      : {
          city_id: "",
          street: "",
          latitude: "",
          longitude: "",
          rental_price: "",
          size: "",
          sale_price: "",
          minimum_rental_period: "",
          year_built: "",
          building_floors: "",
          floor: "",
          balcony: "",
          furniture: "",
          appliances: "",
          view: "",
          heating_type: "",
          parking: "",

          // Boolean mezőket módosítjuk szövegre
          air_conditioning: "",
          smoking: "",
          pets: "",
          elevator: "",

          floor_area: "",
          short_description: "",
          description: "",
          featured_image: "",
          images: [],
        }
  );

  // Módosított kép eltávolítási függvény - adatbázisból is törli a képet
  const detachImage = (imageId) => {
    router.delete(
      `/pictures/${imageId}`,
      {},
      {
        onSuccess: (page) => {
          // Ellenőrizzük, hogy sikeres válasz után kell-e újratölteni az oldalt
          if (page.props.flash && page.props.flash.pageReload) {
            window.location.reload();
          } else {
            // Ha nincs újratöltés kérve, csak frissítjük az UI-t
            setExistingImages(
              existingImages.filter((img) => img.id !== imageId)
            );
            setDetachedImages([...detachedImages, imageId]);
            setData("detach_images", [...detachedImages, imageId]);
          }
        },
        onError: (errors) => {
          console.error("Hiba a kép törlésekor:", errors);
          alert("Hiba történt a kép törlésekor!");
        },
        // Hozzáadjuk a preserveScroll opciót, hogy ne görgessen az oldal tetejére
        preserveScroll: true,
        // Ezzel jelezzük, hogy csak az adott komponenst kell frissíteni, nem az egész oldalt
        only: ["errors", "pictures"],
      }
    );
  };

  // Módosított kiemelt kép eltávolítási függvény - adatbázisból is törli a képet
  const detachFeaturedImage = () => {
    // Ha létező kiemelt kép van, és van azonosítója, akkor törölni kell az adatbázisból is
    if (property?.featured_image_id) {
      router.delete(
        `/pictures/${property.featured_image_id}`,
        {},
        {
          onSuccess: (page) => {
            // Ellenőrizzük, hogy sikeres válasz után kell-e újratölteni az oldalt
            if (page.props.flash && page.props.flash.pageReload) {
              window.location.reload();
            } else {
              // Ha nincs újratöltés kérve, csak frissítjük az UI-t
              setData("featured_image", null);
              setData("featured_image_action", "remove");
              setHideFeaturedImage(true);
            }
          },
          onError: (errors) => {
            console.error("Hiba a kiemelt kép törlésekor:", errors);
            alert("Hiba történt a kiemelt kép törlésekor!");
          },
        }
      );
    } else {
      // Ha nincs képazonosító, csak a UI-t frissítjük
      setData("featured_image", null);
      setData("featured_image_action", "remove");
      setHideFeaturedImage(true);
    }
  };

  const handleFeaturedImageChange = (file) => {
    setData("featured_image", file);
    setData("featured_image_action", "replace");
    setSelectedFeaturedImage(file);
    if (file) {
      setFeaturedImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageAdd = (file) => {
    if (file) {
      setSelectedImage((prev) => [...prev, file]);
      setImagePreview((prev) => [...prev, URL.createObjectURL(file)]);
      setData("images", [...selectedImage, file]);
    }
  };

  const removeImage = (index) => {
    const updatedImages = [...selectedImage];
    updatedImages.splice(index, 1);

    const updatedPreviews = [...imagePreview];
    URL.revokeObjectURL(updatedPreviews[index]);
    updatedPreviews.splice(index, 1);

    setSelectedImage(updatedImages);
    setImagePreview(updatedPreviews);
    setData("images", updatedImages);
  };

  // Form elküldési logika
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key !== "images" && key !== "featured_image") {
        formData.append(key, data[key]);
      }
    });

    selectedImage.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    if (selectedFeaturedImage) {
      formData.append("featured_image", selectedFeaturedImage);
    } else if (
      property &&
      property.featured_image &&
      !data.detach_featured_image
    ) {
      formData.append("keep_featured_image", "true");
    }

    if (data.detach_images && data.detach_images.length > 0) {
      data.detach_images.forEach((imageId, index) => {
        formData.append(`detach_images[${index}]`, imageId);
      });
    }

    if (property) {
      post(submitAction + "?_method=PUT", formData);
    } else {
      post(submitAction, formData);
    }
  };

  return {
    // Form állapot
    data,
    setData,
    errors,
    processing,

    // Kép állapotok
    selectedImage,
    imagePreview,
    existingImages,
    hideFeaturedImage,
    featuredImagePreview,
    detachedImages,
    selectedFeaturedImage,

    // Függvények
    detachImage,
    detachFeaturedImage,
    handleFeaturedImageChange,
    handleImageAdd,
    removeImage,
    handleSubmit,
  };
}
