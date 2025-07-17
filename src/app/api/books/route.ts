import { NextResponse } from 'next/server';

let books = [
  { id: 1, title: "Laskar Pelangi", price: 100000 },
  { id: 2, title: "Filosofi Teras", price: 85000 },
];

// GET = Ambil semua data buku
export async function GET() {
  return NextResponse.json(books);
}

// POST = Tambah data buku baru
export async function POST(request: Request) {
  const { title, price } = await request.json();
  const newBook = {
    id: Date.now(),
    title,
    price,
  };
  books.push(newBook);
  return NextResponse.json(newBook);
}

// PUT = Update data buku
export async function PUT(request: Request) {
  const { id, title, price } = await request.json();
  books = books.map(book => book.id === id ? { ...book, title, price } : book);
  return NextResponse.json({ message: "Buku berhasil diupdate" });
}

// DELETE = Hapus buku
export async function DELETE(request: Request) {
  const { id } = await request.json();
  books = books.filter(book => book.id !== id);
  return NextResponse.json({ message: "Buku berhasil dihapus" });
}
