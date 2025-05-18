// /components/TaskItem.tsx
'use client';

import React from 'react';
import { Task } from '@/types/task';

type Props = {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
};

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <li className="flex justify-between items-center bg-white shadow-sm rounded px-4 py-3 mb-3">
      <span
        className={`max-w-[70%] break-words ${
          task.completed ? 'line-through text-gray-500' : ''
        }`}
      >
        {task.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={onToggle}
          className={`${
            task.completed ? 'bg-yellow-500' : 'bg-green-600'
          } text-white px-3 py-1 rounded hover:bg-black cursor-pointer`}
        >
          {task.completed ? 'Undo' : 'Done'}
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-black cursor-pointer"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
