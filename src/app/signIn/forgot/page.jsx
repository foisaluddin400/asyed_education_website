"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import backgroundImage from "../../../../public/img/background5.jpg";
import { Form, Input, Button, message } from "antd";
import { useForgotPasswordMutation } from "@/redux/Api/authenticationApi";

export default function Forgot() {
  const [form] = Form.useForm();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const router = useRouter();

  const onFinish = async (values) => {
    const payload = {
      email: values.email,
    };

    try {
      await forgotPassword(payload).unwrap();

      localStorage.setItem("forgotPasswordEmail", values.email);

      message.success("Password reset link/code sent to your email!");

      // Redirect to verification/OTP page
      router.push("/signIn/verify");
    } catch (err) {
      const errorMsg =
        err?.data?.message ||
        err?.data?.error ||
        "Failed to send reset request. Please try again.";
      message.error(errorMsg);
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
          Forgot Your Password
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
                  <span>📧</span> Email
                </span>
              }
              rules={[
                { required: true, message: "Please enter your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your registered email" />
            </Form.Item>

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
                    Forgor Pass...
                  </>
                ) : (
                  "Forget Pass"
                )}
              </button>
            </Form.Item>

            <div className="text-center text-sm text-gray-600 mt-6">
              Remember your password?{" "}
              <Link href="/signIn" className="text-blue-600 hover:underline">
                Back to Login
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
