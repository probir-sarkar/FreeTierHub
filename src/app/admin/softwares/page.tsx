import AllSoftware from "@/components/admin/software/all-software";
import SoftwareForm from "../../../components/admin/software/SoftwareForm";
import { allTags, allSoftwares } from "../../../components/admin/software/software.actions";

const AddSoftwarePage = async () => {
  const { tags, categories } = await allTags();
  const softwares = await allSoftwares();

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <SoftwareForm {...{ tags, categories }} />
        <AllSoftware {...{ softwares }} />
      </div>
    </>
  );
};

export default AddSoftwarePage;
