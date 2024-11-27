import { Navigate, Route, Routes } from "react-router-dom";
import Products from "../../pages/products/Products";
import News from "../../pages/news/News";
import Services from "../../pages/services/Services";
import Contacts from "../../pages/contacts/Contacts";
import Error from "../../pages/error/Error";
import About from "../../pages/about/About";

const AppRouter = () => {
    return (  
        <Routes>
            <Route path="/products" element={<Products/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" element={<Navigate to="/error" replace />} /> 
        </Routes>
    );
}

export default AppRouter;