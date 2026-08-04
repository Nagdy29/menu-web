export default function Navbar({categories}){

return (

<nav className="
sticky
top-0
z-50
bg-white/80
backdrop-blur
shadow
">


<div className="
max-w-7xl
mx-auto
px-4
">


<div className="
flex
gap-4
overflow-x-auto
py-4
">


{
categories.map(cat=>(


<a

key={cat.id}

href={`#category-${cat.id}`}

className="
bg-yellow-400
hover:bg-yellow-500
px-6
py-3
rounded-full
font-bold
whitespace-nowrap
transition
"

>

{cat.title}

</a>


))

}



</div>


</div>


</nav>

)

}