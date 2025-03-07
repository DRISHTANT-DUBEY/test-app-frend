"use client"

import { useCallback, useEffect, useState } from "react"
import { translations, type Language, type TranslationKey } from "./translations"

export function useTranslation() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Get language from localStorage or browser settings
    const savedLanguage = localStorage.getItem("language") as Language
    const browserLanguage = navigator.language.split("-")[0] as Language

    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    } else if (browserLanguage && translations[browserLanguage]) {
      setLanguage(browserLanguage)
    }
  }, [])

  const t = useCallback(
    (key: TranslationKey) => {
      return translations[language][key] || translations.en[key] || key
    },
    [language],
  )

  const changeLanguage = useCallback((newLanguage: Language) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage)
      localStorage.setItem("language", newLanguage)

      // Update data-i18n elements
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n") as TranslationKey
        if (key && translations[newLanguage][key]) {
          element.textContent = translations[newLanguage][key]
        }
      })
    }
  }, [])

  return { t, language, changeLanguage }
}

