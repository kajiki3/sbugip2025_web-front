"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Mental } from "@/lib/types"
import { Users, School, Shield, Heart, Brain, Zap } from "lucide-react"

interface MentalHealthDetailsProps {
  mentalHealth: Mental | null
}

export default function MentalHealthDetails({ mentalHealth }: MentalHealthDetailsProps) {
  if (!mentalHealth) return null

  const mentalDetails = [
    {
      name: "友人関係",
      icon: Users,
      data: mentalHealth.friendship,
    },
    {
      name: "学校",
      icon: School,
      data: mentalHealth.school,
    },
    {
      name: "行為",
      icon: Shield,
      data: mentalHealth.behavior,
    },
    {
      name: "向社会性",
      icon: Heart,
      data: mentalHealth.sociality,
    },
    {
      name: "認知的特徴",
      icon: Brain,
      data: mentalHealth.cognitive_features,
    },
    {
      name: "ストレス耐性",
      icon: Zap,
      data: mentalHealth.stress_resistance,
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {mentalDetails.map((item) => (
        <Card key={item.name}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <item.icon className="mr-2" />
              {item.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end items-center mb-1">
              <span>{item.data.point}%</span>
            </div>
            <Progress value={item.data.point} className="mb-2" />
            <p className="mb-2">{item.data.overall}</p>
            <p className="mb-2">
              <strong>課題:</strong> {item.data.challenge}
            </p>
            <p>
              <strong>アドバイス:</strong> {item.data.advise}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
