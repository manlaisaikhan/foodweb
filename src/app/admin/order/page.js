"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Sidebeer } from "../../../_components/sidebar";

export default function OrdersTable() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "test@gmail.com",
      food: "2 foods",
      date: "2024/12/20",
      total: "$26.97",
      address: "2031CA, 74-09 31st Ave, USA",
      state: "Pending",
    },
    {
      id: 2,
      customer: "amgalan@gmail.com",
      food: "3 foods",
      date: "2024/12/19",
      total: "$39.85",
      address: "2031CA, NY Street, USA",
      state: "Delivered",
    },
    {
      id: 3,
      customer: "nomnom@gmail.com",
      food: "1 food",
      date: "2024/12/18",
      total: "$12.99",
      address: "2031CA, California, USA",
      state: "Cancelled",
    },
    {
      id: 4,
      customer: "hello@gmail.com",
      food: "4 foods",
      date: "2024/12/15",
      total: "$58.99",
      address: "2031CA, Boston, USA",
      state: "Pending",
    },
    {
      id: 5,
      customer: "world@gmail.com",
      food: "2 foods",
      date: "2024/12/10",
      total: "$25.60",
      address: "2031CA, Chicago, USA",
      state: "Delivered",
    },
  ]);

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newState, setNewState] = useState("Pending");
  const [currentPage, setCurrentPage] = useState(1);

  const [dateRange, setDateRange] = useState({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });

  const ordersPerPage = 5;

  // ✅ Figma шиг Pending / Delivered / Cancelled тоонууд
  const countByState = {
    Pending: orders.filter((o) => o.state === "Pending").length,
    Delivered: orders.filter((o) => o.state === "Delivered").length,
    Cancelled: orders.filter((o) => o.state === "Cancelled").length,
    Total: orders.length,
  };

  const getColor = (state) => {
    switch (state) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const toggleSelectOrder = (id) => {
    setSelectedOrders((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((order) => order.id));
    }
  };

  const handleSaveState = () => {
    setOrders((prev) =>
      prev.map((order) =>
        selectedOrders.includes(order.id)
          ? { ...order, state: newState }
          : order
      )
    );
    setShowModal(false);
    setSelectedOrders([]);
  };

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage * ordersPerPage < orders.length) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const currentOrders = orders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  const displayDate =
    dateRange?.from && dateRange?.to
      ? `${format(dateRange.from, "yyyy/MM/dd")} - ${format(
          dateRange.to,
          "yyyy/MM/dd"
        )}`
      : "Select date range";

  return (
    <div className="w-screen h-screen flex flex-row gap-10">
      {/* Sidebar */}
      <div className="flex w-[205px] h-screen bg-white">
        <Sidebeer />
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-[1170px] h-auto">
        {/* HEADER + COUNTERS */}
        <div className="flex items-center justify-between gap-10 mb-4">
          <div>
            <h2 className="text-xl font-semibold flex  flex-col items-start  gap-1">
              Orders
              <span className="text-gray-400 text-sm">
                {countByState.Total} items
              </span>
            </h2>

            {/* ✅ Figma шиг delivery counters */}
            <div className="flex gap-4 text-sm text-gray-500 mt-1">
              <span>Pending: {countByState.Pending}</span>
              <span>Delivered: {countByState.Delivered}</span>
              <span>Cancelled: {countByState.Cancelled}</span>
            </div>
          </div>

          {/* Calendar */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-[250px] justify-start text-left font-normal"
              >
                {displayDate}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2" align="start">
              <Calendar
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
                className="rounded-lg border shadow-sm"
              />
            </PopoverContent>
          </Popover>

          <button
            disabled={selectedOrders.length === 0}
            onClick={() => setShowModal(true)}
            className={`px-4 py-2 rounded-lg text-sm transition ${
              selectedOrders.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            Change delivery state
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left text-sm text-gray-600 border-b">
                {/* ✅ Checkbox center fix */}
                <th className="py-3 px-4">
                  <div className="flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={selectedOrders.length === orders.length}
                      onChange={handleSelectAll}
                      className="w-4 h-4"
                    />
                  </div>
                </th>

                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Food</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Delivery Address</th>
                <th className="py-3 px-4 text-center">Delivery State</th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-700">
              {currentOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  {/* ✅ Centered checkbox */}
                  <td className="py-3 px-4">
                    <div className="flex justify-center items-center">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => toggleSelectOrder(order.id)}
                        className="w-4 h-4"
                      />
                    </div>
                  </td>

                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">{order.food}</td>
                  <td className="py-3 px-4">{order.date}</td>
                  <td className="py-3 px-4">{order.total}</td>
                  <td className="py-3 px-4">{order.address}</td>

                  <td className="py-3 px-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getColor(
                        order.state
                      )}`}
                    >
                      {order.state}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Pagination */}
        <Pagination className="mt-4">
          <PaginationContent>
            {/* Prev */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange("prev")}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(
              (page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={page === currentPage}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            {totalPages > 5 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Next */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange("next")}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center ">
            <div className="bg-white p-6 rounded-xl shadow-lg w-[400px] relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <h3 className="text-lg font-semibold mb-4">
                Change delivery state
              </h3>

              <div className="flex mb-4 justify-center gap-5">
                {["Delivered", "Pending", "Cancelled"].map((state) => (
                  <button
                    key={state}
                    onClick={() => setNewState(state)}
                    className={`px-3 py-1.5 rounded-lg border ${
                      newState === state
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {state}
                  </button>
                ))}
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveState}
                  className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
