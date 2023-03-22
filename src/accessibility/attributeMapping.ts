export interface Attribute {
    name: string;
    value: string;
}

export type AttributeMapping = {
    element: Element;
    attributes: Attribute[]
}