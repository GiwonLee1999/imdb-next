import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
import Navbar from "./components/Navbar";
 
export const metadata = {
  title: "IMDB Clone",
  description: "A clone of the IMDB website using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
