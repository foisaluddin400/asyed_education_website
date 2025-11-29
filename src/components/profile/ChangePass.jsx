'use client';
import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";




export const ChangePass = () => {
//   const [changePassword] = useChangePasswordMutation();

  const [passError, setPassError] = useState("");


  const handlePasswordChange = async (values) => {
    // if (values?.newPassword === values.oldPassword) {
    //   return setPassError("Your old password cannot be your new password.");
    // }
    // if (values?.newPassword !== values?.confirmPassword) {
    //   return setPassError("Confirm password doesn't match.");
    // } else {
    //   setPassError("");
    // }

    // const data = {
    //   current_password: values.currentPassword,
    //   new_password: values.newPassword,
    // };
    // try {
    //   const response = await changePassword(data).unwrap();
    //   message.success(response.message);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    //   message.error(error.data.message);
    // }
  };

  return (
    <div>
      <Form layout="vertical" onFinish={handlePasswordChange}>
        

        <Form.Item
          name="currentPassword"
          label="Old Password"
          rules={[
            { required: true, message: "Please enter your current password!" },
          ]}
        >
          <Input.Password style={{ padding: "9px", height:'50px', borderRadius: "0px",borderRadius: '30px' }} placeholder="Old Password" />
        </Form.Item>

        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[{ required: true, message: "Please enter a new password!" }]}
        >
          <Input.Password style={{ padding: "9px", height:'50px', borderRadius: "0px",borderRadius: '30px' }} placeholder="New Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm New Password"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Please confirm your new password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password style={{ padding: "9px", height:'50px', borderRadius: "0px",borderRadius: '30px' }} placeholder="Confirm Password" />
        </Form.Item>

        {/* Display error if password validations fail */}
        {passError && <p className="text-red-500 text-sm mb-2">{passError}</p>}

        <Form.Item>
          <div className="flex justify-center">
          <button type="submit" className="w-full rounded-full bg-primary text-white py-3">
                Change Password
              </button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};