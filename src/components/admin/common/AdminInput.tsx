import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name: string;
  label: string;
  textarea?: boolean;
  className?: string;
}

export const AdminInput: React.FC<InputProps> = ({ name, label, textarea, className, ...rest }) => {
  const { control } = useFormContext();

  const InputComponent = textarea ? "textarea" : "input";

  return (
    <div className={cn("grid gap-1.5", className)}>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <InputComponent {...field} {...rest} />
            {error?.message && <p className="text-destructive text-sm">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};
