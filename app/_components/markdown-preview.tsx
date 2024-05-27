import { md } from "@/constants/md";
import Markdown from "react-markdown";

export default function MarkdownPreview() {
  return (
    <div>
      <div>{md}</div>
      <Markdown>{md}</Markdown>
    </div>
  );
}
