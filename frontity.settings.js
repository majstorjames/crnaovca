const settings = {
  name: "aamodtgroup",
  state: {
    frontity: {
      url: "https://admin.crna-ovca.com",
      title: "Crna ovca digitalni marketing",
      description: "Crna Ovca | Izrada web stranica",
    },
  },
  packages: [
    {
      name: "@aamodtgroup/agtech",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://admin.crna-ovca.com",
          homepage: "/home",
          postTypes: [
            {
              type: "lokacije",
              endpoint: "lokacije",
            },
          ],
        },
      },
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "G-HTSBV544VB",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",

    "@aamodtgroup/frontity-contact-form-7",
  ],
};

export default settings;
