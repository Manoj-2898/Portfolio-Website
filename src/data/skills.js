import {
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBolt,
  FaMousePointer,
  FaProjectDiagram,
  FaCode,
} from 'react-icons/fa';
import { SiPostgresql, SiGithub } from 'react-icons/si';

export const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'PySpark', 'Cursor AI'],
  },
  {
    title: 'Methodologies',
    skills: ['Agile', 'Scrum', 'SDLC'],
  },
  {
    title: 'Soft Skills',
    skills: ['Communication', 'Teamwork', 'Problem Solving', 'Collaboration'],
  },
];
export const skillIcons = [
  { name: 'React.js', icon: FaReact, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
  { name: 'Python', icon: FaPython, color: 'text-blue-400' },
  { name: 'SQL', icon: SiPostgresql, color: 'text-blue-700' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-600' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  { name: 'GitHub', icon: SiGithub, color: 'text-gray-800 dark:text-gray-200' },
  { name: 'PySpark', icon: FaBolt, color: 'text-orange-500' },
  { name: 'Cursor AI', icon: FaMousePointer, color: 'text-purple-500' },
  { name: 'Agile', icon: FaProjectDiagram, color: 'text-green-600' },
  { name: 'REST APIs', icon: FaCode, color: 'text-cyan-500' },
];

