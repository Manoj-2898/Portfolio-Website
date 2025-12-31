import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Robust Code',
      description:
        'Developing clean, efficient, and scalable code by following industry best practices, design principles, and coding standards.',
    },
    {
      icon: FaLaptopCode,
      title: 'System Development',
      description:
        'Designing and building end-to-end software solutions with a strong focus on reliability, maintainability, and usability.',
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description:
        'Optimizing applications for speed, scalability, and efficiency to ensure smooth performance in real-world scenarios.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Text */}
          <div data-aos="fade-right">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">
              Hi, I'm Manoj Kumar
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-lg">
              I'm a Software Development Engineer with a strong passion for
              designing, developing, and deploying scalable software solutions.
              I enjoy solving real-world problems using efficient algorithms and
              clean system architecture.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-lg">
              With hands-on experience in frontend development, I create 
              responsive and interactive web applications using modern JavaScript 
              frameworks and best engineering practices to deliver smooth user experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              I continuously focus on improving my technical skills by building
              projects, learning new technologies, and adapting to best
              engineering practices to grow as a professional software engineer.
            </p>
          </div>

          {/* Right Images */}
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

        {/* Feature Cards */}
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
