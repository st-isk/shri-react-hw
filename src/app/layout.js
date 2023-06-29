import "@/globals.css";
//import { Inter } from "next/font/google";
import { StoreProvider } from "@/redux/StoreProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Билетопоиск",
    description: "Сервис для поиска дешевых КИНОбилетов",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <Header />
                    {children}
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
