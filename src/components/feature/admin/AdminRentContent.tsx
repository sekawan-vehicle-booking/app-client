import useFetchRents from "../../../hooks/useFetchRents";
import Card from "../../ui/Card";

export default function AdminRentContent() {
  const rents = useFetchRents();

  return (
    <>
      <div className="flex justify-between mb-5">
        <h1 className="font-bold text-2xl">Rents</h1>
        <a
          className="p-1 px-4 bg-blue-700 hover:bg-blue-800 text-white"
          href="/admin/rents/create"
        >
          + Add Rent
        </a>
      </div>
      <Card>
        {rents &&
          rents.map((rent) => (
            <div className="grid grid-cols-4 gap-2" key={rent.id}>
              <h1>{rent.id}</h1>
              <h1>{rent.startUsageDate}</h1>
              <h1>{rent.endUsageDate}</h1>
              <h1>{rent.status}</h1>
            </div>
          ))}
      </Card>
    </>
  );
}
