import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function MainNavbarMobile({ cities, user }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden w-full">
      {/* Mobil fejléc */}
      <div className="flex justify-between items-center">
        {/* Mobil Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>
        </div>

        {/* Hamburger gomb */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-[#85cbd6] hover:text-[#54cbddc5] focus:outline-none"
        >
          <span className="sr-only">Menü megnyitása</span>
          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobil menü */}
      {isOpen && (
        <div className="m-2  rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {cities?.map((city) => (
              <Link
                key={city.id}
                href={`/cities/${city.id}/properties`}
                className="block w-full px-4 py-2 text-start text-[#a7d8e0] transition duration-150 ease-in-out hover:text-[#54cbddc5]"
                onClick={() => setIsOpen(false)}
              >
                {city.name}
              </Link>
            ))}

            {user ? (
              // Bejelentkezett felhasználó mobil opciók
              <>
                <Link
                  href="/properties/create"
                  className="block w-full px-4 py-2 text-start text-[#a7d8e0] transition duration-150 ease-in-out hover:text-[#54cbddc5]"
                  onClick={() => setIsOpen(false)}
                >
                  Új ingatlan létrehozása
                </Link>
                <Link
                  href="/cities/create"
                  className="block w-full px-4 py-2 text-start text-[#a7d8e0] transition duration-150 ease-in-out hover:text-[#54cbddc5]"
                  onClick={() => setIsOpen(false)}
                >
                  Új város létrehozása
                </Link>
                <div className="border-t border-[#126a77] mt-1 pt-1">
                  <Link
                    href={route("profile.edit")}
                    className="block w-full px-4 py-2 text-start text-[#a7d8e0] transition duration-150 ease-in-out hover:text-[#54cbddc5]"
                    onClick={() => setIsOpen(false)}
                  >
                    Profil
                  </Link>
                  <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="block w-full px-4 py-2 text-left text-[#a7d8e0] transition duration-150 ease-in-out hover:text-[#54cbddc5]"
                    onClick={() => setIsOpen(false)}
                  >
                    Kijelentkezés
                  </Link>
                </div>
              </>
            ) : (
              // Nem bejelentkezett mobil opció
              <Link
                href="/login"
                className="block w-full px-4 py-2 text-start text-[#a7d8e0] transition duration-150 ease-in-out hover:text-[#54cbddc5]"
                onClick={() => setIsOpen(false)}
              >
                Bejelentkezés
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
