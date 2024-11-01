import ProductContent from "@/components/store/ProductContent";
import ShoppingCartComp from "@/components/store/ShoppingCart";

const page = () => {
  return (
    <>
      <div className="py-12 md:py-32">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10">
            <h2 className="mb-4 text-center text-2xl md:text-4xl font-bold fredoka text-black md:mb-6">
              Hot. Trending. Fashion.
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-black md:text-lg">
              Browse our collection of the latest fashion.
            </p>
          </div>
          <ProductContent />
          <ShoppingCartComp/>
        </div>
      </div>
    </>
  );
};

export default page;
