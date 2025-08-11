import Bar from "@/components/Bar";
import CV from "@/components/CV";
import Foot from "@/components/Foot";

export default function Home() {
  return (
    <div className="bg-slate-200 h-full">
      <Bar />
      <CV />
      <Foot />
    </div>
  );
}
