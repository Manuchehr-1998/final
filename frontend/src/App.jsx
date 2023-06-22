import { Route, Routes } from "react-router-dom";
import { CardProduct, Condition, Layout, Stock } from "./routes/Routers";
import Home from "./pages/Home";
import { Suspense } from "react";
import { Loader } from "./components/Loader/Loader";
import OrderTable from "./components/category/dishesOrder/OrderTable";

function App() {
  return (
    <div className="xs:overflow-x-hidden ">
      <div className="conteiner w-[100%] m-auto xs:w-[100%] xs:m-auto">

        <Routes>
          <Route path='/' element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }>
            <Route index element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            } />
            <Route path="CardProduct/:id" element={
              <Suspense fallback={<Loader />}>
                <CardProduct />
              </Suspense>
            } />
            <Route path="OrderTable" element={
              <Suspense fallback={<Loader />}>
                <OrderTable />
              </Suspense>
            } />
            <Route path="Conditions" element={
              <Suspense fallback={<Loader />}>
                <Condition />
              </Suspense>
            } />
            <Route path="Stock" element={
              <Suspense fallback={<Loader />}>
                <Stock />
              </Suspense>
            } />
          </Route>
        </Routes>

      </div>

    </div>

  );
}

export default App;
