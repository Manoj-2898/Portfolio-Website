import { FaAward, FaPython, FaDatabase, FaRobot } from 'react-icons/fa';
import { certifications } from '../data/certifications';

const iconMap = {
  python: FaPython,
  sql: FaDatabase,
  ai: FaRobot,
};

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="section bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="site-container">
        <div className="text-center mb-10 md:mb-12" data-aos="fade-up">
          <h2 className="section-title font-bold mb-3 text-gray-800 dark:text-white">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6" />
          <p className="section-subtitle text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Credentials that validate my technical and professional skills
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || FaAward;
            return (
              <div
                key={cert.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={22} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-white mb-1.5">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium flex items-center gap-2">
                  <FaAward size={12} className="text-primary-500" />
                  {cert.issuer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
