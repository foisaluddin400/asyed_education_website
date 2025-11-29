"use client";

import React, { useState } from "react";
import { Modal, message } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiUserForbidLine } from "react-icons/ri";
import Image from "next/image";

const Dashboard = () => {
  // Sample Data
  const [children] = useState([
    {
      id: 1,
      name: "Rahim",
      year: "2015",
      class: "Class 5",
      subject: "Mathematics",
      img: "https://i.ibb.co/L1m1QSY/student1.png",
    },
    {
      id: 2,
      name: "Karim",
      year: "2014",
      class: "Class 6",
      subject: "Science",
      img: "https://i.ibb.co/tM9KgP7/student2.png",
    },
    {
      id: 3,
      name: "Jaber",
      year: "2013",
      class: "Class 7",
      subject: "English",
      img: "https://i.ibb.co/z6fmQ6m/student3.png",
    },
  ]);

  const [selectedChild, setSelectedChild] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // View Details
  const handleView = (child) => {
    setSelectedChild(child);
    setIsModalOpen(true);
  };

  // Delete Action
  const handleDelete = (name) => {
    message.success(`${name} deleted successfully`);
  };

  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex gap-4 items-center bg-white p-6 py-16 border rounded">
          <div className="bg-yellow-100 w-[55px] rounded-full h-[55px] flex justify-center items-center text-3xl">
            <HiOutlineUserGroup className="text-yellow-500" />
          </div>
          <div>
            <h1 className="font-semibold text-2xl">1,100</h1>
            <h1 className="text-zinc-500">Total User</h1>
          </div>
        </div>

        <div className="flex gap-4 items-center bg-white p-6 rounded border">
          <div className="bg-sky-100 w-[55px] rounded-full h-[55px] flex justify-center items-center text-3xl">
            <RiUserForbidLine className="text-sky-600" />
          </div>
          <div>
            <h1 className="font-semibold text-2xl">1,100</h1>
            <h1 className="text-zinc-500">User Block</h1>
          </div>
        </div>
      </div>

      {/* Child Section */}
      <div>
        <h1 className="text-lg mt-4 bg-primary text-white p-2 rounded">Childs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          {children.map((child) => (
            <div
              key={child.id}
              className="border rounded p-2 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              {/* Next.js Image */}
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={child.img}
                  alt={child.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Info */}
              <h2 className="text-xl font-bold text-gray-800">{child.name}</h2>
              <p className="text-gray-600 mt-1">
                <strong>Year:</strong> {child.year}
              </p>
              <p className="text-gray-600">
                <strong>Class:</strong> {child.class}
              </p>
              <p className="text-gray-600">
                <strong>Subject:</strong> {child.subject}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => handleView(child)}
                  className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-all"
                >
                  <EyeOutlined />
                  See Details
                </button>

                <button
                  onClick={() => handleDelete(child.name)}
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
                >
                  <DeleteOutlined />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        title="Child Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        {selectedChild && (
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image
                src={selectedChild.img}
                alt={selectedChild.name}
                fill
                className="object-cover rounded-full"
              />
            </div>

            <h2 className="text-2xl font-bold">{selectedChild.name}</h2>

            <p className="text-gray-600 mt-2">
              <strong>Year:</strong> {selectedChild.year}
            </p>
            <p className="text-gray-600">
              <strong>Class:</strong> {selectedChild.class}
            </p>
            <p className="text-gray-600">
              <strong>Subject:</strong> {selectedChild.subject}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Dashboard;
