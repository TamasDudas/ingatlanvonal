import React from "react";
import ImageUploader from "@/Components/Upload/ImageUploader";

export default function ImagesSection({
  property,
  errors,
  existingImages,
  hideFeaturedImage,
  featuredImagePreview,
  detachImage,
  detachFeaturedImage,
  handleFeaturedImageChange,
  handleImagesChange,
  handleRemoveImage,
  handleClearImages,
  imagePreview,
}) {
  return (
    <div className="space-y-6 p-6 bg-[#1881929d] rounded-lg shadow-sm">
      <h2 className="text-xl font-medium border-b pb-2">Képek</h2>

      {/* Kiemelt kép */}
      <div>
        <ImageUploader
          onChange={handleFeaturedImageChange}
          onRemove={detachFeaturedImage}
          currentImage={
            property?.featured_image && !hideFeaturedImage
              ? property.featured_image
              : null
          }
          previewImage={featuredImagePreview}
          errorMessage={errors.featured_image}
          label="Kiemelt kép"
        />
      </div>

      {/* További képek */}
      <div className="mt-6">
        <ImageUploader
          onChange={handleImagesChange}
          onRemove={handleClearImages}
          onRemoveItem={handleRemoveImage}
          previews={imagePreview}
          multiple={true}
          label="További képek"
          errorMessage={errors.images}
        />

        {/* Meglévő képek megjelenítése */}
        {property && existingImages.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium mb-2">Meglévő képek:</h3>
            <div className="grid grid-cols-4 gap-6 w-full mx-auto">
              {existingImages.map((image) => (
                <div
                  key={image.id}
                  className="relative group h-40 w-40 overflow-hidden"
                >
                  <img
                    src={`/storage/${image.url}`}
                    alt="Ingatlan kép"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => detachImage(image.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center opacity-90 hover:opacity-100"
                    title="Kép eltávolítása"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
