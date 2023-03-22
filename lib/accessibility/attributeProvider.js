export class AttributeProvider {
    constructor(mappings) {
        this.provideAttributes = () => {
            for (const mapping of this.Mappings) {
                for (const attribute of mapping.attributes) {
                    mapping.element.setAttribute(attribute.name, attribute.value);
                }
            }
        };
        this.Mappings = mappings;
    }
}
