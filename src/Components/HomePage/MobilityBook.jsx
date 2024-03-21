import React, { useEffect, useState } from "react";
import { useExcludedDates } from "../../Context/Booking";
import "react-datepicker/dist/react-datepicker.css";
import axiosInstance from "../../api/axios";
import { useRazorpay } from "../../Context/Payment";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MobilityBook() {
  const navigate = useNavigate();
  const { MobilityId } = useParams();
  console.log(MobilityId, "gv");
  const [details, setDetails] = useState("");
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const fetchData = async (MobilityId) => {
      try {
        const res = await axiosInstance.get(
          `/user/getMobilityBooking/${MobilityId}`
        );
        setDetails(res.data.MobilityAids);
        console.log(res.data.MobilityAids);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(MobilityId);
  }, [MobilityId]);

  const { fromDate, toDate, setFromDate, setToDate } = useExcludedDates();
  const [selectedDatesCount, setSelectedDatesCount] = useState(0);
  const { createPayment } = useRazorpay();

  useEffect(() => {
    if (fromDate && toDate) {
      const diffInTime = toDate.getTime() - fromDate.getTime();
      const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24) + 1);
      setSelectedDatesCount(diffInDays);
    }
  }, [fromDate, toDate]);
  console.log(selectedDatesCount);

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function handleFromDateChange(e) {
    const newFromDate = new Date(e.target.value);
    if (toDate && newFromDate < toDate) {
      alert("Please select a valid date range");
    } else {
      setFromDate(newFromDate);
    }
  }

  function handleToDateChange(e) {
    const newToDate = new Date(e.target.value);
    if (newToDate <= fromDate) {
      alert("To Date cannot be before From Date");
    } else {
      setToDate(newToDate);
    }
  }

  const handlePaymentClick = async () => {
    if(selectedDatesCount === 0){
        alert('select a date first')
    }else{
    try {
      const price = details.rate * selectedDatesCount;
      const response = await createPayment(price);
      navigate("/user/mobilityaids");
      const bookid = details._id;
      console.log(bookid);
      setBooking([...booking, bookid]);
        const res = await axiosInstance.post(`/user/MobilitybookingStatus/${bookid}`);
        console.log(res);
    } catch (error) {
      console.error(error, "failed");
    }
    }
  };
  return (
    <div className="max-w-md m-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl text-center font-semibold mb-4">
        Select Booking Date
      </h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          From Date:
        </label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          type="date"
          value={formatDate(fromDate)}
          onChange={handleFromDateChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          To Date:
        </label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          type="date"
          value={formatDate(toDate)}
          onChange={handleToDateChange}
        />
      </div>
      <div className="mb-4 flex justify-center">
        <button
          onClick={handlePaymentClick}
          className="text-sm font-medium bg-orange-500 p-3 rounded-md flex justify-center items-center text-gray-700 hover:text-white"
        >
          Payment
        </button>
      </div>
    </div>
  );
}

export default MobilityBook;
