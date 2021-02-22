import React from "react";
import { StatusView } from "./StatusView";
import { Card } from "./Card";

/**
 * @class Board
 */
class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        /**
         * @summary this.propsで引数をAppから受け取る
         */
        const clearPairCount = this.props.clearPairCount;
        const openCount = this.props.openCount;
        const cards = this.props.cards;

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
                {cards.map((card, index) => {
                    return <Card card={card} key={index} />;
                })}
            </div>
        );
        return (
            <div>
                <StatusView
                    cards={cards}
                    openCount={openCount}
                    clearPairCount={clearPairCount}
                />
                {board}
            </div>
        );
    }
}
export { Game };
