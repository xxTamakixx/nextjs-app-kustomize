import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}
