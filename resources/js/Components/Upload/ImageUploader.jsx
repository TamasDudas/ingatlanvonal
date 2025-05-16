import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUploader({
  onChange,
  onRemove,
  onRemoveItem,
  currentImage = null,
  previewImage = null,
  previews = [],
  label = "Kép feltöltése",
  errorMessage = null,
  multiple = false,
}) {
  const [preview, setPreview] = useState(previewImage);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (multiple) {
        // Több fájl kezelése
        onChange(acceptedFiles);
      } else {
        // Egy fájl kezelése
        const file = acceptedFiles[0];
        if (file) {
          onChange(file);
          setPreview(URL.createObjectURL(file));
        }
      }
    },
    [onChange, multiple]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: multiple,
  });

  const handleDelete = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
      setPreview(null);
    }
    onRemove();
  };

  // Egy kép törlése több kép esetén
  const handleRemoveItem = (index) => {
    if (onRemoveItem && typeof onRemoveItem === "function") {
      onRemoveItem(index);
    }
  };

  // Memória felszabadítása, amikor a komponens unmount
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-4 rounded cursor-pointer transition-colors ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-blue-400"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-center text-blue-500">Itt engedd el a képet...</p>
        ) : (
          <p className="text-center text-gray-500">
            {multiple
              ? "Húzd ide a képeket, vagy kattints a böngészéshez..."
              : "Húzd ide a képet, vagy kattints a böngészéshez..."}
          </p>
        )}
      </div>

      {errorMessage && <div className="text-red-500 mt-1">{errorMessage}</div>}

      {/* Előnézetek megjelenítése több kép esetén */}
      {multiple && previews.length > 0 && (
        <div className="grid grid-cols-4 gap-6 w-full mx-auto mt-4">
          {previews.map((src, index) => (
            <div
              key={index}
              className="relative group h-40 w-40 overflow-hidden"
            >
              <img
                src={src}
                alt={`Előnézet ${index + 1}`}
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                onClick={() => handleRemoveItem(index)}
                className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center opacity-90 hover:opacity-100"
                title="Kép eltávolítása"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Egyetlen kép előnézete */}
      {!multiple && preview && (
        <div className="mt-4 relative inline-block group h-40 w-40 overflow-hidden">
          <img
            src={preview}
            alt="Előnézet"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={handleDelete}
            className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center opacity-90 hover:opacity-100"
            title="Előnézet eltávolítása"
          >
            X
          </button>
        </div>
      )}

      {/* Meglévő kép megjelenítése (ha van) */}
      {!multiple && !preview && currentImage && (
        <div className="mt-4 relative inline-block group h-40 w-40 overflow-hidden">
          <img
            src={`/storage/${currentImage}`}
            alt="Jelenlegi kép"
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={handleDelete}
            className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center opacity-90 hover:opacity-100"
            title="Kép törlése"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}
