import { TWComponentOptions } from "./opts";

export class Logger {
    public static log(...data: any) {
        if (!TWComponentOptions.Debug) {
            return;
        }
            
        console.log(data);
    }

    public static error(...data: any) {
        this.log(`ERROR: ${data}`);
    }
}