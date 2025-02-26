import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Analysis } from "@/lib/types"
import { Users, Heart, School, Frown, Home } from "lucide-react"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28AFF"]

interface AnalysisChartProps {
  analysis: Analysis | null
}

export default function InterestDetails({ analysis }: AnalysisChartProps) {
  if (!analysis) return null

  const interestDetails = [
    {
      category: "友人関係",
      icon: Users,
      items: [
        { value: analysis.conversation_rates.friendship, description: analysis.friendship },
      ],
    },
    {
      category: "家族関係",
      icon: Home,
      items: [
        { value: analysis.conversation_rates.familyship, description: analysis.familyship },
      ],
    },
    {
      category: "学校生活",
      icon: School,
      items: [
        { value: analysis.conversation_rates.school_life, description: analysis.school_life },
      ],
    },
    {
      category: "好きなこと",
      icon: Heart,
      items: [
        { value: analysis.conversation_rates.likes, description: analysis.likes },
      ],
    },
    {
      category: "嫌いなこと",
      icon: Frown,
      items: [
        { value: analysis.conversation_rates.dislikes, description: analysis.dislikes },
      ],
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {interestDetails.map((category, index) => (
        <Card key={category.category}>
          <CardHeader>
            <CardTitle
              className="flex items-center"
              style={{ color: COLORS[index % COLORS.length] }} // タイトルに色を付ける
            >
              <category.icon className="mr-2" />
              {category.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {category.items.map((item, idx) => (
              <div key={idx} className="mb-4">
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
