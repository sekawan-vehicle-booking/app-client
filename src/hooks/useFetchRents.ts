import { useEffect, useState } from "react";
import { IRent } from "../types/rents";

export default function useFetchRents() {
  const [rents, setRents] = useState<IRent[] | null>();

  useEffect(() => {
    const fetchRents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/rents", {
          method: "GET",
        });

        const data = await response.json();
        setRents(await data.data);
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    fetchRents();
  }, []);

  return rents;
}
