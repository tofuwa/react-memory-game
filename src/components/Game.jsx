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
            clears: new Array(contentsLength).fill(false),

            /**
             * @var {string} isOpenCards カードは開かれているかどうかの配列
             * @default [false,false,false...] すべてfalseが入った配列
             * 奇数回目のクリック直後、クリアでないカードは閉じる必要がありそう？
             */
            opens: new Array(contentsLength).fill(false),
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
        const opens = isEvenOpenCount
            ? this.state.clears.slice()
            : this.state.opens.slice();

        opens[index] = !opens[index];

        /**
         * @summary クリア判定を行う
         * @description クリアしているものがあれば、開いているものがクリア
         * そうでなければ、元のクリア状態を維持
         * 開いた回数が奇数や0の場合、hasClearPair内で弾く
         */
        const oldClears = this.state.clears.slice();
        const contents = this.props.contents;
        const clears = hasClearPair(contents, oldClears, opens)
            ? opens
            : oldClears;

        /**
         * @summary すべての算出後、setState
         */
        this.setState({
            openCount: openCount,
            opens: opens,
            clears: clears,
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
        const clears = this.state.clears.slice();
        const clearCardCount = clears.reduce((clearCount, isClearCard) => {
            if (isClearCard) {
                return clearCount++;
            } else {
                return clearCount;
            }
        }, 0);
        const clearPairCount = clearCardCount / 2;

        const openCount = this.state.openCount;
        const isOpenCards = this.state.opens.slice();

        /**
         * @summary カード内容配列からカード配列を作成する
         */
        const cards = contents.map((cardContent, index) => {
            const clear = clears[index];
            const open = isOpenCards[index];
            return (
                <Card
                    content={cardContent}
                    key={index}
                    clear={clear}
                    open={open}
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
