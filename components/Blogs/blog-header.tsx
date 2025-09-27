import { Button } from "@/components/ui/button"

export function BlogHeader() {
  return (
    <header className="relative overflow-hidden bg-secondary">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      >
        <source src="/images/hero2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative container mx-auto px-4 py-32 max-w-7xl">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-light mb-6 text-white leading-tight">
            Travel
            <br />
            Stories
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl">
            Discover extraordinary adventures, hidden gems, and inspiring journeys from around the world.
          </p>
        </div>
      </div>
    </header>
  )
}
