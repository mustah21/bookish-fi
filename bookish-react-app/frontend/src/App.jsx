import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainPage from "./pages/mainPage";
import Notes from "./pages/Notes";
import Error from "./pages/Error";
import Recommendation from "./components/Recommendations"; // ✅ your Recommendation component

import "./App.css";

export default function App() {
    const location = useLocation();

    const hideFooter =
        ["/login", "/signup", "/mainPage"].includes(location.pathname) ||
        Boolean(matchPath({ path: "/notes/:bookId" }, location.pathname));

    return (
        <div className="app">
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mainPage" element={<MainPage />} />
                <Route path="/notes/:bookId" element={<Notes />} />

                {/* ✅ New Route for Recommendation Page */}
                <Route path="/recommendations" element={<Recommendation />} />

                {/* keep this last */}
                <Route path="*" element={<Error />} />
            </Routes>

            {!hideFooter && <Footer />}
        </div>
    );
}
