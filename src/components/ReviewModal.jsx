import { useState } from "react";
import {
  FaTimes,
  FaStar,
} from "react-icons/fa";

import { addReview } from "../firebase/services";

export default function ReviewModal({
  open,
  onClose,
  onAdded,
}) {

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  async function handleSubmit() {

    if (!name.trim()) {
      alert("اكتب اسمك");
      return;
    }

    if (!comment.trim()) {
      alert("اكتب التقييم");
      return;
    }

    setLoading(true);

    await addReview({

      name,

      comment,

      rating,

    });

    setLoading(false);

    setName("");
    setComment("");
    setRating(5);

    onAdded();

    onClose();

  }

  return (

    <div
      onClick={onClose}
      className="
      fixed
      inset-0
      bg-black/60
      z-50
      flex
      justify-center
      items-center
      p-4
      "
    >

      <div
        onClick={(e)=>e.stopPropagation()}
        className="
        bg-white
        rounded-3xl
        w-full
        max-w-lg
        p-6
        shadow-2xl
        "
      >

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold">

            اكتب تقييمك

          </h2>

          <button
            onClick={onClose}
            className="
            w-10
            h-10
            rounded-full
            bg-gray-100
            flex
            justify-center
            items-center
            "
          >

            <FaTimes/>

          </button>

        </div>

        {/* الاسم */}

        <input

          value={name}

          onChange={(e)=>setName(e.target.value)}

          placeholder="اسمك"

          className="
          mt-6
          w-full
          border
          rounded-xl
          p-3
          outline-none
          focus:border-[#0284C7]
          "

        />

        {/* النجوم */}

        <div className="flex gap-2 mt-6">

          {[1,2,3,4,5].map((star)=>(

            <button

              key={star}

              onClick={()=>setRating(star)}

            >

              <FaStar

                size={30}

                className={
                  star<=rating
                  ?"text-yellow-400"
                  :"text-gray-300"
                }

              />

            </button>

          ))}

        </div>

        {/* التعليق */}

        <textarea

          value={comment}

          onChange={(e)=>setComment(e.target.value)}

          rows={5}

          placeholder="اكتب رأيك..."

          className="
          mt-6
          w-full
          border
          rounded-xl
          p-4
          outline-none
          resize-none
          focus:border-[#0284C7]
          "

        />

        {/* ارسال */}

        <button

          onClick={handleSubmit}

          disabled={loading}

          className="
          mt-6
          w-full
          bg-[#0284C7]
          hover:bg-[#0369A1]
          text-white
          rounded-xl
          py-4
          font-bold
          "

        >

          {

            loading

            ?

            "جارى الإرسال..."

            :

            "إرسال التقييم"

          }

        </button>

      </div>

    </div>

  );

}