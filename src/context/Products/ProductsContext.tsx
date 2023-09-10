import { createContext, useCallback, useEffect, useState } from "react";
import { CoffesProps, coffes } from "../../Pages/Home/lists";

export interface ProductsContextProps {
  products: CoffesProps[];
  chosenProducts: CoffesProps[];
  addProductToShortlist: (product: CoffesProps) => void;
  removeProductToShortlist: (product: CoffesProps) => void;
  removeAllProductsToShortList: () => void;
  calcTotalValue: () => number;
}

export interface ProductsContextProviderProps {
  children: React.ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextProps);

export function ProductsProvider({ children }: ProductsContextProviderProps) {
  const [products, setProducts] = useState<CoffesProps[] | []>([]);
  const [chosenProducts, setChosenProducts] = useState<CoffesProps[] | []>([]);

  const addProductToShortlist = (product: CoffesProps) => {
    const filterIfProductIsInTheList = chosenProducts.filter(
      (item) => item.id === product.id
    );

    if (filterIfProductIsInTheList.length > 0) {
      setChosenProducts([...chosenProducts]);
    } else {
      setChosenProducts([...chosenProducts, product]);
    }
  };

  const removeProductToShortlist = (product: CoffesProps) => {
    const newList = chosenProducts.filter((item) => item.id !== product.id);

    setChosenProducts(newList);
  };

  const removeAllProductsToShortList = () => {
    setChosenProducts([]);
  };

  const calcTotalValue = useCallback(() => {
    let values: number[] = [];
    let totalValue: number = 0;

    chosenProducts.forEach((item) => {
      values.push(item.price);
    });

    totalValue = values.reduce((a, b) => a + b, 0);

    return totalValue;
  }, [chosenProducts]);

  useEffect(() => {
    setProducts(coffes);
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        chosenProducts,
        addProductToShortlist,
        removeProductToShortlist,
        removeAllProductsToShortList,
        calcTotalValue,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
