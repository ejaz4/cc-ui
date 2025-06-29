export function getConversationIDs(): string[] {
  return JSON.parse(Android.getConversationIDs());
}

export function getConversationStatus(id: string): string {
  return Android.getConversationStatus(id);
}

export type AndroidMessage = {
  sender: string;
  id: string;
  message: string;
  isGroup: boolean;
  timestamp: number;
  conversationName?: string;
};

export function getBundle(id: string) {
  return JSON.parse(Android.getBundle(id)) as AndroidMessage[];
}

export type APISummaryResponse = {
  extract: {
    extract: string;
    mp3Path?: string;
  };
  speakers: {
    speaker: string;
    text: string;
    mp3Path?: string;
  }[];
};

export function setSummary(id: string, extract: string) {
  Android.setSummary(id, extract);
}

export function getSummary(id: string): string {
  return Android.getSummary(id);
}
