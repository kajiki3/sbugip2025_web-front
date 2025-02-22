"use client"

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { category: "友人関係", value: 70 },
  { category: "学校", value: 60 },
  { category: "行為", value: 80 },
  { category: "向社会性", value: 90 },
  { category: "認知的特徴", value: 65 },
  { category: "ストレス耐性", value: 75 },
]

export default function MentalHealthChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="メンタルヘルス" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  )
}