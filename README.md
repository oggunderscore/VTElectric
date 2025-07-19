# VT Electric Website

A modern, responsive website for VT Electric Inc., a trusted electrical contracting company specializing in street lighting, traffic systems, and fiber optic installations.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design using TailwindCSS
- **Component-Based**: Modular Svelte components for easy maintenance
- **Optimized Performance**: Built with Vite for fast development and optimized production builds
- **Contact Form**: Interactive contact form for customer inquiries
- **Project Showcase**: Gallery to display completed projects

## 🛠️ Tech Stack

- **Frontend Framework**: Svelte
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
VTElectric/
├── src/
│   ├── components/
│   │   ├── Header.svelte      # Navigation header
│   │   ├── Hero.svelte        # Hero section component
│   │   ├── ProjectCard.svelte # Project display card
│   │   ├── ContactForm.svelte # Contact form component
│   │   ├── Footer.svelte      # Website footer
│   │   └── Logo.svelte        # VT Electric logo
│   ├── routes/
│   │   └── Home.svelte        # Home page
│   ├── App.svelte             # Main app component
│   ├── app.css                # Global styles with Tailwind
│   └── main.js                # App entry point
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── package.json              
└── vite.config.js            
```

## 🏗️ Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd VTElectric
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## 🎨 Customization

### Colors
The project uses custom colors defined in `tailwind.config.js`:
- `vt-orange`: #FF6B35 (Brand orange)
- `vt-dark`: #0B1929 (Dark blue)
- `vt-gray`: #6B7280 (Gray)

### Components
All components are modular and accept props for customization. Check individual component files for available props.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to VT Electric Inc. All rights reserved.

## 📞 Contact

VT Electric Inc.
- Phone: (909)-985-1755
- Email: support@vtelectric.net
- Location: Ontario, CA 91762
