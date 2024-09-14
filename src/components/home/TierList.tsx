import { FREE_MODELS } from "@/utils/data";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
const TierList = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="free-tier">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Types of Free Tiers</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore the different types of free software tiers available on FreeTierHub.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
            {FREE_MODELS.map((model) => (
              <Link href={`/tier/${model.slug}`} key={model.slug} className="hover:scale-105 transition-transform ease-in-out ">
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                    <model.icon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                    <h3 className="text-lg font-semibold">{model.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{model.subtitle}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TierList;
