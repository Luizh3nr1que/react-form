import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home'
import Error from './pages/error'
import CreateAccount from './pages/createAccount'
import PassReset from './pages/passReset'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/reset-password" element={<PassReset />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;