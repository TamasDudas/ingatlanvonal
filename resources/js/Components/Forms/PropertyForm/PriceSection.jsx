import React from "react";
import TextInput from "../Fields/TextInput";

export default function PriceSection({ data, setData, errors }) {
  return (
    <div className="space-y-6 p-6 bg-[#1881929d] rounded-lg shadow-sm">
      <h2 className="text-xl font-medium border-b pb-2">
        Árak és bérleti feltételek
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="Bérleti díj"
          name="rental_price"
          value={data.rental_price}
          onChange={(e) => setData("rental_price", e.target.value)}
          error={errors.rental_price}
        />

        <TextInput
          label="Eladási ár"
          name="sale_price"
          value={data.sale_price}
          onChange={(e) => setData("sale_price", e.target.value)}
          error={errors.sale_price}
        />
      </div>

      <TextInput
        label="Minimum bérleti időszak (hónap)"
        name="minimum_rental_period"
        value={data.minimum_rental_period}
        onChange={(e) => setData("minimum_rental_period", e.target.value)}
        error={errors.minimum_rental_period}
      />
    </div>
  );
}
