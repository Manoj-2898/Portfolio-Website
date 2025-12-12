import { FaDownload, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Manoj_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 md:pt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center" data-aos="fade-up">
          <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Manoj Kumar
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate developer crafting beautiful and functional web experiences.
              I love turning complex problems into simple, elegant solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" data-aos="fade-up" data-aos-delay="200">
            <button
              onClick={handleDownload}
              className="group px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <FaDownload className="group-hover:animate-bounce" />
              Download Resume
            </button>
            <button
              onClick={scrollToAbout}
              className="group px-8 py-4 bg-transparent border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg font-semibold text-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Learn More
              <FaArrowDown className="group-hover:animate-bounce" />
            </button>
          </div>

          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="300">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              aria-label="Scroll down"
            >
              <FaArrowDown size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

