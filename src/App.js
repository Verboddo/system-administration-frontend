import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import UpdateServerPage from "./pages/updateSever/UpdateServerPage";
import CreateServerPage from "./pages/createServer/CreateServerPage";
import Navigation from "./components/navigation/Navigation";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route
                    exact path="/"
                    element={<HomePage/>}>
                </Route>

                <Route
                    exact path="/update-server-page"
                    element={<UpdateServerPage/>}>
                </Route>

                <Route
                    exact path="/create-server-page"
                    element={<CreateServerPage/>}>
                </Route>
            </Routes>


        </>
    );
}

export default App;
