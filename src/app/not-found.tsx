import Link from "next/link";
import { Compass, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center text-sk-text">
      <div className="mb-6 p-4 bg-sk-bg rounded-full border border-sk-text/5 shadow-sm animate-[spin_8s_linear_infinite]">
        <Compass className="w-12 h-12 text-sk-tertiary" />
      </div>

      <span className="text-lg font-bold tracking-widest text-sk-text uppercase mb-2">
        404 Not Found
      </span>
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 text-sk-text">
        ページが見つかりませんでした
      </h1>

      <Button
        asChild
        className="rounded-full font-semibold shadow-sm group bg-sk-secondary text-sk-text transition-all hover:bg-sk-secondary hover:brightness-95 border-sk-secondary"
      >
        <Link href="/" className="inline-flex items-center gap-2">
          <MoveLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          ソロ活一覧へ戻る
        </Link>
      </Button>
    </div>
  );
}
