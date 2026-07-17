import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { personalInfo, ABOUT_IMAGE, ABOUT_IMAGE_WEBP } from '../data/profile';

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Clean Architecture',
      description:
        'Building maintainable frontend systems with reusable components, clear structure, and industry best practices.',
    },
    {
      icon: FaLaptopCode,
      title: 'Full-Stack Mindset',
      description:
        'Designing end-to-end web solutions with React.js, REST APIs, and responsive UI for real-world production use.',
    },
    {
      icon: FaRocket,
      title: 'Performance Focus',
      description:
        'Optimizing load times, responsiveness, and cross-browser compatibility to deliver smooth user experiences.',
    },
  ];

  return (
    <section
      id="about"
      className="section bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="site-container">
        <div className="text-center mb-10 md:mb-12" data-aos="fade-up">
          <h2 className="section-title font-bold mb-3 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-center mb-10 md:mb-12">
          <div className="flex justify-center" data-aos="fade-right">
            <div className="relative max-w-sm md:max-w-md w-full">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-3xl blur-xl" />
              <picture>
                <source srcSet={ABOUT_IMAGE_WEBP} type="image/webp" />
                <img
                  src={ABOUT_IMAGE}
                  alt={personalInfo.name}
                  width="1000"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="relative w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700"
                />
              </picture>
            </div>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-[clamp(1.35rem,1.1rem+1vw,2rem)] font-semibold mb-4 text-gray-800 dark:text-white max-w-xl">
              Building scalable, user-focused web applications
            </h3>

            <p className="body-copy text-gray-600 dark:text-gray-400 mb-3 max-w-2xl">
              I'm a {personalInfo.title} with hands-on experience developing production web
              applications at Spendium AI Labs. I specialize in React.js, JavaScript, and
              modern frontend engineering — turning ideas into polished, performant products.
            </p>

            <p className="body-copy text-gray-600 dark:text-gray-400 mb-3 max-w-2xl">
              During my internship, I built platforms like iGrace and Pulse-Forge from the
              ground up, focusing on responsive design, reusable components, and Agile
              collaboration. I enjoy solving real problems with clean, efficient code.
            </p>

            <p className="body-copy text-gray-600 dark:text-gray-400 max-w-2xl">
              I hold a B.Tech with a CGPA of 9.01 and continuously sharpen my skills through
              certifications, projects, and staying current with modern development tools.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { value: '6+', label: 'Months Experience' },
                { value: '5+', label: 'Projects Built' },
                { value: '3', label: 'Certifications' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                >
                  <p className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 mb-4">
                <feature.icon size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h4>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
