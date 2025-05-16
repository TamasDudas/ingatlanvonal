import React from "react";
import Adatvédelmi from "@/Pages/Adatvedelmi";
import { Link } from "@inertiajs/react";

export default function Footer() {
  return (
    <div className="bg-[#246a75ee] p-4 text-center mt-12">
      <div className="mt-4">
        <Link href="/adatvedelmi" className="text-white hover:underline">
          Adatvédelmi nyilatkozat
        </Link>
      </div>
    </div>
  );
}
