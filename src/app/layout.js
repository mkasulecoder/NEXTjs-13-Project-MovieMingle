import Header from "../../components/header/page";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "MovieMingle",
  description: "Watch movies and enjoy popcorns at ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=''>
        <Header />
        {children}
      </body>
    </html>
  );
}
