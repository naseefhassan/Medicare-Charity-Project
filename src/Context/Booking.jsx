import { createContext, useContext, useState } from "react";

// Create a context for excluded dates
const ExcludedDatesContext = createContext();

// Custom hook to consume the excluded dates context
export const useExcludedDates = () => useContext(ExcludedDatesContext);

// Provider component to provide the excluded dates context
export const ExcludedDatesProvider = ({ children }) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  // Function to generate an array of dates between fromDate and toDate
  const generateDateRange = (startDate, endDate) => {
    const dates = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
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

