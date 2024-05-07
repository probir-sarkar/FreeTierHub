"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { addCategory, updateCategory } from "./category.actions";
import { Button } from "@/components/ui/button";
import { ErrorMessage } from "@hookform/error-message";
import { CategoryFormData, resolver } from "./category.schema";
import { toast } from "sonner";
import { useCategoryStore } from "./category.state";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const AddCategoryForm: React.FC = () => {
  const { editingCategory, sheetOpen, setSheetOpen, clearEditingCategory } = useCategoryStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver,
  });

  const onSubmit: SubmitHandler<CategoryFormData> = async (data) => {
    const success = editingCategory ? await updateCategory(editingCategory._id, data) : await addCategory(data);
    if (success) {
      reset();
      toast("Category added or updated successfully");
      setSheetOpen(false);
    } else {
      toast("Failed to add or update category");
    }
  };
  const onError = (errors: Object) => {
    toast("Form has errors, please check and try again");
  };
  useEffect(() => {
    if (editingCategory) {
      console.log("resetting form with editing category");
      reset(editingCategory);
    } else {
      console.log("resetting form with empty values");
      reset({ name: "", slug: "", description: "" });
    }
  }, [editingCategory]);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add or Update Category</SheetTitle>
          <SheetDescription>Add or update a category to the list</SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
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
            {editingCategory ? "Update" : "Add"} Category
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default AddCategoryForm;
