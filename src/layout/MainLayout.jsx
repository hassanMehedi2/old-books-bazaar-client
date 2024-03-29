import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5  font-fontSoro">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;