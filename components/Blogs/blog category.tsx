import { Button } from "@/components/ui/button"

const categories = ["All Stories", "Adventure", "Culture", "Food & Drink", "Photography", "Tips & Guides"]

export function BlogCategories() {
  return (
    <div className="mb-16">
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <Button
            key={category}
            variant={index === 0 ? "default" : "outline"}
            size="sm"
            className={index === 0 ? "bg-primary text-primary-foreground" : ""}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
