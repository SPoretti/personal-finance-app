import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import walletMovementsData from "../data/walletmovements.json";

// Define TypeScript interfaces
interface WalletMovement {
  type: string;
  source: string;
  category: string;
  amount: number;
  description: string;
  activityType: string;
  date: string;
  balance: number;
}

interface FormData {
  type: string;
  source: string;
  category: string;
  amount: string; // Initially as string to handle input value
  description: string;
  activityType: string;
  date: string;
  balance: string; // Initially as string to handle input value
}

const WalletMovements: React.FC = () => {
  const [walletMovements, setWalletMovements] = useState<WalletMovement[]>([]);
  const [formData, setFormData] = useState<FormData>({
    type: "",
    source: "",
    category: "",
    amount: "",
    description: "",
    activityType: "",
    date: "",
    balance: "",
  });

  useEffect(() => {
    // Ensure walletMovementsData matches WalletMovement interface
    const validData: WalletMovement[] = walletMovementsData.map((movement) => ({
      type: movement.type || "",
      source: movement.source || "",
      category: movement.category || "",
      amount: movement.amount || 0,
      description: movement.description || "",
      activityType: movement.activityType || "",
      date: movement.date || "",
      balance: movement.balance || 0,
    }));
    setWalletMovements(validData);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.toString(),
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate date format
    const isValidDate = (dateStr: string) => {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      return dateRegex.test(dateStr);
    };

    if (!isValidDate(formData.date)) {
      alert("Invalid date format. Please use YYYY-MM-DD.");
      return;
    }

    // Validate amount
    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      alert("Amount must be a positive number.");
      return;
    }

    // Calculate new balance
    const previousBalance =
      walletMovements.length > 0
        ? walletMovements[walletMovements.length - 1].balance
        : 0;
    const newBalance =
      formData.type === "income"
        ? previousBalance + amount
        : previousBalance - amount;

    // Create new entry
    const newEntry: WalletMovement = {
      ...formData,
      amount: amount,
      balance: newBalance,
    };

    // Add new entry to walletMovements
    setWalletMovements([...walletMovements, newEntry]);

    // Optionally, you can reset the form here
    setFormData({
      type: "",
      source: "",
      category: "",
      amount: "",
      description: "",
      activityType: "",
      date: "",
      balance: "",
    });
  };

  return (
    <div className="p-6 bg-cyan-400 dark:bg-slate-800 rounded-xl flex flex-col">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        New Wallet Movement
      </h1>
      <div className="w-full flex flex-row">
        <div className="w-1/2 h-full flex flex-col items-end">
          <p className="label">Type:</p>
          <p className="label">Source:</p>
          <p className="label">Category:</p>
          <p className="label">Amount:</p>
          <p className="label">Description:</p>
          <p className="label">Activity Type:</p>
          <p className="label">Date:</p>
          <p className="label">Balance:</p>
        </div>
        <div className="w-1/2 h-full flex flex-col items-start">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Select Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="text"
              name="activityType"
              value={formData.activityType}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="number"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
              required
              className="form-input"
            />
            <button type="submit" className="buttonBasics w-full mx-2">
              Add Entry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WalletMovements;
