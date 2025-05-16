import MainNavbar from "@/Components/Navigation/MainNavbar";
import MainNavbarMobile from "@/Components/Navigation/MainNavbarMobile";

export default function Header({ cities, user }) {
  return (
    <nav className="bg-[#246a75ee] shadow-lg">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Asztali navigáció */}
        <MainNavbar cities={cities} user={user} />

        {/* Mobil navigáció */}
        <MainNavbarMobile cities={cities} user={user} />
      </div>
    </nav>
  );
}
