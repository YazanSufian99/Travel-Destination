import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import data from "../data/data.json"
function App(){
    return(
        <>
            <Header/>
            <Tours city={data}/>
            <Footer/>
        </>
    )
};
export default App;