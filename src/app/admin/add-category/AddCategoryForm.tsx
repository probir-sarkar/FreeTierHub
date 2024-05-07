import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { addCategory } from "./actions";
import { Button } from "@/components/ui/button";
import { ErrorMessage } from "@hookform/error-message";
import { CategoryFormData, resolver } from "./add-category.schema";

const AddCategoryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver,
  });

  const onSubmit: SubmitHandler<CategoryFormData> = async (data) => {
    await addCategory(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-1.5">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register("name")} />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p className="text-destructive text-sm">{message}</p>}
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="slug">Slug:</label>
        <input type="text" id="slug" {...register("slug")} />
        <ErrorMessage
          errors={errors}
          name="slug"
          render={({ message }) => <p className="text-destructive text-sm">{message}</p>}
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="description">Description:</label>
        <textarea id="description" {...register("description")} />
        <ErrorMessage
          errors={errors}
          name="description"
          render={({ message }) => <p className="text-destructive text-sm">{message}</p>}
        />
      </div>
      {/*  */}
      <Button type="submit" className="w-full " size="lg">
        Add Category
      </Button>
    </form>
  );
};

export default AddCategoryForm;
