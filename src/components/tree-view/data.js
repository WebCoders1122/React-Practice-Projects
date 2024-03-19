const data = [
  {
    name: "Home",
    path: "/",
    children: [
      {
        name: "Settings",
        path: "settings",
        children: [
          {
            name: "App Settings",
            path: "app",
          },
        ],
      },
    ],
  },
  {
    name: "Security",
    path: "/security",
  },
  {
    name: "services",
    path: "/services",
    children: [
      {
        name: "Web Development",
        path: "web-development",
      },
      {
        name: "App Development",
        path: "app-development",
        children: [
          {
            name: "Android",
            path: "android",
          },
        ],
      },
      {
        name: "De-Bugging",
        path: "debugging",
      },
    ],
  },
];

export default data;
