import { Tag, TagDocument } from "@/models/Tag";
import dbConnect from "@/lib/dbConnect";
import TagCard from "./tagCard";
import AddTagButton from "./AddTagButton";

const AllTags = async () => {
  await dbConnect();
  const categories = await Tag.find();
  const parsedTags: TagDocument[] = JSON.parse(JSON.stringify(categories));
  return (
    <div className="mx-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Tags</h1>
        <AddTagButton />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {parsedTags.map((tag) => (
          <TagCard key={tag._id} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default AllTags;
