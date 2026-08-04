import { useState } from "react";
import {
  FaPlus,
  FaHeart,
  FaFire,
  FaStar,
} from "react-icons/fa";

export default function ProductCard({ item }) {
  const [fav, setFav] = useState(false);

  return (
    <div
      className="
      group
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-md
      hover:shadow-2xl
      transition-all
      duration-500
      hover:-translate-y-2
      "
    >
      {/* الصورة */}

      <div className="relative overflow-hidden">

        <img
          src={
            item.image ||
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900"
          }
          alt={item.name}
          className="
          w-full
          h-72
          object-cover
          duration-700
          group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* السعر */}

        <div className="absolute top-4 left-4">

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg">

            {item.price} EGP

          </span>

        </div>

        {/* الأكثر مبيعًا */}

        <div className="absolute top-4 right-4">

          <span className="flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-full text-sm shadow">

            <FaFire />

            الأكثر مبيعًا

          </span>

        </div>

        {/* المفضلة */}

        <button
          onClick={() => setFav(!fav)}
          className="
          absolute
          bottom-4
          right-4
          w-12
          h-12
          rounded-full
          bg-white
          shadow-lg
          flex
          justify-center
          items-center
          duration-300
          hover:scale-110
          "
        >
          <FaHeart
            className={
              fav
                ? "text-red-500"
                : "text-gray-400"
            }
            size={22}
          />
        </button>

      </div>

      {/* المحتوى */}

      <div className="p-6">

        <div className="flex justify-between items-start">

          <div>

            <h2 className="text-2xl font-bold">

              {item.name}

            </h2>

            <p className="text-gray-500 mt-3 leading-7">

              {item.description}

            </p>

          </div>

          {/* التقييم */}

          <div className="flex items-center gap-1 bg-yellow-100 px-3 py-2 rounded-full">

            <FaStar className="text-yellow-500" />

            <span className="font-bold">

              {item.rating || "4.8"}

            </span>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-between items-center mt-8">

          <div>

            <p className="text-green-600 font-semibold">

              متوفر الآن

            </p>

          </div>

          <button
            className="
            w-14
            h-14
            rounded-full
            bg-blue-600
            text-white
            flex
            justify-center
            items-center
            hover:bg-blue-700
            duration-300
            hover:rotate-90
            shadow-lg
            "
          >
            <FaPlus size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}