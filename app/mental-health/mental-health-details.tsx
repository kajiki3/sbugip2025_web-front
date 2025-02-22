import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, School, Shield, Heart, Brain, Zap } from "lucide-react"

const mentalHealthDetails = [
  {
    name: "友人関係",
    icon: Users,
    value: 70,
    description: "友人関係は概ね良好ですが、改善の余地があります。",
    issues: "時々、仲間外れを感じることがあります。",
    advice: "新しい友達を作る機会を積極的に探してみましょう。",
  },
  {
    name: "学校",
    icon: School,
    value: 60,
    description: "学校生活にやや課題があります。",
    issues: "授業に集中することが時々難しいです。",
    advice: "先生に相談して、個別の学習サポートを受けることを検討しましょう。",
  },
  {
    name: "行為",
    icon: Shield,
    value: 80,
    description: "行動面では概ね問題ありません。",
    issues: "時々、小さな嘘をつくことがあります。",
    advice: "正直であることの重要性について話し合いましょう。",
  },
  {
    name: "向社会性",
    icon: Heart,
    value: 90,
    description: "他者への思いやりが非常に強いです。",
    positives: "友達を助けたり、優しく接したりすることが得意です。",
    advice: "この素晴らしい特性を伸ばし続けましょう。",
  },
  {
    name: "認知的特徴",
    icon: Brain,
    value: 65,
    description: "時々、否定的な考えに囚われることがあります。",
    issues: "失敗を過度に気にすることがあります。",
    advice: "ポジティブシンキングの練習を始めてみましょう。",
  },
  {
    name: "ストレス耐性",
    icon: Zap,
    value: 75,
    description: "ストレスへの対処能力は比較的高いです。",
    recentEvents: "最近、引っ越しがありました。",
    advice: "新しい環境に慣れるための時間を十分に取りましょう。",
  },
]

export default function MentalHealthDetails() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {mentalHealthDetails.map((item) => (
        <Card key={item.name}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <item.icon className="mr-2" />
              {item.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={item.value} className="mb-2" />
            <p className="mb-2">{item.description}</p>
            {item.issues && (
              <p className="mb-2">
                <strong>課題:</strong> {item.issues}
              </p>
            )}
            {item.positives && (
              <p className="mb-2">
                <strong>良い点:</strong> {item.positives}
              </p>
            )}
            {item.recentEvents && (
              <p className="mb-2">
                <strong>最近のイベント:</strong> {item.recentEvents}
              </p>
            )}
            <p>
              <strong>アドバイス:</strong> {item.advice}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}