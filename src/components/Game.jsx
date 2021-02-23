import React from "react";
import { StatusView } from "./StatusView";
import { Card } from "./Card";

/**
 * @class Board
 */
class Game extends React.Component {
    constructor(props) {
        super(props);

        const contentsLength = this.props.contents.length;

        /**
         * @summary stateの初期代入
         */
        this.state = {
            /**
             * @var {number} openCount 開閉回数
             */
            openCount: 0,

            /**
             * @var {number} isClearCards カードはクリア済みかどうかの配列
             * @default [false,false,false...] すべてfalseが入った配列
             * すべてtrueになった状態:ゲームクリア
             */
            isClearCards: new Array(contentsLength).fill(false),

            /**
             * @var {string} isOpenCards カードは開かれているかどうかの配列
             * @default [false,false,false...] すべてfalseが入った配列
             * 奇数回目のクリック直後、クリアでないカードは閉じる必要がありそう？
             */
            isOpenCards: new Array(contentsLength).fill(false),
        };
    }

    render() {
        /**
         * @summary this.propsで引数をAppから受け取る
         */
        const contents = this.props.contents;

        /**
         * @summary Game内でカードがクリア済みかstateを保有し、
         * その個数からclearPairCountを算出する
         */
        const isClearCards = this.state.isClearCards;
        const clearPairCount = isClearCards.filter((isClearCard) => {
            return isClearCard;
        }).length;

        const openCount = this.state.openCount;
        const isOpenCards = this.state.isOpenCards;

        /**
         * @summary カード内容配列からカード配列を作成する
         */
        const cards = contents.map((cardContent, index) => {
            const isClearCard = isClearCards[index];
            const isOpenCard = isOpenCards[index];
            return (
                <Card
                    content={cardContent}
                    key={index}
                    isClearCard={isClearCard}
                    isOpenCard={isOpenCard}
                />
            );
        });

        /**
         * @summary ステータス表示の作成
         */
        const statusView = (
            <StatusView
                cards={contents}
                openCount={openCount}
                clearPairCount={clearPairCount}
            />
        );

        /**
         * @summary 神経衰弱を行う場所の作成
         */
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
                {cards}
            </div>
        );

        return (
            <div>
                {statusView}
                {board}
            </div>
        );
    }
}
export { Game };
