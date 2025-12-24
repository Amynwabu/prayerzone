export enum View {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  PRAYER_SPACES = 'PRAYER_SPACES',
  PRAYER_ROOMS = 'PRAYER_ROOMS',
  HOW_TO_PRAY = 'HOW_TO_PRAY',
  HELP_PRAY = 'HELP_PRAY',
  STREETS = 'STREETS',
  ONLINE = 'ONLINE',
  BLOG = 'BLOG',
  AI_TOOLS = 'AI_TOOLS',
  RESOURCES = 'RESOURCES',
  CONTACT = 'CONTACT',
}

export interface PrayerRoomData {
  id: string;
  title: string;
  description: string;
  scripture: string;
  imageSeed: string;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  summary: string;
  date: string;
  imageSeed: string;
}
