import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import {Home} from "./Content/Home/Home";
import Whitelist from "./Content/Whitelist";
import NotFound from "./Content/NotFound";


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="whitelist" element={<Whitelist/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>

    );
}

export default App;
