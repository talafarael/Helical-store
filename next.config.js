/**
 * @type {import('next').NextConfig}
 */

module.exports = {

  output: 'export',
  images: {
    unoptimized: true,
  },
 reactStrictMode: true,
    env: {
        "TOKEN_TELEGRAM":"8036647450:AAG5QB1xCZmpaVTE-2cSIufAVB6T7RpheCE",
        "USER_ID":"292825449",
        // 592473412    id Sky
        "REACT_APP_FIREBASE_API_KEY":"AIzaSyCEtgLNJIJNISjUXq85XVMxl0vhSsW3HEg",
        REACT_APP_FIREBASE_AUTH_DOMAIN:"fara-19074.firebaseapp.com",
        REACT_APP_FIREBASE_PROJECT_ID:"fara-19074",
        REACT_APP_FIREBASE_STORAGE_BUCKET:"fara-19074.appspot.com",
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"1056119921",
        REACT_APP_FIREBASE_APP_ID:"1:694491181371:web:609be1d019527d9082c71e",
        REACT_APP_FIREBASE_MEASUREMENT_ID:"G-82BH5TM17K",
        NEXT_PUBLIC_GOOGLE_ANALYTICS:"G-9R69QJ6LGF",
        NEXT_PUBLIC_GA_ID:"G-9R69QJ6LGF"
    ,
    },
    
  }