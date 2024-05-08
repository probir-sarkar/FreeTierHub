"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import type { CategoryDocument } from "@/models/Soft";
import Select from "react-select";
import { addSoftware, updateSoftware } from "./software.actions";
import { resolver, SoftwareFormInput } from "./software.schema";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@/components/ui/button";
import { CATEGORY_TYPES } from "@/utils/constants";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useSoftwareStore } from "./software.state";
import { toast } from "sonner";

interface Props {
  categories: CategoryDocument[];
}
const SoftwareForm: React.FC<Props> = ({ categories }) => {
  const { sheetOpen, setSheetOpen, editingSoftware } = useSoftwareStore();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SoftwareFormInput>({
    resolver,
  });

  const onSubmit: SubmitHandler<SoftwareFormInput> = async (data) => {
    const success = editingSoftware ? await updateSoftware(data, editingSoftware._id) : await addSoftware(data);
    if (success) {
      toast("Software added or updated successfully");
      setSheetOpen(false);
    } else {
      toast("Failed to add or update software");
    }
  };

  const selectOptions = categories.map((category) => ({
    value: category._id.toString(),
    label: category.name,
  }));
  useEffect(() => {
    if (editingSoftware) {
      const newCategories = editingSoftware.categories.map((category) => ({
        value: category.toString(),
        label: categories.find((c) => c._id === category.toString())?.name || "",
      }));

      console.log("resetting form with editing software");
      reset({
        ...editingSoftware,
        categories: newCategories,
      });
    } else {
      console.log("resetting form with empty values");
      reset({ name: "" });
    }
  }, [editingSoftware]);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent side="bottom" className="max-h-screen overflow-scroll ">
        <div className="max-w-4xl mx-auto">
          <SheetHeader>
            <SheetTitle>Add or Update Category</SheetTitle>
            <SheetDescription>Add or update a category to the list</SheetDescription>
          </SheetHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 my-10">
            <div className="grid gap-1.5">
              <label>Name:</label>
              <input {...register("name")} />

              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => <p className="text-destructive text-sm">{message}</p>}
              />
            </div>
            <div className="grid gap-1.5">
              <label>Slug:</label>
              <input {...register("slug")} />
              <ErrorMessage
                errors={errors}
                name="slug"
                render={({ message }) => <p className="text-destructive text-sm">{message}</p>}
              />
            </div>
            <div className="grid gap-1.5">
              <label>Github:</label>
              <input {...register("github")} />
              <ErrorMessage
                errors={errors}
                name="github"
                render={({ message }) => <p className="text-destructive text-sm">{message}</p>}
              />
            </div>
            <div className="grid gap-1.5">
              <label>Website:</label>
              <input {...register("website")} />
              <ErrorMessage
                errors={errors}
                name="website"
                render={({ message }) => <p className="text-destructive text-sm">{message}</p>}
              />
            </div>
            <div className="grid gap-1.5">
              <label>Description:</label>
              <textarea {...register("description")} />
              <ErrorMessage
                errors={errors}
                name="description"
                render={({ message }) => <p className="text-destructive text-sm">{message}</p>}
              />
            </div>
            <div className="grid gap-1.5">
              <label>Type:</label>
              <select className="capitalize" {...register("type")}>
                {CATEGORY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <ErrorMessage
                errors={errors}
                name="type"
                render={({ message }) => <p className="text-destructive text-sm">{message}</p>}
              />
            </div>
            <div>
              <label>Categories:</label>
              <Controller
                name="categories"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    isMulti
                    {...field}
                    options={selectOptions}
                    className="rounded-none"
                    classNamePrefix="select"
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name="categories"
                render={({ message }) => <p className="text-destructive text-sm">{message}</p>}
              />
            </div>
            <Button size="lg" className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SoftwareForm;
