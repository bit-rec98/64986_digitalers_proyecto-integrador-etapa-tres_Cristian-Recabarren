import { useContext, useEffect, useState } from 'react'
import ModalContext from '../../contexts/ModalContext'
import { useLocation } from 'react-router';

const CartListBtn = () => {

  const {handleCartListModalOpen} = useContext(ModalContext)

  const location = useLocation();
  const [showCartButton, setShowCartButton] = useState(true);

  useEffect(() => {
    if (location.pathname.includes('products')) {
      setShowCartButton(true);
    } else if (location.pathname.includes('cart')) {
      setShowCartButton(false);
    } else {
      setShowCartButton(false);
    }
  }, [location.pathname]);

  return (
    <>
      {showCartButton && (
        <button
          type="button"
          className="material-symbols-sharp navItem mx-1 p-2"
          id="cartListBtn"
          onClick={() => handleCartListModalOpen()}
        >
          shopping_cart
        </button>
      )}
    </>
  );
}

export default CartListBtn