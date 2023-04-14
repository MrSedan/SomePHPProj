import { useEffect, useState } from "react";
import "../styles/game.css";

interface cell {
    state: "black" | "white" | "none";
}

const handleMouseSelector = (event: React.MouseEvent<HTMLDivElement>) => {
    const cell = event.currentTarget;
    const hasWB = cell.querySelector(".w, .b");
    if (!hasWB) {
        cell.style.cursor = "pointer";
    }
};

export default function Game() {
    const [cells, setCells] = useState<cell[]>([]);
    useEffect(() => {
        let arr: cell[] = [];
        const states: ("black" | "white" | "none")[] = [
            "black",
            "white",
            "none",
        ];
        for (let i = 0; i < 64; i++) {
            const randEl = states[Math.floor(Math.random() * 3)];
            const el: cell = { state: randEl };
            arr.push(el);
        }
        setCells(arr);
    }, []);
    return (
        <div className="game">
            <div id="gameboard">
                {cells &&
                    cells.map((item, index) => {
                        return (
                            <div
                                className="cell"
                                key={index}
                                onMouseEnter={handleMouseSelector}
                            >
                                <div
                                    className={
                                        item.state === "black"
                                            ? "b"
                                            : item.state === "white"
                                            ? "w"
                                            : "none"
                                    }
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
