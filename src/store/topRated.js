import { defineStore } from "pinia";
import axios from 'axios';

export const useTopMovies = defineStore({
    id: 'topMovies',
    state: () => {
        topMovies: null;
    },
    actions: {
        async getTopMovies() {
            try {
                const url = `
                   https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=1
                `;
                const response = await axios.get(url, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTM2NWMzMDdjYzY1MjkzOGMxMGQwOGM3MDAzZDZkMyIsIm5iZiI6MTcyNTUyODE1Ni4zNjY1MTIsInN1YiI6IjY2M2UzZDE3MzA0MmYzNWJlM2ZiNTExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gRhvfoOOetgtffQy1kznl_XJEEhkhXH2o9zPz9Ekhtw'
                    }
                })
                this.topMovies = response.data.results.splice(0,10);
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {},
})


 
