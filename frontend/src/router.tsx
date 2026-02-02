import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginview from "./views/LoginView";
import RegisterView from "./views/RegisterView";

export default function Router() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/auth/login" element={<Loginview/>} />
                    <Route path="/auth/register" element={<RegisterView/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
