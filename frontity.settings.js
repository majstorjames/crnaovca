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
              type: "blog",
              endpoint: "blog",
            },
          ],
        },
      },
    },
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "xxxx",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@aamodtgroup/frontity-contact-form-7",
  ],
};

export default settings;
