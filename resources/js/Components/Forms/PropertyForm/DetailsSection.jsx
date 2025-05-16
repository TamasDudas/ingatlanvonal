import React from "react";
import TextInput from "../Fields/TextInput";
import TextareaInput from "../Fields/TextareaInput";

export default function DetailsSection({ data, setData, errors }) {
  return (
    <div className="space-y-6 p-6 bg-[#1881929d] rounded-lg shadow-sm">
      <h2 className="text-xl font-medium border-b pb-2">Ingatlan részletek</h2>

      <TextareaInput
        label="Rövid leírás"
        name="short_description"
        value={data.short_description}
        onChange={(e) => setData("short_description", e.target.value)}
        error={errors.short_description}
        rows={3}
      />

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Méret (m²)"
          name="size"
          value={data.size}
          onChange={(e) => setData("size", e.target.value)}
          error={errors.size}
        />

        <TextInput
          label="Alapterület (m²)"
          name="floor_area"
          value={data.floor_area}
          onChange={(e) => setData("floor_area", e.target.value)}
          error={errors.floor_area}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Építés éve"
          name="year_built"
          value={data.year_built}
          onChange={(e) => setData("year_built", e.target.value)}
          error={errors.year_built}
        />

        <TextInput
          label="Épület emeletei"
          name="building_floors"
          value={data.building_floors}
          onChange={(e) => setData("building_floors", e.target.value)}
          error={errors.building_floors}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Emelet"
          name="floor"
          value={data.floor}
          onChange={(e) => setData("floor", e.target.value)}
          error={errors.floor}
        />

        <TextInput
          label="Erkély (m²)"
          name="balcony"
          value={data.balcony}
          onChange={(e) => setData("balcony", e.target.value)}
          error={errors.balcony}
        />
      </div>

      <TextareaInput
        label="Részletes leírás"
        name="description"
        value={data.description}
        onChange={(e) => setData("description", e.target.value)}
        error={errors.description}
        rows={5}
      />
    </div>
  );
}
