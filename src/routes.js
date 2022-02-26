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
    path: "/get_educated",
    name: "Get Educated",
    icon: <DocumentIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/investments",
    name: "Investments",
    icon: <StatsIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
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

  // {
  //   name: "ACCOUNT PAGES",
  //   category: "account",
  //   state: "pageCollapse",
  //   views: [
  //     {
  //       path: "/profile",
  //       name: "Profile",
  //       icon: <PersonIcon color="inherit" />,
        
  //       component: Profile,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/signin",
  //       name: "Sign In",
  //       icon: <DocumentIcon color="inherit" />,
  //       component: SignIn,
  //       layout: "/auth",
  //     },

  //   ],
  // },
];
export default dashRoutes;
