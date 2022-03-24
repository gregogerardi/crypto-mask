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
                    <Route path="crypto-mask" element={<Home/>}/>
                    <Route path="crypto-mask/whitelist" element={<Whitelist/>}/>
                    <Route path="crypto-mask/*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>

    );
}

export default App;
