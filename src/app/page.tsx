import ReactSwagger from "@/components/swagger";
import { getApiDocs } from "@/lib/swagger";
// Home page
export default function Home() {
  return (
    <main>
      <ReactSwagger spec={getApiDocs()} />
    </main>
  );
}
