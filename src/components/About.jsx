import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices and design patterns.',
    },
    {
      icon: FaLaptopCode,
      title: 'Responsive Design',
      description: 'Creating beautiful and functional interfaces that work seamlessly across all devices.',
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency to deliver the best user experience.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
              Hi, I'm Manoj Kumar
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-lg">
              I'm a passionate Full Stack Developer with a love for creating innovative web
              applications. With expertise in modern JavaScript frameworks and backend
              technologies, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-lg">
              My journey in web development started with a curiosity about how websites work,
              and it has evolved into a career focused on building user-centric solutions that
              make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4" data-aos="fade-left">
            {[
              'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop',
            ].map((img, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={`About ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                <feature.icon size={40} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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

