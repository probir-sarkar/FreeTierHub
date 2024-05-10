"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller, FormProvider } from "react-hook-form";
import type { TagDocument } from "@/models/Tag";
import { CategoryDocument } from "@/models/Category";
import Select from "react-select";
import { addSoftware, updateSoftware } from "./software.actions";
import { resolver, SoftwareFormInput } from "./software.schema";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useSoftwareStore } from "./software.state";
import { toast } from "sonner";
import { AdminInput } from "../common/AdminInput";
import SoftwareFeatures from "./Feaures";
import { FREE_MODELS } from "@/utils/data";

interface Props {
  tags: TagDocument[];
  categories: CategoryDocument[];
}
const SoftwareForm: React.FC<Props> = ({ tags, categories }) => {
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

  const selectOptions = tags.map((tag) => ({
    value: tag._id.toString(),
    label: tag.name
  }));
  useEffect(() => {
    if (editingSoftware) {
      const newTags = editingSoftware.tags.map((tag) => ({
        value: tag.toString(),
        label: tags.find((c) => c._id === tag.toString())?.name || ""
      }));

      const features = editingSoftware.features.map((feature) => ({ value: feature }));
      const category = editingSoftware.category.toString();

      reset({
        ...editingSoftware,
        category: category,
        tags: newTags,
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
            <SheetTitle>Add or Update Tag</SheetTitle>
            <SheetDescription>Add or update a tag to the list</SheetDescription>
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
                <label>Tags:</label>
                <Controller
                  name="tags"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Select isMulti {...field} options={selectOptions} className="rounded-none" classNamePrefix="select" />}
                />
                <ErrorMessage errors={errors} name="tags" render={({ message }) => <p className="text-destructive text-sm">{message}</p>} />
              </div>
              <SoftwareFeatures name="features" label="Features" />
              <div className="grid gap-1.5">
                <label>Category:</label>
                <select className="capitalize" {...register("category")}>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
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
