import { useEffect, useState } from "react"
import axios from "axios"
import { HARD_BACK_URL } from "@/lib/constants"
import MentalHealthChart from "./mental-health-chart"
import MentalHealthDetails from "./mental-health-details"
import MentalHealthSymptoms from "./mental-health-symptoms"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mental } from "@/lib/types"

export default function MentalHealthPage() {
  const [mentalHealth, setMentalHealth] = useState<Mental | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Mental>(`${HARD_BACK_URL}/mental/latest`)
        setMentalHealth(response.data)
      } catch (error) {
        console.error("データ取得中にエラーが発生しました:", error)
      }
    }

    fetchData()
  }, [])
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>概要</CardTitle>
        </CardHeader>
        <CardContent>
          <MentalHealthChart mentalHealth={mentalHealth} />
        </CardContent>
      </Card>
      <MentalHealthDetails mentalHealth={mentalHealth} />
      <MentalHealthSymptoms />
    </div>
  )
}

