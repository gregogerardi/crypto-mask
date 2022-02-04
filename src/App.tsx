import {BrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import Introduction from "./Content/Introduction";
import Presentation from "./Content/Presentation";
import Gallery from "./Content/Gallery";

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Introduction/>
                <Presentation/>
                <Gallery/>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
