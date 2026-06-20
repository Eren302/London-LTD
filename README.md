# � London Ltd - Real Estate Development Website

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![React](https://img.shields.io/badge/frontend-React-61dafb)
![Node.js](https://img.shields.io/badge/backend-Node.js-green)

A modern, responsive corporate website for **London Ltd**, a real estate development company showcasing residential properties and providing contact form functionality. Features a beautiful React frontend with a Node.js/Express backend API.

**[🌐 Live Demo](#)** • **[📚 Documentation](#documentation)** • **[🤝 Contributing](#contributing)**

---

## ✨ Key Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🏠 **Property Showcase** - Display residential projects with detailed information
- 💬 **Contact System** - Contact form with backend validation and storage
- 🔌 **REST API** - Complete backend API for form submissions and data retrieval
- ⚡ **Performance Optimized** - Built with Vite for fast development and production builds
- 🎯 **Production Ready** - JavaScript-only implementation without TypeScript

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18.3** | UI component library |
| **Vite 6.3** | Build tool & dev server |
| **Tailwind CSS 4.1** | Utility-first CSS framework |
| **Motion 12.23** | Animation library |
| **Lucide React** | Icon library |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express 4.18** | Web framework & routing |
| **CORS** | Cross-origin resource sharing |

---

## 📂 Project Structure

```
london-ltd/
├── src/
│   ├── server.js                 # 🔌 Express backend server
│   ├── main.jsx                  # ⚛️  React entry point
│   ├── app/
│   │   ├── App.jsx              # Main React component
│   │   ├── components/
│   │   │   ├── figma/           # Figma components
│   │   │   └── ui/              # UI components (45+ reusable)
│   │   │       ├── accordion.jsx
│   │   │       ├── alert.jsx
│   │   │       ├── button.jsx
│   │   │       ├── card.jsx
│   │   │       ├── dialog.jsx
│   │   │       └── ... (40+ more)
│   └── styles/
│       ├── globals.css          # Global styles
│       ├── tailwind.css         # Tailwind config
│       ├── theme.css            # Theme variables
│       └── fonts.css            # Font imports
├── index.html                    # HTML entry point
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.mjs           # PostCSS configuration
├── package.json
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/london-ltd.git
   cd london-ltd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development servers** (run in separate terminals)

   **Terminal 1 - Frontend:**
   ```bash
   npm run dev
   ```
   → Open [http://localhost:5173](http://localhost:5173)

   **Terminal 2 - Backend:**
   ```bash
   npm run server
   ```
   → API available at [http://localhost:3001](http://localhost:3001)

---

## 🏗️ Project Pages

### Home Page
- Hero section with company tagline
- Key statistics and achievements
- Company information and mission
- Project showcase with images
- Contact form

### Sections
- **About Section** - Company history and values
- **Residences Section** - Featured residential projects
  - London Residence I (48 units - Sold)
  - London Residence II (72 units - Active)
  - London Towers (120 units - Under Construction)
- **Design Section** - Interior design gallery
- **Contact Section** - Form with validation

---

## 📡 API Endpoints

All API endpoints run on `http://localhost:3001`

### Health Check
```http
GET /api/health
```
**Response:**
```json
{
  "status": "ok",
  "service": "London Ltd API"
}
```

### Submit Contact Form
```http
POST /api/contact
```
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "project": "London Residence I",
  "message": "I'm interested in your properties"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Mesazhi u ruajt me sukses."
}
```

### Get All Submissions
```http
GET /api/contact
```
**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": 1687343892015,
      "name": "John Doe",
      "email": "john@example.com",
      "project": "London Residence I",
      "message": "I'm interested...",
      "createdAt": "2024-06-20T10:31:32.015Z"
    }
  ]
}
```

---

## ⚙️ Configuration

### Environment Variables

The frontend uses Vite environment variables. Create a `.env` file if needed:

```env
VITE_API_URL=http://localhost:3001
```

### Backend Configuration

The Express server is configured in `src/server.js`:
- **Port:** `3001` (customizable via `PORT` environment variable)
- **CORS:** Enabled for all origins (customize as needed for production)
- **Request limit:** JSON payloads up to default Express limit

---

## 📦 Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server (frontend)
npm run server          # Start Express backend server

# Production
npm run build           # Build frontend for production
npm run preview         # Preview production build locally

# Utilities
npm audit               # Check for security vulnerabilities
npm fund                # View funding information
```

---

## 🎨 Design Features

### Responsive Breakpoints
- **Mobile:** 320px - 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px+

### Color Scheme
- **Primary:** `#0a1f44` (Dark Navy)
- **Accent:** White
- **Text:** Gray shades
- **Status Colors:** Green (sold), Blue (active), Amber (pending)

### Components Used
- Custom UI components (45+ total)
- Radix UI primitives for accessibility
- Lucide React icons
- Motion/Framer Motion animations
- Tailwind CSS utilities

---

## 🔒 Security Notes

⚠️ **Important for Production:**
- The contact submissions are stored in-memory (lost on restart)
- For production: Use a proper database (PostgreSQL, MongoDB, etc.)
- Implement authentication for `/api/contact` GET endpoint
- Validate and sanitize all user inputs on the backend
- Enable CSRF protection
- Add rate limiting
- Use HTTPS only

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# If port 3001 is already in use:
PORT=3002 npm run server

# If port 5173 is already in use:
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
```

### Build Errors
```bash
# Clear Vite cache
rm -r .vite
npm run build
```

---

## 📋 Features by Section

| Section | Features |
|---------|----------|
| **Navigation** | Responsive navbar, mobile burger menu, smooth scrolling |
| **Hero** | Full-screen banner, animated text, CTA buttons |
| **About** | Company history, values, team highlights |
| **Projects** | Project cards, status badges, detailed descriptions |
| **Contact** | Form validation, success/error messages, backend integration |
| **Footer** | Company info, links, contact details |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 👨‍💼 About

**London Ltd** is a real estate development company in Prishtina, Kosovo, specializing in modern residential complexes with European standards.

- 📍 **Location:** Prishtina, Kosova
- 📞 **Phone:** +383 44 123 456
- 📧 **Email:** info@londonltd.com
- 🌐 **Website:** [london-ltd.com](#)

---

## 📞 Support

For questions or support, please:
- Open an issue on GitHub
- Email us at support@londonltd.com
- Visit our office at Rr. Agim Ramadani Nr. 24, Prishtina

---

## 🙏 Acknowledgments

- React community for excellent documentation
- Tailwind CSS for utility-first CSS framework
- Lucide for beautiful icons
- Motion for smooth animations
- Express.js for robust backend framework

---

<div align="center">

**Made with ❤️ by London Ltd Development Team**

[⬆ Back to top](#-london-ltd---real-estate-development-website)

</div>