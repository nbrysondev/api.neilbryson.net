import {utils} from "pg-promise";
import {QueryFile, TQueryFileOptions} from "pg-promise";
export default utils.enumSql(__dirname, {recursive: true}, file => {
    // NOTE: 'file' contains the full path to the SQL file, as we use __dirname for enumeration.
    return new QueryFile(file, {
        minify: true,
    });
});