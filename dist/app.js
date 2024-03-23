import { Category } from './types/types.js';
import { TaskClass } from './classes/task.js';
// dodajemy rozszerzenie /js do pliku aby móc go importować jako moduł (szybki fix)
// w duzych projektach w compilerOptions to ustawiamy
import { render } from './helpers/render-tasks.helpers.js';
const taskContainer = document.querySelector('.tasks');
const addTaskButton = document.querySelector('button');
const newTaskInput = document.querySelector('#name');
const tasks = [
    { name: 'wyrzucić śmieci', done: false, category: Category.GENERAL },
    { name: 'pójść na siłkę', done: false, category: Category.GYM },
    { name: 'umyć okna', done: false, category: Category.GENERAL },
];
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        console.log('wybrano kategorie general');
    }
    else if (category === Category.GYM) {
        alert('ty koksie!');
    }
    else if (category === Category.HOBBY) {
        document.body.style.background = 'red';
    }
    else if (category === Category.WORK) {
        document.body.style.background = 'green';
    }
    else {
        // never tutaj służy do zabezpieczenia przed brakiem obsługi wszystkich przypadków z category.
        // jeśli mielibyśmy więcej kategorii i zapomnielibyśmy zrobić dla nich obsługę w if else to mielibyśmy błąd
        const never = category;
        console.log(never);
    }
};
const addNewTask = (task) => {
    const selectedRadioElement = document.querySelector('input[name="category"]:checked');
    const category = selectedRadioElement
        ? selectedRadioElement.value
        : undefined;
    tasks.push({ name: task, done: false, category });
};
document.querySelectorAll('input[name="category"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        const category = radio.value;
        handleCategoryChange(category);
    });
});
addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    addNewTask(newTaskInput.value);
    newTaskInput.value = '';
    render(tasks, taskContainer);
});
render(tasks, taskContainer);
const taskClassInstance = new TaskClass('Konstruktor test', false);
taskClassInstance.logCreationDate();
