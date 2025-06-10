import { useState } from 'react';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submitNews = async () => {
    await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, author: 'Admin' }),
    });
    alert("News posted!");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Add News</h1>
      <input placeholder="Title" className="border p-2 w-full mb-2" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Content" className="border p-2 w-full mb-2" value={content} onChange={(e) => setContent(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={submitNews}>Submit</button>
    </div>
  );
}
