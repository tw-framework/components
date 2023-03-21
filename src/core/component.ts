export abstract class Component<THTMLElement extends HTMLElement> {
    protected Element?: THTMLElement;
    protected AnchorElement: HTMLElement;

    private readonly elementTagName: keyof HTMLElementTagNameMap;

    protected constructor(elementTagName: keyof HTMLElementTagNameMap, anchorElement: HTMLElement) {
        this.elementTagName = elementTagName;
        this.AnchorElement = anchorElement;
    }

    public render = async(innerHTML: string, where: InsertPosition = 'afterend'): Promise<undefined | THTMLElement> => {
        let createdElement = document.createElement(this.elementTagName);
        createdElement.innerHTML = innerHTML;

        this.Element = <THTMLElement> this.AnchorElement.insertAdjacentElement(where, createdElement);

        return this.Element;
    }
}