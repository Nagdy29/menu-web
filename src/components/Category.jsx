import ProductCard from "./ProductCard";

export default function Category({ category }) {
  return (
    <section
      id={`category-${category.id}`}
      className="scroll-mt-28 py-10"
    >
      {/* عنوان القسم */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-10 bg-[#0EA5E9] rounded-full"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          {category.title}
        </h2>
      </div>

      {/* المنتجات */}
      <div className="flex flex-col gap-5">
        {category.items?.length ? (
          category.items.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
            />
          ))
        ) : (
          <div className="bg-white rounded-2xl p-8 text-center shadow">
            <p className="text-gray-400 text-lg">
              لا يوجد منتجات في هذا القسم
            </p>
          </div>
        )}
      </div>
    </section>
  );
}