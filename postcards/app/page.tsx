"use client"

import { useState } from "react"
import IntroScreen from "@/components/intro-screen"
import PersonalMessage from "@/components/personal-message"
import PostcardsGrid from "@/components/postcards-grid"

const allQualities = [
  "You light up the room",
  "Your laugh is contagious",
  "You're genuinely kind",
  "You inspire others",
  "Your creativity knows no bounds",
  "You're an amazing listener",
  "You make everything fun",
  "Your optimism is infectious",
  "You're fiercely loyal",
  "You have the biggest heart",
  "You're incredibly thoughtful",
  "You bring out the best in people",
  "Your passion is beautiful",
  "You're one of a kind",
  "You make the world brighter",
  "You're braver than you believe",
  "Your talent is remarkable",
  "You're a true friend",
  "You have impeccable taste",
  "You're absolutely unforgettable",
]

type PageState = "intro" | "message" | "postcards"

export default function Home() {
  const [currentState, setCurrentState] = useState<PageState>("intro")
  const [selectedName, setSelectedName] = useState("")
  const [selectedQualities, setSelectedQualities] = useState<string[]>([])

  const selectRandomQualities = () => {
    const shuffled = [...allQualities].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 6)
  }

  const handleBoxClick = (name: string) => {
    setSelectedName(name)
    setCurrentState("message")
  }

  const handleGoToPostcards = () => {
    setSelectedQualities(selectRandomQualities())
    setCurrentState("postcards")
  }

  const handleBackToIntro = () => {
    setCurrentState("intro")
    setSelectedName("")
    setSelectedQualities([])
  }

  if (currentState === "intro") {
    return <IntroScreen onBoxClick={handleBoxClick} />
  }

  if (currentState === "message") {
    return <PersonalMessage name={selectedName} onNextClick={handleGoToPostcards} onBackClick={handleBackToIntro} />
  }

  return <PostcardsGrid qualities={selectedQualities} name={selectedName} onBackClick={handleBackToIntro} />
}
