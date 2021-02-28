/**
 * @method hasClearPair 新たにクリアしているペアがあるか調べる
 * @param {string[]} contents カードの中身配列
 * @param {boolean[]} isClearCards クリア状態配列
 * @param {boolean[]} isOpenCards 開閉状態配列
 * @returns {boolean} 新たにクリアしているペアがあればtrue
 * @description 開閉状態とクリア状態からコンテンツを精査する
 */
const hasClearPair = (contents, isClearCards, isOpenCards) => {
    const unClearOpenContents = contents.filter((content, index) => {
        return !isClearCards[index] && isOpenCards[index];
    });

    /**
     * @summary クリアしているか判定しセットする
     * @description もし未クリアの空いているカードが2枚で、
     * かつ値が同じなら、開いているカードはすべてクリア済み
     * (初回は0枚がありうる)
     */
    const isClearPair =
        unClearOpenContents.length === 2 &&
        unClearOpenContents[0] === unClearOpenContents[1];
    return isClearPair;
};
export { hasClearPair };
