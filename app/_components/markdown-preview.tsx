import { md } from "@/constants/md";
import "highlight.js/styles/github.css";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export default function MarkdownPreview() {
  return (
    <div>
      <div>{md}</div>
			<Markdown className="prose" rehypePlugins={[rehypeHighlight]}>
        {md}
      </Markdown>
    </div>
  );
}
