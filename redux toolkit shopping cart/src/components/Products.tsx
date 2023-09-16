import { useEffect } from "react";
import { Product } from "../types/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store/store";
import { add } from "../store/cartSlice";
import { STATUSES, fetchProducts } from "../store/productSlice";

const Products = () => {
  const dispatch: ThunkDispatch<RootState, void, any> = useDispatch();
  const products = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product: Product) => {
    dispatch(add(product));
  };

  if (products.status === STATUSES.LOADING) {
    return <h1 className="text-[25px]">Loading...</h1>;
  }

  if (products.status === STATUSES.ERROR) {
    return <h1 className="text-[25px]">Error</h1>;
  }

  return (
    <div className="px-4 flex flex-wrap flex-row justify-center gap-x-6 gap-y-12">
      {products.data?.map((product: Product) => {
        return (
          <div
            className="w-[250px] border py-2 px-2 flex flex-col"
            key={product.id}
          >
            <div>
              <img
                src={product.image}
                className="min-w-full min-h-[190px] max-h-[190px]"
                alt=""
              />
            </div>
            <div className="p-2 flex flex-col h-full items-center justify-between">
              <div>
                <h4>{product.title}</h4>
                <h5>{product.price}$</h5>
              </div>
              <div className="w-full mt-4">
                <button
                  className="w-full py-2 rounded-[10px] bg-purple-700 text-white"
                  onClick={() => handleAdd(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
