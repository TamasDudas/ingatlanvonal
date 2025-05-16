import { Head } from "@inertiajs/react";
import React from "react";
import PropertyForm from "@/Components/Forms/PropertyForm";

export default function EditProperty({ cities, property }) {
  return (
    <div className="max-w-8xl mx-auto p-6 bg-[#114d56] text-[#cee6ea]">
      <Head title="Új ingatlan létrehozása" />
      <h1 className="text-3xl font-bold mb-6 text-center">
        Ingatlan szerkesztése
      </h1>
      <PropertyForm
        cities={cities}
        property={property}
        submitAction={route("property.update", property.id)}
      />
    </div>
  );
}
