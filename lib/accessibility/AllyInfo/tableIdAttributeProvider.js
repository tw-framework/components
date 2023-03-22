var _a;
import { Logger } from "../../core/logger";
import { AttributeProvider } from "../attributeProvider";
const ROOT_TABLE_ID = 'content_value';
const CHILD_TABLE_CLASS = 'vis';
export class TableIdAttributeProvider extends AttributeProvider {
    constructor(mappings) {
        super(mappings);
    }
}
_a = TableIdAttributeProvider;
TableIdAttributeProvider.idAttributeArray = [
    'ally_properties_table',
    'ally_players_table',
    'ally_description_table'
];
TableIdAttributeProvider.create = () => {
    const ROOT_TABLE = document.getElementById(ROOT_TABLE_ID);
    if (!ROOT_TABLE) {
        Logger.error(`Failed to locate element with id: ${ROOT_TABLE_ID}!`);
        return undefined;
    }
    const elements = [...ROOT_TABLE.getElementsByClassName(CHILD_TABLE_CLASS)];
    if (elements.length !== 3) {
        Logger.error(`Count of elements returned by 'getElementsByClassName' differs from expected count of 3. Found ${elements.length} elements instead.`);
        return undefined;
    }
    const mappings = [];
    for (let index = 0; index < _a.idAttributeArray.length; index++) {
        const mapping = {
            element: elements[index],
            attributes: [
                { name: 'id', value: _a.idAttributeArray[index], }
            ]
        };
        mappings.push(mapping);
    }
    return new TableIdAttributeProvider(mappings);
};
