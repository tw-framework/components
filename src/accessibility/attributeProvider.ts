import { AttributeMapping } from "./attributeMapping";

export abstract class AttributeProvider {
    protected Mappings: AttributeMapping[];

    constructor(mappings: AttributeMapping[]) {
        this.Mappings = mappings;
    }

    public provideAttributes = () => {
        for (const mapping of this.Mappings) {
            for (const attribute of mapping.attributes) {
                mapping.element.setAttribute(attribute.name, attribute.value);
            }
        }
    }
}