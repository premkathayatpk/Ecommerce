import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const existingCart = localStorage.getItem("cart");
    return existingCart ? JSON.parse(existingCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const isExisting = prev.find((item) => item.id === product.id);

      if (isExisting) {
        alert("Product Already added in cart");
        return prev;
      }
      alert("Product Added to cart Successfully.");
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (pid) => {
    setCart((prev) => prev.filter((item) => item.id !== pid));
  };

  const updateQty = (pid, type) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === pid) {
          let newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQty < 1 ? 1 : newQty };
        }
        return item;
      }),
    );
  };
  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, updateQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
