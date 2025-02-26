"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import axios from "axios"

// Dynamically import ReactWordcloud with SSR disabled
const ReactWordcloud = dynamic(() => import("react-wordcloud"), {
  ssr: false,
  loading: () => <Skeleton className="w-full h-[400px]" />,
})


const options = {
  rotations: 2,
  rotationAngles: [-90, 0] as [number, number],
  fontSizes: [12, 60] as [number, number],
  fontFamily: "Arial",
  fontWeight: "bold",
  padding: 1,
}

export default function WordCloud() {
  const [words, setWords] = useState<{ word: string; frequency: number }[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('fetching data word cloud')
        const response = await axios.get(`api/word_cloud/latest`)
        console.log(response.data.words)
        setWords(response.data.words)
      } catch (error) {
        console.error("データ取得中にエラーが発生しました:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const renderWordCloud = () => {
    console.log(words)
    if (!Array.isArray(words) || words.length === 0) {
      return <p>データがありません。</p>
    }

    try {
      const formattedWords = words.map(({ word, frequency }) => ({ text: word, value: frequency }))
      return <ReactWordcloud words={formattedWords} options={options} />
    } catch (err) {
      console.error("Error rendering WordCloud:", err)
      return <p>ワードクラウドの表示中にエラーが発生しました。</p>
    }
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>チャットワードクラウド</CardTitle>
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
          <CardTitle>チャットワードクラウド</CardTitle>
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
        <CardTitle>チャットワードクラウド</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: "400px", width: "100%" }}>{typeof window !== "undefined" && renderWordCloud()}</div>
      </CardContent>
    </Card>
  )
}

