import React from "react";

export default function SelectInput({
  label,
  name,
  value,
  onChange,
  error,
  options = [],
  className = "",
  placeholder = "Válassz...",
}) {
  return (
    <div>
      {label && <label className="block mb-1">{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border rounded p-2 ${className}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
}
