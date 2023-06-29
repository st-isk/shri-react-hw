"use client";

import { useGetMoviesQuery } from "@/redux/services/moviesAPI";
import styles from "@/components-styles/films.module.css";
import FilmCard from "./filmCard";

export default function Films() {
    const { data, isLoading, error } = useGetMoviesQuery();

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (!data || error) {
        return <span>NotFound</span>;
    }

    return (
        <div className={styles.filmsCards}>
            {data.map(({ id, title, genre, posterUrl }) => (
                <FilmCard
                    title={title}
                    genre={genre}
                    posterUrl={posterUrl}
                ></FilmCard>
            ))}
        </div>
    );
}
