export function AboutHero() {
  return (
    <section className="relative bg-blue-950 text-white py-40">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/images/hero3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center py-32">
        <h1 className="text-5xl font-bold mb-6 text-balance">About Aventuro</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto text-pretty">
          Your trusted partner in creating unforgettable travel experiences around the world
        </p>
      </div>
    </section>
  );
}
