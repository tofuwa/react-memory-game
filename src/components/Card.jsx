import React from "react";
const Card = ({ card }) => {
    /**
     * 実は({})=>{}という書き方もできる
     * (アロー関数+分割代入)
     */

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
                    {card}
                </p>
            </div>
        </>
    );
};

export { Card };
