"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import backgroundImage from "../../../public/img/background5.jpg";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useLoginUserMutation } from "@/redux/Api/authenticationApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignIn() {
  const [form] = Form.useForm();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const onFinish = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await loginUser(payload).unwrap();
      localStorage.setItem("accessToken", response?.data?.accessToken);
      toast.success("Login successful!");

      router.push("/");
    } catch (err) {
      const errorMsg =
        err?.data?.message ||
        err?.data?.error ||
        "Login failed. Please check your credentials.";
      toast.error(errorMsg);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center backdrop-blur-2xl"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="w-[500px] bg-secondary shadow-2xl rounded-md border border-gray-300 relative">
        {/* TOP LOGO */}
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
          Green Login Form
        </h1>

        <div className="relative mt-8 px-10 pb-10">
          <div className="absolute inset-0 bg-primary clip-tri -mr-[1px]" />

          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="relative space-y-6"
          >
            <Form.Item
              name="email"
              label={
                <span className="text-sm font-semibold text-black flex items-center gap-1">
                  <span>🔒</span> Email
                </span>
              }
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input size="large" placeholder="Enter email" />
            </Form.Item>

            <Form.Item
              name="password"
              label={
                <span className="text-sm font-semibold text-green-900 flex items-center gap-1">
                  <span>🔑</span> Password
                </span>
              }
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input
                type={showPassword ? "text" : "password"}
                size="large"
                placeholder="Enter password"
              />
            </Form.Item>

            <div className="flex justify-between items-center text-sm">
              <Checkbox
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              >
                Show Password
              </Checkbox>

              <Link
                href="/signIn/forgot"
                className="text-gray-900 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <Form.Item className="mb-0">
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
     Login account...
    </>
  ) : (
    "SIGN IN"
  )}

 
</button>
            </Form.Item>

            <div className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <Link href="/signUp" className="text-blue-600 hover:underline">
                Sign Up
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
