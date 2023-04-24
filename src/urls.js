import { API_KEY } from "./Constants/Constants"

export const orginals=`discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
export const action=`discover/movie?api_key=${API_KEY}&with_genres=28`
export const Family=`discover/movie?api_key=${API_KEY}&with_genres=10751`
export const Horror=`discover/movie?api_key=${API_KEY}&with_genres=27`
export const Adventure=`discover/movie?api_key=${API_KEY}&with_genres=12`
export const comedy=`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`
export const thriller=`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53&with_watch_monetization_types=flatrate`