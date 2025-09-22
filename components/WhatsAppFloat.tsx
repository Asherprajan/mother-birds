import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
  const whatsappNumber = "+919876543210"
  const message = "Hi! I'm interested in Mother Bird's products. Can you help me?"
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  )
}
