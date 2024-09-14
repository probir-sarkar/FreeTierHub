import Link from "next/link";
import { allSoftwareByPrice } from "./price.action";
import SoftwareCard from "@/components/software/SoftwareCard";
import { FREE_MODELS } from "@/utils/data";
import NotFound from "@/components/common/NotFound";

const PricePage = async ({ params }: { params: { price: string } }) => {
  const { price } = params;
  const allSoftwares = await allSoftwareByPrice(price);
  const model = FREE_MODELS.find((model) => model.slug === price);
  if (!model) {
    return <NotFound />;
  }
  return (
    <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <h1 className="text-3xl font-bold text-center mb-8">{model.name}</h1>
      <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {allSoftwares.map((software) => (
          <SoftwareCard key={software._id} software={software} />
        ))}
      </div>
    </main>
  );
};

export default PricePage;
