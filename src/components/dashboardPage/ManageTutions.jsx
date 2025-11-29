import React, { useState } from "react";
import { Input, Modal, message } from "antd";
import { EyeOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";

const ManageTutions = () => {
  // Sample Data
  const [tutions] = useState([
    {
      id: 1,
      teacher: "Mr. Rahman",
      price: "$50",
      class: "Class 5",
      subject: "Mathematics",
      status: "pending", // pending | completed | rejected
      img: "https://i.ibb.co/1QbVGFw/teacher1.png",
    },
    {
      id: 2,
      teacher: "Mrs. Amina",
      price: "$45",
      class: "Class 6",
      subject: "Science",
      status: "completed",
      img: "https://i.ibb.co/5nC2vbf/teacher2.png",
    },
    {
      id: 3,
      teacher: "Mr. Karim",
      price: "$60",
      class: "Class 7",
      subject: "English",
      status: "pending",
      img: "https://i.ibb.co/KWDFBH0/teacher3.png",
    },
  ]);

  const [selectedTution, setSelectedTution] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // View Details
  const handleView = (data) => {
    setSelectedTution(data);
    setIsModalOpen(true);
  };

  // Delete Action
  const handleDelete = (teacher) => {
    message.success(`${teacher}'s record deleted successfully`);
  };

  // Payment Button Action
  const handlePayment = (teacher) => {
    message.success(`Payment initiated for ${teacher}`);
  };

  const handleReject = (teacher) => {
    message.error(`${teacher}'s request rejected`);
  };

  return (
    <div className="">
      <div className="flex justify-between mb-4">
        <h1 className="text-lg">Manage Tutions</h1>
        <div className="flex gap-5">
          <Input
            placeholder="Search by name..."
            prefix={<SearchOutlined />}
            style={{ maxWidth: "500px", height: "40px" }}
          />
        </div>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tutions.map((item) => (
          <div
            key={item.id}
            className="rounded border p-2 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            {/* Picture */}
            <img
              src={item.img}
              alt={item.teacher}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Info */}
            <h2 className="text-xl font-bold text-gray-800">{item.teacher}</h2>
            <p className="text-gray-600 mt-1">
              <strong>Price:</strong> {item.price}
            </p>
            <p className="text-gray-600">
              <strong>Class:</strong> {item.class}
            </p>
            <p className="text-gray-600">
              <strong>Subject:</strong> {item.subject}
            </p>

            {/* Payment Status */}
            <p className="mt-3">
              <strong>Status:</strong>{" "}
              <span
                className={`px-3 py-1 rounded-full text-white ${
                  item.status === "completed"
                    ? "bg-green-600"
                    : item.status === "rejected"
                    ? "bg-red-600"
                    : "bg-yellow-600"
                }`}
              >
                {item.status === "completed"
                  ? "Accepted"
                  : item.status === "pending"
                  ? "Pending"
                  : "Rejected"}
              </span>
            </p>

            {/* Payment Buttons */}
            <div className="flex items-center gap-3 mt-4">
              {item.status === "completed" ? (
                <button className="w-full bg-green-600 text-white py-2 rounded-lg">
                  Accepted
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handlePayment(item.teacher)}
                    className="flex-1 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-all"
                  >
                    Go to Pay
                  </button>
                  <button
                    onClick={() => handleReject(item.teacher)}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-all"
                  >
                    Reject
                  </button>
                </>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => handleView(item)}
                className="flex w-full items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                <EyeOutlined /> Details
              </button>

              <button
                onClick={() => handleDelete(item.teacher)}
                className="flex w-full items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
              >
                <DeleteOutlined /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Details */}
      <Modal
        title="Teacher Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        {selectedTution && (
          <div className="text-center">
            <img
              src={selectedTution.img}
              alt={selectedTution.teacher}
              className="w-40 h-40 object-cover mx-auto rounded-full mb-4"
            />

            <h2 className="text-2xl font-bold">{selectedTution.teacher}</h2>

            <p className="text-gray-600 mt-2">
              <strong>Price:</strong> {selectedTution.price}
            </p>
            <p className="text-gray-600">
              <strong>Class:</strong> {selectedTution.class}
            </p>
            <p className="text-gray-600">
              <strong>Subject:</strong> {selectedTution.subject}
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Status:</strong>{" "}
              {selectedTution.status === "completed"
                ? "Accepted"
                : selectedTution.status === "pending"
                ? "Pending"
                : "Rejected"}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ManageTutions;
