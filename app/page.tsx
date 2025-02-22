"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InterestsPage from "./interests/page"
import MentalHealthPage from "./mental-health/page"

export default function Home() {
  const [activeTab, setActiveTab] = useState("interests")

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">子供の状態ダッシュボード</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="interests">興味・関心</TabsTrigger>
          <TabsTrigger value="mental-health">メンタルヘルス</TabsTrigger>
        </TabsList>
        <TabsContent value="interests">
          <InterestsPage />
        </TabsContent>
        <TabsContent value="mental-health">
          <MentalHealthPage />
        </TabsContent>
      </Tabs>
    </main>
  )
}

