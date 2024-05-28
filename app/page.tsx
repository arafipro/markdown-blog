import { md } from "@/constants/md";
import MarkdownPreview from "./_components/markdown-preview";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto">
      <MarkdownPreview content={md} />
    </main>
  );
}
