import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Navbar({ categories }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -250 : 250,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="
      sticky
      top-0
      z-50
      bg-white/90
      backdrop-blur-md
      shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-3">

        <div className="flex items-center gap-2">

          {/* زر الشمال */}

          <button
            onClick={() => scroll("left")}
            className="
            w-10
            h-10
            rounded-full
            bg-white
            border
            shadow
            text-[#0284C7]
            hover:bg-[#0284C7]
            hover:text-white
            transition-all
            duration-300
            flex
            items-center
            justify-center
            "
          >
            <FaChevronLeft />
          </button>

          {/* الأقسام */}

          <div
            ref={scrollRef}
            className="
            flex-1
            flex
            gap-3
            overflow-x-auto
            scroll-smooth
            scrollbar-hide
            "
          >
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#category-${cat.id}`}
                className="
                shrink-0
                px-6
                py-3
                rounded-full
                font-semibold
                text-gray-600
                hover:bg-[#0284C7]
                hover:text-white
                transition-all
                duration-300
                "
              >
                {cat.title}
              </a>
            ))}
          </div>

          {/* زر اليمين */}

          <button
            onClick={() => scroll("right")}
            className="
            w-10
            h-10
            rounded-full
            bg-white
            border
            shadow
            text-[#0284C7]
            hover:bg-[#0284C7]
            hover:text-white
            transition-all
            duration-300
            flex
            items-center
            justify-center
            "
          >
            <FaChevronRight />
          </button>

        </div>

      </div>
    </nav>
  );
}