import LandingPage from "../screens/Landing";
import ErrorPage from "../screens/Error";
import Login from '../screens/Login'

interface RouteType {
  path: string;
  component: any;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "/",
    component: LandingPage,
    name: "Landing Page",
    protected: false,
  },
  {
    path: "/signin",
    component: Login,
    name: "Sign In",
    protected: false,
  },
  {
    path: "/signup",
    component: Login,
    name: "Sign Up",
    protected: false,
  },
  {
    path: "*",
    component: ErrorPage,
    name: "Error Page",
    protected: false,
  },
];

export default routes;
