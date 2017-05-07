import * as promise from "bluebird";
import * as pgPromise from "pg-promise";
import {IMain, IDatabase, IOptions} from "pg-promise";
import * as documents from "./repos/documents";
import {environment} from "../environments/environment";

interface IExtensions {
    documents: documents.Repository;
}

// pg-promise initialization options:
const options: IOptions<IExtensions> = {
    promiseLib: promise,
    extend: (obj: IExtensions) => {
        obj.documents = new documents.Repository(obj, pgp);
    }
};
const pgp: IMain = pgPromise(options);

// Create the database instance with extensions:
export default <IDatabase<IExtensions>&IExtensions>pgp({
    host: environment.database.hostname,
    port: environment.database.port,
    database: environment.database.database,
    user: environment.database.username,
    password: environment.database.password
});
