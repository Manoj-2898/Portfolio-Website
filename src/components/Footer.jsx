import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { personalInfo } from '../data/profile';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: personalInfo.github,
      color: 'hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: personalInfo.linkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: `mailto:${personalInfo.email}`,
      color: 'hover:text-primary-400',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 py-10 border-t border-gray-800">
      <div className="site-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold text-white mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              {personalInfo.title} passionate about building scalable, user-focused
              web applications. Open to opportunities and collaborations.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-primary-400 transition-colors break-all"
              >
                <FaEnvelope size={14} />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <FaPhone size={14} />
                {personalInfo.phone}
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                    onClick={(e) => scrollTo(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

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
                    className={`p-3 rounded-xl bg-gray-900 text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 border border-gray-800`}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved. Built with React & Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
