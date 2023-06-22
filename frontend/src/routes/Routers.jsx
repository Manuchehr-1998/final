import { lazy } from "react";


export const Layout = lazy(() => import("../components/Layout/Layout"))
export const Home = lazy(() => import("../pages/Home"))
export const CardProduct = lazy(() => import("../components/category/CardProduct"))
export const OrderTable = lazy(() => import("../components/category/dishesOrder/OrderTable"))
export const Condition = lazy(() => import("../components/category/order/Condition"))
export const Stock = lazy(() => import("../components/category/stock/Stock"))