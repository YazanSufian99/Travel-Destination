import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import data from "../data/data.json";
let Home = () => {
    return(
        <>
        <Header/>
        <Tours city={data}/>
        <Footer/>
        </>
    )
}
export default Home;