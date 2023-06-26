import { Route, Routes } from "react-router-dom";
import { CardProduct, Condition, Layout, Order, OrderTable, Stock } from "./routes/Routers";
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
            <Route path="orderTable" element={
              <Suspense fallback={<Loader />}>
                <OrderTable />
              </Suspense>

            } />
            <Route path="conditions" element={
              <Suspense fallback={<Loader />}>
                <Condition />
              </Suspense>
            } />
            <Route path="order" element={
              <Suspense fallback={<Loader />}>
                <Order />
              </Suspense>
            } />
            <Route path="Stock" element={
              <Suspense fallback={<Loader />}>
                <Stock />
              </Suspense>
            } />
            <Route path="Trash" element={
              <Suspense fallback={<Loader />}>
                <Trash />
              </Suspense>
            } />

          </Route>


        </Routes>
      </div>

    </div>

  );
}

export default App;
