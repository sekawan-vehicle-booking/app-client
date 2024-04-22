interface ITextFieldProps {
  required: boolean;
}

export default function TextField({ required }: ITextFieldProps) {
  return (
    <input
      className="border border-gray-300 p-1 px-3 text-sm focus:outline-none"
      type="text"
      required={required}
    />
  );
}
