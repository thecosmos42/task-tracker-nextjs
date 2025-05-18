'use client';

import { useState, useEffect, useCallback } from 'react';
import { Task } from '@/types/task';
import { sortTasks } from '@/utils/taskUtils';
import TaskItem from '@/components/TaskItem';
import Head from 'next/head';

export default function TaskTracker() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newTask: Task = { text: input, completed: false };
      setTasks([newTask, ...tasks]);
      setInput('');
    }
  };

  const toggleComplete = useCallback((index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(sortTasks(updatedTasks));
  }, [tasks]);

  const deleteTask = useCallback((index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }, [tasks]);

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <>
      <Head>
        <title>Task Tracker</title>
        <meta name="description" content="Track your tasks using Next.js and React" />
      </Head>

      <div className="min-h-screen bg-gray-100 font-sans p-4">
        <h1 className="text-center text-3xl font-bold mb-2">Task Tracker</h1>
        <h3 className="text-center text-lg max-w-xl mx-auto mb-6">
          Keep track of your tasks and their completion status.
        </h3>

        <form
          onSubmit={addTask}
          className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-4 flex gap-2 items-center mb-6"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Start writing and press enter to create your task"
            className="flex-1 p-2 border border-gray-300 rounded text-base"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-200 text-black border border-gray-300 rounded hover:bg-gray-300 cursor-pointer"
          >
            +
          </button>
        </form>

        <div className="max-w-xl mx-auto">
          <ul className="list-none">
            {tasks.map((task, index) => (
              <TaskItem
                task={task}
                onToggle={() => toggleComplete(index)}
                onDelete={() => deleteTask(index)}
              />
            ))}
          </ul>

          {tasks.length > 0 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={clearTasks}
                className="bg-blue-200 text-black border border-gray-300 rounded px-4 py-2 hover:bg-gray-300 cursor-pointer"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
