import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo, PROFILE_IMAGE, PROFILE_IMAGE_WEBP, RESUME_PATH, RESUME_FILENAME } from '../data/profile';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_PATH;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';
    document.querySelector('#projects')?.scrollIntoView({ behavior });
  };

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-28 right-10 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-0 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl" />
      </div>

      <div className="site-container relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-12">
          <div className="max-w-[600px]" data-aos="fade-right">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wide uppercase bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-full">
              Software Developer
            </span>

            <h1 className="hero-heading font-semibold mb-4 text-gray-900 dark:text-white">
              Hi, I'm Manoj Kumar.
            </h1>

            <p className="body-copy text-gray-600 dark:text-gray-400 mb-4 max-w-[600px]">
              I'm a software developer passionate about building responsive, user-friendly web applications. I work with React.js, JavaScript,
              Python, SQL, HTML5, and CSS3, with a strong foundation in frontend engineering and REST APIs.
            </p>
            <p className="body-copy text-gray-600 dark:text-gray-400 mb-6 max-w-[600px]">
              I enjoy solving real problems, writing clean code, and creating seamless digital experiences with performance and maintainability in mind.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <button
                onClick={handleDownload}
                className="group px-5 py-3 bg-primary-600 text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </button>
              <button
                onClick={scrollToProjects}
                className="group px-5 py-3 bg-white dark:bg-gray-800 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-500 rounded-xl font-semibold text-sm sm:text-base hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Projects
              </button>
            </div>

            <div className="flex items-center gap-2.5 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-2xl opacity-20 scale-105" />
              <div className="relative w-[320px] h-[320px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full p-1.5 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-700 shadow-2xl">
                <picture>
                  <source srcSet={PROFILE_IMAGE_WEBP} type="image/webp" />
                  <img
                    src={PROFILE_IMAGE}
                    alt={personalInfo.name}
                    width="760"
                    height="995"
                    fetchpriority="high"
                    decoding="async"
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
