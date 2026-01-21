"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import backgroundImage from "../../../public/img/background5.jpg";
import { Form, Input, Button, Checkbox, message, Spin } from "antd";
import { useRegisterUserMutation } from "@/redux/Api/authenticationApi";

export default function Register() {
  const [form] = Form.useForm();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const router = useRouter();

  const onFinish = async (values) => {
  const payload = {
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    email: values.email.trim(),
    password: values.password,
  };

  try {
    const res = await registerUser(payload).unwrap();

    // 🔐 Save token to localStorage
    localStorage.setItem("accessToken", res?.data?.accessToken);
    // localStorage.setItem("refreshToken", res?.data?.refreshToken);
    // localStorage.setItem("user", JSON.stringify(res?.data?.user));

    message.success("Registration successful!");
    router.push("/signUp/done");
  } catch (err) {
    const errorMsg =
      err?.data?.message ||
      err?.data?.error ||
      "Registration failed. Please try again.";
    message.error(errorMsg);
  }
};


  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center backdrop-blur-2xl"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="w-[500px] bg-secondary shadow-2xl rounded-md border border-gray-300 relative">
        {/* Logo */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/img/logo4.png"
            width={105}
            height={100}
            alt="logo"
            className="object-contain"
          />
        </div>

        <h1 className="text-center text-3xl font-serif mt-4 text-green-900">
          Green Sign Up Form
        </h1>

        <div className="relative mt-8 px-10 pb-10">
          <div className="absolute inset-0 bg-primary clip-tri -mr-[1px]" />

          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="relative"
            initialValues={{ remember: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                name="firstName"
                label={
                  <span className="text-sm font-semibold flex items-center gap-1">
                    <span>👤</span> First Name
                  </span>
                }
                rules={[
                  { required: true, message: "Please enter your first name!" },
                ]}
              >
                <Input size="large" placeholder="First name" />
              </Form.Item>

              <Form.Item
                name="lastName"
                label={
                  <span className="text-sm font-semibold flex items-center gap-1">
                    <span>👤</span> Last Name
                  </span>
                }
                rules={[
                  { required: true, message: "Please enter your last name!" },
                ]}
              >
                <Input size="large" placeholder="Last name" />
              </Form.Item>
            </div>

            <Form.Item
              name="email"
              label={
                <span className="text-sm font-semibold flex items-center gap-1">
                  <span>📧</span> Email
                </span>
              }
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input size="large" placeholder="example@gmail.com" />
            </Form.Item>

            <Form.Item
              name="password"
              label={
                <span className="text-sm font-semibold flex items-center gap-1">
                  <span>🔑</span> Password
                </span>
              }
              rules={[
                { required: true, message: "Please enter your password!" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
              hasFeedback
            >
              <Input.Password size="large" placeholder="Enter password" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label={
                <span className="text-sm font-semibold flex items-center gap-1">
                  <span>✔</span> Confirm Password
                </span>
              }
              dependencies={["password"]}
              hasFeedback
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!"),
                    );
                  },
                }),
              ]}
            >
              <Input.Password size="large" placeholder="Re-enter password" />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("You must agree to the terms!"),
                        ),
                },
              ]}
            >
              <Checkbox>
                I agree to the{" "}
                <Link
                  href="/terms-and-condition"
                  className="text-blue-600 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>
              </Checkbox>
            </Form.Item>

          <Form.Item>
<button
  type="submit"
  disabled={isLoading}
  className={`
    w-full py-3 flex items-center justify-center gap-3
    bg-green-700 text-white rounded
    hover:bg-green-800 disabled:bg-green-800/60
    transition-all font-medium
  `}
>
  {isLoading ? (
    <>
      <span className="raw-spinner"></span>
      Creating account...
    </>
  ) : (
    "SIGN UP"
  )}

 
</button>

</Form.Item>


            <div className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link href="/signIn" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </div>
          </Form>
        </div>

        <p className="text-center text-xs py-4 text-gray-700">
          © 2018 Green Login Form . All Rights Reserved | Design by W3layouts
        </p>
      </div>
    </div>
  );
}
