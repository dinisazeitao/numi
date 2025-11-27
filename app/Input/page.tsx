import React, { useState } from "react";

export default function InputPage() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("React");
  const [tasks, setTasks] = useState<Array<{ id: number; text: string }>>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const categories = ["React", "TypeScript", "Node", "CSS", "DevOps"]; 

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text }]);
    setText("");
  };

  const startEdit = (id: number, current: string) => {
    setEditingId(id);
    setEditingText(current);
  };

  const saveEdit = () => {
    setTasks(tasks.map(t => (t.id === editingId ? { ...t, text: editingText } : t)));
    setEditingId(null);
    setEditingText("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Página de Input</h1>

      {/* Input de texto */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite algo..."
        className="w-full p-2 border rounded-xl shadow"
      />

      {/* Texto aparecendo abaixo */}
      <p className="text-lg mt-2">Você digitou: <strong>{text}</strong></p>

      {/* Seletor de categoria */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded-xl shadow"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <p>Categoria selecionada: <strong>{category}</strong></p>

      {/* Botão adicionar tarefa */}
      <button
        onClick={addTask}
        className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow"
      >
        Adicionar Tarefa
      </button>

      {/* Lista de tarefas */}
      <div className="space-y-2 mt-4">
        {tasks.map(task => (
          <div key={task.id} className="p-3 border rounded-xl shadow flex justify-between items-center">
            {editingId === task.id ? (
              <input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="p-1 border rounded-xl"
              />
            ) : (
              <span>{task.text}</span>
            )}

            <div className="space-x-2">
              {editingId === task.id ? (
                <button onClick={saveEdit} className="px-3 py-1 bg-green-500 text-white rounded-xl">Guardar</button>
              ) : (
                <button onClick={() => startEdit(task.id, task.text)} className="px-3 py-1 bg-yellow-500 text-white rounded-xl">Editar</button>
              )}

              <button onClick={() => deleteTask(task.id)} className="px-3 py-1 bg-red-500 text-white rounded-xl">Apagar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
