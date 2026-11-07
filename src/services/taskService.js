
import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  const completedFilter =
    completed === undefined ? undefined : completed === 'true';

  return taskRepository.findAll(completedFilter);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
