import { useState } from "react";
import {
  FaHeart,
  FaPlus,
  FaStar,
} from "react-icons/fa";

import ProductBottomSheet from "./ProductBottomSheet";

export default function ProductCard({ item }) {
  const [favorite, setFavorite] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="
        bg-white
        rounded-2xl
        shadow
        hover:shadow-xl
        border
        border-gray-100
        hover:border-[#0284C7]
        transition-all
        duration-300
        cursor-pointer
        overflow-hidden
        "
      >
        <div className="flex items-center justify-between p-3 sm:p-5">

          {/* البيانات */}

          <div className="flex-1 min-w-0">

            <div className="flex items-center gap-2 flex-wrap">

              <h2 className="text-lg sm:text-2xl font-bold text-gray-800 truncate">
                {item.name}
              </h2>

              <span
                className="
                bg-[#0284C7]/10
                text-[#0284C7]
                text-[10px]
                sm:text-xs
                px-2
                py-1
                rounded-full
                "
              >
                جديد
              </span>

            </div>

            <p
              className="
              text-gray-500
              text-sm
              sm:text-base
              mt-2
              line-clamp-1
              "
            >
              {item.description}
            </p>

            <div className="flex items-center gap-3 mt-3">

              <span
                className="
                text-xl
                sm:text-3xl
                font-extrabold
                text-[#0284C7]
                "
              >
                {item.price} EGP
              </span>

              <div
                className="
                flex
                items-center
                gap-1
                bg-yellow-100
                px-2
                py-1
                rounded-full
                "
              >
                <FaStar className="text-yellow-400 text-xs sm:text-sm" />

                <span className="font-bold text-xs sm:text-sm">
                  {item.rating || "4.8"}
                </span>

              </div>

            </div>

          </div>

          {/* الصورة */}

          <div className="relative ml-3 sm:ml-5 flex-shrink-0">

            <img
              src={
                item.image ||
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900"
              }
              alt={item.name}
              className="
              w-24
              h-24
              sm:w-36
              sm:h-36
              md:w-44
              md:h-44
              rounded-2xl
              object-cover
              shadow
              "
            />

            {/* القلب */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                setFavorite(!favorite);
              }}
              className="
              absolute
              top-2
              left-2
              w-8
              h-8
              sm:w-10
              sm:h-10
              rounded-full
              bg-white
              shadow
              flex
              items-center
              justify-center
              "
            >
              <FaHeart
                size={14}
                className={
                  favorite
                    ? "text-red-500"
                    : "text-gray-300"
                }
              />
            </button>

            {/* زر + */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
              className="
              absolute
              bottom-2
              right-2
              w-9
              h-9
              sm:w-12
              sm:h-12
              rounded-full
              bg-[#0284C7]
              text-white
              shadow-lg
              hover:bg-[#0369A1]
              transition-all
              duration-300
              flex
              items-center
              justify-center
              "
            >
              <FaPlus size={15} />
            </button>

          </div>

        </div>
      </div>

      <ProductBottomSheet
        item={item}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}