import Header from "~/components/Layout/components/Header";
import Slidebar from "./Slidebar";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Slidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;