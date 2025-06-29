export {};

declare global {
  interface AndroidType {
    // Methods and types here
    toastMessage: (message: string) => void;
    getConversationIDs: () => string;
    getConversationStatus: (id: String) => string;
  }
  declare var Android: AndroidType;
}
