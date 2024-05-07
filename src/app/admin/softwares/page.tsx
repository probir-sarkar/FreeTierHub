import AllSoftware from "@/components/admin/software/all-software";
import SoftwareForm from "../../../components/admin/software/SoftwareForm";
import { allCategories, allSoftwares } from "../../../components/admin/software/software.actions";

const AddSoftwarePage = async () => {
  const categories = await allCategories();
  const softwares = await allSoftwares();

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <SoftwareForm {...{ categories }} />
        <AllSoftware {...{ softwares }} />
      </div>
    </>
  );
};

export default AddSoftwarePage;
