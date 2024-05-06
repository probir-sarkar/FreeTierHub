"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { CategoryDocument } from "@/models/Soft";
import Select from "react-select";
import { addSoftware } from "./add-software.actions";

export interface SoftwareFormInput {
  name: string;
  description: string;
  categories: { value: string; label: string }[];
}

interface Props {
  categories: CategoryDocument[];
}
const SoftwareForm: React.FC<Props> = ({ categories }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SoftwareFormInput>();

  const onSubmit: SubmitHandler<SoftwareFormInput> = async (data) => {
    const success = await addSoftware(data);
    if (success) {
      alert("Software added successfully");
    } else {
      alert("Failed to add software");
    }
  };

  const selectOptions = categories.map((category) => ({
    value: category._id.toString(),
    label: category.name,
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <Input {...register("name", { required: true })} />
        {errors.name && <span>Name is required</span>}
      </div>
      <div>
        <label>Description:</label>
        <Textarea {...register("description", { required: true })} />
        {errors.description && <span>Description is required</span>}
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
              className="basic-multi-select"
              classNamePrefix="select"
            />
          )}
        />
        {errors.categories && <span>At least one category is required</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SoftwareForm;
