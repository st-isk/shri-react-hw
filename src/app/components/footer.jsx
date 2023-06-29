"use client";

import styles from "@/components-styles/footer.module.css";
import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className={styles.footer}>
            <div onClick={() => router.push("/QA")}>Вопросы-ответы</div>
            <div onClick={() => router.push("/about")}>О нас</div>
        </footer>
    );
}
