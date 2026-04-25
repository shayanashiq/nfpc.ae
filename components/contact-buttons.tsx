'use client'

import type { MouseEvent } from 'react'
import { Mail } from 'lucide-react'

type EmailButtonProps = {
  email: string
}

const GMAIL_SUBJECT = 'Inquiry about NFPC.ae domain purchase'

export function EmailButton({ email }: EmailButtonProps) {
  const encodedEmail = encodeURIComponent(email)
  const encodedSubject = encodeURIComponent(GMAIL_SUBJECT)
  const gmailWebLink = `https://mail.google.com/mail/u/0/?view=cm&to=${encodedEmail}&su=${encodedSubject}`
  const gmailIosLink = `googlegmail:///co?to=${encodedEmail}&subject=${encodedSubject}`
  const gmailAndroidIntent = `intent://co?to=${encodedEmail}&subject=${encodedSubject}#Intent;scheme=googlegmail;package=com.google.android.gm;end`

  const handleEmailClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const userAgent = navigator.userAgent || ''
    const isAndroid = /Android/i.test(userAgent)
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent)

    if (isAndroid) {
      let fallbackTriggered = false
      const fallbackToWeb = () => {
        if (!document.hidden && !fallbackTriggered) {
          fallbackTriggered = true
          window.open(gmailWebLink, '_blank', 'noopener,noreferrer')
        }
      }

      window.location.href = gmailAndroidIntent
      setTimeout(fallbackToWeb, 1200)
      return
    }

    if (isIOS) {
      let fallbackTriggered = false
      const fallbackToWeb = () => {
        if (!document.hidden && !fallbackTriggered) {
          fallbackTriggered = true
          window.open(gmailWebLink, '_blank', 'noopener,noreferrer')
        }
      }

      window.location.href = gmailIosLink
      setTimeout(fallbackToWeb, 1200)
      return
    }

    window.open(gmailWebLink, '_blank', 'noopener,noreferrer')
  }

  return (
    <a
      href={gmailWebLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleEmailClick}
      className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
    >
      <Mail size={24} />
      Send Email
    </a>
  )
}
