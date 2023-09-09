import Home from "pages/Home";
import Artist from "pages/Artist";

const MainRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "Artist",
    component: Artist,
  },
];

export { MainRoutes };
