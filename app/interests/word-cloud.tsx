"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

// Dynamically import ReactWordcloud with SSR disabled
const ReactWordcloud = dynamic(() => import("react-wordcloud"), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-[400px]" />,
})

// ダミーデータ（実際の実装では、バックエンドからデータを取得します）
const dummyWords = [
  { text: "本", value: 64 },
  { text: "絵", value: 41 },
  { text: "音楽", value: 35 },
  { text: "サッカー", value: 32 },
  { text: "科学", value: 28 },
  { text: "友達", value: 26 },
  { text: "学校", value: 24 },
  { text: "ゲーム", value: 22 },
  { text: "家族", value: 20 },
  { text: "動物", value: 18 },
  { text: "宿題", value: 16 },
  { text: "公園", value: 14 },
  { text: "テレビ", value: 12 },
  { text: "旅行", value: 10 },
  { text: "お菓子", value: 8 },
]

const options = {
  rotations: 2,
  rotationAngles: [-90, 0] as [number, number],
  fontSizes: [12, 60] as [number, number],
  fontFamily: "Arial",
  fontWeight: "bold",
  padding: 1,
}

export default function WordCloud() {
  const [words, setWords] = useState<{ text: string; value: number }[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchData = () => {
      setTimeout(() => {
        setWords(dummyWords)
        setIsLoading(false)
      }, 1000) // Simulate 1 second delay
    }

    fetchData()
  }, [])

  const renderWordCloud = () => {
    console.log(words)
    if (!Array.isArray(words) || words.length === 0) {
      return <p>データがありません。</p>
    }

    try {
      return <ReactWordcloud words={words} options={options} />
    } catch (err) {
      console.error("Error rendering WordCloud:", err)
      return <p>ワードクラウドの表示中にエラーが発生しました。</p>
    }
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>チャット履歴ワードクラウド</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="w-full h-[400px]" />
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>チャット履歴ワードクラウド</CardTitle>
        </CardHeader>
        <CardContent>
          <p>エラーが発生しました: {error}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>チャット履歴ワードクラウド</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: "400px", width: "100%" }}>{typeof window !== "undefined" && renderWordCloud()}</div>
      </CardContent>
    </Card>
  )
}

