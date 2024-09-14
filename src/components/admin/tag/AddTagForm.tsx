"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { addTag, updateTag } from "./tag.actions";
import { Button } from "@/components/ui/button";
import { ErrorMessage } from "@hookform/error-message";
import { TagFormData, resolver } from "./tag.schema";
import { toast } from "sonner";
import { useTagStore } from "./tag.state";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const AddTagForm: React.FC = () => {
  const { editingTag, sheetOpen, setSheetOpen, clearEditingTag } = useTagStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TagFormData>({
    resolver
  });

  const onSubmit: SubmitHandler<TagFormData> = async (data) => {
    const success = editingTag ? await updateTag(editingTag._id, data) : await addTag(data);
    if (success) {
      reset();
      toast("Tag added or updated successfully");
      setSheetOpen(false);
    } else {
      toast("Failed to add or update tag");
    }
  };
  const onError = (errors: Object) => {
    toast("Form has errors, please check and try again");
  };
  useEffect(() => {
    if (editingTag) {
      console.log("resetting form with editing tag");
      reset(editingTag);
    } else {
      console.log("resetting form with empty values");
      reset({ name: "", slug: "", description: "" });
    }
  }, [editingTag]);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add or Update Tag</SheetTitle>
          <SheetDescription>Add or update a tag to the list</SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">
          <div className="grid gap-1.5">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" {...register("name")} />
            <ErrorMessage errors={errors} name="name" render={({ message }) => <p className="text-destructive text-sm">{message}</p>} />
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="slug">Slug:</label>
            <input type="text" id="slug" {...register("slug")} />
            <ErrorMessage errors={errors} name="slug" render={({ message }) => <p className="text-destructive text-sm">{message}</p>} />
          </div>

          <div className="grid gap-1.5">
            <label htmlFor="description">Description:</label>
            <textarea id="description" {...register("description")} />
            <ErrorMessage errors={errors} name="description" render={({ message }) => <p className="text-destructive text-sm">{message}</p>} />
          </div>
          {/*  */}
          <Button type="submit" className="w-full " size="lg">
            {editingTag ? "Update" : "Add"} Tag
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default AddTagForm;
