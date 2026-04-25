import { Mail, MessageCircle } from 'lucide-react'
import {
  CONTACT_EMAIL,
  PHONE_LOCAL_NUMBER,
  WHATSAPP_NUMBER,
} from '@/lib/constants'

export const metadata = {
  title: 'NFPC.ae - Premium Domain For Sale',
  description: 'Acquire the premium domain NFPC.ae. Contact us via email or WhatsApp to discuss purchase opportunities.',
}

export default function Home() {
  const email = CONTACT_EMAIL
  const whatsapp = WHATSAPP_NUMBER
  const whatsappMessage = `Hi, I'm interested in purchasing the domain NFPC.ae`
  const whatsappLink = `https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
  const gmailComposeLink = `https://mail.google.com/mail/u/0/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(
    'Inquiry about NFPC.ae domain purchase'
  )}`

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-2xl text-center space-y-8">
        {/* Domain Name */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight">
            NFPC.ae
          </h1>
          <div className="inline-block bg-emerald-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
            Premium Domain For Sale
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-xl text-slate-600 leading-relaxed">
            Secure the perfect domain for your business or brand. NFPC.ae is a premium, memorable domain name ideal for establishing a strong online presence.
          </p>
          <p className="text-lg text-slate-500">
            Interested in acquiring this domain? Get in touch with us today.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          {/* Email Button */}
          <a
            href={gmailComposeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Mail size={24} />
            Send Email
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <MessageCircle size={24} />
            WhatsApp
          </a>
        </div>

        {/* Contact Info */}
        <div className="pt-8 border-t border-slate-300 mt-12">
          <p className="text-slate-600 mb-4">Or reach out directly:</p>
          <div className="space-y-2 text-slate-700">
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p className="text-lg">
              <span className="font-semibold">WhatsApp:</span> {PHONE_LOCAL_NUMBER}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 text-slate-500 text-sm">
          <p>&copy; 2024 NFPC.ae - All rights reserved</p>
        </div>
      </div>
    </main>
  )
}
