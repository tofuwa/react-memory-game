import React from "react";
import { StatusView } from "./StatusView";
import { Card } from "./Card";

/**
 * @class Board
 */
class Game extends React.Component {
    render() {
        const board = (
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: "repeat(4,8vw)",
                    gridTemplateColumns: "repeat(4,8vw)",
                    padding: "10%",
                    margin: "auto",
                    width: "32vw",
                }}
            >
                {new Array(16).fill(<Card />)}
            </div>
        );
        return (
            <div>
                <StatusView />
                {board}
            </div>
        );
    }
}
export { Game };
