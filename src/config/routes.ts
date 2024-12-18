import React from 'react';

const LandingPage = React.lazy(() => import('../screens/Landing'));
const ErrorPage = React.lazy(() => import('../screens/Error'));
const Login = React.lazy(() => import('../screens/Login'));
const Checkout = React.lazy(() => import('../screens/components/checkout_components/Checkout'));
const DynamicPage = React.lazy(() => import('../screens/DynamicPage'));
const CocktailSearch = React.lazy(() => import('../screens/hero_pages/CocktailSearch'));
const CocktailAI = React.lazy(() => import('../screens/hero_pages/CocktailAI'));

interface RouteType {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  name: string;
  protected: boolean;
}

const routes: RouteType[] = [
  {
    path: "/cocktails/:name",
    component: DynamicPage,
    name: "Dynamic Page",
    protected: false,
  },
  {
    path: "/findCocktail",
    component: CocktailSearch,
    name: "Search Cocktail",
    protected: false,
  },
  {
    path: "/createCocktail",
    component: CocktailAI,
    name: "Create Cocktail",
    protected: false,
  },
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
    path: "/checkout",
    component: Checkout,
    name: "Checkout",
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
