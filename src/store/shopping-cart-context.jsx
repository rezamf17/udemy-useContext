import { createContext } from "react";

export const CartContext = createContext({
    cart: [],
    add: () => {},
    remove: () => {},
    clear: () => {},
    total: 0
});