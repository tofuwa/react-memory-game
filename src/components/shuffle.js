/**
 * @method shuffleCards 引数配列をシャッフルする
 * @param {Array} array シャッフルしたい配列
 * @returns {Array} シャッフル済み配列
 * @description アルゴリズム上とても好ましくないが、手抜きをする
 */
const shuffleCards = (array) => {
    const shfflingArray = array.slice();
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const tmp = shfflingArray[j];
        shfflingArray[j] = shfflingArray[i];
        shfflingArray[i] = tmp;
    }
    return shfflingArray;
};
export { shuffleCards };
