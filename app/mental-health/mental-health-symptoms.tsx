import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

const symptoms = [
    { name: "体の症状", present: true },
    { name: "精神症状", present: false },
    { name: "自傷行為", present: false },
    { name: "不眠症", present: true },
]

export default function MentalHealthSymptoms() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>症状チェック</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    {symptoms.map((symptom) => (
                        <div key={symptom.name} className="flex items-center">
                            {symptom.present ? (
                                <CheckCircle2 className="mr-2 text-green-500" />
                            ) : (
                                <XCircle className="mr-2 text-red-500" />
                            )}
                            <span>{symptom.name}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
