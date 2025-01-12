import React, { useState } from "react";
// import React, { useState } from 'react';
import { validateForm } from "@/FormValidation";
import { registerUser } from "@/Api";
import "./Register.css";
export default function Register() {
  const [mode, setmode] = useState(0);
  const participant = () => {
    setmode(1);
  };
  const startup = () => {
    setmode(2);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    College: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e :any) => {
    // Clear the validation error for the changed field
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      // Send data to the server
      const response = await registerUser(formData);

      setMessage(response.message);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error(error);
      setMessage("Error submitting the form");
    } finally {
      setLoading(false);
    }
  };

  if (registrationSuccess) {
    return (
      <div
        id="register"
        className="flex items-center justify-center h-full bg-cover"
      >
        <div className=" rounded-lg shadow-lg p-8 backdrop-blur-sm">
          <h2 className="w-full text-5xl xl:text-6xl text-center py-10 font-semibold text-[#f06e3d] uppercase">
            Registration Successful!
          </h2>
          <p className="text-white text-xl text-center">Join this whatsapp grp for more updates </p>
          <a href="https://chat.whatsapp.com/ES60fPE1voUL0m77d8bitB"
          className="text-white text-xl text-center"
          ><button
          
          className="rounded bg-gradient-to-b from-[#ff4e00] to-[#e43108] hover:from-[#fd4b55] hover:to-[#e43068] py-4 px-8 text-base text-white"
        >
          JOIN NOW
        </button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      id="reg"
      className="bg-gray-900 flex flex-col justify-center items-center "
    >
      <h1 className="text-5xl text-[#ff4e00] mt-10 font-bold">REGISTER NOW</h1>

      <div
        className={`${"flex flex-col"} text-lg md:text-2xl mt-10 w-5/6 md:w-1/2 mx-5 bg-neutral-950 p-2 text-white`}
      >
        <div className="h-1/7 flex justify-center items-center">
          {/* <p className="text-red-600 text-2xl">Register as a Startup</p> */}
        </div>
        <form onSubmit={handleSubmit} className=" flex flex-col h-6/7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="h-1/6 flex flex-col">
              <label htmlFor="" className="mt-3">
                Name<span className="text-red-600">*</span>
              </label>
              <input
                className="text-black rounded"
                placeholder="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="h-1/6 flex flex-col">
              <label htmlFor="" className="mt-3">
                Phone number<span className="text-red-600">*</span>
              </label>
              <input
                className="text-black rounded"
                placeholder="Phone Number"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="h-1/6 flex flex-col">
              <label htmlFor="" className="mt-3">
                Whatsapp no.<span className="text-red-600">*</span>
              </label>
              <input
                className="text-black rounded"
                placeholder="Whatsapp number"
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
              />
              <span style={{ color: "red" }}>{errors.name}</span>
            </div>
            <div className="h-1/6 flex flex-col">
              <label htmlFor="" className="mt-3">
                Email
                <span className="text-red-600">*</span>
              </label>
              <input
                className="text-black rounded"
                placeholder="Email"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <span style={{ color: "red" }}>{errors.email}</span>
            </div>
          </div>

          <div className="h-1/6 flex flex-col">
            <label htmlFor="" className="mt-3">
              College Name
              <span className="text-red-600">*</span>
            </label>
            <input
              className="text-black rounded"
              placeholder="College Name"
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center my-3">
            <input type="checkbox" className="mt-1" name="" id="" />
            <label htmlFor="" className="ml-2 text-white">
              I hereby declare that i have read the Brochure and the details
              furnished above are correct to best of my Knowledge.
            </label>
          </div>
          <div className={` "flex"  justify-center m-auto`}>
            <button
              type="submit"
              disabled={loading}
              className="rounded bg-gradient-to-b from-[#ff4e00] to-[#e43108] hover:from-[#fd4b55] hover:to-[#e43068] py-4 px-8 text-base text-white"
            >
              {loading ? "LOADING..." : "REGISTER"}
            </button>
          </div>
        </form>
        <p className="m-auto">{message}</p>
      </div>
    </div>
  );
}
