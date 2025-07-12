interface ReviewProps {
  params: {
    id: string;
  };
}

export default function ReviewPage({ params }: ReviewProps) {
  const { id } = params;

  // Dummy data buku
  const books: Record<string, { title: string; review: string }> = {
    "1": {
      title: "Laskar Pelangi",
      review: "Kisah inspiratif tentang pendidikan dan mimpi anak-anak Belitung.",
    },
    "2": {
      title: "Filosofi Teras",
      review: "Panduan hidup stoik untuk zaman modern.",
    },
  };

  const book = books[id];

  if (!book) {
    return <p>Buku tidak ditemukan.</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.review}</p>
    </div>
  );
}
