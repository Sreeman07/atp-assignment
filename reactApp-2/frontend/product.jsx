
function Product({ product }) {
  return (
    <div className="bg-blue-500 rounded-lg shadow-md p-4 hover:shadow-xl transition">
      
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain"
      />

      <h2 className="font-semibold text-lg mb-2">
        {product.title}
      </h2>

      <p className="text-gray-500 text-sm mb-2">
        {product.category}
      </p>

      <p className="text-green-600 font-bold">
        ₹ {product.price}
      </p>
    </div>
  );
}

export default Product;