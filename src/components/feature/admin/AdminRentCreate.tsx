import FormField from "../../ui/FormField";

export default function AdminRentCreate() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitted");
  };

  return (
    <>
      <h1 className="font-bold text-2xl mb-5">Rent {">"} Create</h1>
      <div className="p-3 px-5 bg-white rounded-md shadow-sm space-y-4">
        <h1 className="font-bold">Form</h1>
        <form onSubmit={handleSubmit} className="space-y-2">
          <FormField label="Vehicle" required />
          <FormField label="Employee" required />
          <FormField label="Supervisor" required />
          <FormField label="Purpose" required />
          <FormField label="Start Date" required />
          <FormField label="End Date" required />
          <FormField label="Notes" />
          <button
            className="p-1 px-4 bg-blue-700 hover:bg-blue-800 text-white"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}
