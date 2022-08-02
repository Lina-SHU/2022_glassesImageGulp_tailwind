module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        'primary': '#AA0601',
        'primary-dark': '#650300',
        'primary-light': '#FBF2F2'
      }
    },
    container: {
      center: true, // 水平置中
      padding: '2rem', // 水平間距
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}