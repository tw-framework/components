import { AttributeMapping } from "./attributeMapping";
export declare abstract class AttributeProvider {
    protected Mappings: AttributeMapping[];
    constructor(mappings: AttributeMapping[]);
    provideAttributes: () => void;
}
