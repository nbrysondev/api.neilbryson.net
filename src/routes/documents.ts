import { Request, Response, Router } from "express";
import { Route } from "./route";

/**
* /documents route
*
* @class DocumentsRoute
*/
export class DocumentsRoute extends Route {

    public constructor() {
        super();
    }

    /**
    * Create the routes.
    *
    * @method create
    * @static
    */
    public static create(router: Router) {

        router.get("/documents/:name", (req: Request, res: Response) => {
            new DocumentsRoute().getDocumentByName(req, res);
        });

        router.post("/documents", (req: Request, res: Response) => {
            new DocumentsRoute().addDocument(req, res);
        });

    }

    /**
    *
    * @method getDocumentsByName
    * @param req {Request} The express Request object.
    * @param res {Response} The express Response object.
    */
    protected getDocumentByName(req: Request, res: Response) {
        this.db.documents.findByName(req.params.name).then((data) => {
            this.sendResponse(res, data);
        }).catch((err) => {
            this.errorResponse(res, err);
        });
    }

    /**
    *
    * @method getDocumentsByName
    * @param req {Request} The express Request object.
    * @param res {Response} The express Response object.
    */
    protected addDocument(req: Request, res: Response) {

        this.forbiddenResponse(res);

        /* @todo JWT based authentication
        this.db.documents.add(req.params).then((data) => {
            this.sendResponse(res, data);
        }).catch((err) => {
            this.errorResponse(res, err);
        });
        */
    }

}