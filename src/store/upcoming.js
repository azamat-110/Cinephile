import { defineStore } from "pinia";
import axios from 'axios';


export const useUpcoming = defineStore({
    id: 'upcoming',
    state: () => {
        upcoming: null;
    },
    actions: {
        async getUpcoming() {
            try {
                const url = `
                    https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1
                `;
                const response = await axios.get(url, {
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTM2NWMzMDdjYzY1MjkzOGMxMGQwOGM3MDAzZDZkMyIsIm5iZiI6MTcyNTUyODE1Ni4zNjY1MTIsInN1YiI6IjY2M2UzZDE3MzA0MmYzNWJlM2ZiNTExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gRhvfoOOetgtffQy1kznl_XJEEhkhXH2o9zPz9Ekhtw'
                    }
                })
                this.upcoming = response.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {

    },
})


/*"Bearer eyJhbgcioiJIUZI1NiJ9.
eyJhdWQi0iI1NTFhMzIx0TNhMDVmNDN]ZDZmZTQ1MjRhNWE2NGVjMy[sInN1Y¡I6IjYzMTU4MGJ]YTQwMmMxMDA3YWJmZjFmZiIsInNjb3Blcy[6WyJhcG]fcmVhZCJdLCJ2Z
XJzaW9uIjoxfQ-gJxsq2R64Mb8wWmwsYnFSKC3JrehZVLXZE_Ou-Jv0oY"
*/