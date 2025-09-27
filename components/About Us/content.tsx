import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Award, Heart } from "lucide-react"

export function AboutContent() {
  const values = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "We connect you to destinations across the globe with our extensive network of travel partners.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our experienced travel consultants are passionate about creating personalized journeys for every traveler.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Award-winning service that ensures your travel experience exceeds expectations every time.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do, ensuring memorable and hassle-free travels.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Our Story */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#014421] mb-6">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded with a passion for exploration and discovery, Aventuro has been helping travelers create
                extraordinary memories for over a decade. We believe that travel is not just about reaching a
                destination, but about the journey itself and the experiences that shape us along the way.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From humble beginnings as a small travel agency, we've grown into a comprehensive travel platform that
                serves thousands of adventurers worldwide, always maintaining our commitment to personalized service and
                authentic experiences.
              </p>
            </div>
            <div className="bg-blue-950 rounded-lg p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10+</div>
                  <div className="text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50K+</div>
                  <div className="text-blue-200">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <div className="text-blue-200">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-200">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#014421] text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-[#014421] transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#014421] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#014421] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-[#014421] mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-pretty">
            To inspire and enable people to explore the world by providing exceptional travel experiences, personalized
            service, and innovative solutions that create lasting memories and meaningful connections across cultures
            and destinations.
          </p>
        </div>
      </div>
    </section>
  )
}
