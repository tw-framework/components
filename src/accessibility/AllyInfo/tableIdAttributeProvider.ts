import { Logger } from "../../core/logger";

const ROOT_TABLE_ID = 'content_value';
const CHILD_TABLE_CLASS = 'vis';

export default class TableIdAttributeProvider extends AttributeProvider {
    private static readonly idAttributeArray = [
        'ally_properties_table',
        'ally_players_table',
        'ally_description_table'
    ]

    private constructor(mappings: AttributeMapping[]) {
        super(mappings);
    }

    public static create = () => {
        const ROOT_TABLE = document.getElementById(ROOT_TABLE_ID);

        if (!ROOT_TABLE) {
            Logger.error(`Failed to locate element with id: ${ROOT_TABLE_ID}!`);
            return undefined;
        }

        const elements = [...ROOT_TABLE.getElementsByClassName(CHILD_TABLE_CLASS)]

        if (elements.length !== 3) {
            Logger.error(`Count of elements returned by 'getElementsByClassName' differs from expected count of 3. Found ${elements.length} elements instead.`);
            return undefined;
        }

        const mappings: AttributeMapping[] = [];

        for (let index = 0; index < this.idAttributeArray.length; index++) {
            const mapping: AttributeMapping = {
                element: elements[index],
                attributes: [
                    { name: 'id', value: this.idAttributeArray[index],  }
                ] 
            }

            mappings.push(mapping);
        }

        return new TableIdAttributeProvider(mappings);
    }
}