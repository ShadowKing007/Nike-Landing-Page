import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./sections";
import Nav from "./components/Nav";
import { useState } from 'react';
import {dark} from './assets/icons'
import { light } from "./assets/icons";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark dark:text-white dark:bg-neutral-900" : ""}>
      <div className="absolute right-20 top-6 z-50"> {/* Ensure the button appears above other elements */}
        <button
        id="theme-toggle"
        type="button"
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full w-10 h-10 text-sm p-2.5"
        onClick={toggleDarkMode}
        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} // Accessibility improvement
        >
          {darkMode ? <img src={light} alt="Dark" /> : <img src={dark} alt="Dark" />}
        </button>
      </div>
      <main className="relative dark:text-white dark:bg-neutral-900">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b dark:text-white dark:bg-neutral-900">
          <Hero />
        </section>
        <section className="padding dark:text-white dark:bg-neutral-900">
          <PopularProducts />
        </section>
        <section className="padding dark:text-white dark:bg-neutral-900">
          <SuperQuality />
        </section>
        <section className="padding-x py-10 dark:text-white dark:bg-neutral-900">
          <Services />
        </section>
        <section className="padding dark:text-white dark:bg-neutral-900">
          <SpecialOffers />
        </section>
        <section className="bg-pale-blue padding dark:text-white dark:bg-neutral-900">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full dark:text-white">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
