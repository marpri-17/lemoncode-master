interface SwithRoutes {
  root: string;
  app: string;
  list: string;
  detail: string;
}

export const switchRoutes: SwithRoutes = {
  root: "/",
  app: "/app",
  list: "/list",
  detail: "/detail/:login",
};

interface Routes extends Omit<SwithRoutes, "detail"> {
  detail: (login: string) => string;
}

export const routes: Routes = {
  root: "/",
  app: "/list",
  list: "/list",
  detail: (login: string) => `/detail/${login}`,
};
