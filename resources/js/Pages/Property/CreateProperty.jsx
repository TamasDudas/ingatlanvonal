//import { useForm, Inertia } from "@inertiajs/react";
import PropertyForm from "@/Components/Forms/PropertyForm";
import { Head, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function CreateProperty({ cities }) {
  return (
    <div className="max-w-8xl mx-auto p-6 bg-[#114d56] text-[#cee6ea]">
      <Head title="Új ingatlan létrehozása" />
      <h1 className="text-3xl font-bold mb-6 text-center">
        Új ingatlan létrehozása
      </h1>
      <PropertyForm cities={cities} submitAction={route("property.store")} />
    </div>
  );
}
