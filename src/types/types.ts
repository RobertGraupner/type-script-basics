// Interfejs w TypeScript to zbiór deklaracji, które definiują strukturę obiektu.
// Pozwala to na zdefiniowanie typów, które mogą być używane w wielu miejscach w kodzie.
export interface Task {
	name: string;
	done: boolean;
	// własność category jest opcjonalna i może być pominięta
	category?: Category;
}

// typy mozemy zawęzić do zdefiniowanych przez nas
// export type Category = 'general' | 'work' | 'gym' | 'hobby';

// enum to zbiór stałych. domyślnie wartości zaczynają od 0, jeśli im nic nie przypiszemy
export enum Category {
	GENERAL = 'general',
	WORK = 'work',
	GYM = 'gym',
	HOBBY = 'hobby',
}
