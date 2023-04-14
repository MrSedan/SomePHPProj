import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Game from "./views/Game";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "game",
        element: <Game />,
    },
    {
        path: "*",
        element: <p>Not found</p>,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
