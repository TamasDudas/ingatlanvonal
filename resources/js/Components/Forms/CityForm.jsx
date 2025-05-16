import React from "react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import ImageUploader from "@/Components/Upload/ImageUploader"; // Az importálás útvonala attól függ, hova helyezted a komponenst

export default function CityForm({ city = null, submitAction }) {
  const [hideCurrentImage, setHideCurrentImage] = useState(false);

  const { data, setData, post, processing, errors } = useForm(
    city
      ? {
          name: city.name,
          img_url: null,
          img_url_action: city.img_url ? "keep" : "none",
        }
      : {
          name: "",
          img_url: null,
        }
  );

  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);

    //A frontend csak akkor küld képet, ha új fájlt választottunk ki (data.img_url instanceof File ellenőrzés)
    if (data.img_url instanceof File) {
      formData.append("img_url", data.img_url);
    }

    if (city) {
      // Fontos módosítás: POST kérés használata _method=PUT paraméterrel
      // Ez biztosítja, hogy a fájlok megfelelően legyenek elküldve
      post(submitAction + "?_method=PUT", formData);
    } else {
      post(submitAction, formData);
    }
  };

  return (
    <div className="w-max mx-auto mt-4">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Város Neve
          </label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.name && <div className="text-red-500">{errors.name}</div>}
        </div>

        <ImageUploader
          onChange={(file) => setData("img_url", file)}
          onRemove={() => {
            setHideCurrentImage(true);
            setData("img_url", null);
            setData("img_url_action", "remove");
          }}
          currentImage={!hideCurrentImage ? city?.img_url : null}
          errorMessage={errors.img_url}
          label="Város képe"
        />

        <button
          type="submit"
          disabled={processing}
          className=" w-full px-4 py-2 mt-6 bg-gradient-to-r from-[#114d56] to-[#1881929d]  text-[white] rounded hover:bg-opacity-90 transition hover:text-[#85cbd6] text-xl"
        >
          {processing
            ? "Feldolgozás..."
            : city
            ? "Város módosítása"
            : "Város létrehozása"}
        </button>
      </form>
    </div>
  );
}
