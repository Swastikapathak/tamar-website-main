import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../../components/ui/dialog"
import { motion } from "framer-motion"

interface CapabilityModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  image: string
}

export function CapabilityModal({ isOpen, onClose, title, description, image }: CapabilityModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-gray-900 to-gray-800 text-white ">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-gray-300">{description}</DialogDescription>
        </DialogHeader>
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </DialogContent>
    </Dialog>
  )
}

