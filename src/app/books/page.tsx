'use client';
import { useEffect, useState } from 'react';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  const fetchBooks = async () => {
    const res = await fetch('/api/books');
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddOrUpdateBook = async () => {
    if (editId) {
      // UPDATE
      await fetch('/api/books', {
        method: 'PUT',
        body: JSON.stringify({ id: editId, title, price }),
      });
      setEditId(null);
    } else {
      // ADD
      await fetch('/api/books', {
        method: 'POST',
        body: JSON.stringify({ title, price }),
      });
    }
    setTitle('');
    setPrice('');
    fetchBooks();
  };

  const handleDeleteBook = async (id: number) => {
    await fetch('/api/books', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    fetchBooks();
  };

  const handleEditBook = (book: any) => {
    setEditId(book.id);
    setTitle(book.title);
    setPrice(book.price);
  };

  return (
    <div>
      <h1>Daftar Buku</h1>
      <ul>
        {books.map((book: any) => (
          <li key={book.id}>
            {book.title} - Rp {book.price}{' '}
            <button onClick={() => handleEditBook(book)}>Edit</button>{' '}
            <button onClick={() => handleDeleteBook(book.id)}>Hapus</button>
          </li>
        ))}
      </ul>

      <h2>{editId ? 'Edit Buku' : 'Tambah Buku Baru'}</h2>
      <input
        type="text"
        placeholder="Judul buku"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Harga"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddOrUpdateBook}>
        {editId ? 'Update Buku' : 'Tambah Buku'}
      </button>
    </div>
  );
}