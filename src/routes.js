// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/financeEd",
    name: "Know Your Finances",
    icon: <DocumentIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },

  

  {
    name: "P2P Lending",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/borrow",
        name: "Borrow",
        icon: <PersonIcon color="inherit" />,
        component: Billing,
        layout: "/admin",
      },
      {
        path: "/lending",
        name: "Lending",
        icon: <CreditIcon color="inherit" />,
        component: Billing,
        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
