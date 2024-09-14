import Link from "next/link";
import { CATEGORIES } from "@/utils/constants";

const AllTypes = () => {
  return (
    <>
      <h1>All Types</h1>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category.value}>
            <Link href={`/type/${category.value}`}>{category.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllTypes;
