export abstract class Component<THTMLElement extends HTMLElement> {
    protected Element?: THTMLElement;
    protected AnchorElement: HTMLElement;

    private readonly elementTagName: keyof HTMLElementTagNameMap;

    protected constructor(elementTagName: keyof HTMLElementTagNameMap, anchorElement: HTMLElement) {
        this.elementTagName = elementTagName;
        this.AnchorElement = anchorElement;
    }

    public render = async(where: InsertPosition = 'afterend'): Promise<undefined | THTMLElement> => {
        let createdElement = document.createElement(this.elementTagName);
        let element = <THTMLElement> this.AnchorElement.insertAdjacentElement(where, createdElement);

        this.Element = element;

        return element;
    }

    public renderWithContent = async(body: string, where: InsertPosition = 'afterend'): Promise<undefined | THTMLElement> => {
        let element = await this.render(where);

        if (!element) {
            return undefined;
        }

        element.innerHTML = body;
        
        return element;
    }
}