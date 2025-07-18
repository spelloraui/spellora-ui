import product1 from '' //your product image path here

<div className="w-72 bg-black hover:bg-white rounded-lg shadow-lg overflow-hidden group transition-transform hover:-translate-y-1">
  <img
    src={product1}
    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
  />
  <div className="p-4">
    <h3 className="text-lg text-purple-950 font-semibold">Running Shoes</h3>
    <p className="text-sm text-gray-600 mt-1">$129.00</p>
    <button className="mt-4 w-full py-2 bg-white text-black rounded-md hover:bg-black hover:text-white transition">
      Add to Cart
    </button>
  </div>
</div>;
