import HomeIcon from '@/assets/icons/home.svg?react';
import GraphIcon from '@/assets/icons/graph.svg?react';
import MessageIcon from '@/assets/icons/message.svg?react';

export const NAV_ITEMS = [
  { id: 'home', label: '홈', icon: HomeIcon },
  { id: 'graph', label: '통계', icon: GraphIcon },
  { id: 'message', label: '메세지', icon: MessageIcon },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number]['id'];