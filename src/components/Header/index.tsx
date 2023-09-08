import {
  HeaderContainer,
  ContentMain,
  CarButton,
  QuantityInCart,
  Location,
  CartModal,
  CloseModal,
} from "./style";
import CoffeDelivery from "../../assets/coffe-delivery.svg";
import { MapPin, ShoppingCart, XCircle } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalCart } from "./components/ModalCart";
import { useContext } from "react";
import { ProductsContext } from "../../context/Products/ProductsContext";

export function Header() {
  const { chosenProducts } = useContext(ProductsContext);

  const handleOpenShoppingListModal = () => {
    console.log("open shopping list");
  };

  return (
    <HeaderContainer>
      <img src={CoffeDelivery} alt="Logo café delivery" />

      <ContentMain>
        <Location>
          <MapPin size={22} weight="bold" color="#8047F8" />
          <span>João Pessoa-PB</span>
        </Location>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CarButton onClick={handleOpenShoppingListModal}>
              <ShoppingCart size={22} color="orange" />
              <QuantityInCart>
                <p>{chosenProducts.length}</p>
              </QuantityInCart>
            </CarButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <CartModal>
              <Dialog.Content className="DialogContent">
                <ModalCart />

                <Dialog.Close asChild>
                  <CloseModal aria-label="Close">
                    <XCircle size={20} color="#000" />
                  </CloseModal>
                </Dialog.Close>
              </Dialog.Content>
            </CartModal>
          </Dialog.Portal>
        </Dialog.Root>
      </ContentMain>
    </HeaderContainer>
  );
}
