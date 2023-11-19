import Header from "../components/Header";
import Footer from "../components/Footer";
import SuggestionBox from "../components/SuggestionBox";
import {render} from "react-dom";

export default function DashboardPage() {
    render(
        <>
            <Header/>
            <SuggestionBox/>
            <Footer/>
        </>
    );
};