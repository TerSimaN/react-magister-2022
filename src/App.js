import { Container, Row } from "react-bootstrap";
import Navigation from "./components/navbar/Navigation";
import Breweries from "./pages/Breweries";
import Home from "./pages/Home";

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

const routes = [
    {
        path: "/",
        page: <Home />,
        exact: true
    },
    {
        path: "/breweries",
        page: <Breweries />
    },
]

function App() {

    function getRoutes() {
        return routes.map((route, index) => {
            return <Route 
                key={index}
                exact={route.exact}
                path={route.path}
                element={route.page} />
        })
    }

    return (
        <Router>
            <Navigation />
            <Container>
                <Row className="mt-5">
                    <Routes>
                        {getRoutes()}
                    </Routes>
                </Row>
            </Container>
            <footer className="py-3 my-4"></footer>
        </Router>
    )
}

export default App;