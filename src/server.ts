// third party deps
import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");


// app
import { IndexRoute, DocumentsRoute } from "./routes/index";

/**
* The server.
*
* @class Server
*/
export class Server {

    public app: express.Application;

    /**
    * Bootstrap the application.
    *
    * @class Server
    * @method bootstrap
    * @static
    * @return {Server}
    */
    public static bootstrap(): Server {
        return new Server();
    }

    /**
    * Constructor.
    *
    * @class Server
    * @constructor
    */
    constructor() {
        // create expressjs application
        this.app = express();

        // configure application
        this.config();

        // add routes
        this.routes();

    }

    /**
    * Configure application
    *
    * @class Server
    * @method config
    */
    public config() {

        this.app.use(express.static(path.join(__dirname, "public")));

        this.app.use(logger("dev"));

        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        this.app.use(methodOverride());

        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });

        this.app.use(errorHandler());

    }


    /**
    * Create router
    *
    * @class Server
    * @method api
    */
    public routes() {
        let router: express.Router;
        router = express.Router();

        // IndexRoute
        IndexRoute.create(router);
        DocumentsRoute.create(router);

        // use router middleware
        this.app.use(router);
    }
}