import Product from "./product";

const products = [
  {
    id: 1,
    title: "Fjallraven Backpack",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500.jpg",
    category: "men's clothing"
  },
  {
    id: 2,
    title: "Slim Fit T-Shirts",
    price: 22.3,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879.jpg",
    category: "men's clothing"
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679.jpg",
    category: "men's clothing"
  },
  {
    id: 4,
    title: "Casual Slim Fit",
    price: 15.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879.jpg",
    category: "men's clothing"
  },
  {
    id: 5,
    title: "Gold Bracelet",
    price: 695,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640.jpg",
    category: "jewelery"
  },
  {
    id: 6,
    title: "Micropave Ring",
    price: 168,
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640.jpg",
    category: "jewelery"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-center mb-10 text-blue-600">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {
          products.map((item) => (
            <Product key={item.id} product={item} />
          ))
        }
      </div>

    </div>
  );
}

export default App;