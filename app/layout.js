import "./globals.css";
import { Header, Navbar } from "@/components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Natural Thing",
  description:
    "Natural Thing is a San Francisco Bay Area based hard rock quintet playing the greatest hard rock tunes from the 70’s and 80’s. Formed in 2014, we are five seasoned musicians embracing our love of playing hard rock from some of the greatest bands such as Led Zeppelin, UFO, Thin Lizzy, Black Sabbath and Montrose.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header>
          <Navbar />
        </Header>
        {children}
      </body>
    </html>
  );
}
