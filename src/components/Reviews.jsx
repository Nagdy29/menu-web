import { useEffect, useMemo, useState } from "react";
import { FaStar, FaPen } from "react-icons/fa";

import { getReviews } from "../firebase/services";
import ReviewModal from "./ReviewModal";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(false);

  async function loadReviews() {
    const data = await getReviews();
    setReviews(data);
  }

  useEffect(() => {
    loadReviews();
  }, []);

  const average = useMemo(() => {
    if (!reviews.length) return 0;

    const total = reviews.reduce(
      (sum, item) => sum + Number(item.rating),
      0
    );

    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  const visible = showAll ? reviews : reviews.slice(0, 3);

  return (
    <>
      <section className="py-14">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold text-gray-800">
              تقييمات العملاء
            </h2>

            <p className="text-gray-500 mt-2">
              {reviews.length} تقييم
            </p>

          </div>

          <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full">

            <FaStar className="text-yellow-400" />

            <span className="font-bold text-lg">
              {average || "5.0"}
            </span>

          </div>

        </div>

        <div className="space-y-4">

          {visible.map((review) => (

            <div
              key={review.id}
              className="bg-white rounded-3xl shadow p-5"
            >

              <div className="flex justify-between">

                <div>

                  <h3 className="font-bold text-lg">

                    {review.name}

                  </h3>

                  <p className="text-gray-500 mt-2">

                    {review.comment}

                  </p>

                </div>

                <div className="flex gap-1">

                  {Array.from({ length: review.rating }).map((_, i) => (

                    <FaStar
                      key={i}
                      className="text-yellow-400"
                    />

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

        {reviews.length > 3 && (

          <button
            onClick={() => setShowAll(!showAll)}
            className="
            mt-6
            w-full
            rounded-2xl
            border
            py-3
            font-bold
            hover:bg-gray-50
            "
          >
            {showAll ? "إخفاء" : "عرض المزيد"}
          </button>

        )}

        <button
          onClick={() => setOpen(true)}
          className="
          mt-6
          w-full
          bg-[#0284C7]
          hover:bg-[#0369A1]
          text-white
          rounded-2xl
          py-4
          font-bold
          flex
          items-center
          justify-center
          gap-2
          "
        >
          <FaPen />

          اكتب تقييم
        </button>

      </section>

      <ReviewModal
        open={open}
        onClose={() => setOpen(false)}
        onAdded={loadReviews}
      />
    </>
  );
}