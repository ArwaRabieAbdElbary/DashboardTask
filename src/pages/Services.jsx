import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineClose } from "react-icons/ai";
import servicesData from "./data/Services";

const Services = () => {
  const [services, setServices] = useState(() => {
    const savedServices = localStorage.getItem("workcationServices");
    return savedServices ? JSON.parse(savedServices) : servicesData;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [isAddMode, setIsAddMode] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState(null);

  const handleEdit = (service) => {
    setIsAddMode(false);
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      price: service.price,
      location: service.location,
      image: service.image,
    });
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setIsAddMode(true);
    setEditingService(null);
    setImageFile(null);
    setFormData({
      title: "",
      description: "",
      price: "",
      location: "",
      image: "",
    });
    setIsModalOpen(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (id) => {
    setServiceToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    const updatedServices = services.filter(
      (service) => service.id !== serviceToDelete
    );
    setServices(updatedServices);
    localStorage.setItem("workcationServices", JSON.stringify(updatedServices));
    setDeleteModalOpen(false);
    setServiceToDelete(null);
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setServiceToDelete(null);
  };

  const handleSave = () => {
    let updatedServices;

    if (isAddMode) {
      const newService = {
        id: Date.now(),
        ...formData,
        price: Number(formData.price),
      };
      updatedServices = [...services, newService];
    } else {
      updatedServices = services.map((service) =>
        service.id === editingService.id
          ? { ...service, ...formData, price: Number(formData.price) }
          : service
      );
    }

    setServices(updatedServices);
    localStorage.setItem("workcationServices", JSON.stringify(updatedServices));
    setIsModalOpen(false);
    setEditingService(null);
    setIsAddMode(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
    setIsAddMode(false);
    setImageFile(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">
              Workcation Rentals
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              Manage your work-friendly vacation properties
            </p>
          </div>
          <button
            onClick={handleAdd}
            className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="text-xl">+</span>
            Add Place
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ${service.price}/month
              </div>
            </div>

            <div className="p-4 md:p-5">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-xs md:text-sm text-sky-600 mb-2 md:mb-3 flex items-center gap-1">
                📍 {service.location}
              </p>
              <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                {service.description}
              </p>

              <div className="flex gap-2 md:gap-3">
                <button
                  onClick={() => handleEdit(service)}
                  className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-sky-500 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors font-medium text-sm cursor-pointer"
                >
                  <AiOutlineEdit size={16} className="md:hidden" />
                  <AiOutlineEdit size={18} className="hidden md:block" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="flex-1 flex items-center justify-center gap-1 md:gap-2 bg-red-500 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium text-sm cursor-pointer"
                >
                  <AiOutlineDelete size={16} className="md:hidden" />
                  <AiOutlineDelete size={18} className="hidden md:block" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                {isAddMode ? "Add New Property" : "Edit Property"}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Property Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  placeholder="e.g., Beachfront Villa in Bali"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  placeholder="e.g., Bali, Indonesia"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none resize-none"
                  placeholder="Describe the property and its work-friendly features..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price per Month ($)
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  placeholder="e.g., 1200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Property Image
                </label>

                {formData.image && (
                  <div className="mb-3">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg border border-gray-300"
                    />
                  </div>
                )}

                <div className="mb-3">
                  <label className="flex items-center justify-center w-full px-4 py-3 bg-sky-50 border-2 border-dashed border-sky-300 rounded-lg cursor-pointer hover:bg-sky-100 transition-colors">
                    <span className="text-sky-600 font-medium">
                      📷 Upload Image from Device
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="flex items-center gap-3 my-3">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="text-gray-500 text-sm">OR</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <input
                  type="text"
                  value={
                    formData.image.startsWith("data:") ? "" : formData.image
                  }
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                  placeholder="Paste image URL here"
                />
              </div>
            </div>

            <div className="flex gap-2 md:gap-3 p-4 md:p-6 border-t border-gray-200">
              <button
                onClick={handleCloseModal}
                className="flex-1 px-4 md:px-6 py-2 md:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm md:text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 md:px-6 py-2 md:py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors font-medium text-sm md:text-base"
              >
                {isAddMode ? "Add Property" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AiOutlineDelete size={24} className="text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Confirm Delete
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600">
                Are you sure this property has been deleted?
              </p>
            </div>

            <div className="flex gap-3 p-6 border-t border-gray-200">
              <button
                onClick={cancelDelete}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
