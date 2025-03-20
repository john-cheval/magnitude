import Navbar from "@/components/common/Navbar";
import "./globals.css";
import Footer from "@/components/common/Footer";
import { fetchData } from "@/utils/fetchData";

export const metadata = {
  title: "Magnitude",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const navData = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/menu/primary"
  );

  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className="notranslate"
      translate="no"
    >
      <body className={` antialiased flex flex-col min-h-screen`}>
        <Navbar navLinks={navData.menu_tree} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
