import { defineStore } from "pinia";
import axios from 'axios';

export const useMovies = defineStore({
    id: 'movies',
    state: () => {
        movies: null;
    },
    actions: {
        async getMovies() {
            try {
                const url = `
                   https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=1
                `;
                const response = await axios.get(url, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTM2NWMzMDdjYzY1MjkzOGMxMGQwOGM3MDAzZDZkMyIsIm5iZiI6MTcyNTUyODE1Ni4zNjY1MTIsInN1YiI6IjY2M2UzZDE3MzA0MmYzNWJlM2ZiNTExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gRhvfoOOetgtffQy1kznl_XJEEhkhXH2o9zPz9Ekhtw'
                    }
                })
                this.movies = response.data;
                console.log(this.movies.results);
                
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {},
})


 
