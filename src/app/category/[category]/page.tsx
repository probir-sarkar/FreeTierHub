import { allSoftwaresByCategory } from "@/app/category/category.action";
import Link from "next/link";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const { category } = params;
  const allSoftwares = await allSoftwaresByCategory(category);
  return (
    <div>
      <h1>{category}</h1>
      <ul>
        {allSoftwares.map((software) => (
          <li key={software._id}>
            <Link href={`/${software.slug}`}>{software.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
