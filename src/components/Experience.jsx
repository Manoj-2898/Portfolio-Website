import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section
      id="experience"
      className="section bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="site-container">
        <div className="text-center mb-10 md:mb-12" data-aos="fade-up">
          <h2 className="section-title font-bold mb-3 text-gray-800 dark:text-white">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6" />
          <p className="section-subtitle text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional experience building production-ready web applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {experience.map((job, index) => (
            <div
              key={job.id}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
                    <FaBriefcase size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold mt-1">
                      {job.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt size={12} />
                        {job.location}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-lg whitespace-nowrap self-start">
                  {job.duration}
                </span>
              </div>

              <ul className="space-y-2.5">
                {job.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm md:text-[0.95rem] text-gray-600 dark:text-gray-400 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
