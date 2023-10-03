export const NavRoutes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About us",
    path: "/about-us",
  },
  {
    title: "Companies",
    subRoutes: [
      {
        title: "Pacific Energy",
        path: "/pacific-energy",
        subRoutes: [
          {
            title: "Omotosho power company",
            path: "/pacific-energy/omotosho-electric-company",
          },
          {
            title: "Olorunsogo power plant",
            path: "/pacific-energy/olorunsogo-power-plant",
          },
        ],
      },
      {
        title: "Pacific freightline",
        path: "/pacific-freightliners-limited",
      },
    ],
  },
  {
    title: "Contact us",
    path: "/contact-us",
  },
];
