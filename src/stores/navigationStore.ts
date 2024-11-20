import { create } from 'zustand';

type NavItem = 'home' | 'graph' | 'message';

interface NavigationStore {
    selectedNavItem: NavItem;
    setSelectedNavItem: (item: NavItem) => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
    selectedNavItem: 'home',
    setSelectedNavItem: (item) => set({ selectedNavItem: item }),
}));

