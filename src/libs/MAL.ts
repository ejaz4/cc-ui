export function getConversationIDs(): string[] {
  return JSON.parse(Android.getConversationIDs());
}

export function getConversationStatus(id: string): string {
  return Android.getConversationStatus(id);
}
