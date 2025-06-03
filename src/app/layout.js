import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
 
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
          {children}
        </Providers>
      </body>
    </html>
  );
}
