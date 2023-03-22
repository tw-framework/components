import { TWComponentOptions } from "./opts";
export class Logger {
    static log(...data) {
        if (!TWComponentOptions.Debug) {
            return;
        }
        console.log(data);
    }
    static error(...data) {
        this.log(`ERROR: ${data}`);
    }
}
