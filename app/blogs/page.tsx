import { BlogCategories } from "@/components/Blogs/blog category";
import { BlogGrid } from "@/components/Blogs/blog-grid";
import { BlogHeader } from "@/components/Blogs/blog-header";


export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background">
      <BlogHeader/>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <BlogCategories/>
        <BlogGrid/>
      </div>
    </main>
  )
}