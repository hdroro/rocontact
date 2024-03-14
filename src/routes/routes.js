//Layouts
import config from "../config/routes";
import DefaultLayout from "../layouts/DefaultLayout";

import Home from "../components/Home/Home";

const publicRoutes = [
  { path: config.home, component: Home, layout: DefaultLayout },
];

export { publicRoutes };
