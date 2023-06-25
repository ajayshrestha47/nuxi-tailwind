import { defineStore } from 'pinia'

export const useSidebarStore = defineStore({
    id: 'sidebar',
    state: () => ({
        sidebarOpen: true,
    }),
    actions: {
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen
        }
    }
})