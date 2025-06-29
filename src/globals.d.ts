export {};

declare global {
  interface AndroidType {
    // Methods and types here
    toastMessage: (message: string) => void;
    getConversationIDs: () => string;
    getConversationStatus: (id: string) => string;
    updateConversationState: (id: string, state: string) => void;
    getBundle: (id: string) => string;
    setSummary: (id: string, extract: string) => void;
    getSummary: (id: string) => string;
  }
  declare var Android: AndroidType;
}
