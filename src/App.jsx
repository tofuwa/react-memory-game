import React from "react";
import { Game } from "./components/Game";

/**
 * @class App
 */
class App extends React.Component {
    render() {
        /**
         * @var {number[]} contents 手札の暫定配列
         */
        const contents = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

        return (
            <>
                <Game contents={contents} />
            </>
        );
    }
}
export { App };
