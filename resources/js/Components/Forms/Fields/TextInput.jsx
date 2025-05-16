import React from "react";

export default function TextInput({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  className = "",
  placeholder = "",
}) {
  return (
    <div>
      {label && <label className="block mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border rounded p-2 ${className}`}
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
}
