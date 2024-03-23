// typy mozemy zawęzić do zdefiniowanych przez nas
// export type Category = 'general' | 'work' | 'gym' | 'hobby';
// enum to zbiór stałych. domyślnie wartości zaczynają od 0, jeśli im nic nie przypiszemy
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
