import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import Meteors from "@/components/ui/meteors.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Error sending message.");
    }
    // if (response.ok) {
    //   toast.success("Message sent successfully!"); // Show success toast
    //   setFormData({ name: "", email: "", message: "" });
    // } else {
    //   toast.error("Error sending message."); // Show error toast
    // }
  };

  return (
    <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-primary-700 to-gray-900">
      <Meteors className="absolute z-10"/> {/* Added z-index to Meteors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl z-20">
        <form
          onSubmit={handleSubmit}
          className="bg-primary bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg border border-gray-300" // Updated form styles
        > 
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Contact Us
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white"
              rows="5"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
        <div className="bg-primary bg-opacity-20 p-8 rounded-lg shadow-lg border border-gray-300 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center text-white mb-4">Contact Details</h2>
          <p className="text-white tracking-wide sans-serif">Feel free to reach out to us via the form or at:</p>
          <p className="text-white tracking-wide sans-serif">Email: pathakkashyap80@gmail.com</p>
          <p className="text-white tracking-wide sans-serif">Phone: +917990653556</p>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
    </motion.div>
  );
}
