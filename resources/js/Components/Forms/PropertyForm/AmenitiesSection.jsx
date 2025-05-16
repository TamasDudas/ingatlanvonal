import React from "react";
import TextInput from "../Fields/TextInput";

export default function AmenitiesSection({ data, setData, errors }) {
  return (
    <div className="space-y-6 p-6 bg-[#1881929d] rounded-lg shadow-sm">
      <h2 className="text-xl font-medium border-b pb-2">
        Felszereltség és jellemzők
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Bútorozottság"
          name="furniture"
          value={data.furniture}
          onChange={(e) => setData("furniture", e.target.value)}
          error={errors.furniture}
        />

        <TextInput
          label="Gépesítettség"
          name="appliances"
          value={data.appliances}
          onChange={(e) => setData("appliances", e.target.value)}
          error={errors.appliances}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Kilátás"
          name="view"
          value={data.view}
          onChange={(e) => setData("view", e.target.value)}
          error={errors.view}
        />

        <TextInput
          label="Fűtés típusa"
          name="heating_type"
          value={data.heating_type}
          onChange={(e) => setData("heating_type", e.target.value)}
          error={errors.heating_type}
        />
      </div>

      <TextInput
        label="Parkolás"
        name="parking"
        value={data.parking}
        onChange={(e) => setData("parking", e.target.value)}
        error={errors.parking}
      />

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Légkondicionáló"
          name="air_conditioning"
          value={data.air_conditioning}
          onChange={(e) => setData("air_conditioning", e.target.value)}
          error={errors.air_conditioning}
        />

        <TextInput
          label="Dohányzás engedélyezett"
          name="smoking"
          value={data.smoking}
          onChange={(e) => setData("smoking", e.target.value)}
          error={errors.smoking}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Kisállat engedélyezett"
          name="pets"
          value={data.pets}
          onChange={(e) => setData("pets", e.target.value)}
          error={errors.pets}
        />

        <TextInput
          label="Lift"
          name="elevator"
          value={data.elevator}
          onChange={(e) => setData("elevator", e.target.value)}
          error={errors.elevator}
        />
      </div>
    </div>
  );
}
