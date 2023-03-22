import { GameData } from "./game_data";
import { InfoAlly } from "./InfoAlly";
import { InfoPlayer } from "./InfoPlayer";
import { UI } from "./UI";

declare global {
    interface Window {
        game_data: GameData;
        UI: UI;
        InfoPlayer?: InfoPlayer;
        InfoAlly?: InfoAlly;
    }
}
export {}