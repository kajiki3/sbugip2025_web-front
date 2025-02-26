"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Book, Palette, Music, ClubIcon as Football } from "lucide-react"

ChartJS.register(ArcElement, Tooltip, Legend)

const initialInterests = {
  読書: 30,
  アート: 25,
  音楽: 20,
  スポーツ: 25,
}

export default function InterestsDisplay() {
  const [interests, setInterests] = useState(initialInterests)

  const data = {
    labels: Object.keys(interests),
    datasets: [
      {
        data: Object.values(interests),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>興味・関心</CardTitle>
      </CardHeader>
      <CardContent>
        <Doughnut data={data} options={options} />
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center">
            <Book className="mr-2" /> 読書
          </div>
          <div className="flex items-center">
            <Palette className="mr-2" /> アート
          </div>
          <div className="flex items-center">
            <Music className="mr-2" /> 音楽
          </div>
          <div className="flex items-center">
            <Football className="mr-2" /> スポーツ
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

