import React from "react";
import { Link } from "react-router-dom";

const DashboardWelcome = () => {
  return (
    <div className="h-full flex justify-center mt-10">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          👋 Welcome to Your Dashboard
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          This is your main control panel where you can manage all your content
          easily.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-700 mb-4">
            From here, you can navigate to the{" "}
            <span className="font-semibold text-sky-600">Services</span> section
            to add, edit, or manage your services.
          </p>

          <Link
            to="/dashboard/services"
            className="inline-block mt-2 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium"
          >
            Go to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardWelcome;
