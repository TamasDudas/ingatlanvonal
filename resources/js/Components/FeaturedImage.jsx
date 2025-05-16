import React from "react";

export default function FeaturedImage({ propertyImage }) {
  return (
    <div>
      {" "}
      <div className="h-[40vh] md:h-[50vh] lg:h-[70vh] relative">
        <img
          src={`/storage/${propertyImage.featured_image}`}
          alt={propertyImage.street}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#114d56] opacity-30"></div>
      </div>
    </div>
  );
}
