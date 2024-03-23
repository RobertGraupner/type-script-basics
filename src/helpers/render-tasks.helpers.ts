import { Task } from '../types/types';

export const render = (tasks: Task[], taskContainer: HTMLElement) => {
	taskContainer.innerHTML = '';
	tasks.forEach((task, index) => {
		const taskElement: HTMLElement = document.createElement('li');
		taskElement.className = 'task-item';
		if (task.category) {
			taskElement.classList.add(task.category);
		}

		const checkbox: HTMLInputElement = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.checked = task.done;

		checkbox.addEventListener('change', () => {
			task.done = checkbox.checked;
			taskElement.style.textDecoration = task.done ? 'line-through' : 'none';
		});

		taskElement.textContent = task.name;
		taskElement.appendChild(checkbox);
		taskContainer.appendChild(taskElement);

		if (task.done) {
			taskElement.style.textDecoration = 'line-through';
		}
	});
};
