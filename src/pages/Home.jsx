import { useEffect, useState } from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import Reviews from "../components/Reviews";
import { seedDatabase } from "../seed/seedMenu";

import {
  getCategories,
  getProducts,
} from "../firebase/services";

export default function Home() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  init();
}, []);

async function init() {
  await seedDatabase(); // استنى لحد ما البيانات تضاف
  await loadMenu();     // بعدها اقرأ البيانات
}

  async function loadMenu() {

    try {

      const cats = await getCategories();
      const prods = await getProducts();

      const data = cats.map((cat) => ({

        ...cat,

        items: prods.filter(
          (item) => item.category === cat.title
        ),

      }));

      setCategories(data);

    } catch (err) {

      console.log("Error loading menu:", err);

    }

    setLoading(false);
  }

  if (loading) {

    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );

  }

  return (
    <>
      <Header />

      <Navbar categories={categories} />

      <main className="max-w-7xl mx-auto px-4 md:px-5">

        {/* الأقسام */}

        {categories.map((cat) => (

          <Category
            key={cat.id}
            category={cat}
          />

        ))}

        {/* Reviews آخر الصفحة */}

        <div className="mt-16 mb-10">

          <Reviews />

        </div>

      </main>
    </>
  );
}