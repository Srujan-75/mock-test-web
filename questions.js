const questionBank = {
  "SVD": [
    {
      question: "What does SVD stand for?",
      options: [
        "Singular Value Decomposition",
        "System Vector Division",
        "Signal Variance Detector",
        "None"
      ],
      correct: 0,
      explanation: "SVD stands for Singular Value Decomposition."
    },
    {
      question: "In SVD, which matrix contains singular values?",
      options: ["U", "V", "Σ", "A"],
      correct: 2,
      explanation: "The diagonal matrix Σ contains the singular values."
    }
  ],
"CS_and_CG_MOSFET_Small_Signal": [
  {
    "question": "Why is small-signal analysis used in MOSFET amplifiers?",
    "options": [
      "To study switching behavior",
      "To analyze cutoff region",
      "To linearize operation around the Q-point",
      "To increase drain current"
    ],
    "correct": 2,
    "explanation": "Small-signal analysis linearizes the MOSFET around a fixed DC operating point to study AC behavior."
  },
  {
    "question": "In the small-signal model of a MOSFET, what does the controlled current source represent?",
    "options": [
      "Channel resistance",
      "Gate leakage current",
      "Transconductance effect (gₘvgs)",
      "Output resistance"
    ],
    "correct": 2,
    "explanation": "The dependent current source gₘvgs represents the transconductance of the MOSFET."
  },
  {
    "question": "The voltage gain of a Common Source amplifier (including rₒ) is given by",
    "options": [
      "+ gₘ (R_D || rₒ)",
      "- gₘ (R_D || rₒ)",
      "- R_D / gₘ",
      "+ 1 / (gₘ R_D)"
    ],
    "correct": 1,
    "explanation": "Common Source amplifier has gain −gₘ(R_D || rₒ), indicating phase inversion."
  },
  {
    "question": "The phase shift introduced by a Common Source amplifier is",
    "options": [
      "0°",
      "90°",
      "180°",
      "270°"
    ],
    "correct": 2,
    "explanation": "The negative sign in voltage gain of CS amplifier indicates a 180° phase shift."
  },
  {
    "question": "The input resistance of a Common Source MOSFET amplifier is approximately",
    "options": [
      "Zero",
      "1/gₘ",
      "R_D",
      "Infinite"
    ],
    "correct": 3,
    "explanation": "The MOSFET gate draws negligible current, resulting in very high input resistance."
  },
  {
    "question": "In a Common Gate amplifier, the input signal is applied at the",
    "options": [
      "Gate",
      "Drain",
      "Source",
      "Body"
    ],
    "correct": 2,
    "explanation": "In a Common Gate configuration, the source terminal acts as the input."
  },
  {
    "question": "The input resistance of a Common Gate amplifier is approximately equal to",
    "options": [
      "R_D",
      "rₒ",
      "gₘ",
      "1/gₘ"
    ],
    "correct": 3,
    "explanation": "The input resistance of a CG amplifier is low and approximately equal to 1/gₘ."
  },
  {
    "question": "The voltage gain of a Common Gate amplifier is",
    "options": [
      "Negative and high",
      "Positive and high",
      "Unity",
      "Zero"
    ],
    "correct": 1,
    "explanation": "Common Gate amplifier provides high positive voltage gain with no phase inversion."
  },
  {
    "question": "Which MOSFET amplifier configuration suffers from Miller effect?",
    "options": [
      "Common Gate",
      "Common Drain",
      "Common Source",
      "Differential amplifier"
    ],
    "correct": 2,
    "explanation": "Miller effect is significant in Common Source amplifiers due to gate-drain capacitance."
  },
  {
    "question": "Which MOSFET amplifier is most suitable for high-frequency applications?",
    "options": [
      "Common Source",
      "Common Gate",
      "Common Drain",
      "Emitter follower"
    ],
    "correct": 1,
    "explanation": "Common Gate amplifier has no Miller effect, making it suitable for high-frequency operation."
  }
]

};
