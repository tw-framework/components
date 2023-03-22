export declare abstract class Component<THTMLElement extends HTMLElement> {
    protected Element?: THTMLElement;
    protected AnchorElement: HTMLElement;
    private readonly elementTagName;
    protected constructor(elementTagName: keyof HTMLElementTagNameMap, anchorElement: HTMLElement);
    render: (where?: InsertPosition) => Promise<undefined | THTMLElement>;
    renderWithContent: (body: string, where?: InsertPosition) => Promise<undefined | THTMLElement>;
}
