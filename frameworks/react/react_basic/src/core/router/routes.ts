interface SwithRoutes {
  root: string;
  list: string;
  detail: string;
}

export const switchRoutes: SwithRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:login",
};

interface Routes extends Omit<SwithRoutes, "detail"> {
  detail: (login: string) => string;
}

export const routes: Routes = {
  root: "/",
  list: "/list",
  detail: (login: string) => `/detail/${login}`,
};
