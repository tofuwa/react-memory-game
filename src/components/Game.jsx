import React from "react";
import { StatusView } from "./StatusView";
import { Card } from "./Card";
import { hasClearPair } from "./gameLogics";

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

    /**
     * @method openCard カードを開いたとみなし、stateをセットする
     * @param {number} index 開いたカードの配列内での添え字
     */
    openCard(index) {
        /**
         * @summary まず開いた回数を仮更新する
         */
        const openCount = this.state.openCount + 1;

        /**
         * @summary 奇数回目の場合、開く前に1度未クリアのカードをすべて閉じる
         */
        const isEvenOpenCount = openCount % 2 === 1;
        const isOpenCards = isEvenOpenCount
            ? this.state.isClearCards.slice()
            : this.state.isOpenCards.slice();

        isOpenCards[index] = !isOpenCards[index];

        /**
         * @summary クリア判定を行う
         * @description クリアしているものがあれば、開いているものがクリア
         * そうでなければ、元のクリア状態を維持
         * 開いた回数が奇数や0の場合、hasClearPair内で弾く
         */
        const oldIsClearCards = this.state.isClearCards.slice();
        const contents = this.props.contents;
        const isClearCards = hasClearPair(
            contents,
            oldIsClearCards,
            isOpenCards
        )
            ? isOpenCards
            : oldIsClearCards;

        /**
         * @summary すべての算出後、setState
         */
        this.setState({
            openCount: openCount,
            isOpenCards: isOpenCards,
            isClearCards: isClearCards,
        });
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
        const isClearCards = this.state.isClearCards.slice();
        const clearCardCount = isClearCards.reduce(
            (clearCount, isClearCard) => {
                if (isClearCard) {
                    return clearCount++;
                } else {
                    return clearCount;
                }
            },
            0
        );
        const clearPairCount = clearCardCount / 2;

        const openCount = this.state.openCount;
        const isOpenCards = this.state.isOpenCards.slice();

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
                    openCard={() => {
                        this.openCard(index);
                    }}
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
