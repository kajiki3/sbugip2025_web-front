import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smile, Meh, Frown, Moon, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const mentalHealthDetails = [
  {
    name: "気分",
    icon: Smile,
    value: 70,
    description: "全体的に良好な気分を維持しています。",
    trend: "先週と比べて10%向上しました。",
    advice: "ポジティブな活動を続けることで、さらに気分を向上させることができます。",
  },
  {
    name: "不安レベル",
    icon: Meh,
    value: 30,
    description: "不安レベルは比較的低く、落ち着いた状態です。",
    trend: "先月から安定しています。",
    advice: "リラックス法や深呼吸法を学ぶと、さらに不安を軽減できるかもしれません。",
  },
  {
    name: "睡眠の質",
    icon: Moon,
    value: 80,
    description: "良質な睡眠が取れています。",
    trend: "先週より睡眠時間が30分増加しました。",
    advice: "就寝前のルーティンを確立すると、さらに睡眠の質が向上する可能性があります。",
  },
  {
    name: "社会的交流",
    icon: Users,
    value: 60,
    description: "友人や家族との交流は適度に保たれています。",
    trend: "先月と比べて少し減少しています。",
    advice: "新しい趣味のグループに参加すると、社会的交流が増えるかもしれません。",
  },
]

export default function MentalHealthDetails() {
  const getIcon = (value: number) => {
    if (value >= 70) return Smile
    if (value >= 40) return Meh
    return Frown
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {mentalHealthDetails.map((item) => {
        const Icon = item.icon || getIcon(item.value)
        return (
          <Card key={item.name}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon className="mr-2" />
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={item.value} className="mb-2" />
              <p className="mb-2">{item.description}</p>
              <p className="mb-2">
                <strong>傾向:</strong> {item.trend}
              </p>
              <p>
                <strong>アドバイス:</strong> {item.advice}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

