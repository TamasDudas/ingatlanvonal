import CityForm from "@/Components/Forms/CityForm";
import React from "react";
import { Head } from "@inertiajs/react";

export default function CreateCity({ cities }) {
  return (
    <div className="max-w-8xl mx-auto p-6 bg-[#114d56] text-[#cee6ea]">
      <Head title="Új ingatlan létrehozása" />
      <h1 className="text-3xl font-bold mb-6 text-center">
        Új Város létrehozása
      </h1>
      <CityForm cities={cities} submitAction={route("cities.store")} />
    </div>
  );
}
