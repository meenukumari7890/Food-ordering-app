import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Address: "",
    email: "",
    Country: "",
    City: "",
    message: "",
  });

  const countryCityData = {
    Pakistan: ["Lahore", "Karachi", "Islamabad"],
    India: ["Delhi", "Mumbai", "Bangalore"],
    USA: ["New York", "Los Angeles", "Chicago"],
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedCity(""); // reset city when country changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setFormData({
      FirstName: "",
      LastName: "",
      Address: "",
      email: "",
      Country: "",
      City: "",
      message: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md mt-10 ">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="FirstName" className="block  mb-1 font-medium">
            First Name
          </label>
          <input
            id="FirstName"
            name="FirstName"
            type="text"
            required
            value={formData.FirstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="LastName" className="block mb-1 font-medium">
            Last Name
          </label>
          <input
            id="LastName"
            name="LastName"
            type="text"
            required
            value={formData.LastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="Address" className="block mb-1 font-medium">
            Address
          </label>
          <input
            id="Address"
            name="Address"
            type="text"
            required
            value={formData.Address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-4">
          {/* Country Dropdown */}
          <div className="w-1/2">
            <label className="block mb-1 font-medium">Country</label>
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a country</option>
              {Object.keys(countryCityData).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* City Dropdown */}
          <div className="w-1/2">
            <label className="block mb-1 font-medium">City</label>
            <select
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!selectedCountry}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a city</option>
              {selectedCountry &&
                countryCityData[selectedCountry].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-40 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
