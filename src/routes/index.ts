import { NextFunction, Request, Response, Router } from "express";
import { Route } from "./route";
export { DocumentsRoute } from "./documents";

/**
* / route
*
* @class Index
*/
export class IndexRoute extends Route {

    public constructor() {
        super();
    }

    /**
    * Create the routes.
    *
    * @class IndexRoute
    * @method create
    * @static
    */
    public static create(router: Router) {

        // add api status route
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });
    }

    /**
    * The home page route.
    *
    * @class IndexRoute
    * @method index
    * @param req {Request} The express Request object.
    * @param res {Response} The express Response object.
    * @next {NextFunction} Execute the next method.
    */
    public index(req: Request, res: Response, next: NextFunction) {
        res.type("json").json({
            api: "OK"
        });
    }
}