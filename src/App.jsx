import React from "react";
import { Game } from "./components/Game";

/**
 * @class App
 */
class App extends React.Component {
    render() {
        /**
         * @var {number[]} cards 手札の暫定配列
         */
        const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

        /**
         * @var {number} openCount 開閉回数(暫定)
         */
        const openCount = 1;

        /**
         * @var {number} clearPairCount クリアした組数
         */
        const clearPairCount = 0;

        return (
            <>
                <Game
                    cards={cards}
                    openCount={openCount}
                    clearPairCount={clearPairCount}
                />
            </>
        );
    }
}
export { App };
