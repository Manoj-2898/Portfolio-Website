import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../data/education';

const Education = () => {
  return (
    <section
      id="education"
      className="section bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="site-container">
        <div className="text-center mb-10 md:mb-12" data-aos="fade-up">
          <h2 className="section-title font-bold mb-3 text-gray-800 dark:text-white">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6" />
          <p className="section-subtitle text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 hidden sm:block" />

            <div className="space-y-5">
              {education.map((item, index) => (
                <div
                  key={item.id}
                  className="relative flex gap-4 md:gap-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="hidden sm:flex flex-shrink-0 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg z-10">
                    <FaGraduationCap size={18} />
                  </div>

                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 md:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-primary-200 dark:hover:border-primary-800">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                        {item.degree}
                      </h3>
                      <span className="text-xs md:text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2.5 py-1 rounded-lg self-start">
                        {item.score}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium mb-1">
                      {item.institution}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
