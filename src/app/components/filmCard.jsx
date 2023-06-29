"use client";

import Image from "next/image";
import styles from "@/components-styles/filmCard.module.css";

export default function FilmCard({ title, genre, posterUrl }) {
    let curGenre = "";
    switch (genre) {
        case "fantasy":
            curGenre = "Фэнтези";
            break;
        case "horror":
            curGenre = "Хоррор";
            break;
        case "action":
            curGenre = "Экшн";
            break;
        case "comedy":
            curGenre = "Комедия";
            break;
    }
    return (
        <div className={styles.filmCard}>
            <Image
                className={styles.poster}
                src={posterUrl}
                width={75}
                height={95}
            ></Image>
            <div className={styles.signs}>
                <div className={styles.signs}>{title}</div>
                <div className={styles.signsGenre}>{curGenre}</div>
            </div>
        </div>
    );
}
