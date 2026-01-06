"use client"

interface PageHeaderProps {
  onRefresh: () => void
}

export default function PageHeader({ onRefresh }: PageHeaderProps) {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-pretty drop-shadow-sm">
        ✨ Amazing Qualities ✨
      </h1>
      <p className="text-lg text-primary/80 max-w-2xl mx-auto text-pretty">
        Celebrating the wonderful things I appreciate about my friends. Refresh to discover new qualities!
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <span className="inline-block w-2 h-2 bg-accent rounded-full animate-bounce"></span>
        <span
          className="inline-block w-2 h-2 bg-accent rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></span>
        <span
          className="inline-block w-2 h-2 bg-accent rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>
      </div>
    </div>
  )
}
