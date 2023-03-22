export interface UI {
    InfoMessage(msg: string): void;
    SuccessMessage(msg: string, timeout: Number): void;
    ErrorMessage(msg: string, timeout: Number): void;
}