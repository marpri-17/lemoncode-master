interface SwithRoutes {
  root: string;
  github: ViewRoutes;
  rickAndMorty: ViewRoutes;
}

interface ViewRoutes {
  list: string;
  detail: string;
}

export const switchRoutes: SwithRoutes = {
  root: "/",
  github: {
    list: "/github",
    detail: "/github/:login",
  },
  rickAndMorty: {
    list: "/rickandmorty",
    detail: "/rickandmorty/:character",
  },
};

interface ViewsRoutes extends Omit<ViewRoutes, "detail"> {
  detail: (id: string) => string;
}

interface Routes extends Omit<SwithRoutes, "github" | "rickAndMorty"> {
  github: ViewsRoutes;
  rickAndMorty: ViewsRoutes;
}

export const routes: Routes = {
  root: "/",
  github: {
    list: "/github",
    detail: (login: string) => `/github/${login}`,
  },
  rickAndMorty: {
    list: "/rickandmorty",
    detail: (character: string) => `/rickandmorty/${character}`,
  },
};
