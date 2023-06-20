import CardProduct from "./components/category/CardProduct";
import Condition from "./components/category/order/Condition";
import Stock from "./components/category/stock/Stock";
import Layout from "./components/Layout/Layout";




function App() {
  return (
   <div className="xs:overflow-x-hidden ">
    <div className="conteiner w-[100%] m-auto xs:w-[100%] xs:m-auto">

     {/* <Layout/>  */}
     {/* <Condition/> */}
     {/* <CardProduct/> */}
     <Stock/>
    </div>

   </div>
  
  );
}

export default App;
