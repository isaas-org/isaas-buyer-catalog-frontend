import { Suspense } from "react";
import { BackendStatus } from "@/components/BackendStatus";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">iSaaS Catalog</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Browse SaaS products from verified vendors.
      </p>
      <Suspense fallback={<p className="text-sm text-zinc-500">Checking backend...</p>}>
        <BackendStatus />
      </Suspense>
    </main>
  );
}
