# 🎬 e-cinema - Your Ultimate Movie & TV Show Destination

<div align="center">
  <img src="/public/preview.png" alt="e-cinema Preview" width="100%" />
  <br />
  <br />
  <p>
    <strong>Discover, explore, and enjoy your favorite movies and TV shows all in one beautiful place! 🍿</strong>
  </p>
  
  [![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge&logo=vercel)](https://e-cinema.vercel.app/)
  [![Next.js](https://img.shields.io/badge/Next.js-14.2.13-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.13-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

## ✨ What Makes e-cinema Special?

e-cinema is a modern, responsive web application that brings the magic of cinema to your fingertips! Built with cutting-edge technologies, it offers a seamless experience for movie and TV show enthusiasts.

### 🌟 Key Features

- **🎭 Extensive Library**: Browse thousands of movies and TV shows from The Movie Database (TMDB)
- **🔍 Smart Search**: Find your favorite content quickly with our intelligent search functionality
- **📱 Responsive Design**: Enjoy a pixel-perfect experience on any device
- **🎨 Beautiful UI**: Clean, modern interface designed with Tailwind CSS
- **⚡ Lightning Fast**: Built with Next.js 14 for optimal performance
- **🎬 Detailed Information**: Get comprehensive details about movies, cast, ratings, and more
- **📺 TV Show Support**: Full support for TV series with episode navigation
- **🎮 Interactive Experience**: Smooth animations and transitions powered by Swiper

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have:
- Node.js (v18 or higher)
- npm or yarn
- A TMDB API key (free registration at [The Movie Database](https://www.themoviedb.org/))

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/napthedev/e-cinema.git
   cd e-cinema
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   TMDB_API_KEY=your_tmdb_api_key_here
   ```
   
   > 💡 **Tip**: Get your free API key by registering at [TMDB](https://www.themoviedb.org/settings/api)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) and start exploring! 🎉

## 🛠️ Built With Love Using

| Technology | Purpose | Why We Love It |
|------------|---------|----------------|
| **Next.js 14** | React Framework | Server-side rendering, amazing performance, and developer experience |
| **TypeScript** | Type Safety | Catch errors early and write more reliable code |
| **Tailwind CSS** | Styling | Utility-first CSS for rapid UI development |
| **Axios** | HTTP Client | Reliable API requests with great error handling |
| **Swiper** | Carousels | Smooth, touch-friendly sliders for movie galleries |
| **NProgress** | Loading Indicators | Beautiful loading bars for better UX |
| **React Icons** | Icons | Comprehensive icon library for consistent UI |

## 🎯 Project Structure

```
e-cinema/
├── 📁 public/           # Static assets (images, icons)
├── 📁 src/
│   ├── 📁 app/          # Next.js app directory (pages & layouts)
│   │   ├── 📁 movie/    # Movie-related pages
│   │   ├── 📁 tv/       # TV show pages
│   │   └── 📁 search/   # Search functionality
│   ├── 📁 components/   # Reusable React components
│   │   ├── 📁 display/  # UI components (pagination, ratings)
│   │   ├── 📁 layout/   # Layout components (navbar, footer)
│   │   ├── 📁 movie/    # Movie-specific components
│   │   └── 📁 shared/   # Shared utility components
│   ├── 📁 styles/       # Global styles
│   └── 📁 utils/        # Utility functions & API calls
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🤝 Contributing

We love contributions! Whether it's:
- 🐛 Bug fixes
- ✨ New features  
- 📚 Documentation improvements
- 🎨 UI/UX enhancements

Feel free to open an issue or submit a pull request. Let's make e-cinema even better together! 

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **The Movie Database (TMDB)** for providing the amazing API
- **Vercel** for seamless deployment
- The open-source community for the incredible tools and libraries

---

<div align="center">
  <p>Made with ❤️ for movie lovers everywhere</p>
  <p>
    <a href="https://e-cinema.vercel.app/">🌟 Try e-cinema Today!</a>
  </p>
</div>
