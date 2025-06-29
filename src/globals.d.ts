export {};

declare global {
	interface AndroidType {
		// Methods and types here
        toastMessage: (message: string) => void;
	}
	declare var Android: AndroidType;
}
