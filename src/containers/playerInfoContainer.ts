import { Component } from "../core/component";

const selector = '.info_map_color_toggler';


abstract class PropertiesTableContainer extends Component<HTMLTableRowElement> {
    constructor(anchorElement: HTMLElement) {
        super('tr', anchorElement)

        
    }
}

class AllyInfoPropertiesContainer {

}

class AllyInfoTableContainer extends PropertiesTableContainer {
    constructor(anchorElement: HTMLElement) {
        super(anchorElement);
    }
}

export class PlayerInfoTableContainer extends Component<HTMLTableRowElement> {
    private constructor(anchorElement: HTMLElement) {
        super('tr', anchorElement);
    }

    public static createElement = async (): Promise<undefined | PlayerInfoTableContainer> => {
        const anchorElement = <HTMLElement> document.querySelector(selector)

        const element = !anchorElement ?
            undefined : 
            new PlayerInfoTableContainer(anchorElement);

        await element?.render();

        return element;
    }
}