import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/products"; // ✅ Correct API URL


const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ name: "", price: "", description: "", stock: 0, category: "", image: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle Image Upload (Convert to Base64)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Add / Update Product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, product);
      } else {
        await axios.post(API_URL, product);
      }
      setProduct({ name: "", price: "", description: "", stock: 0, category: "", image: "" });
      setEditingId(null);
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // Edit Product
  const handleEdit = (prod) => {
    setProduct(prod);
    setEditingId(prod._id);
  };

  // Delete Product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{editingId ? "Edit Product" : "Add New Product"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name"
          className="w-full p-2 border rounded-md" required />

        {/* Price */}
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price (LKR)"
          className="w-full p-2 border rounded-md" required />

        {/* Description */}
        <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description"
          className="w-full p-2 border rounded-md" />

        {/* Stock */}
        <input type="number" name="stock" value={product.stock} onChange={handleChange} placeholder="Stock Quantity"
          className="w-full p-2 border rounded-md" required />

        {/* Category */}
        <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category"
          className="w-full p-2 border rounded-md" />

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded-md" />
        {product.image && <img src={product.image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-md" />}

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Product List */}
      <h2 className="text-2xl font-semibold mt-6">Product List</h2>
      <div className="mt-4 space-y-4">
        {products.map((prod) => (
          <div key={prod._id} className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
            <div>
              <p className="font-medium">{prod.name} - LKR {prod.price}</p>
              <p className="text-sm text-gray-600">{prod.category}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => handleEdit(prod)} className="bg-yellow-500 text-white px-3 py-1 rounded-md">Edit</button>
              <button onClick={() => handleDelete(prod._id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManager;
