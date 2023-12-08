/**  @type {import ('postcss-load-config').Config } */
export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    autoprefixer: {},
    tailwindcss: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {})
  }
};
