import { motion as Motion } from 'framer-motion'
import { BsWhatsapp } from 'react-icons/bs'

function FloatingWhatsAppButton({ whatsapp }) {
  if (!whatsapp?.number) {
    return null
  }

  const cleanNumber = whatsapp.number.replace(/\D/g, '')
  const text = encodeURIComponent(whatsapp.message ?? 'Olá! Vi seu portfólio e gostaria de conversar.')
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${text}`

  return (
    <Motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Abrir conversa no WhatsApp (${whatsapp.display ?? cleanNumber})`}
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(5,150,105,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
    >
      <BsWhatsapp className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </Motion.a>
  )
}

export default FloatingWhatsAppButton
