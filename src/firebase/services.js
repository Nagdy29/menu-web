import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "./config";

/* ===========================
   Categories
=========================== */

const categoriesRef = collection(db, "categories");

export async function getCategories() {
  const snapshot = await getDocs(categoriesRef);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}


export async function addCategory(title) {
  return await addDoc(categoriesRef, {
    title,
    createdAt: Date.now(),
  });
}


export async function updateCategory(id, title) {
  return await updateDoc(doc(db, "categories", id), {
    title,
  });
}


export async function deleteCategory(id) {
  return await deleteDoc(
    doc(db, "categories", id)
  );
}


/* ===========================
   Products
=========================== */

const productsRef = collection(db, "products");


export async function getProducts() {
  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}


export async function getProduct(id) {
  const snapshot = await getDoc(
    doc(db, "products", id)
  );

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}


export async function addProduct(product) {
  return await addDoc(productsRef, {
    ...product,
    price: Number(product.price),
    rating: product.rating || 4.8,
    available: product.available ?? true,
    createdAt: Date.now(),
  });
}


export async function updateProduct(id, product) {

  return await updateDoc(
    doc(db, "products", id),
    {
      name: product.name,
      description: product.description,
      price: Number(product.price),
      image: product.image,
      category: product.category,
      rating: product.rating || 4.8,
      available: product.available ?? true,
    }
  );
}


export async function deleteProduct(id) {

  return await deleteDoc(
    doc(db, "products", id)
  );
}


/* ===========================
   Restaurant Settings
=========================== */


const settingsRef = collection(db, "settings");


export async function getSettings() {

  const snapshot = await getDocs(settingsRef);

  return snapshot.docs.map((item)=>({
    id:item.id,
    ...item.data(),
  }));

}


export async function addSettings(data){

  return await addDoc(
    settingsRef,
    data
  );

}


export async function updateSettings(id,data){

  return await updateDoc(
    doc(db,"settings",id),
    data
  );

}