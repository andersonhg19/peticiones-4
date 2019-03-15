export class constantes {
    public routeGlobal = "/api/"; ///sip/public/api/
    public route = "/api/";
    public url_api = "/peticiones/public/api/"; // ruta api

    getRouterGlobal() {
        return this.routeGlobal;
      }

      getRouter() {
        return this.route;
      }

      getRouterApi() {
        return this.url_api;
      }

}