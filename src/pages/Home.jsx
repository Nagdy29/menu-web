import { useEffect, useState } from "react";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Category from "../components/Category";

import {
  getCategories,
  getProducts,
} from "../firebase/services";


export default function Home() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    loadMenu();
  }, []);



  async function loadMenu() {

    try {

      const cats = await getCategories();
      const prods = await getProducts();


      const data = cats.map((cat) => ({

        ...cat,

        items: prods.filter(
          (item) =>
            item.category === cat.title
        )

      }));


      setCategories(data);


    } catch (err) {

      console.log("Error loading menu:", err);

    }


    setLoading(false);

  }



  if (loading) {

    return (
      <div className="h-screen flex items-center justify-center text-3xl">
        Loading...
      </div>
    );

  }



  return (

    <>

      <Header />


      <Navbar 
        categories={categories}
      />


      <main className="max-w-7xl mx-auto px-5">

        {
          categories.map((cat) => (

            <Category

              key={cat.id}

              category={cat}

            />

          ))
        }

      </main>


    </>

  );

}