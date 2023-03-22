import { Feature } from './feature';
import { Player } from './player'
import { Village } from './village';

export interface GameData {
    rtl: boolean;
    csrf: string;
    device: string;
    features: {
        Premium: Feature;
        AccountManager: Feature;
        FarmAssistent: Feature;
    };
    group_id: number;
    link_base: string;
    link_base_pure: string;
    locale: string;
    majorVersion: string;
    market: string;
    mode: any;
    nav: {
        parent: number
    };
    player: Player
    pregame: boolean;
    quest: {
        use_questlines: boolean
    };
    screen: string;
    time_generated: number;
    units: string[];
    version: string;
    village: Village;
    world: string;
}