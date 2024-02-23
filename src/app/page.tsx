import ReactSwagger from "@/components/swagger";
import { getApiDocs } from "@/lib/swagger";
export default function Home() {
  return (
    <main>
      <ReactSwagger spec={getApiDocs()} />
    </main>
  );
}
