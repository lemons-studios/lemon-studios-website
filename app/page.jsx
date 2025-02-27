import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="grid justify-items-center">
          <p className="text-9xl mb-5">Coming Soon....</p>
          <p className="text-2xl">Website under reconstruction</p>
        </div>
      </main>
    </div>
  );
}
