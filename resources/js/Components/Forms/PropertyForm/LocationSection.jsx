import React from "react";
import TextInput from "../Fields/TextInput";
import SelectInput from "../Fields/SelectInput";

export default function LocationSection({
  data,
  setData,
  errors,
  cities,
  isBudapest,
  district,
  setDistrict,
  handleGeocodeClick,
}) {
  const cityOptions = cities.map((city) => ({
    value: city.id,
    label: city.name,
  }));

  const districtOptions = [...Array(23)].map((_, i) => ({
    value: i + 1,
    label: `${i + 1}. kerület`,
  }));

  return (
    <div className="space-y-6 p-6 bg-[#1881929d] rounded-lg shadow-sm">
      <h2 className="text-xl font-medium border-b pb-2">Elhelyezkedés</h2>

      <SelectInput
        label="Város"
        name="city_id"
        value={data.city_id}
        onChange={(e) => setData("city_id", e.target.value)}
        options={cityOptions}
        error={errors.city_id}
        placeholder="Válassz várost..."
      />

      {isBudapest && (
        <div>
          <SelectInput
            label="Kerület (csak a koordináták kiszámításához)"
            name="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            options={districtOptions}
            placeholder="Válassz kerületet..."
          />
          <p className="text-sm text-gray-500 mt-1">
            Ez az adat csak a koordináták pontos meghatározását segíti, nem
            kerül mentésre.
          </p>
        </div>
      )}

      <TextInput
        label="Utca"
        name="street"
        value={data.street}
        onChange={(e) => setData("street", e.target.value)}
        error={errors.street}
      />

      <div className="text-center">
        <button
          onClick={handleGeocodeClick}
          type="button"
          className="px-4 py-2 bg-gradient-to-r from-[#114d56] to-[#1881929d] text-[white] rounded hover:bg-opacity-90 transition hover:text-[#85cbd6]"
        >
          Koordináták keresése cím alapján
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Szélesség"
          name="latitude"
          type="number"
          value={data.latitude}
          onChange={(e) => setData("latitude", e.target.value)}
          error={errors.latitude}
        />

        <TextInput
          label="Hosszúság"
          name="longitude"
          type="number"
          value={data.longitude}
          onChange={(e) => setData("longitude", e.target.value)}
          error={errors.longitude}
        />
      </div>
    </div>
  );
}
