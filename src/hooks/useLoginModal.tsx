import { create } from 'zustand'

type Store = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useLoginModal = create<Store>()((set) => ({
  isOpen: false,
  onOpen: () => set((state) => ({ isOpen: true })),
  onClose: () => set((state) => ({ isOpen: false })),
}))


export default useLoginModal