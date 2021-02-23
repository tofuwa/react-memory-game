import React from "react";
const Card = ({ content, isClearCard, isOpenCard }) => {
    /**
     * 実は({})=>{}という書き方もできる
     * (アロー関数+分割代入)
     */

    /**
     * @summary 開いているカードなら開く、閉じているカードなら閉じるを暫定表示
     */
    const openStatusText = isOpenCard ? "開" : "閉";

    /**
     * @summary Cardコンポーネントのpropsはひとまずカードの中身だけでよさそう！
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
            >
                <p
                    style={{
                        verticalAlign: "middle",
                        lineHeight: "8vw",
                        margin: 0,
                    }}
                >
                    {content + openStatusText}
                </p>
            </div>
        </>
    );
};

export { Card };
