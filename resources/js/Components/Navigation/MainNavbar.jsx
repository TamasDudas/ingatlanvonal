import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";

export default function MainNavbar({ cities, user }) {
  return (
    <div className="hidden md:flex justify-between items-center w-full h-16">
      {/* Logo a bal oldalon */}
      <div className="flex-shrink-0">
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>
      </div>

      {/* Desktop Navigation a jobb oldalon */}
      <div className="flex items-center space-x-8">
        {cities?.map((city) => (
          <Link
            key={city.id}
            href={`/cities/${city.id}/properties`}
            className="text-[#b9ccde] hover:text-[#85cbd6] px-3 py-2 rounded-md transition duration-150 ease-in-out text-base"
          >
            {city.name}
          </Link>
        ))}

        {user ? (
          // Bejelentkezett felhasználó esetén
          <>
            <Link
              href="/properties/create"
              className="text-[#b9ccde] hover:text-[#85cbd6] px-3 py-2 rounded-md transition duration-150 ease-in-out text-base"
            >
              Új ingatlan létrehozása
            </Link>
            <Link
              href="/cities/create"
              className="text-[#b9ccde] hover:text-[#85cbd6] px-3 py-2 rounded-md transition duration-150 ease-in-out text-base"
            >
              Új város létrehozása
            </Link>
            <div className="relative ms-3">
              <Dropdown>
                <Dropdown.Trigger>
                  <span className="inline-flex rounded-md">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-[#165862] px-3 py-2 text-sm font-medium leading-4 text-[#b9ccde] transition duration-150 ease-in-out hover:text-[#85cbd6] focus:outline-none"
                    >
                      {user.name}
                      <svg
                        className="-me-0.5 ms-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <Dropdown.Link href={route("profile.edit")}>
                    Profil
                  </Dropdown.Link>
                  <Dropdown.Link
                    href={route("logout")}
                    method="post"
                    as="button"
                  >
                    Kijelentkezés
                  </Dropdown.Link>
                </Dropdown.Content>
              </Dropdown>
            </div>
          </>
        ) : (
          // Nem bejelentkezett felhasználó esetén
          <Link
            href="/login"
            className="text-[#85cbd6] hover:text-[#85cbd6] px-3 py-2 rounded-md transition duration-150 ease-in-out text-base"
          >
            Bejelentkezés
          </Link>
        )}
      </div>
    </div>
  );
}
