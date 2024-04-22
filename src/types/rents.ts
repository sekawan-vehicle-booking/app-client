export interface IRent {
  id?: string;
  idVehicle: string;
  idEmployee: string;
  idAdmin: string;
  idSupervisor: string;
  purpose: string;
  status: "pending" | "accepted" | "rejected" | "finished";
  startUsageDate: string;
  endUsageDate: string;
  oilConsumption?: number;
  notes?: string;

  created_at?: string;
  updated_at?: string;
}
