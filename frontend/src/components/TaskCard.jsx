import API from '../api';
import { toast } from 'react-toastify';

export default function TaskCard({ task, onUpdate }) {
  const handleDelete = async () => {
    if (!window.confirm('Delete this task?')) return;
    try {
      await API.delete(`/tasks/${task._id}`);
      toast.success('Task deleted');
      onUpdate();
    } catch (err) {
      toast.error('Delete failed');
    }
  };

  const toggleComplete = async () => {
    try {
      await API.put(`/tasks/${task._id}`, { completed: !task.completed });
      onUpdate();
    } catch (err) {
      toast.error('Update failed');
    }
  };

  return (
    <div className={`p-6 rounded-lg shadow-md border ${task.completed ? 'bg-gray-100' : 'bg-white'}`}>
      <h3 className={`text-xl font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
        {task.title}
      </h3>
      {task.description && <p className="text-gray-600 mt-2">{task.description}</p>}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={toggleComplete}
          className={`px-4 py-2 rounded ${task.completed ? 'bg-green-600' : 'bg-yellow-600'} text-white hover:opacity-90`}
        >
          {task.completed ? 'Completed' : 'Mark Complete'}
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded hover:opacity-90"
        >
          Delete
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-3">By: {task.user?.name || 'You'}</p>
    </div>
  );
}