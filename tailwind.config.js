module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px'
    },
    extend: {
      colors: {
        'primary': {
          'dark': '#650300',
          DEFAULT: '#AA0601',
          'light': '#FBF2F2'
        }
      },
      fontSize: {
        '3xxl': ['32px', '48px'],
        '4xxl': ['42px', '63px'],
        '6xxl': ['64px', '96px']
      },
      dropShadow: {
        'card-shadow': '0px 2px 6px rgba(0, 0, 0, 0.29)'
      }
    },
    container: {
      center: true, // 水平置中
      padding: '12px', // 水平間距
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}