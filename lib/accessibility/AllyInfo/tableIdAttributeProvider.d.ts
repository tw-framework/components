import { AttributeProvider } from "../attributeProvider";
export declare class TableIdAttributeProvider extends AttributeProvider {
    private static readonly idAttributeArray;
    private constructor();
    static create: () => TableIdAttributeProvider | undefined;
}
