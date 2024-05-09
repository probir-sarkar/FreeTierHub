import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { AdminInput } from "../common/AdminInput";
import { Plus, X } from "lucide-react";
import { ErrorMessage } from "@hookform/error-message";

interface SoftwareFeatureProps {
  name: string;
  label: string;
}

const SoftwareFeatures: React.FC<SoftwareFeatureProps> = ({ name, label }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name
  });
  return (
    <div>
      <div className="grid gap-1.5">
        <label>{label}</label>
        <ErrorMessage errors={errors} name={name} render={({ message }) => <p className="text-destructive text-sm">{message}</p>} />
        <div className="grid space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="flex  border p-4 pt-2 pr-2 ">
              <AdminInput className="w-full" name={`${name}[${index}].value`} label={`${label} ${index + 1}`} />
              <X className="cursor-pointer" onClick={() => remove(index)} />
            </div>
          ))}
        </div>
        <button type="button" className="w-full p-3 flex justify-center items-center gap-2 mt-4 border border-dashed" onClick={() => append({ value: "" })}>
          <Plus />
          <p className="font-medium">Add Feature</p>
        </button>
      </div>
    </div>
  );
};

export default SoftwareFeatures;
