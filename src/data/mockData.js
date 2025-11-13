// This file contains sample data for development
//We'll use this until we connect to real backend

export const sampleEmployees = [
  {
    id: 1,
    name: "Jeff Ouda",
    account: "0746786183",
    monthlySalary: 35000,
  },
  {
    id: 2,
    name: "Alice Johnson",
    account: "1234567890",
    monthlySalary: 30000,
  },
  {
    id: 3,
    name: "Bob Smith",
    account: "0987654321",
    monthlySalary: 25000,
  },
];

export const sampleRequest = [
  {
    id: 1,
    employeeId: 1,
    employeeName: "Jeff Ouda",
    amount: 35000,
    month: "2025-01",
    status: "pending",
    createAt: "2025-01-13T16:25:00Z",
  },
  {
    id: 2,
    employeeId: 2,
    employeeName: "Alice Johnson",
    amount: 30000,
    month: "2025-01",
    status: "pending",
    createedAt: "2025-01-15T10:30:00Z",
  },
  {
    id: 3,
    employeeId: 3,
    employeeName: "Bob Smith",
    amount: 25000,
    month: "2025-01",
    status: "pending",
    createedAt: "2025-01-14T14:20:00Z",
  },
];
