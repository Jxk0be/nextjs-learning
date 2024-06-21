import Link from "next/link"

export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto py-4 flex gap-x-4 border-b-2">
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/tours">Tours</Link>
      <Link href="/info">Info</Link>
      <Link href="/about">About</Link>
      <Link href="/info/contact">Contact</Link>
    </div>
  )
}
