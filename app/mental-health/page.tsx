import MentalHealthChart from "./mental-health-chart"
import MentalHealthDetails from "./mental-health-details"
import MentalHealthSymptoms from "./mental-health-symptoms"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MentalHealthPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>概要</CardTitle>
        </CardHeader>
        <CardContent>
          <MentalHealthChart />
        </CardContent>
      </Card>
      <MentalHealthDetails />
      <MentalHealthSymptoms />
    </div>
  )
}

