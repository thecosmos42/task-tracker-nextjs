// /utils/taskUtils.ts
import { Task } from '@/types/task';

export const sortTasks = (tasks: Task[]) =>
  [...tasks].sort((a, b) => Number(a.completed) - Number(b.completed));