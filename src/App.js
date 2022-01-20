import Navigation from "./components/Navigation";
import Breweries from "./pages/Breweries";
import Foods from "./pages/Foods";
import Home from "./pages/Home";

function App(props) {
    return (
        <>
            <Navigation />
            <Home />
            <Foods />
            <Breweries />
        </>
    )
}

export default App;