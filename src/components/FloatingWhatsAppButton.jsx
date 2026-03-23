import { Motion } from '../utils/motion'
import { MessageCircle } from 'lucide-react'

function FloatingWhatsAppButton({ whatsapp }) {
  if (!whatsapp?.number) {
    return null
  }

  const cleanNumber = whatsapp.number.replace(/\D/g, '')
  const text = encodeURIComponent(
    whatsapp.message ?? 'Ola! Vi seu portfolio e gostaria de conversar.',
  )
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${text}`

  return (
    <Motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Abrir conversa no WhatsApp (${whatsapp.display ?? cleanNumber})`}
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(59,130,246,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
    </Motion.a>
  )
}

export default FloatingWhatsAppButton

