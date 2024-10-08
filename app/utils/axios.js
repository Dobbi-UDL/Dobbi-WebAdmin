// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.example.com", // Cambia esto a la URL de tu API
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Interceptor para agregar el token JWT a las solicitudes
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("jwt");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// export default instance;
