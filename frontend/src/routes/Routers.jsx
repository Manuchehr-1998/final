import { lazy } from "react";


export const Layout =lazy(()=> import("../components/Layout/Layout"))
export const Home =lazy(()=> import("../pages/Home"))
export const CardProduct =lazy(()=> import("../components/category/CardProduct"))
export const DeliveryContacts =lazy(()=> import("../pages/DeliveryСontacts"))
export const ShopingCart =lazy(()=> import("../pages/ShoppingCart"))
export const Stock =lazy(()=> import("../components/category/stock/Stock"))