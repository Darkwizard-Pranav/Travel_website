import { BlogCard } from "./blogcard"
const blogPosts = [
  {
    id: 1,
    title: "Hidden Temples of Kyoto",
    excerpt: "Discovering the serene beauty and ancient wisdom tucked away in Japan's cultural heart.",
    category: "Culture",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "/images/1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Patagonia's Wild Heart",
    excerpt: "Trekking through untamed landscapes where glaciers meet granite peaks.",
    category: "Adventure",
    readTime: "12 min read",
    date: "Dec 12, 2024",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    title: "Street Food Chronicles: Bangkok",
    excerpt: "A culinary journey through the vibrant flavors and hidden gems of Thailand's capital.",
    category: "Food & Drink",
    readTime: "6 min read",
    date: "Dec 10, 2024",
    image: "/images/3.jpg",
  },
  {
    id: 4,
    title: "Northern Lights Photography",
    excerpt: "Capturing the aurora borealis in Iceland's pristine wilderness.",
    category: "Photography",
    readTime: "10 min read",
    date: "Dec 8, 2024",
    image: "/images/4.jpg",
  },
  {
    id: 5,
    title: "Solo Travel Safety Guide",
    excerpt: "Essential tips for confident and secure solo adventures around the globe.",
    category: "Tips & Guides",
    readTime: "7 min read",
    date: "Dec 5, 2024",
    image: "/images/5.jpg",
  },
  {
    id: 6,
    title: "Moroccan Desert Dreams",
    excerpt: "Sleeping under stars in the Sahara and discovering Berber hospitality.",
    category: "Adventure",
    readTime: "9 min read",
    date: "Dec 3, 2024",
    image: "/images/6.jpg",
  },
]

export function BlogGrid() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="space-y-16">
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-20">
          <div className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-6">Featured Story</div>
          <BlogCard post={featuredPost} featured />
        </div>
      )}
        
      {/* Regular Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
