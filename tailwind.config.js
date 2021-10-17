module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: "Quicksand",
      },
      borderColor: {
        primary: "#4295D2",
        write: "#EC7D36",
        blog: "#38C516",
        github: "#2E3A59",
        discord: "#3056B6",
      },
      boxShadow: {
        default: "5px 4px 0px #4295D2",
        write: "0px 4px 0px #EC7D36",
        blog: "0px 4px 0px #38C516",
        github: "0px 4px 0px #2E3A59",
        discord: "0px 4px 0px #3056B6",
        search: "0px 2px 0px #BFA8A8",
        content: "4px 4px 0px #333333",
        sidebar:
          "0px 100px 80px rgba(183, 164, 164, 0.16), 0px 41.7776px 33.4221px rgba(183, 164, 164, 0.115017), 0px 22.3363px 17.869px rgba(183, 164, 164, 0.0953772), 0px 12.5216px 10.0172px rgba(183, 164, 164, 0.08), 0px 6.6501px 5.32008px rgba(183, 164, 164, 0.0646228), 0px 2.76726px 2.21381px rgba(183, 164, 164, 0.0449833)",
      },
      backgroundImage: {
        "ndl-logo": "url('../../public/ninedotslabs.png')",
      },
      colors: {
        main: {
          primary: "#4295D2",
          write: "#EC7D36",
          blog: "#38C516",
          github: "#2E3A59",
          discord: "#3056B6",
          categories: "#630F0F",
          search: "#BFA8A8",
        },
        dark: {
          grey: "#444444",
          black: "#2B2B2B",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};