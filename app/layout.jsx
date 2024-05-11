import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elixir",
  description: "Revolutionize the education",
  icons:"/ElixirLogo2.svg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className} style={{backgroundColor:"#FFFCF5",}}>
      <Header/>
        
        <div className="pt-[5rem]">

        {children}
        </div>
      <Footer/>
      </body>
    </html>
  );
}
