"use client";

import { useState } from "react";
import Image from "next/image";
import { Form, Input, message } from "antd";
import { IoCameraOutline } from "react-icons/io5";
import { ChangePass } from "./ChangePass";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [form] = Form.useForm();
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const onEditProfile = async (values) => {
    message.success("Profile updated!");
  };

  const tabItems = [
    {
      key: "1",
      label: "Edit Profile",
      content: (
        <Form onFinish={onEditProfile} layout="vertical" form={form}>
          <Form.Item name="name" label="Name">
            <Input
              style={{
                padding: "9px",
                height: "50px",
                borderRadius: "30px",
              }}
              placeholder="Enter name"
            />
          </Form.Item>

          <Form.Item name="email" label="Email">
            <Input
              disabled
              style={{
                padding: "9px",
                height: "50px",
                borderRadius: "30px",
              }}
              placeholder="Enter Email"
            />
          </Form.Item>

          <Form.Item name="phone" label="Phone Number">
            <Input
              style={{
                padding: "9px",
                height: "50px",
                borderRadius: "30px",
              }}
              placeholder="Enter Phone Number"
            />
          </Form.Item>

          <button
            className="w-full rounded-full bg-primary text-white py-3"
            type="submit"
          >
            Update
          </button>
        </Form>
      ),
    },
    {
      key: "2",
      label: "Change Password",
      content: <ChangePass />,
    },
  ];

  return (
    <div className="p-3 bg-white">
      <div className="mt-8 rounded-lg">
        {/* Profile Picture Section */}
        <div className="text-center mb-6">
          <div className="relative w-[140px] h-[140px] mx-auto">

            {/* Hidden File Input */}
            <input
              type="file"
              onChange={handleImageChange}
              id="img"
              style={{ display: "none" }}
            />

            {/* Next.js Image */}
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden relative">
              <Image
                src={
                  image
                    ? URL.createObjectURL(image)
                    : "/default-user.png" // use your default profile pic
                }
                alt="Profile Photo"
                fill
                className="object-cover"
              />
            </div>

            {/* Upload Icon */}
            {activeTab === "1" && (
              <label
                htmlFor="img"
                className="absolute top-[90px] -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer shadow-sm"
              >
                <IoCameraOutline className="text-black" />
              </label>
            )}
          </div>

          <p className="text-lg font-semibold mt-4">Foisal</p>
        </div>

        {/* Tabs */}
        <div className="mb-4">
          <div className="flex space-x-6 justify-center mb-4">
            {tabItems.map((item) => (
              <button
                key={item.key}
                className={`py-2 font-medium ${
                  activeTab === item.key
                    ? "border-b border-primary text-primary"
                    : "text-black hover:text-[#02111E]"
                }`}
                onClick={() => setActiveTab(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>{tabItems.find((item) => item.key === activeTab)?.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
