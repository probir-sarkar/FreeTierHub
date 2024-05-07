import { Category, CategoryDocument } from "@/models/Soft";
import dbConnect from "@/lib/dbConnect";
import CategoryCard from "./categoryCard";
import AddCategoryButton from "./AddCategoryButton";

const AllCategories = async () => {
  await dbConnect();
  const categories = await Category.find();
  const parsedCategories: CategoryDocument[] = JSON.parse(JSON.stringify(categories));
  return (
    <div className="mx-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Categories</h1>
        <AddCategoryButton />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {parsedCategories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
