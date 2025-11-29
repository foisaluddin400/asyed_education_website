"use client";
import { Form, Input, message, Modal, Spin, Upload } from "antd";
import React, { useState } from "react";

const onPreview = async (file) => {
  let src = file.url;
  if (!src) {
    src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow?.document.write(image.outerHTML);
};

const ChildsAdd = ({ openAddModal, setOpenAddModal }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleCancel = () => {
    form.resetFields();
    setFileList([]);
    setOpenAddModal(false);
  };

  const handleSubmit = async (values) => {
    console.log("Submitted values:", values);
  };

  return (
    <Modal centered open={openAddModal} onCancel={handleCancel} footer={null} width={600}>
      <div>
        <div className="font-bold text-center mb-6 text-xl">+ Add Childs</div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="px-2"
        >
          {/* Name Field */}
          <Form.Item
            label="Child Name"
            name="name"
            rules={[{ required: true, message: "Please input name!" }]}
          >
            <Input placeholder="Enter child name" style={{ height: "40px" }} />
          </Form.Item>

          {/* Year Field */}
          <Form.Item
            label="Year"
            name="year"
            rules={[{ required: true, message: "Please input year!" }]}
          >
            <Input placeholder="Enter year (e.g. 2015)" style={{ height: "40px" }} />
          </Form.Item>

          {/* Class Field */}
          <Form.Item
            label="Class"
            name="class"
            rules={[{ required: true, message: "Please input class!" }]}
          >
            <Input placeholder="Enter class (e.g. Class 5)" style={{ height: "40px" }} />
          </Form.Item>

          {/* Subject Field */}
          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please input subject!" }]}
          >
            <Input placeholder="Enter subject (e.g. Math, Science)" style={{ height: "40px" }} />
          </Form.Item>

          {/* Image Upload */}
          <Form.Item
            label="Photo"
            name="image"
            rules={[{ required: true, message: "Please upload photo!" }]}
          >
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              multiple={false}
            >
              {fileList.length < 1 && "+ Upload"}
            </Upload>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <button
              className={`w-full py-3 rounded text-white flex justify-center items-center gap-2 transition-all duration-300 ${
                loading
                  ? "bg-[#fa8e97] cursor-not-allowed"
                  : "bg-primary hover:bg-teal-700"
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spin size="small" />
                  <span>Submitting...</span>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default ChildsAdd;
