import db from "../db";
import { Response } from "express";

/**
*
* @class Route
*/
export abstract class Route {

    protected db;

    public constructor() {
        this.db = db;
    }

    protected sendResponse(res: Response, data: any) {
        if (data) {
            this.successResponse(res, data);
        } else {
            this.notFoundResponse(res);
        }
    }

    protected successResponse(res: Response, data: any) {
        res.status(200).json(data);
    }

    protected notFoundResponse(res: Response) {
        res.status(404).json({
           "info": "Unable to find requested resource"
        });
    }

    protected forbiddenResponse(res: Response) {
        res.status(403).json({
           "info": "You must have a valid token to perform this action"
        });
    }

    protected errorResponse(res: Response, err: any) {
        console.log(err);
        res.status(500).json({
           "error": "There was an unexpected error"
        });
    }
}