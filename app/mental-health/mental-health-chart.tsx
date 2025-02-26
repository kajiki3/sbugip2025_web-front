"use client"

import { Mental } from "@/lib/types"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts"


interface MentalHealthChartProps {
  mentalHealth: Mental | null
}


export default function MentalHealthChart({ mentalHealth }: MentalHealthChartProps) {
  if (!mentalHealth) return null

  const data = [
    { category: "友人関係", value: mentalHealth.friendship.point },
    { category: "学校", value: mentalHealth.school.point },
    { category: "行為", value: mentalHealth.behavior.point },
    { category: "向社会性", value: mentalHealth.sociality.point },
    { category: "認知的特徴", value: mentalHealth.cognitive_features.point },
    { category: "ストレス耐性", value: mentalHealth.stress_resistance.point },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis angle={90} domain={[0, 100]} />
        <Radar name="メンタルヘルス" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  )
}