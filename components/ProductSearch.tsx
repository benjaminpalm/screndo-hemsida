'use client'

import { useRef, useEffect, useState } from 'react'

const QUESTION = "Vilka signaler missar vi just nu?"
const ANSWER   = "Ljudnivån har nämnts tre veckor i rad. Trivseln på plan 3 ligger under snittet. Vill du att jag föreslår en åtgärd?"
const CHAR_MS  = 50

export default function ProductSearch() {
  const ref           = useRef<HTMLDivElement>(null)
  const [typed,         setTyped]         = useState("")
  const [cursorOn,      setCursorOn]      = useState(false)
  const [answerVisible, setAnswerVisible] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      setTyped(QUESTION)
      setAnswerVisible(true)
      return
    }

    let started = false

    function startAnimation() {
      setCursorOn(true)
      let i = 0
      const typeTimer = setInterval(() => {
        i++
        setTyped(QUESTION.slice(0, i))
        if (i >= QUESTION.length) {
          clearInterval(typeTimer)
          setTimeout(() => {
            setCursorOn(false)
            setAnswerVisible(true)
          }, 900)
        }
      }, CHAR_MS)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true
          observer.disconnect()
          // Small delay so the page has settled before typing begins
          setTimeout(startAnimation, 350)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Cursor blink keyframe — scoped to this component */}
      <style>{`@keyframes ps-cursor { 0%,100% { opacity:1 } 50% { opacity:0 } }`}</style>

      <div ref={ref} style={{ background: "#fff", padding: "72px 48px 48px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>

          {/* Input pill */}
          <div style={{
            height: 62,
            borderRadius: 999,
            background: "#fff",
            border: "1px solid #ECECEC",
            boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
            padding: "0 12px 0 24px",
            display: "flex",
            alignItems: "center",
          }}>
            <span style={{
              flex: 1,
              fontSize: 15,
              color: "#0A0A0A",
              lineHeight: 1,
              userSelect: "none",
            }}>
              {typed}
              {cursorOn && (
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-block",
                    width: 1.5,
                    height: "1em",
                    background: "#0A0A0A",
                    marginLeft: 2,
                    verticalAlign: "text-bottom",
                    animation: "ps-cursor 1s step-end infinite",
                  }}
                />
              )}
            </span>

            <button
              aria-label="Skicka"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "#04D8B5",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                cursor: "pointer",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>

          {/*
            Answer field.
            The text is ALWAYS in the DOM so the element always holds its natural height.
            Only opacity changes — zero layout shift, zero reflow.
          */}
          <div style={{
            marginTop: 10,
            borderRadius: 16,
            padding: "16px 20px",
            background: "#F8F7F4",
            border: "1px solid #ECECEC",
            opacity: answerVisible ? 1 : 0,
            transition: "opacity 0.55s ease",
            willChange: "opacity",
          }}>
            <p style={{ margin: 0, fontSize: 14, color: "#6B6B6B", lineHeight: 1.7 }}>
              {ANSWER}
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
