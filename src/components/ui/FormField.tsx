import TextField from "./TextField";

interface IFormFieldProps {
  label: string;
  required?: boolean;
}

export default function FormField({ label, required }: IFormFieldProps) {
  return (
    <div className="flex gap-2 items-center">
      <p className="w-1/6">{label}</p>
      <TextField required={required as boolean} />
    </div>
  );
}
