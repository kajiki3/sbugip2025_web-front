import InterestChart from "./interest-chart"
import InterestDetails from "./interest-details"
import WordCloud from "./word-cloud"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InterestsPage() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>概要</CardTitle>
          </CardHeader>
          <CardContent>
            <InterestChart />
          </CardContent>
        </Card>
        <WordCloud />
      </div>
      <InterestDetails />
    </div>
  )
}

