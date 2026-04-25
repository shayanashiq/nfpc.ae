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
  const encodedSubjectForIntent = encodeURIComponent(GMAIL_SUBJECT)
  const mailtoLink = `mailto:${email}?subject=${encodedSubject}`
  const gmailWebLink = `https://mail.google.com/mail/u/0/?view=cm&to=${encodedEmail}&su=${encodedSubject}`
  const gmailIosLink = `googlegmail://co?to=${encodedEmail}&subject=${encodedSubject}&su=${encodedSubject}`
  const gmailAndroidIntent = `intent:${encodedEmail}#Intent;scheme=mailto;package=com.google.android.gm;S.subject=${encodedSubjectForIntent};S.android.intent.extra.SUBJECT=${encodedSubjectForIntent};end`

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
          window.location.href = mailtoLink
          setTimeout(() => {
            if (!document.hidden) {
              window.open(gmailWebLink, '_blank', 'noopener,noreferrer')
            }
          }, 1000)
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
          window.location.href = mailtoLink
          setTimeout(() => {
            if (!document.hidden) {
              window.open(gmailWebLink, '_blank', 'noopener,noreferrer')
            }
          }, 1000)
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
