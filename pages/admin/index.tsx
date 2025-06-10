'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const submitNews = async () => {
    const res = await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage('News posted successfully!');
      setTitle('');
      setContent('');
    } else {
      setMessage('Failed to post news');
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-xl font-bold mb-4">Admin: Post News</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 mb-4"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="w-full border p-2 mb-4"
        rows={5}
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button
        onClick={submitNews}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
    </div>
  );
}
