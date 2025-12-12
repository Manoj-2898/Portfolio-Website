import { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create email content
      const subject = encodeURIComponent(`Contact from Portfolio - ${formData.name}`);
      const body = encodeURIComponent(
        `Hello Manoj Kumar,\n\nYou have received a new message from your portfolio website:\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nThis message was sent from your portfolio contact form.`
      );
      
      // Open email client with pre-filled data
      // This will open the user's default email client (Gmail, Outlook, etc.)
      // with all the form data pre-filled, ready to send
      window.location.href = `mailto:paletimanoj2003@gmail.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Your email client is opening. Please review and send the message to paletimanoj2003@gmail.com' 
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to open email client. Please email directly to paletimanoj2003@gmail.com' 
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Name Field */}
            <div className="mb-6" data-aos="fade-up" data-aos-delay="150">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-6" data-aos="fade-up" data-aos-delay="200">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-8" data-aos="fade-up" data-aos-delay="250">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none">
                  <FaComment className="text-gray-400" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none transition-all duration-300"
                  placeholder="Your message here..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            {/* Status Message */}
            {submitStatus && (
              <div
                className={`mt-4 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="350">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Or reach out directly at:
            </p>
            <a
              href="mailto:paletimanoj2003@gmail.com"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-lg transition-colors"
            >
              paletimanoj2003@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

