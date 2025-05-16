import "../css/app.css";
import "./bootstrap";
import "leaflet/dist/leaflet.css";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob("./Pages/**/*.jsx")
    ),

  setup({ el, App, props }) {
    const root = createRoot(el);

    // Szerezzük be a user objektumot, ha elérhető
    const user = props.initialPage.props.auth?.user || null;

    // Ellenőrizzük a pageReload flash üzenetet
    const pageReload = props.initialPage.props.flash?.pageReload;

    // Ha pageReload értéke true, akkor frissítsük az oldalt
    if (pageReload) {
      window.location.reload();
      return; // Megakadályozzuk a renderelést, mert úgyis újratöltjük az oldalt
    }

    root.render(
      <div className="flex flex-col min-h-screen bg-[#99cbd66d]">
        <Header cities={props.initialPage.props.cities} user={user} />
        <div className="flex-grow container mx-auto max-w-6xl my-6">
          <App {...props} />
        </div>
        <Footer />
      </div>
    );
  },
  progress: {
    color: "#4B5563",
  },
});
