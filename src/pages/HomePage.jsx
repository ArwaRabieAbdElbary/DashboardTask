import React from "react";
import Header from "../components/Header";
import logo from "../assets/images/logo-brand.svg";
import malibu from "../assets/images/malibu.jpg";
import chicago from "../assets/images/chicago.jpg";
import colorado from "../assets/images/colorado.jpg";
import miami from "../assets/images/miami.jpg";
import seattle from "../assets/images/seattle.jpg";
import toronto from "../assets/images/toronto.jpg";
import beach from "../assets/images/beach-work.jpg";

const HomePage = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-col md:flex-row bg-gray-100 min-h-80 lg:h-80 md:items-stretch dark:bg-black  ">
        <div className="order-2 md:order-1 flex w-full md:basis-1/2 lg:basis-2/5 items-center">
          <div className="px-5 md:px-10 lg:px-16 xl:px-20">
            <img src={logo} className="w-40 hidden md:block" />
            <h2 className="text-2xl mt-4 font-serif font-bold">
              You can work from anywhere.
            </h2>
            <h3 className="text-2xl mb-3 font-serif text-blue-600 dark:text-sky-500 font-bold">
              Take advantage of it.
            </h3>
            <p className="text-gray-600 mb-2.5 dark:text-gray-200">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <button className="cursor-pointer bg-sky-500 w-40 h-10 text-white rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue-500">
              Book Your Escape
            </button>
          </div>
        </div>

        <div className="w-full md:basis-1/2 lg:basis-3/5 order-1 md:order-2">
          <img
            src={beach}
            className="object-cover w-full h-full rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 mb-3">
        <div className="mt-10 mb-8">
          <h2 className="font-bold text-2xl dark:text-gray-200">
            Popular destinations
          </h2>
          <p className="text-gray-500 mt-2 dark:text-gray-300">
            A selection of great work-friendly cities to work and explore
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={malibu}
              alt="Malibu"
              className="w-full sm:w-32 h-48 sm:h-auto object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold dark:text-white">Malibu</h3>
              <p className="text-gray-500 text-sm my-2 dark:text-gray-300">
                1000 LE / night average
              </p>
              <span className="text-sky-600 text-sm font-bold">
                Explore 76 Properties
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={chicago}
              alt="Chicago"
              className="w-full sm:w-32 h-48 sm:h-auto object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold dark:text-white">Chicago</h3>
              <p className="text-gray-500 text-sm my-2 dark:text-gray-300">
                1000 LE / night average
              </p>
              <span className="text-sky-600 text-sm font-bold">
                Explore 76 Properties
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={colorado}
              alt="Colorado"
              className="w-full sm:w-32 h-48 sm:h-auto object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold dark:text-white">
                Colorado
              </h3>
              <p className="text-gray-500 text-sm my-2 dark:text-gray-300">
                1000 LE / night average
              </p>
              <span className="text-sky-600 text-sm font-bold">
                Explore 76 Properties
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={miami}
              alt="Miami"
              className="w-full sm:w-32 h-48 sm:h-auto object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold dark:text-white">Miami</h3>
              <p className="text-gray-500 text-sm my-2 dark:text-gray-300">
                1000 LE / night average
              </p>
              <span className="text-sky-600 text-sm font-bold">
                Explore 76 Properties
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={seattle}
              alt="Seattle"
              className="w-full sm:w-32 h-48 sm:h-auto object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold dark:text-white">Seattle</h3>
              <p className="text-gray-500 text-sm my-2 dark:text-gray-300">
                1000 LE / night average
              </p>
              <span className="text-sky-600 text-sm font-bold">
                Explore 76 Properties
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img
              src={toronto}
              alt="Toronto"
              className="w-full sm:w-32 h-48 sm:h-auto object-cover"
            />
            <div className="p-4 flex flex-col justify-center">
              <h3 className="text-lg font-semibold dark:text-white">Toronto</h3>
              <p className="text-gray-500 text-sm my-2 dark:text-gray-300">
                1000 LE / night average
              </p>
              <span className="text-sky-600 text-sm font-bold">
                Explore 76 Properties
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
