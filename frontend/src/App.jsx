import { Route, Routes } from "react-router-dom";
import { CardProduct, Condition, Layout, Stock } from "./routes/Routers";
import Home from "./pages/Home";
import { Suspense } from "react";
import { Loader } from "./components/Loader/Loader";

import Trash from "./pages/Trash";





function App() {
  return (
   <div className="xs:overflow-x-hidden ">
    <div className="conteiner w-[100%] m-auto xs:w-[100%] xs:m-auto">

    <Routes>
       <Route path='/' element={
        <Suspense fallback={<Loader/>}>
          <Layout/>
        </Suspense>
       }>
       <Route index element={
        <Suspense fallback={<Loader/>}>
          <Home/>
        </Suspense>
       }/> 
       <Route path="CardProduct/:id"  element={
                <Suspense fallback={<Loader/>}>
                  <CardProduct/>
                </Suspense>
       
       }/>
       <Route path="DeliveryContacts"  element={
               <Suspense fallback={<Loader/>}>
                 <DeliveryContacts/>
               </Suspense>
       
       }/>
       <Route path="ShopingCart"  element={
                <Suspense fallback={<Loader/>}>
                  <ShopingCart/>
                </Suspense>
       }/>
       <Route path="Stock"  element={
                <Suspense fallback={<Loader/>}>
                  <Stock/>
                </Suspense>
       }/>
       <Route path="Trash"  element={
                <Suspense fallback={<Loader/>}>
                  <Trash/>
                </Suspense>
       }/>

       </Route>
       
   
     </Routes>
    </div>

  );
}

export default App;
