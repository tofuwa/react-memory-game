import React from "react";
const Card = ({ content, isOpenCard, openCard }) => {
    /**
     * 実は({})=>{}という書き方もできる
     * (アロー関数+分割代入)
     */

    /**
     * @summary 開いているカードなら中身を表示、閉じているカードなら何も表示しない
     * クリア済みカードであれば常時表示
     */
    const cardText = isOpenCard ? content : "";

    /**
     * @summary Cardの作成
     */
    return (
        <>
            <div
                style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    borderColor: "black",
                    borderWidth: 1,
                    borderStyle: "solid",
                }}
                onClick={() => {
                    if (!isOpenCard) {
                        openCard();
                    }
                }}
            >
                <p
                    style={{
                        verticalAlign: "middle",
                        lineHeight: "8vw",
                        margin: 0,
                    }}
                >
                    {cardText}
                </p>
            </div>
        </>
    );
};

export { Card };
