import { Head } from "@inertiajs/react";
import React from "react";
import CityForm from "@/Components/Forms/CityForm";

export default function EditCity({ city }) {
  return (
    <div className="max-w-8xl mx-auto p-6 bg-[#114d56] text-[#cee6ea]">
      <Head title="Új ingatlan létrehozása" />
      <h1 className="text-3xl font-bold mb-6 text-center">
        Város szerkesztése
      </h1>
      <CityForm city={city} submitAction={route("cities.update", city.id)} />
    </div>
  );
}
