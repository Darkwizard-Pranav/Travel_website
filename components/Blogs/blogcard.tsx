"use client";
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
  featured?: boolean
}

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Card className="overflow-hidden border-0 shadow-none bg-transparent">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                {post.category}
              </Badge>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-balance leading-tight">{post.title}</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{post.excerpt}</p>
            </div>
            <button className="group inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <span className="font-medium">Read Story</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden border-0 shadow-none bg-transparent group cursor-pointer">
      <div className="space-y-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs">
              {post.category}
            </Badge>
            <span>{post.date}</span>
          </div>
          <div>
            <h3 className="text-xl font-light mb-2 text-balance leading-tight group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-pretty leading-relaxed text-sm">{post.excerpt}</p>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-muted-foreground">{post.readTime}</span>
            <button className="group/btn inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm">
              <span>Read</span>
              <svg
                className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
