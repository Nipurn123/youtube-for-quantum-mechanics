# YouTube for Quantum Mechanics 🚀⚛️

<div align="center">

**A Curated YouTube Clone for Quantum Mechanics Education**

*Powered by [100X Prompt](https://100xprompt.com) 🔥*

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![Education](https://img.shields.io/badge/Category-Education-green)](https://github.com/100xprompt/youtube-for-quantum-mechanics)
[![100X Prompt](https://img.shields.io/badge/Powered%20by-100X%20Prompt-orange?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjRkY2QjM1Ii8+Cjwvc3ZnPg==)](https://100xprompt.com)

</div>

---

## 🌟 About This Project

**YouTube for Quantum Mechanics** is a specialized learning platform that curates the best quantum mechanics educational content from top universities worldwide. Built with React and designed specifically for physics education, it provides a distraction-free learning environment optimized for studying complex quantum mechanical concepts.

> **Created by 100X Prompt** - Revolutionizing how we learn and teach physics through AI-powered curation and modern web technologies.

## ✨ Key Features

### 🎓 **Premium Curated Content**
- Hand-picked quantum mechanics videos from **MIT, Stanford, Yale, IIT, Caltech**
- Content organized by difficulty: Foundation → Beginner → Intermediate → Advanced → Graduate
- Complete course playlists from world-renowned professors

### 🔍 **Smart Learning Tools**
- Advanced filtering by difficulty level and institution
- Intelligent search across titles, descriptions, and educational content
- Recommended learning paths for structured progression
- Study tips and educational guidance

### 🎯 **Optimized Learning Experience**
- Clean, YouTube-like interface designed for education
- Dark theme optimized for extended study sessions
- Responsive design works on all devices
- Distraction-free environment focused on learning

### 🏛️ **World-Class Institutions**
- **MIT OpenCourseWare**: Complete quantum physics course series
- **Stanford University**: Modern physics and quantum mechanics
- **Yale University**: Foundational physics with Prof. Ramamurti Shankar
- **Caltech**: Legendary Feynman lectures
- **IIT/NPTEL**: Advanced quantum mechanics courses

## 🚀 Quick Start

### Prerequisites
```bash
Node.js >= 14.0.0
npm or yarn
```

### Installation & Launch
```bash
# Clone the repository
git clone https://github.com/100xprompt/youtube-for-quantum-mechanics.git
cd youtube-for-quantum-mechanics

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000` 🎉

### Quick Launch Script
```bash
# Make the script executable and run
chmod +x start.sh
./start.sh
```

## 📚 Educational Content Overview

### 🔰 **Beginner Track**
1. **MIT 8.04 Quantum Physics I (2016)** - Modern pedagogical approach
2. **TMP Chem Quantum Chemistry** - Chemistry perspective
3. **MIT 8.04 Quantum Physics I (2013)** - Prof. Allan Adams

### 📈 **Intermediate Track**
1. **MIT 8.05 Quantum Physics II** - Advanced undergraduate
2. **Stanford Modern Physics** - Alternative teaching approach
3. **Yale Fundamentals of Physics** - Prof. Shankar's methodology

### 🎓 **Advanced Track**
1. **MIT 8.06 Quantum Physics III** - Graduate preparation
2. **NPTEL Relativistic Quantum Mechanics** - IIT advanced courses
3. **MIT 8.323 Quantum Field Theory** - Cutting-edge research level

### 🏆 **Featured Educators**
- **Prof. Allan Adams** (MIT) - Exceptional quantum instruction
- **Prof. Leonard Susskind** (Stanford) - Modern physics mastery
- **Prof. Ramamurti Shankar** (Yale) - Foundational excellence
- **Richard Feynman** (Caltech) - Timeless physics wisdom

## 🛠️ Technical Architecture

### **Built With Modern Technologies**
- **React 18** - Latest functional components with hooks
- **React Router Dom** - Seamless client-side navigation
- **Custom CSS3** - Responsive design with dark theme
- **YouTube API** - Embedded high-quality video players

### **Project Structure**
```
youtube-for-quantum-mechanics/
├── 🏠 public/              # Static assets
├── ⚛️ src/
│   ├── 🧩 components/      # React components
│   ├── 📊 data/           # Curated video database
│   ├── 🎨 styles/         # CSS styling
│   └── 📱 App.js          # Main application
├── 📋 package.json        # Dependencies & scripts
└── 📖 README.md          # Documentation
```

### **Key Components**
- **Header**: Search, branding, navigation
- **Sidebar**: Filters, playlists, learning paths
- **VideoGrid**: Responsive video gallery
- **VideoCard**: Interactive video previews
- **VideoPlayer**: Embedded YouTube player with metadata
- **PlaylistView**: Complete course information

## 🎨 Design System

### **Brand Colors**
- **Primary**: `#3ea6ff` (Education Blue)
- **Secondary**: `#00d4ff` (Gradient Accent)
- **100X Brand**: `#ff6b35` (100X Orange)
- **Background**: `#0f0f0f` (Deep Dark)
- **Surface**: `#1a1a1a` (Card Background)

### **Difficulty Color Coding**
- 🟢 **Foundation**: `#4CAF50` (Green)
- 🌱 **Beginner**: `#8BC34A` (Light Green)
- 🟠 **Intermediate**: `#FF9800` (Orange)
- 🔴 **Advanced**: `#F44336` (Red)
- 🟣 **Graduate**: `#9C27B0` (Purple)

## 📱 Responsive Design

### **Breakpoints**
- 📱 **Mobile**: < 640px
- 📟 **Tablet**: 640px - 1024px
- 🖥️ **Desktop**: > 1024px

### **Mobile Features**
- Collapsible sidebar navigation
- Touch-optimized interface
- Responsive video card layouts
- Optimized typography scaling

## 🔧 Configuration & Customization

### **Adding New Content**
```javascript
// src/data/quantumVideos.js
{
  id: 'YouTube_Video_ID',
  title: 'Video Title',
  channel: 'Channel Name',
  institution: 'Institution',
  difficulty: 'Difficulty Level',
  course: 'Course Name',
  // ... more metadata
}
```

### **Environment Variables**
```bash
REACT_APP_NAME="YouTube for Quantum Mechanics"
REACT_APP_BRAND="100X Prompt"
```

## 🚢 Deployment Options

### **Netlify** (Recommended)
```bash
npm run build
# Deploy build/ folder to Netlify
```

### **Vercel**
```bash
# Connect repository to Vercel
# Automatic deployment on git push
```

### **GitHub Pages**
```bash
npm run build
# Deploy build/ folder to gh-pages
```

## 🤝 Contributing

We welcome contributions to improve quantum mechanics education!

### **Content Contributions**
- 📹 Submit high-quality educational videos
- 🏷️ Ensure proper categorization and metadata
- ✅ Verify educational value and accessibility

### **Code Contributions**
```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/amazing-feature

# 3. Make your changes
# 4. Commit your changes
git commit -m "Add amazing feature"

# 5. Push to your branch
git push origin feature/amazing-feature

# 6. Submit a Pull Request
```

### **Content Quality Guidelines**
- ✅ Educational and scientifically accurate
- ✅ High video and audio quality
- ✅ Proper attribution to original creators
- ✅ Clear, descriptive titles and descriptions
- ✅ Accurate difficulty level classification

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### **Educational Institutions**
- **MIT OpenCourseWare** - Outstanding free educational content
- **Stanford University** - Comprehensive physics programs
- **Yale University** - Excellence in undergraduate education
- **Indian Institute of Technology** - Advanced NPTEL courses
- **California Institute of Technology** - Feynman's legendary teaching

### **100X Prompt Team**
Special thanks to the **100X Prompt** team for:
- 🤖 AI-powered content curation
- 🎯 Educational technology innovation
- 📈 Learning experience optimization
- 🚀 Modern web development practices

## 📞 Support & Community

### **Get Help**
- 📧 Email: nipurn.agarwal@100xprompt.com


### **Stay Connected**
- 🌐 Website: [100xprompt.com](https://100xprompt.com)
- 🐦 Twitter: [@100xprompt](https://twitter.com/100xprompt)
- 💼 LinkedIn: [100X Prompt](https://linkedin.com/company/100xprompt)

---

<div align="center">

## 🚀 **Powered by 100X Prompt** 🚀

**Making quantum mechanics education accessible to everyone!**

*Built with ❤️ for physics education and the future of learning*

[![100X Prompt](https://img.shields.io/badge/Visit-100xprompt.com-orange?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjRkY2QjM1Ii8+Cjwvc3ZnPg==)](https://100xprompt.com)

</div>
