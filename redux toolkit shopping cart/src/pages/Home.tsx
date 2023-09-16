import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-[40px] text-purple-700">
        Welcome to Redux Toolkit Store
      </h1>
      <section className="px-4 mt-12">
        <Products />
      </section>
    </div>
  );
};

export default Home;
