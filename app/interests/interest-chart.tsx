"use client"

import { Analysis } from "@/lib/types"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "家族関係", value: 30 },
  { name: "友人関係", value: 25 },
  { name: "学校生活", value: 20 },
  { name: "好きなこと", value: 25 },
  { name: "嫌いなこと", value: 20 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

interface AnalysisChartProps {
  analysis: Analysis | null
}


export default function InterestChart({ analysis }: AnalysisChartProps) {
  if (!analysis) return null

  const data = [
    { name: "家族関係", value: analysis.conversation_rates.familyship },
    { name: "友人関係", value: analysis.conversation_rates.friendship },
    { name: "学校生活", value: analysis.conversation_rates.school_life },
    { name: "好きなこと", value: analysis.conversation_rates.likes },
    { name: "嫌いなこと", value: analysis.conversation_rates.dislikes },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={120} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

