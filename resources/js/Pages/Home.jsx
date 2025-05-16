import { Head, usePage, router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import CityCard from "../Components/Cards/cityCard";
import ConfirmModal from "../Components/Modal/ConfirmModal";
import Notification from "../Components/Notifications/Notification";

export default function Home() {
  const { cities } = usePage().props;
  const { pageReload, success } = usePage().props.flash || {};
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    cityId: null,
  });
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const { auth } = usePage().props;
  const loggedIn = !!auth.user;

  useEffect(() => {
    // 1. Először ellenőrizzük, van-e mentett üzenet
    const savedMessage = localStorage.getItem("flashMessage");
    if (savedMessage) {
      setNotification({
        show: true,
        message: savedMessage,
        type: localStorage.getItem("flashType") || "success",
      });
      // Töröljük a tárolóból
      localStorage.removeItem("flashMessage");
      localStorage.removeItem("flashType");
    }

    // 2. Ha van új flash üzenet, tároljuk el
    if (success) {
      localStorage.setItem("flashMessage", success);
      localStorage.setItem("flashType", "success");
    }

    // 3. Csak azután indítjuk az újratöltést
    if (pageReload) {
      setTimeout(() => {
        window.location.reload();
      }, 50);
    }
  }, [pageReload, success]);

  const handleEdit = (cityId) => {
    router.visit(route("cities.edit", cityId));
  };

  const handleDeleteClick = (cityId) => {
    setConfirmModal({ isOpen: true, cityId });
  };

  const confirmDelete = () => {
    router.delete(route("cities.destroy", confirmModal.cityId), {
      onSuccess: () =>
        setNotification({
          show: true,
          message: "Város sikeresen törölve",
          type: "success",
        }),
    });
    setConfirmModal({ isOpen: false, cityId: null });
  };

  return (
    <div>
      <Head title="Home" />

      {notification.show && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ ...notification, show: false })}
        />
      )}

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, cityId: null })}
        onConfirm={confirmDelete}
        title="Város törlése"
        message="Biztosan törölni szeretnéd ezt a várost? Ez a művelet nem vonható vissza."
      />

      {/* Nyitókép - reszponzív méretezéssel */}
      <div className="  sm:w-full relative overflow-hidden rounded-lg mx-4">
        <div className="h-[40vh] md:h-[50vh] lg:h-[70vh] relative">
          <img
            src="/assets/img/sarosi_halo_nyito.jpg"
            alt="nemes_halo_4"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-[#070e0f] opacity-55">
            <h2 className="text-6xl sm:text-8xl text-center font-bold bg-gradient-to-r from-[#28a3b6] to-[#1881929d] bg-clip-text text-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Ingatlanvonal
            </h2>
          </div>
        </div>
      </div>

      <div className="px-6 py-8 mx-4 max-w-4xl my-8 sm:my-12 md:mx-auto relative overflow-hidden bg-gradient-to-r from-[#114d56] to-[#1881929d] text-transparent rounded-2xl">
        <p className="text-lg text-last-center leading-relaxed text-[#cee6ea]">
          Weboldalunkon olyan kiadó és eladó lakóingatlanokat talál, amelyeknek
          tulajdonosai régóta baráti társaságot alkotnak. Így az itt kínált
          lakások műszaki állapota és berendezése hasonló színvonalat nyújt, a
          bérlés feltételei szintén hasonlóak. Ez Önnek a személyesség
          garanciája mellett a választás lehetőségét is nyújtja. Személyes, mert
          nem ingatlanközvetítőkkel kell tárgyalnia, de több lehetősége is van,
          mintha egyetlen lakás tulajdonosával lépne kapcsolatba. Elsősorban
          Szegeden és Budapesten találhatóak a lakások. Későbbi terveink között
          szerepel a kínálat szélesítése, ajánlás alapján a tulajdonosi kör
          bővítésével is.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {cities.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
              loggedIn={loggedIn}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
