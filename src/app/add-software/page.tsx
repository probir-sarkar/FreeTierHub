import SoftwareForm from "./SoftwareForm";
import { allCategories } from "./add-software.actions";

const AddSoftwarePage = async () => {
  const categories = await allCategories();

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <SoftwareForm {...{ categories }} />
      </div>
    </>
  );
};

export default AddSoftwarePage;
