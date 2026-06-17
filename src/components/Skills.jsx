import { skillCategories, skillIcons } from '../data/skills';

const Skills = () => {
  return (
    <section
      id="skills"
      className="section bg-gradient-to-br from-slate-50 to-primary-50/50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300"
    >
      <div className="site-container">
        <div className="text-center mb-10 md:mb-12" data-aos="fade-up">
          <h2 className="section-title font-bold mb-3 text-gray-800 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6" />
          <p className="section-subtitle text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies, tools, and methodologies I use to build quality software
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-8">
          {skillIcons.slice(0, 12).map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center p-3.5 md:p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 40}
              >
                <div className={`mb-2 ${skill.color} group-hover:scale-105 transition-transform duration-300`}>
                  <IconComponent size={24} />
                </div>
                <h3 className="text-[11px] md:text-xs font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 md:p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <h3 className="text-base font-bold text-primary-600 dark:text-primary-400 mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs md:text-sm font-medium bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md border border-gray-100 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
