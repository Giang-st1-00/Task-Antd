import Home from "../../page/Home";

const pageRoutes = () => {
  return [
    {
      path: "/",
      link: "/home",
      name: "DashBoard",
      element: Home,
    },
  ];
};

export default pageRoutes();
