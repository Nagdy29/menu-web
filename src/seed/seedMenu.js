import {
  addCategory,
  addProduct,
  getCategories,
  getProducts,
} from "../firebase/services";

/* ===========================
      Categories
=========================== */

const categories = [
  "البرجر",
  "الفراخ",
  "البيتزا",
  "الباستا",
  "المقبلات",
  "المشروبات",
  "الحلويات",
];

/* ===========================
      Products
      Part 1
=========================== */

const products = [

{
name:"كلاسيك برجر",
description:"قطعة لحم بقري مشوية 180 جم مع خس وطماطم ومخلل وصوص البرجر داخل خبز طازج.",
price:185,
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
category:"البرجر",
rating:4.8,
available:true,
},

{
name:"تشيز برجر",
description:"برجر لحم مع جبنة شيدر ذائبة وخس وطماطم وصوص خاص.",
price:205,
image:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=900",
category:"البرجر",
rating:4.9,
available:true,
},

{
name:"دبل برجر",
description:"قطعتين لحم بقري مع جبنة شيدر وبصل مكرمل وصوص البرجر.",
price:255,
image:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=900",
category:"البرجر",
rating:4.9,
available:true,
},

{
name:"سبايسي برجر",
description:"برجر لحم بصوص حار مع هالبينو وجبنة شيدر.",
price:215,
image:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=900",
category:"البرجر",
rating:4.8,
available:true,
},

{
name:"مشروم برجر",
description:"برجر مع صوص المشروم الكريمي وجبنة سويسرية.",
price:225,
image:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=900",
category:"البرجر",
rating:4.7,
available:true,
},

{
name:"باربكيو برجر",
description:"لحم بقري مع صوص باربكيو مدخن وبصل مقرمش.",
price:230,
image:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=900",
category:"البرجر",
rating:4.9,
available:true,
},

{
name:"بيف بيكون برجر",
description:"برجر لحم مع بيف بيكون وجبنة شيدر وصوص رانش.",
price:250,
image:"https://images.unsplash.com/photo-1610614819513-58e34989848b?w=900",
category:"البرجر",
rating:4.9,
available:true,
},

{
name:"ميجا برجر",
description:"ثلاث طبقات لحم مع ثلاث شرائح جبنة وصوص خاص.",
price:310,
image:"https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=900",
category:"البرجر",
rating:5,
available:true,
},

/* ===============================
      Chicken
================================ */

{
name:"كرسبي تشيكن",
description:"صدر دجاج مقرمش مع خس ومايونيز.",
price:175,
image:"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900",
category:"الفراخ",
rating:4.8,
available:true,
},

{
name:"زنجر",
description:"صدر دجاج حار مقرمش مع خس وصوص سبايسي.",
price:190,
image:"https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=900",
category:"الفراخ",
rating:4.9,
available:true,
},

{
name:"تويستر",
description:"تورتيلا محشية بقطع الدجاج الكرسبي مع خس وصوص رانش.",
price:165,
image:"https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=900",
category:"الفراخ",
rating:4.8,
available:true,
},

{
name:"تشيكن فيليه",
description:"فيليه دجاج مشوي مع خس وطماطم وجبن.",
price:185,
image:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900",
category:"الفراخ",
rating:4.7,
available:true,
},

{
name:"بوكس فرايد تشيكن",
description:"3 قطع دجاج مقرمش مع بطاطس وكول سلو.",
price:245,
image:"https://images.unsplash.com/photo-1562967916-eb82221dfb36?w=900",
category:"الفراخ",
rating:4.9,
available:true,
},

{
name:"وجبة زنجر",
description:"ساندوتش زنجر مع بطاطس ومشروب.",
price:240,
image:"https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=900",
category:"الفراخ",
rating:4.9,
available:true,
},

{
name:"فاميلي باك",
description:"8 قطع دجاج مع بطاطس وكول سلو وبيبسي.",
price:620,
image:"https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=900",
category:"الفراخ",
rating:5,
available:true,
},

{
name:"ميكس باكت",
description:"4 قطع دجاج + 4 ستريبس + بطاطس.",
price:430,
image:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=900",
category:"الفراخ",
rating:4.9,
available:true,
},
/* ===============================
      Pizza
================================ */

{
name:"بيتزا مارجريتا",
description:"صلصة طماطم، جبنة موزاريلا، ريحان طازج.",
price:180,
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
category:"البيتزا",
rating:4.8,
available:true,
},

{
name:"بيتزا بيبروني",
description:"جبنة موزاريلا مع شرائح بيبروني وصوص طماطم.",
price:230,
image:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=900",
category:"البيتزا",
rating:4.9,
available:true,
},

{
name:"بيتزا تشيكن رانش",
description:"دجاج مشوي مع رانش وجبنة موزاريلا.",
price:245,
image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900",
category:"البيتزا",
rating:4.9,
available:true,
},

{
name:"بيتزا ميكس لحوم",
description:"بيف، سجق، بيبروني، جبنة موزاريلا.",
price:270,
image:"https://images.unsplash.com/photo-1548365328-9f547fb0953b?w=900",
category:"البيتزا",
rating:5,
available:true,
},

{
name:"بيتزا خضار",
description:"فلفل، زيتون، مشروم، بصل، طماطم.",
price:190,
image:"https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=900",
category:"البيتزا",
rating:4.7,
available:true,
},

{
name:"بيتزا باربكيو",
description:"دجاج باربكيو مع صوص باربكيو وبصل.",
price:250,
image:"https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=900",
category:"البيتزا",
rating:4.9,
available:true,
},

{
name:"بيتزا فور تشيز",
description:"أربع أنواع جبن مع صوص خاص.",
price:255,
image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900",
category:"البيتزا",
rating:4.8,
available:true,
},

{
name:"بيتزا سي فود",
description:"جمبري وكاليماري مع جبنة موزاريلا.",
price:320,
image:"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=900",
category:"البيتزا",
rating:5,
available:true,
},

/* ===============================
      Pasta
================================ */

{
name:"باستا ألفريدو",
description:"فيتوتشيني بصوص ألفريدو مع دجاج مشوي.",
price:195,
image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900",
category:"الباستا",
rating:4.8,
available:true,
},

{
name:"باستا نابوليتان",
description:"مكرونة بصوص الطماطم والثوم والريحان.",
price:170,
image:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=900",
category:"الباستا",
rating:4.7,
available:true,
},

{
name:"باستا ميكس تشيز",
description:"مكرونة كريمية بأربع أنواع جبن.",
price:210,
image:"https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=900",
category:"الباستا",
rating:4.8,
available:true,
},

{
name:"باستا بولونيز",
description:"لحم مفروم وصوص طماطم وجبنة بارميزان.",
price:215,
image:"https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=900",
category:"الباستا",
rating:4.9,
available:true,
},

{
name:"باستا سي فود",
description:"جمبري وكاليماري بصوص كريمي.",
price:290,
image:"https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=900",
category:"الباستا",
rating:5,
available:true,
},

{
name:"سباجيتي بالدجاج",
description:"سباجيتي مع دجاج مشوي وصوص كريمة.",
price:205,
image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900",
category:"الباستا",
rating:4.8,
available:true,
},

/* ===============================
      Appetizers
================================ */

{
name:"بطاطس فرنش فرايز",
description:"بطاطس مقلية مقرمشة تقدم مع كاتشب.",
price:65,
image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900",
category:"المقبلات",
rating:4.8,
available:true,
},

{
name:"بطاطس ودجز",
description:"بطاطس ودجز متبلة ومقرمشة.",
price:75,
image:"https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=900",
category:"المقبلات",
rating:4.8,
available:true,
},

{
name:"أصابع موزاريلا",
description:"جبنة موزاريلا مقلية مع صوص مارينارا.",
price:135,
image:"https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=900",
category:"المقبلات",
rating:4.9,
available:true,
},

{
name:"أونيون رينجز",
description:"حلقات بصل مقرمشة مع صوص رانش.",
price:90,
image:"https://images.unsplash.com/photo-1639024471283-03518883512d?w=900",
category:"المقبلات",
rating:4.7,
available:true,
},

{
name:"تشيكن ناجتس",
description:"8 قطع ناجتس دجاج مع صوص باربكيو.",
price:145,
image:"https://images.unsplash.com/photo-1562967916-eb82221dfb36?w=900",
category:"المقبلات",
rating:4.8,
available:true,
},

{
name:"وينجز باربكيو",
description:"أجنحة دجاج بصوص باربكيو المدخن.",
price:165,
image:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=900",
category:"المقبلات",
rating:4.9,
available:true,
},

/* ===============================
      Drinks
================================ */

{
name:"بيبسي",
description:"مشروب غازي مثلج 330 مل.",
price:35,
image:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=900",
category:"المشروبات",
rating:4.8,
available:true,
},

{
name:"سفن أب",
description:"مشروب غازي منعش.",
price:35,
image:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=900",
category:"المشروبات",
rating:4.8,
available:true,
},

{
name:"ميرندا برتقال",
description:"مشروب غازي بنكهة البرتقال.",
price:35,
image:"https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=900",
category:"المشروبات",
rating:4.8,
available:true,
},

{
name:"مياه معدنية",
description:"زجاجة مياه معدنية 600 مل.",
price:20,
image:"https://images.unsplash.com/photo-1564419320461-6870880221ad?w=900",
category:"المشروبات",
rating:5,
available:true,
},

{
name:"عصير مانجو",
description:"عصير مانجو طبيعي مثلج.",
price:55,
image:"https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=900",
category:"المشروبات",
rating:4.9,
available:true,
},

{
name:"عصير فراولة",
description:"عصير فراولة طازج.",
price:55,
image:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=900",
category:"المشروبات",
rating:4.9,
available:true,
},

{
name:"آيس كوفي",
description:"قهوة مثلجة مع الحليب.",
price:75,
image:"https://images.unsplash.com/photo-1517701550927-30cf4ba1f2f0?w=900",
category:"المشروبات",
rating:4.9,
available:true,
},

{
name:"ميلك شيك شوكولاتة",
description:"ميلك شيك شوكولاتة كريمي.",
price:95,
image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=900",
category:"المشروبات",
rating:5,
available:true,
},

/* ===============================
      Desserts
================================ */

{
name:"تشيز كيك",
description:"تشيز كيك كريمي مع صوص الفراولة.",
price:120,
image:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=900",
category:"الحلويات",
rating:5,
available:true,
},

{
name:"مولتن كيك",
description:"كيك شوكولاتة بحشوة شوكولاتة سائلة.",
price:135,
image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900",
category:"الحلويات",
rating:5,
available:true,
},

{
name:"براونيز",
description:"براونيز شوكولاتة مع صوص شوكولاتة.",
price:95,
image:"https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=900",
category:"الحلويات",
rating:4.8,
available:true,
},

{
name:"دونات",
description:"دونات طازجة بالشوكولاتة.",
price:55,
image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900",
category:"الحلويات",
rating:4.7,
available:true,
},

{
name:"آيس كريم فانيليا",
description:"آيس كريم فانيليا كريمي.",
price:60,
image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900",
category:"الحلويات",
rating:4.8,
available:true,
},

{
name:"وافل نوتيلا",
description:"وافل ساخن مع نوتيلا وفواكه.",
price:145,
image:"https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=900",
category:"الحلويات",
rating:5,
available:true,
},

/* ===============================
      Meals
================================ */

{
name:"وجبة كلاسيك",
description:"كلاسيك برجر + بطاطس + بيبسي.",
price:255,
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
category:"البرجر",
rating:5,
available:true,
},

{
name:"وجبة تشيز",
description:"تشيز برجر + بطاطس + مشروب.",
price:275,
image:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=900",
category:"البرجر",
rating:5,
available:true,
},

{
name:"وجبة زنجر",
description:"ساندوتش زنجر + بطاطس + بيبسي.",
price:265,
image:"https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=900",
category:"الفراخ",
rating:5,
available:true,
},

{
name:"وجبة كرسبي",
description:"كرسبي تشيكن + بطاطس + كول سلو.",
price:245,
image:"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900",
category:"الفراخ",
rating:5,
available:true,
},

];

export async function seedDatabase() {
  console.log("Seed Started");

  const cats = await getCategories();
  const prods = await getProducts();

  console.log(cats, prods);

  if (cats.length || prods.length) {
    console.log("Database Already Seeded");
    return;
  }

  for (const category of categories) {
    await addCategory(category);
  }

  for (const product of products) {
    await addProduct(product);
  }

  console.log("Seed Completed");
}