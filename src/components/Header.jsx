export default function Header() {
  return (
    <header className="relative h-[420px]">

      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600"
        alt="Restaurant"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">

        <img
          src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
          alt="Logo"
          className="w-36 h-36 rounded-full border-4 border-white shadow-xl bg-white object-cover"
        />

        <h1 className="text-5xl font-bold mt-5 tracking-wide">
          MOZZARELLA
        </h1>

        <p className="mt-3 text-lg text-gray-200">
          🍕 Open Now • 24 Hours
        </p>

      </div>

    </header>
  );
}