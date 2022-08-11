import { createContext, ReactNode, useContext, useState } from 'react';

type ShoppingCartProviderProps = {
	children: ReactNode;
};

type CartItem = {
	id: number;
	quantity: number;
};

type ShoppingCartContext = {
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
	return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const getItemQuantity = (id: number) => {
		// Default value sets to 0 if have nothing in the cart
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	};

	const increaseCartQuantity = (id: number) => {
		setCartItems((currItems) => {
			// If no such item in the cart, modify the list by adding one
			if (currItems.find((item) => item.id === id) == null) {
				return [...currItems, { id, quantity: 1 }];
			} else {
				// If item exists in the cart, change the quantity
				return currItems.map((item) => {
					// Found the wanted item, change teh quantity
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						// Leave the other items as is
						return item;
					}
				});
			}
		});
	};

	const decreaseCartQuantity = (id: number) => {
		setCartItems((currItems) => {
			// If found 1 wanted item in the cart, remove the item from the list
			if (currItems.find((item) => item.id === id)?.quantity === 1) {
				return currItems.filter((item) => item.id !== id);
			} else {
				// If found wanted item (quantity more than 1), remove 1
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						// Leave the other items as is
						return item;
					}
				});
			}
		});
	};

	const removeFromCart = (id: number) => {
		setCartItems((currItems) => {
			return currItems.filter((item) => item.id !== id);
		});
	};

	return (
		<ShoppingCartContext.Provider
			value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
