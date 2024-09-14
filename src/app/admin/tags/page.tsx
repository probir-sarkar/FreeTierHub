import AddTagForm from "@/components/admin/tag/AddTagForm";
import AllTags from "@/components/admin/tag/all-tags";

const AddNewSoft = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto">
      <AllTags />
      <AddTagForm />
    </div>
  );
};

export default AddNewSoft;
