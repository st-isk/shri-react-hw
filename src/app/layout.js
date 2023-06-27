import "./globals.css";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/redux/StoreProvider";
import Header from "@/header";
import Footer from "@/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Билетопоиск",
    description: "ШРИ домашка по React",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <Header />
                    {children}
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
