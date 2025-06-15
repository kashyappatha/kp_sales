
import { useState } from "react";
import Meteors from "@/components/ui/meteors.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(5, "Message must be at least 10 characters"),
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    
    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      
    } catch (err) {
      if (err instanceof z.ZodError) {
        // Handle validation errors
        const fieldErrors = {};
        err.errors.forEach(error => {
          fieldErrors[error.path[0]] = error.message;
        });
        setErrors(fieldErrors);
      } else {
        // Handle other errors
        toast.error("Error sending message: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-primary-700 to-gray-900 mt-7 md:mb-2 px-8 sm:px-0">
      <Meteors className="absolute z-10"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl z-20">
        <form
          onSubmit={handleSubmit}
          className="bg-primary bg-opacity-20 backdrop-blur-lg p-4 rounded-lg shadow-lg border border-gray-300 max-h-[400px] md:max-h-[600px] overflow-y-auto"
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
              className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-400'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white`}
              disabled={loading}
            />
            {errors.name && (
              <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
            )}
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
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-400'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white`}
              disabled={loading}
            />
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
            )}
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
              className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-400'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white`}
              rows="2"
              disabled={loading}
            />
            {errors.message && (
              <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
        <div className="bg-primary bg-opacity-20 p-8 rounded-lg shadow-lg border border-gray-300 flex flex-col justify-center items-center hidden sm:flex">
          <h2 className="text-2xl font-bold text-center text-white mb-4">Contact Details</h2>
          <p className="text-white tracking-wide sans-serif">Feel free to reach out to us via the form or at:</p>
          <p className="text-white tracking-wide sans-serif">Email: pathakkashyap80@gmail.com</p>
          <p className="text-white tracking-wide sans-serif">Phone: +917990653556</p>
        </div>
      </div>
    </motion.div>
  );
}