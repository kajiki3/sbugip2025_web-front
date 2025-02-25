
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function QAComponent() {
    const [isAsking, setIsAsking] = useState(false)
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")

    const handleAsk = async () => {
        if (!question) return

        setIsAsking(true)
        // ここで実際のAI APIを呼び出します。この例ではダミーの応答を使用しています。
        await new Promise((resolve) => setTimeout(resolve, 1000)) // APIリクエストをシミュレート
        setAnswer(`これは「${question}」に対するダミーの回答です。実際の実装では、ここでAI APIからの応答を表示します。`)
        setIsAsking(false)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>質問してみよう</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <Input placeholder="質問を入力してください" value={question} onChange={(e) => setQuestion(e.target.value)} />
                    <Button onClick={handleAsk} disabled={isAsking}>
                        {isAsking ? "回答中..." : "質問する"}
                    </Button>
                    {answer && (
                        <div className="mt-4 p-4 bg-gray-100 rounded-md">
                            <h3 className="font-bold">回答:</h3>
                            <p>{answer}</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
