module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["prompt", "sans-serif"],
        body: ["poppins", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
          center: true,
        },
      },
      borderColor: {
        "devtraco-primary-blue": "#ABBAFF",
        "devtraco-blue": "#070D28",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(7, 13, 40, 0.7), rgba(7, 13, 40, 0.7)), url('https://firebasestorage.googleapis.com/v0/b/photo-crib.appspot.com/o/images%2Fd8d80f21d0475aecd32fcd237ba00f0c.gif?alt=media&token=d2deff31-1058-4a1f-bc9a-1f91064099eb')",
        "extra-1":
          "linear-gradient(to right bottom, rgba(14, 21, 56, 0.30), rgba(14, 21, 56, 0.30)), url('../public/Rectangle 3904.jpg')",
        "extra-hover-1":
          "linear-gradient(to bottom, rgba(7, 13, 40, 0.00) 24.48%, #070D28 100%), url('../public/Rectangle 3904.jpg')",
        "extra-2":
          "linear-gradient(to right bottom, rgba(14, 21, 56, 0.30), rgba(14, 21, 56, 0.30)), url('../public/Rectangle 3902.jpg')",
        "extra-hover-2":
          "linear-gradient(to bottom, rgba(7, 13, 40, 0.00) 24.48%, #070D28 100%), url('../public/Rectangle 3902.jpg')",
        "extra-3":
          "linear-gradient(to right bottom, rgba(14, 21, 56, 0.30), rgba(14, 21, 56, 0.30)), url('../public/Rectangle 3903.jpg')",
        "extra-hover-3":
          "linear-gradient(to bottom, rgba(7, 13, 40, 0.00) 24.48%, #070D28 100%), url('../public/Rectangle 3903.jpg')",
        "service-card-1":
          "linear-gradient(to bottom, transparent, rgba(14, 21, 56, 0.7)), url('../public/Rectangle 3854.jpg')",
        "service-card-2":
          "linear-gradient(to bottom, transparent, rgba(14, 21, 56, 0.7)), url('../public/Rectangle-3855.jpg')",
        "service-card-3":
          "linear-gradient(to bottom, transparent, rgba(14, 21, 56, 0.7)), url('../public/Rectangle-3856.jpg')",
        "service-card-4":
          "linear-gradient(to bottom, transparent, rgba(14, 21, 56, 0.7)), url('../public/Rectangle-857.jpg')",
        "service-card-hover": "linear-gradient(to bottom, #ABBAFF, #ABBAFF)",
        "hero-box-1":
          "linear-gradient(to bottom, rgba(52, 70, 159, 0.70), rgba(52, 70, 159, 0.70)), url('../public/Rectangle 3904.jpg')",
        "hero-box1-hover": "linear-gradient(to bottom, #34469F, #34469F)",
        "hero-box-2":
          "linear-gradient(to bottom, rgba(13, 20, 55, 0.70), rgba(13, 20, 55, 0.70)), url('../public/2052ff792b273bd170f0b7ec038368d3.jpeg')",
        "hero-box2-hover": "linear-gradient(to bottom, #0D1437, #0D1437)",
      },
      backgroundColor: {
        "credly-black": "#161616",
        "devtraco-blue": "#070D28",
        "devtraco-primary-blue": "#ABBAFF",
        "devtraco-neutral-100": "#F4F4F4",
        "primary-purple": "#4E64CF",
      },

      textColor: {
        "devtraco-blue": "#070D28",
        "devtraco-white": "#F9FAFB",
        "devtraco-primary-blue": "#ABBAFF",
        "primary-purple": "#4E64CF",
      },
    },
  },

  plugins: [require("@tailwindcss/forms"), require('@tailwindcss/typography'),],
};
