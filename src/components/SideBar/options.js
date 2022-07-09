import {
    FaHome,
    FaBox
} from 'react-icons/fa';
import { RiCouponLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { IoStorefrontSharp } from "react-icons/io5";

export const options = [
    {
        id: 1,
        text: "Home",
        icon: FaHome,
        redirectTo: "/home"
    },
    {
        id: 2,
        text: "Produtos",
        icon: FaBox,
        redirectTo: "/products"
    },
    {
        id: 3,
        text: "Cupons",
        icon: RiCouponLine,
        redirectTo: "/coupons"
    },
    {
        id: 4,
        text: "Categorias",
        icon: BiCategory, 
        redirectTo: "/categories"
    },
    {
        id: 5,
        text: "Loja",
        icon: IoStorefrontSharp,
        redirectTo: "/categories"
    },
    
]