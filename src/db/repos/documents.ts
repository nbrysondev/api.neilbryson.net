import { IDatabase, IMain } from "pg-promise";
import sqlProvider from "../sql";

export class Repository {

    private db: IDatabase<any>;
    private pgp: IMain;
    private sql: any;

    constructor(db: any, pgp: IMain) {
        this.db = db;
        this.pgp = pgp;
        this.sql = sqlProvider.documents;

        // Create documents table if it doesn't exist
        this.exists().then(result => {
            if (result.exists === false) {
                this.create();
            }
        });
    }

    public exists() {
        return this.db.oneOrNone(this.sql.exists);
    }

    public create() {
        this.db.none(this.sql.create);
    }

    public drop() {
        this.db.none(this.sql.drop);
    }

    public empty() {
        this.db.none(this.sql.empty);
    }

    public add(values: any) {
        this.db.one(this.sql.add, values);
    }

    public remove(id: number) {
        this.db.result(this.sql.remove, id);
    }

    public findById(id: number) {
        return this.db.oneOrNone(this.sql.findbyId, id);
    }

    public findByName(name: string) {
        return this.db.oneOrNone(this.sql.findByName, name);
    }

    public all() {
        this.db.any(this.sql.all);
    }

    public total() {
        this.db.one(this.sql.total);
    }
}