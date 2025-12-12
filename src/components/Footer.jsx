import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/Manoj-2898',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/manoj-kumar-paleti-632237304',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:paletimanoj2003@gmail.com',
      color: 'hover:text-primary-600 dark:hover:text-primary-400',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold text-white mb-4">Portfolio</h3>
            <p className="text-gray-400 leading-relaxed">
              A passionate developer creating beautiful and functional web experiences.
              Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-primary-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary-400 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} transition-all duration-300 transform hover:scale-125`}
                    aria-label={social.name}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Portfolio. All rights reserved. Built with React & Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

