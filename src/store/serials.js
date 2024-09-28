import { defineStore } from "pinia";
import axios from 'axios';

export const useSerials = defineStore({
    id: 'serials',
    state: () => {
        serials: null;
    },
    actions: {
        async getSerials() {
            try {
                const url = `
                    https://api.themoviedb.org/3/tv/popular?language=ru-RU&page=1            
                        `;
                const response = await axios.get(url, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTM2NWMzMDdjYzY1MjkzOGMxMGQwOGM3MDAzZDZkMyIsIm5iZiI6MTcyNTUyODE1Ni4zNjY1MTIsInN1YiI6IjY2M2UzZDE3MzA0MmYzNWJlM2ZiNTExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gRhvfoOOetgtffQy1kznl_XJEEhkhXH2o9zPz9Ekhtw'
                    }
                })
                this.serials = response.data;
                // console.log(this.serials.results);

            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {},
})



