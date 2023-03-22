interface Attribute {
    name: string;
    value: string;
}

type AttributeMapping = {
    element: Element;
    attributes: Attribute[]
}