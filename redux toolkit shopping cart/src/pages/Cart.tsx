import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Product } from "../types/interfaces";
import { decrease, increase, remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems: Product[] = useSelector((state: RootState) => state.cart);

  return (
    <div className="px-6 mt-12 flex flex-col gap-y-5">
      {cartItems?.length
        ? cartItems.map((product: Product) => {
            return (
              <div className="flex flex-row justify-between" key={product.id}>
                <img
                  src={product.image}
                  className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]"
                  alt=""
                />
                <div>
                  <h5>{product.title}</h5>
                  <h5>{product.price}</h5>
                  <div className="flex flex-row gap-x-5">
                    <button
                      className="bg-black text-white py-1 px-3"
                      onClick={() => dispatch(increase(product))}
                    >
                      +
                    </button>
                    <h5>Quantity : {product.qty}</h5>
                    <button
                      className="bg-black text-white py-1 px-3"
                      onClick={() => dispatch(decrease(product))}
                    >
                      -
                    </button>
                  </div>
                </div>
                <button
                  className="py-2 max-h-[40px] px-12 rounded-[10px] bg-purple-700 text-white"
                  onClick={() => dispatch(remove(product.id))}
                >
                  Remove
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Cart;
