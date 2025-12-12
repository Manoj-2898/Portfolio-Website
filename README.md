# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode, and a clean, professional design.

## 🚀 Features

- **Modern UI/UX**: Clean design with smooth animations and transitions
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Smooth Scrolling**: Navigate between sections with smooth scroll animations
- **Scroll Animations**: AOS (Animate On Scroll) library for engaging animations
- **Interactive Components**: Hover effects and animations on buttons and cards
- **Contact Form**: UI-ready contact form (connect to your backend or email service)

## 📁 Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar with dark mode toggle
│   │   ├── Hero.jsx        # Hero section with CTA
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills showcase
│   │   ├── Projects.jsx    # Projects portfolio
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer with social links
│   ├── context/
│   │   └── ThemeContext.jsx # Dark mode context provider
│   ├── data/
│   │   ├── projects.js     # Projects data
│   │   └── skills.js        # Skills data
│   ├── assets/             # Images and static assets
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, role, and intro text
   - Modify CTA button text and functionality

2. **About Section** (`src/components/About.jsx`):
   - Replace placeholder text with your own story
   - Update images (replace Unsplash URLs with your own)

3. **Skills** (`src/data/skills.js`):
   - Add or remove skills
   - Update skill icons and colors

4. **Projects** (`src/data/projects.js`):
   - Add your projects with:
     - Title
     - Description
     - Image URL
     - Tech stack
     - GitHub link
     - Live demo link (optional)

5. **Contact** (`src/components/Contact.jsx`):
   - Update email address
   - Connect form to your backend or email service (e.g., EmailJS, Formspree)

6. **Footer** (`src/components/Footer.jsx`):
   - Update social media links
   - Modify footer text

7. **Page Title** (`index.html`):
   - Change the title tag to your name

### Styling

- **Colors**: Modify the primary color palette in `tailwind.config.js`
- **Fonts**: Change the font family in `tailwind.config.js` and `index.html`
- **Animations**: Adjust AOS settings in `src/App.jsx`

## 🎯 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **AOS** - Animate On Scroll library
- **React Icons** - Icon library

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode preference is saved in localStorage and persists across page reloads. Users can toggle it using the button in the navbar.

## 📝 Notes

- The contact form is UI-only. To make it functional, integrate with:
  - EmailJS
  - Formspree
  - Your own backend API
  - Other email services

- Replace placeholder images with your own project screenshots and photos.

- Update all placeholder links (GitHub, LinkedIn, Twitter, email) with your actual profiles.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React + Vite**

