"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Smile, Meh, Frown } from "lucide-react"

const initialMentalHealth = {
  mood: 70,
  anxiety: 30,
  sleep: 80,
  socialInteraction: 60,
}

export default function MentalHealthDisplay() {
  const [mentalHealth, setMentalHealth] = useState(initialMentalHealth)

  const getMoodIcon = (value: number) => {
    if (value >= 70) return <Smile className="text-green-500" />
    if (value >= 40) return <Meh className="text-yellow-500" />
    return <Frown className="text-red-500" />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>メンタルヘルス</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span>気分</span>
              {getMoodIcon(mentalHealth.mood)}
            </div>
            <Progress value={mentalHealth.mood} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>不安レベル</span>
              {getMoodIcon(100 - mentalHealth.anxiety)}
            </div>
            <Progress value={100 - mentalHealth.anxiety} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>睡眠の質</span>
              {getMoodIcon(mentalHealth.sleep)}
            </div>
            <Progress value={mentalHealth.sleep} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>社会的交流</span>
              {getMoodIcon(mentalHealth.socialInteraction)}
            </div>
            <Progress value={mentalHealth.socialInteraction} className="w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

