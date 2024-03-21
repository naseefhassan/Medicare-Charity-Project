import { createContext, useContext, useState } from "react";

// Create a context for excluded dates
const ExcludedDatesContext = createContext();

// Custom hook to consume the excluded dates context
export const useExcludedDates = () => useContext(ExcludedDatesContext);

// Provider component to provide the excluded dates context
export const ExcludedDatesProvider = ({ children }) => {
  // Initialize fromDate with the current date and toDate with the next day
  const initialFromDate = new Date();
  const initialToDate = new Date();
  initialToDate.setDate(initialToDate);

  const [fromDate, setFromDate] = useState(initialFromDate);
  const [toDate, setToDate] = useState(initialToDate);

  // Function to generate an array of dates between fromDate and toDate
  const generateDateRange = (startDate, endDate) => {
    const dates = [];
    const currentDate = new Date(startDate);
    const lastDate = new Date(endDate);
    while (currentDate <= lastDate) {
      dates.push(new Date(currentDate)); // Push a new Date object
      currentDate.setDate(currentDate);
    }
    return dates;
  };

  const excludedDates = generateDateRange(fromDate, toDate);

  return (
    <ExcludedDatesContext.Provider
      value={{ fromDate, toDate, excludedDates, setFromDate, setToDate }}
    >
      {children}
    </ExcludedDatesContext.Provider>
  );
};
