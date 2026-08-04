import { useEffect, useState } from "react";
import {
  FaHome,
  FaUtensils,
  FaTags,
  FaImage,
  FaCog,
  FaSignOutAlt,
  FaPlus,
  FaTrash,
  FaEdit,
  FaSearch,
} from "react-icons/fa";
import {
  getCategories,
  getProducts,
  addCategory,
  addProduct,
  updateCategory,
  updateProduct,
  deleteCategory,
  deleteProduct,
} from "../firebase/services";

export default function Admin() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Add Category
  const [categoryName, setCategoryName] = useState("");
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  // Add Product
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showProductModal, setShowProductModal] = useState(false);

  // Edit Category
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  // Edit Product
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      const cats = await getCategories();
      const prods = await getProducts();
      setCategories(cats);
      setProducts(prods);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  // ================= Category CRUD =================
  async function handleAddCategory() {
    if (!categoryName.trim()) return;
    await addCategory(categoryName);
    setCategoryName("");
    setShowCategoryModal(false);
    loadData();
  }

  function handleEditCategory(cat) {
    setEditingCategory({ ...cat });
    setShowEditCategoryModal(true);
  }

  async function handleUpdateCategory() {
    if (!editingCategory?.title?.trim()) return;
    await updateCategory(editingCategory.id, { title: editingCategory.title });
    setShowEditCategoryModal(false);
    setEditingCategory(null);
    loadData();
  }

  async function handleDeleteCategory(id) {
    if (!window.confirm("هل تريد حذف القسم؟")) return;
    await deleteCategory(id);
    loadData();
  }

  // ================= Product CRUD =================
  async function handleAddProduct() {
    if (!productName || !description || !price || !selectedCategory) return;
    await addProduct({
      name: productName,
      description,
      price: Number(price),
      image:
        image ||
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
      rating: 4.8,
      category: selectedCategory,
      available: true,
    });
    setProductName("");
    setDescription("");
    setPrice("");
    setImage("");
    setSelectedCategory("");
    setShowProductModal(false);
    loadData();
  }

  function handleEditProduct(item) {
    setEditingProduct({ ...item });
    setShowEditProductModal(true);
  }

  async function handleUpdateProduct() {
    if (
      !editingProduct?.name ||
      !editingProduct?.description ||
      !editingProduct?.price ||
      !editingProduct?.category
    )
      return;
    await updateProduct(editingProduct.id, {
      name: editingProduct.name,
      description: editingProduct.description,
      price: Number(editingProduct.price),
      image: editingProduct.image,
      category: editingProduct.category,
    });
    setShowEditProductModal(false);
    setEditingProduct(null);
    loadData();
  }

  async function handleDeleteProduct(id) {
    if (!window.confirm("هل تريد حذف المنتج؟")) return;
    await deleteProduct(id);
    loadData();
  }

  const filteredProducts = products.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-white flex flex-col shadow-2xl">
        <div className="text-center py-8 border-b border-gray-700">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
            className="w-24 h-24 mx-auto rounded-full bg-white p-2"
            alt=""
          />
          <h1 className="text-3xl font-bold mt-4 text-yellow-400">
            MENU ADMIN
          </h1>
          <p className="text-gray-400 mt-2">Firebase Dashboard</p>
        </div>
        <nav className="flex-1 p-5 space-y-3">
          <button className="w-full bg-yellow-400 text-black rounded-xl p-4 flex items-center gap-3 font-bold">
            <FaHome />
            Dashboard
          </button>
          <button className="w-full hover:bg-gray-800 rounded-xl p-4 flex items-center gap-3 duration-300">
            <FaUtensils />
            المنتجات
          </button>
          <button className="w-full hover:bg-gray-800 rounded-xl p-4 flex items-center gap-3 duration-300">
            <FaTags />
            الأقسام
          </button>
          <button className="w-full hover:bg-gray-800 rounded-xl p-4 flex items-center gap-3 duration-300">
            <FaImage />
            الصور
          </button>
          <button className="w-full hover:bg-gray-800 rounded-xl p-4 flex items-center gap-3 duration-300">
            <FaCog />
            الإعدادات
          </button>
        </nav>
        <div className="p-5 border-t border-gray-700">
          <button className="w-full bg-red-600 hover:bg-red-700 rounded-xl p-4 flex justify-center items-center gap-3 duration-300">
            <FaSignOutAlt />
            تسجيل خروج
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">
          <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="text-gray-500 mt-2">إدارة المطعم والمنتجات والأقسام</p>
          </div>
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث عن منتج..."
              className="w-full bg-white rounded-xl shadow pl-12 pr-5 py-4 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-500">عدد الأقسام</p>
            <h2 className="text-5xl font-bold mt-3 text-yellow-500">
              {categories.length}
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-500">عدد المنتجات</p>
            <h2 className="text-5xl font-bold mt-3 text-blue-600">
              {products.length}
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-500">حالة المطعم</p>
            <h2 className="text-3xl font-bold mt-4 text-green-600">
              مفتوح الآن
            </h2>
          </div>
        </div>

        {/* Quick Buttons */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <button
            onClick={() => setShowCategoryModal(true)}
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white rounded-2xl p-6 flex items-center justify-center gap-3 text-xl shadow-lg"
          >
            <FaPlus />
            إضافة قسم جديد
          </button>
          <button
            onClick={() => setShowProductModal(true)}
            className="bg-green-600 hover:bg-green-700 duration-300 text-white rounded-2xl p-6 flex items-center justify-center gap-3 text-xl shadow-lg"
          >
            <FaPlus />
            إضافة منتج جديد
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold">جميع المنتجات</h2>
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
              {filteredProducts.length} منتج
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">الصورة</th>
                  <th className="text-left">الاسم</th>
                  <th className="text-left">القسم</th>
                  <th className="text-left">السعر</th>
                  <th className="text-center">التحكم</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center py-16 text-gray-500">
                      جارى تحميل البيانات...
                    </td>
                  </tr>
                ) : filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-16 text-gray-400">
                      لا يوجد منتجات
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-gray-50 duration-200"
                    >
                      <td className="p-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                      </td>
                      <td className="font-bold">{item.name}</td>
                      <td>{item.category}</td>
                      <td className="text-green-600 font-bold">
                        {item.price} EGP
                      </td>
                      <td>
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={() => handleEditProduct(item)}
                            className="bg-yellow-400 hover:bg-yellow-500 duration-300 p-3 rounded-full text-white"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(item.id)}
                            className="bg-red-600 hover:bg-red-700 duration-300 p-3 rounded-full text-white"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================== Add Category Modal =========================== */}
        {showCategoryModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl w-[450px] p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">إضافة قسم جديد</h2>
              <input
                type="text"
                placeholder="اسم القسم"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full border rounded-xl p-4 mb-6 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowCategoryModal(false)}
                  className="bg-gray-300 px-6 py-3 rounded-xl"
                >
                  إلغاء
                </button>
                <button
                  onClick={handleAddCategory}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
                >
                  إضافة
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================== Add Product Modal =========================== */}
        {showProductModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl w-[650px] p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">إضافة منتج جديد</h2>
              <div className="grid gap-4">
                <input
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="اسم المنتج"
                  className="border rounded-xl p-4"
                />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="الوصف"
                  rows="3"
                  className="border rounded-xl p-4"
                />
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="السعر"
                  className="border rounded-xl p-4"
                />
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="رابط الصورة"
                  className="border rounded-xl p-4"
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border rounded-xl p-4"
                >
                  <option value="">اختر القسم</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.title}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={() => setShowProductModal(false)}
                  className="bg-gray-300 px-6 py-3 rounded-xl"
                >
                  إلغاء
                </button>
                <button
                  onClick={handleAddProduct}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                >
                  حفظ المنتج
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================== Categories List =========================== */}
        <div className="bg-white rounded-2xl shadow-xl mt-10 p-6">
          <h2 className="text-2xl font-bold mb-6">الأقسام</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="border rounded-xl p-5 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold text-xl">{cat.title}</h3>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditCategory(cat)}
                    className="bg-yellow-400 p-3 rounded-full text-white"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(cat.id)}
                    className="bg-red-600 p-3 rounded-full text-white"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================== Edit Category Modal =========================== */}
        {showEditCategoryModal && editingCategory && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl p-8 w-[450px]">
              <h2 className="text-2xl font-bold mb-5">تعديل القسم</h2>
              <input
                value={editingCategory.title}
                onChange={(e) =>
                  setEditingCategory({
                    ...editingCategory,
                    title: e.target.value,
                  })
                }
                className="border w-full rounded-xl p-4 mb-6"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowEditCategoryModal(false);
                    setEditingCategory(null);
                  }}
                  className="bg-gray-300 px-6 py-3 rounded-xl"
                >
                  إلغاء
                </button>
                <button
                  onClick={handleUpdateCategory}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl"
                >
                  حفظ
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================== Edit Product Modal =========================== */}
        {showEditProductModal && editingProduct && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl p-8 w-[650px]">
              <h2 className="text-3xl font-bold mb-6">تعديل المنتج</h2>
              <div className="grid gap-4">
                <input
                  value={editingProduct.name}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      name: e.target.value,
                    })
                  }
                  className="border rounded-xl p-4"
                />
                <textarea
                  value={editingProduct.description}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      description: e.target.value,
                    })
                  }
                  className="border rounded-xl p-4"
                />
                <input
                  value={editingProduct.price}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      price: e.target.value,
                    })
                  }
                  type="number"
                  className="border rounded-xl p-4"
                />
                <input
                  value={editingProduct.image}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      image: e.target.value,
                    })
                  }
                  className="border rounded-xl p-4"
                />
                <select
                  value={editingProduct.category}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      category: e.target.value,
                    })
                  }
                  className="border rounded-xl p-4"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.title}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-4 mt-8">
                <button
                  onClick={() => {
                    setShowEditProductModal(false);
                    setEditingProduct(null);
                  }}
                  className="bg-gray-300 px-6 py-3 rounded-xl"
                >
                  إلغاء
                </button>
                <button
                  onClick={handleUpdateProduct}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl"
                >
                  حفظ التعديل
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
