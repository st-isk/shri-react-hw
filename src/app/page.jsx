import styles from "@/page.module.css";
import Filters from "@/components/filters";
import Films from "./components/films";

export const metadata = {
    title: "Билетопоиск",
    description: "Главная, список фильмов",
};

export default function Home() {
    return (
        <main className={styles.main}>
            <Filters></Filters>
            <Films></Films>
        </main>
    );
}
