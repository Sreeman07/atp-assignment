function Product({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 hover:scale-105 transition duration-300">

      <img
        src={product.image}
        alt={product.title}
        className="h-56 w-full object-contain"
      />

      <h2 className="text-xl font-bold mt-5">
        {product.title}
      </h2>

      <p className="text-gray-500 mt-2">
        {product.category}
      </p>

      <p className="text-3xl font-bold text-green-600 mt-4">
        ₹ {product.price}
      </p>

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-5 hover:bg-blue-600">
        Add To Cart
      </button>

    </div>
  );
}

export default Product;