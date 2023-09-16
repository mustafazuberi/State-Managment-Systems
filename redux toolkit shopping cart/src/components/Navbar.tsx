import { useSelector } from "react-redux";
import { Product } from "../types/interfaces";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const items: Product[] = useSelector((state: RootState) => state.cart);
  return (
    <div className="flex flex-row justify-between px-6 py-2">
      <h2 className="font-bold text-[27px]">Home</h2>
      <div className="flex flex-row justify-center items-center gap-x-4">
        <h2
          className="text-[28px] cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          Cart
        </h2>
        <span className="text-[14px]">Cart Items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
