import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, Heart, School, Frown, Home } from "lucide-react"

const interestDetails = [
  {
    category: "友人関係",
    icon: Users,
    items: [
      { value: 70, description: "友人との関係は概ね良好ですが、時々小さな問題があります。" },
    ],
  },
  {
    category: "家族関係",
    icon: Home,
    items: [
      { value: 80, description: "家族との関係は良好で、コミュニケーションが取れています。" },
    ],
  },
  {
    category: "学校生活",
    icon: School,
    items: [
      { value: 75, description: "学校生活には概ね適応していますが、一部の科目で課題があります。" },
    ],
  },
  {
    category: "好きなこと",
    icon: Heart,
    items: [
      { value: 85, description: "様々な活動や趣味に興味を持ち、積極的に取り組んでいます。" },
    ],
  },
  {
    category: "嫌いなこと",
    icon: Frown,
    items: [
      {
        value: 40,
        description: "苦手なことや避けたいことがいくつかありますが、徐々に克服しようとしています。",
      },
    ],
  },
]

export default function InterestDetails() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {interestDetails.map((category) => (
        <Card key={category.category}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <category.icon className="mr-2" />
              {category.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {category.items.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-end items-center mb-1">
                  <span>{item.value}%</span>
                </div>
                <Progress value={item.value} className="mb-2" />
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
