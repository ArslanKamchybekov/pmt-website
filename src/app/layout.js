import Navbar from "./components/Navbar";
import "./styles/globals.css";
import styles from "./styles/Layout.module.css"; // Import the layout-specific CSS

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* YouTube Video Background */}
        <div className={styles.videoBackground}>
          <iframe
            src="https://www.youtube.com/embed/koPkElMab4U?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=koPkElMab4U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Dark Overlay */}
        <div className={styles.overlay}></div>

        {/* Navbar and Page Content */}
        <Navbar />
        <div className={styles.content}>
          {children}
        </div>
      </body>
    </html>
  );
}
