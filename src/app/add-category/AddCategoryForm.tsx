import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addCategory } from "./actions";

interface CategoryFormData {
  name: string;
  description: string;
}

const AddCategoryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>();

  const onSubmit: SubmitHandler<CategoryFormData> = async (data) => {
    // console.log(data);

    await addCategory(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <Input type="text" id="name" {...register("name")} />
        {errors.name && <span>Name is required</span>}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <Textarea id="description" {...register("description", { required: true })} />
        {errors.description && <span>Description is required</span>}
      </div>
      <button type="submit">Add Category</button>
    </form>
  );
};

export default AddCategoryForm;
