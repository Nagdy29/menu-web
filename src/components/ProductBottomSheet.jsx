import { useEffect } from "react";
import {
  FaTimes,
  FaStar,
} from "react-icons/fa";

export default function ProductBottomSheet({
  item,
  open,
  onClose,
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="
      fixed
      inset-0
      z-50
      bg-black/60
      backdrop-blur-sm
      flex
      items-end
      justify-center
      p-3
      sm:p-5
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        bg-white
        w-[94%]
        sm:w-[90%]
        md:w-full
        max-w-xl
        rounded-[30px]
        shadow-2xl
        overflow-hidden
        animate-sheet
        max-h-[88vh]
        overflow-y-auto
        mb-2
        "
      >
        {/* الصورة */}

        <div className="relative">

          <img
            src={item.image}
            alt={item.name}
            className="
            w-full
            h-52
            sm:h-64
            md:h-80
            object-cover
            "
          />

          {/* زر الإغلاق */}

          <button
            onClick={onClose}
            className="
            absolute
            top-4
            left-4
            w-10
            h-10
            rounded-full
            bg-white/90
            backdrop-blur
            shadow-lg
            flex
            items-center
            justify-center
            hover:scale-110
            duration-300
            "
          >
            <FaTimes />
          </button>
        </div>

        {/* المحتوى */}

        <div className="p-5 md:p-8">

          <div className="flex justify-between items-center gap-3">

            <h2
              className="
              text-2xl
              md:text-4xl
              font-bold
              text-gray-800
              "
            >
              {item.name}
            </h2>

            <div
              className="
              flex
              items-center
              gap-1
              bg-yellow-100
              px-3
              py-2
              rounded-full
              "
            >
              <FaStar className="text-yellow-400" />

              <span className="font-semibold">
                {item.rating || "4.8"}
              </span>

            </div>

          </div>

          {/* الوصف */}

          <p
            className="
            text-gray-500
            text-sm
            md:text-lg
            leading-7
            mt-5
            "
          >
            {item.description}
          </p>

          {/* السعر */}

          <div className="mt-8">

            <span
              className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-[#0284C7]
              "
            >
              {item.price} EGP
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}