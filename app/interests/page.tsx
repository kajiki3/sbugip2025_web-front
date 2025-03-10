"use client";

import axios from "axios"
import InterestChart from "./interest-chart"
import InterestDetails from "./interest-details"
import WordCloud from "./word-cloud"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Analysis } from "@/lib/types"
import { useEffect, useState } from "react"
import QAComponent from "../qa-component";

export default function InterestsPage() {
  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Analysis>(`api/analysis/latest`)
        setAnalysis(response.data)
      } catch (error) {
        console.error("データ取得中にエラーが発生しました:", error)
      }
    }

    fetchData()
  }, [])
  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>概要</CardTitle>
          </CardHeader>
          <CardContent>
            <InterestChart analysis={analysis} />
          </CardContent>
        </Card>
        <WordCloud />
      </div>
      <div className="mt-8">
        <QAComponent />
      </div>
      <InterestDetails analysis={analysis} />
    </div>
  )
}

