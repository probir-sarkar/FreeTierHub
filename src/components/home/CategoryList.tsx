import dbConnect from "@/lib/dbConnect";
import { Card, CardContent } from "../ui/card";
import { Category, CategoryDocument } from "@/models/Category";
import { BsLayersHalf } from "react-icons/bs";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CategoryList = async ({ limit, className }: { limit?: number; className?: string }) => {
  await dbConnect();
  // Conditionally apply the limit if it's provided
  const categoriesQuery = Category.find({});
  if (limit) {
    categoriesQuery.limit(limit);
  }
  const categories = await categoriesQuery;
  const parsedCategories: CategoryDocument[] = JSON.parse(JSON.stringify(categories));
  return (
    <section className={cn("w-full py-12 ", className)} id="software-categories">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Software Categories</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover a wide range of software categories with free tiers on FreeTierHub.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
          {parsedCategories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category._id} className="hover:scale-105 transition-transform ease-in-out ">
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                  <BsLayersHalf className="h-8 w-8 text-gray-800 dark:text-gray-400" />
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
