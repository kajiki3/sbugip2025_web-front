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

        setAnswer("")
        setIsAsking(true)
        try {
            const response = await fetch('api/search/rag', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question })
            })

            if (!response.body) {
                throw new Error("ストリームがサポートされていません。")
            }

            const reader = response.body.getReader()
            const decoder = new TextDecoder()
            let done = false
            let accumulatedAnswer = ""

            while (!done) {
                const { value, done: doneReading } = await reader.read()
                done = doneReading
                const chunk = decoder.decode(value, { stream: true })
                accumulatedAnswer += chunk

                setAnswer(accumulatedAnswer)
            }
        } catch (error) {
            console.error("質問送信中にエラーが発生しました:", error)
            setAnswer("エラーが発生しました。")
        }
        setIsAsking(false)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>質問してみよう</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <Input
                        placeholder="質問を入力してください"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
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
