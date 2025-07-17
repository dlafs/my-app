'use client';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav style={{ padding: '1rem', background: '#f5f5f5' }}>
      <Link href="/">Beranda</Link> |{" "}
      <Link href="/about">Tentang</Link> |{" "}
      <Link href="/review/1">Review Buku 1</Link> |{" "}
      <Link href="/review/2">Review Buku 2</Link>
    </nav>
  );
}
