import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Palette, Music, ClubIcon as Football } from "lucide-react"

const interestDetails = [
  {
    name: "読書",
    icon: Book,
    description: "様々なジャンルの本を読むことに興味を持っています。特にファンタジーと科学の本が好きです。",
    recentActivity: "先週は「ハリーポッター」シリーズを2冊読みました。",
    recommendation: "科学雑誌の定期購読を始めてみるのはいかがでしょうか？",
  },
  {
    name: "アート",
    icon: Palette,
    description: "絵を描くことや工作を楽しんでいます。色彩豊かな作品を作るのが得意です。",
    recentActivity: "水彩画のクラスに参加し、風景画を描きました。",
    recommendation: "地元の美術館でワークショップが開催されています。参加してみましょう。",
  },
  {
    name: "音楽",
    icon: Music,
    description: "音楽を聴くのが大好きで、最近はギターの練習を始めました。",
    recentActivity: "初めての曲を完璧に弾けるようになりました。",
    recommendation: "学校の音楽部に参加してみるのはどうでしょうか？",
  },
  {
    name: "スポーツ",
    icon: Football,
    description: "体を動かすのが好きで、特にサッカーに興味があります。",
    recentActivity: "地域のジュニアサッカーチームの試合に参加しました。",
    recommendation: "他のスポーツも試してみましょう。水泳教室が始まるそうです。",
  },
]

export default function InterestDetails() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {interestDetails.map((interest) => (
        <Card key={interest.name}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <interest.icon className="mr-2" />
              {interest.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">{interest.description}</p>
            <p className="mb-2">
              <strong>最近の活動:</strong> {interest.recentActivity}
            </p>
            <p>
              <strong>おすすめ:</strong> {interest.recommendation}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

