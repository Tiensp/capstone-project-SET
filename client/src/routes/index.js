const routes = {
  home: {
    path: "/",
  },
  login: {
    path: "/login",
  },
  signup: {
    path: "/signup",
  },
  account: {
    path: "/dashboard/account",
  },
  dashboard: {
    path: "/dashboard",
  },
  droplets :{
    path: "/dashboard/droplets",
    droplet : {
      path: "/dashboard/droplets/:id",
      fileSystem : "/dashboard/droplets/:id/fileSystem",
      CPU: "/dashboard/droplets/:id/CPU",
      bandwidth: "/dashboard/droplets/:id/bandwidth",
    }
  },

};

export default routes;
