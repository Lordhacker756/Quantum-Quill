import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hellow world</h1>
      <Button>
        <span>FML!</span>
      </Button>
    </main>
  );
}
