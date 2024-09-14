import AddCategoryForm from "@/components/admin/category/AddCategoryForm";
import AllCategories from "@/components/admin/category/all-categories";

const AddNewSoft = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto">
      <AllCategories />
      <AddCategoryForm />
    </div>
  );
};

export default AddNewSoft;
