import React from "react";
const StatusView = ({ cards, openCount, clearPairCount }) => {
    /**
     * 実は({})=>{}という書き方もできる
     * (アロー関数+分割代入)
     */

    /**
     * @summary ペア数はカードの長さから割り出せそう！
     */
    const pairCount = cards.length / 2;

    /**
     * @summary もしかしたらクリアした組数とペア数の比較で文言も変えられるかも？
     */
    const pairViewText = clearPairCount + "/" + pairCount;

    return (
        <div
            style={{
                textAlign: "center",
            }}
        >
            <h1>神経衰弱</h1>
            <p>ペア数 : {pairViewText}</p>
            <p>開いた回数 : {openCount}</p>
        </div>
    );
};
export { StatusView };
