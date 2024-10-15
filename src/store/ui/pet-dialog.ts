import { create } from 'zustand'

export const useDialogPet = create()((set) => ({
    isDialogOpen: false,
    infoPet: {},
    openDialogPet: (newPet) => set({isDialogOpen: true, infoPet: newPet}),
    closeDialogPet: () => set({isDialogOpen: false, infoPet: {}})
}))