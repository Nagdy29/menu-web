import ProductCard from "./ProductCard";


export default function Category({category}){


return (

<section
id={`category-${category.id}`}
className="scroll-mt-28 py-12"
>


<div className="flex items-center gap-3 mb-8">


<div className="
w-2
h-12
bg-yellow-400
rounded-full
"/>


<h2 className="
text-4xl
font-bold
text-gray-800
">

{category.title}

</h2>


</div>



<div className="
grid
gap-8
md:grid-cols-2
xl:grid-cols-3
">


{

category.items.length > 0 ?

category.items.map(item=>(

<ProductCard

key={item.id}

item={item}

/>

))


:

<div className="
text-gray-400
text-xl
">

لا يوجد منتجات في هذا القسم

</div>


}



</div>



</section>

)


}