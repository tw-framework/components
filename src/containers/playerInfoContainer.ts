import { Component } from "../core/component";

const selector = '.info_map_color_toggler';

export class PlayerInfoContainer extends Component<HTMLTableRowElement> {
    private constructor(anchorElement: HTMLElement) {
        super('tr', anchorElement);
    }

    public static createElement = async (): Promise<undefined | PlayerInfoContainer> => {
        const anchorElement = <HTMLElement> document.querySelector(selector)

        const element = !anchorElement ?
            undefined : 
            new PlayerInfoContainer(anchorElement);

        await element?.render('');

        return element;
    }
}