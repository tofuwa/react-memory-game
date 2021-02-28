/**
 * @method shuffleCards 引数配列をシャッフルする
 * @param {Array} array シャッフルしたい配列
 * @returns {Array} シャッフル済み配列
 * @description アルゴリズム上とても好ましくないが、手抜きをする
 */
const shuffleCards = (array) => {
    return array.sort(() => {
        const randomA = Math.random();
        const randomB = Math.random();
        return randomA - randomB;
    });
};
export { shuffleCards };
