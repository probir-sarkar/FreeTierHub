"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller, FormProvider } from "react-hook-form";
import type { CategoryDocument } from "@/models/Soft";
import Select from "react-select";
import { addSoftware, updateSoftware } from "./software.actions";
import { resolver, SoftwareFormInput } from "./software.schema";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@/components/ui/button";
import { CATEGORY_TYPES } from "@/utils/constants";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useSoftwareStore } from "./software.state";
import { toast } from "sonner";
import { AdminInput } from "../common/AdminInput";
import SoftwareFeatures from "./Feaures";
import { FREE_MODELS } from "@/utils/data";

interface Props {
  categories: CategoryDocument[];
}
const SoftwareForm: React.FC<Props> = ({ categories }) => {
  const { sheetOpen, setSheetOpen, editingSoftware } = useSoftwareStore();
  const methods = useForm<SoftwareFormInput>({
    resolver
  });
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = methods;

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
    label: category.name
  }));
  useEffect(() => {
    if (editingSoftware) {
      const newCategories = editingSoftware.categories.map((category) => ({
        value: category.toString(),
        label: categories.find((c) => c._id === category.toString())?.name || ""
      }));
      const features = editingSoftware.features.map((feature) => ({ value: feature }));

      reset({
        ...editingSoftware,
        categories: newCategories,
        features
      });
    } else {
      console.log("resetting form with empty values");
      reset({ name: "" });
    }
  }, [editingSoftware]);
  function onError(errors: any) {
    console.log(errors);
  }

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent side="bottom" className="max-h-screen overflow-scroll ">
        <div className="max-w-4xl mx-auto">
          <SheetHeader>
            <SheetTitle>Add or Update Category</SheetTitle>
            <SheetDescription>Add or update a category to the list</SheetDescription>
          </SheetHeader>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4 my-10">
              <AdminInput name="name" label="Name" />
              <AdminInput name="subtitle" label="Subtitle" />
              <AdminInput name="slug" label="Slug" />
              <AdminInput name="github" label="Github" />
              <AdminInput name="website" label="Website" />
              <AdminInput name="description" label="Description" textarea />
              <div>
                <label>Categories:</label>
                <Controller
                  name="categories"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Select isMulti {...field} options={selectOptions} className="rounded-none" classNamePrefix="select" />}
                />
                <ErrorMessage errors={errors} name="categories" render={({ message }) => <p className="text-destructive text-sm">{message}</p>} />
              </div>
              <SoftwareFeatures name="features" label="Features" />
              <div className="grid gap-1.5">
                <label>Type:</label>
                <select className="capitalize" {...register("type")}>
                  {CATEGORY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <ErrorMessage errors={errors} name="type" render={({ message }) => <p className="text-destructive text-sm">{message}</p>} />
              </div>
              <div className="grid gap-1.5">
                <label>Pay Model:</label>
                <select className="capitalize" {...register("payModel")}>
                  {FREE_MODELS.map((model) => (
                    <option key={model.slug} value={model.slug}>
                      {model.name}
                    </option>
                  ))}
                </select>
                <ErrorMessage errors={errors} name="payModel" render={({ message }) => <p className="text-destructive text-sm">{message}</p>} />
              </div>

              <Button size="lg" className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </FormProvider>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SoftwareForm;
