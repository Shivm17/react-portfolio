import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const validateForm = () => {
    const newErrors = {
      name: !name?.trim(),
      email: !email?.trim(),
      message: !message?.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validateForm()) {
      return;
    }

    // Show centered SweetAlert loader
    Swal.fire({
      title: "Sending Message...",
      html: "Please wait...",
      allowOutsideClick: false,
      showConfirmButton: false,
      color: "#fff", // White text
      customClass: {
        popup:
          "bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white backdrop-blur-sm rounded-lg border border-white/10",
        title: "text-white text-2xl font-medium",
        htmlContainer: "text-white/80",
      },
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await axios.get("http://localhost:5000/", {
        params: {
          email: email.trim(),
          message: message.trim(),
          name: name.trim(),
        },
      });

      Swal.close(); // Close loader

      // Show success toast
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className:
          "bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white text-white rounded-lg border border-white/10",
        progressClassName: "bg-green-500",
      });

      // Clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      Swal.close();
      toast.error("Failed to send message", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
        style: {
          background: "#1a1a1a",
          color: "#fff",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-xl"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none"
              />
              {errors.name && (
                <p className="mt-2 text-sm font-bold text-white">
                  * Please enter your name
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                value={email}
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none"
              />
              {errors.email && (
                <p className="mt-2 text-sm font-bold text-white">
                  * Please enter your email
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                value={message}
                id="message"
                rows={4}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-blue-400 focus:outline-none"
              ></textarea>
              {errors.message && (
                <p className="mt-2 text-sm font-bold text-white">
                  * Please enter your message
                </p>
              )}
            </div>
            <motion.button
              onClick={(e) => handlesubmit(e)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium flex items-center justify-center gap-2"
            >
              Send Message
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
