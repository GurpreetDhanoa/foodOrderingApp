import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RestaurantDetail from "./Components/RestaurantDetail";

const Router = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/restaurant/:id" element={ <RestaurantDetail /> } />
            </Routes>
        </>
    );

}

export default Router;