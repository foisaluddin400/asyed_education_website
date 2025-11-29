// app/contact/page.jsx   (or pages/contact.jsx if using Pages Router)
'use client';
import React from "react";
import { Form, Input, DatePicker, TimePicker, Select, Button, message } from "antd";
import Image from "next/image";
import contactGirl from "../../../public/img/contact.png"; 

import background from "../../../public/img/back.png";
const { Option } = Select;

export default function ContactPage() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Booking Request:", values);
    message.success("Thank you! We'll contact you soon.");
    form.resetFields();
  };

  return (
    <section className=""  >
      <div className="container mx-auto md:px-4 px-3">
        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* Left: 3D Girl Character */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={contactGirl}
                alt="Happy student with laptop"
                width={600}
                height={800}
                className="drop-shadow-2xl rounded-2xl"
                priority
              />
              {/* Pretty floating bubbles */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-teal-200 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
            </div>
          </div>

          {/* Right: Ant Design Form */}
          <div className="order-1 lg:order-2  md:p-5 ">
            

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              size="large"
            >
              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                name="fullName"
                label="Full Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input  className="w-full bg-transparent py-3" placeholder="Hridoy"  />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Invalid email format" },
                ]}
              >
                <Input placeholder="asyeed@gmail.com" className="w-full bg-transparent py-3"  />
              </Form.Item>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: "Please enter your phone" }]}
              >
                <Input placeholder="01656465456" className="w-full bg-transparent  py-3"  />
              </Form.Item>

              <Form.Item name="subject" label="Subject">
                <Input placeholder="Science" className="w-full bg-transparent  py-3"  />
              </Form.Item>
              </div>

            <div className="grid grid-cols-2 gap-4">
                  <Form.Item name="date" label="Preferred Date">
                <DatePicker format="DD-MM-YYYY" className="w-full bg-transparent  py-3"  />
              </Form.Item>

              <Form.Item name="time" label="Preferred Time">
                <TimePicker format="h:mm A" use12Hours className="w-full bg-transparent  py-3" />
              </Form.Item>

            </div>
             <div className="grid grid-cols-2 gap-4"> <Form.Item name="class" label="Class/Grade">
                <Input placeholder="10" className="w-full bg-transparent  py-3"  />
              </Form.Item>

              <Form.Item name="location" label="Location">
                <Input placeholder="Bangladesh" className="w-full bg-transparent py-3"  />
              </Form.Item></div>

              <Form.Item
                name="service"
                label="Service Interested In"
                rules={[{ required: true, message: "Please select a service" }]}
              >
                <Select className="w-full bg-transparent   "   style={{ height: "50px" }} placeholder="Choose a service">
                  <Option value="home-tutoring">At-Home Tutoring</Option>
                  <Option value="online">Online 1-on-1 Classes</Option>
                  <Option value="exam-prep">Exam Preparation</Option>
                  <Option value="group">Group Classes</Option>
                </Select>
              </Form.Item>

              <Form.Item className="mt-8">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="w-full h-14 text-lg font-bold bg-teal-600 hover:bg-teal-700 rounded-xl shadow-lg"
                  style={{ backgroundColor: "#006d6b", border: "none" }}
                >
                  Submit Booking Request
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}