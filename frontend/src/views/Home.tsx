import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <div
                className="button"
                onClick={() => {
                    console.log("clicked");
                    navigate("/game");
                }}
            >
                Reversi
            </div>
        </div>
    );
}
