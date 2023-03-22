var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import { Component } from "../core/component";
const selector = '.info_map_color_toggler';
class PropertiesTableContainer extends Component {
    constructor(anchorElement) {
        super('tr', anchorElement);
    }
}
class AllyInfoPropertiesContainer {
}
class AllyInfoTableContainer extends PropertiesTableContainer {
    constructor(anchorElement) {
        super(anchorElement);
    }
}
export class PlayerInfoTableContainer extends Component {
    constructor(anchorElement) {
        super('tr', anchorElement);
    }
}
_a = PlayerInfoTableContainer;
PlayerInfoTableContainer.createElement = () => __awaiter(void 0, void 0, void 0, function* () {
    const anchorElement = document.querySelector(selector);
    const element = !anchorElement ?
        undefined :
        new PlayerInfoTableContainer(anchorElement);
    yield (element === null || element === void 0 ? void 0 : element.render());
    return element;
});
