"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function UpdateForm({ activeTab }: { activeTab: string }) {
  const [formData, setFormData] = useState({
    interest: "",
    interestValue: "",
    mentalHealthAspect: "",
    mentalHealthValue: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      interest: "",
      interestValue: "",
      mentalHealthAspect: "",
      mentalHealthValue: "",
    })
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>データ更新</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === "interests" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="interest">興味・関心</Label>
                <Select name="interest" onValueChange={(value) => handleSelectChange("interest", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="読書">読書</SelectItem>
                    <SelectItem value="アート">アート</SelectItem>
                    <SelectItem value="音楽">音楽</SelectItem>
                    <SelectItem value="スポーツ">スポーツ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="interestValue">値 (0-100)</Label>
                <Input
                  id="interestValue"
                  name="interestValue"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.interestValue}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          {activeTab === "mental-health" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mentalHealthAspect">メンタルヘルスの側面</Label>
                <Select
                  name="mentalHealthAspect"
                  onValueChange={(value) => handleSelectChange("mentalHealthAspect", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="気分">気分</SelectItem>
                    <SelectItem value="不安レベル">不安レベル</SelectItem>
                    <SelectItem value="睡眠の質">睡眠の質</SelectItem>
                    <SelectItem value="社会的交流">社会的交流</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="mentalHealthValue">値 (0-100)</Label>
                <Input
                  id="mentalHealthValue"
                  name="mentalHealthValue"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.mentalHealthValue}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          <Button type="submit" className="w-full">
            更新
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

