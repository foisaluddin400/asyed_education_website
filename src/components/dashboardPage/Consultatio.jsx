"use client";
import React, { useState } from "react";
import { Modal, Select, message } from "antd";
import { CopyOutlined, VideoCameraOutlined } from "@ant-design/icons";
const { Option } = Select;
const Consultatio = () => {
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Sample Data with Status
  const meetings = [
    {
      id: 1,
      time: "10:00 AM",
      date: "2025-01-20",
      class: "Class 5",
      subject: "Math Consultation",
      link: "https://zoom.us/meeting/12345",
      status: "pending", // pending | expired
    },
    {
      id: 2,
      time: "12:30 PM",
      date: "2025-01-21",
      class: "Class 6",
      subject: "Science Consultation",
      link: "https://zoom.us/meeting/67890",
      status: "expired",
    },
    {
      id: 3,
      time: "3:00 PM",
      date: "2025-01-22",
      class: "Class 7",
      subject: "English Consultation",
      link: "https://zoom.us/meeting/24680",
      status: "pending",
    },
  ];

  // Open modal
  const handleJoin = (item) => {
    if (item.status === "expired") {
      return message.error("This meeting has expired!");
    }
    setSelectedMeeting(item);
    setOpenModal(true);
  };

  // Copy meeting link
  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    message.success("Meeting link copied!");
  };

  // Redirect to meeting
  const handleRedirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
        <div className="flex justify-between mb-4">
        <h1 className="text-lg">Children</h1>
        <div className="flex gap-5">
          
         <div>
            <Select
              style={{ height: "40px" }}
              placeholder="Select Meeting"
              // onChange={() => setShowStatus(true)}
            >
              <Option value="clothing">All Consultation</Option>
              <Option value="Pending">Pending</Option>
              <Option value="Expired">Expired</Option>
            </Select>
          </div>
        </div>
      </div>
      {/* Grid for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {meetings.map((item) => (
          <div
            key={item.id}
            className="border p-2 rounded hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {item.subject}
            </h2>

            <p className="text-gray-700">
              <strong>Date:</strong> {item.date}
            </p>
            <p className="text-gray-700">
              <strong>Time:</strong> {item.time}
            </p>
            <p className="text-gray-700">
              <strong>Class:</strong> {item.class}
            </p>

            {/* Status Badge */}
            <p className="mt-3">
              <strong>Status:</strong>{" "}
              <span
                className={`px-3 py-1 rounded-full text-white ${
                  item.status === "pending" ? "bg-yellow-600" : "bg-red-600"
                }`}
              >
                {item.status === "pending" ? "Pending" : "Expired"}
              </span>
            </p>

            {/* Join Button */}
            <div className="mt-5">
              <button
                onClick={() => handleJoin(item)}
                disabled={item.status === "expired"}
                className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 transition-all 
                  ${
                    item.status === "expired"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-teal-600 text-white hover:bg-teal-700"
                  }`}
              >
                <VideoCameraOutlined />
                {item.status === "expired" ? "Expired" : "Join Meeting"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        title="Meeting Details"
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
      >
        {selectedMeeting && (
          <div className="text-center">
            <p className="text-lg">
              <strong>Date:</strong> {selectedMeeting.date}
            </p>
            <p className="text-lg mb-4">
              <strong>Time:</strong> {selectedMeeting.time}
            </p>

            {/* Meeting Link */}
            <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center border">
              <span className="text-gray-700 truncate">
                {selectedMeeting.link}
              </span>
              <button
                onClick={() => handleCopy(selectedMeeting.link)}
                className="text-blue-600 hover:text-blue-800"
              >
                <CopyOutlined className="text-xl" />
              </button>
            </div>

            {/* Join Now Button */}
            <button
              onClick={() => handleRedirect(selectedMeeting.link)}
              className="w-full mt-6 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-all"
            >
              Join Now
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Consultatio;
