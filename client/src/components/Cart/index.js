import React, { useEffect } from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';
// import Global context
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';

// import indexedDB
import { idbPromise } from '../../utils/helpers';
const Cart = () => {

  // gives current state and method to change it
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    async function getCart() {
      //  get items in cart from indexedDB
      const cart = await idbPromise('cart', 'get');
      // Then dump then in Global State
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart]});
    };
    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART});
  };

  if (!state.cartOpen) {
    return (
      // this will trigger opening and render the JSX below
      <div className='cart-closed' onClick={toggleCart}>
        <span
        role='img'
        aria-label='trash'
        >🛒</span>
      </div>
    );
  }
  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);

  }

  return (
    <div className="cart">
  <div className="close" onClick={toggleCart}>[close]</div>
  <h2>Shopping Cart</h2>
  {state.cart.length ? (
    <div>
      {state.cart.map(item => (
        <CartItem key={item._id} item={item} />
      ))}
      <div className="flex-row space-between">
        <strong>Total: ${calculateTotal()}</strong>
        {
          Auth.loggedIn() ?
            <button>
              Checkout
            </button>
            :
            <span>(log in to check out)</span>
        }
      </div>
    </div>
  ) : (
    <h3>
      <span role="img" aria-label="shocked">
        😱
      </span>
      You have not added anything to your cart yet!
    </h3>
  )}
</div>
  );
};

export default Cart;