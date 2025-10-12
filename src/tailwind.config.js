// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         float: {
//           "0%, 100%": { transform: "translateY(0) scale(1)" },
//           "50%": { transform: "translateY(-8px) scale(1.1)" },
//         },
//       },
//       animation: {
//         float: "float 2s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };
module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

