'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import backgroundImage from "../../../../public/img/background5.jpg"
import { Form, Input, Button, message } from "antd"
import { useResetPasswordMutation } from "@/redux/Api/authenticationApi"
import { toast } from "react-toastify"

export default function NewPass() {
  const [form] = Form.useForm()
  const [resetPassword, { isLoading }] = useResetPasswordMutation()
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [token, setToken] = useState("")

  // Read email & token from localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("forgotPasswordEmail")
    const storedToken = localStorage.getItem("token") || ""

    if (storedEmail) setEmail(storedEmail)
    else {
      toast.warning("Email not found. Please start the reset process again.")
      router.push("/signIn/forgot")
    }

    if (storedToken) setToken(storedToken)
    else {
      toast.warning("Reset token missing. Please try again.")
      router.push("/signIn/forgot")
    }
  }, [router])

  const onFinish = async (values) => {
    if (!token) {
      toast.error("Reset token missing. Cannot reset password.")
      return
    }

    const payload = {
      token: token,
      newPassword: values.newPassword,
    }

    try {
      await resetPassword(payload).unwrap()

      toast.success(
        "Password reset successfully! Please login with your new password."
      )

      // Clean up localStorage
      localStorage.removeItem("forgotPasswordEmail")
      localStorage.removeItem("token")

      router.push("/signIn")
    } catch (err) {
      const errorMsg =
        err?.data?.message ||
        err?.data?.error ||
        "Failed to reset password. Please try again."
      toast.error(errorMsg)
    }
  }
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
          Enter Your New Password
        </h1>

        <div className="relative mt-8 px-10 pb-10">
          <div className="absolute inset-0 bg-primary clip-tri -mr-[1px]" />

          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="relative space-y-6"
          >
            {/* Optional: show email for context */}
            <div className="text-center text-gray-600 mb-4">
              Resetting password for <strong>{email || "your email"}</strong>
            </div>

            <Form.Item
              name="newPassword"
              label={
                <span className="text-sm font-semibold text-black flex items-center gap-1">
                  <span>🔑</span> New Password
                </span>
              }
              rules={[
                { required: true, message: "Please enter your new password!" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
              hasFeedback
            >
              <Input.Password size="large" placeholder="Enter new password" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label={
                <span className="text-sm font-semibold text-black flex items-center gap-1">
                  <span>✔</span> Confirm Password
                </span>
              }
              dependencies={["newPassword"]}
              hasFeedback
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error("The two passwords do not match!"))
                  },
                }),
              ]}
            >
              <Input.Password size="large" placeholder="Re-enter new password" />
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
     Setting...
    </>
  ) : (
    "Submit"
  )}

 
</button>
            </Form.Item>

            <div className="text-center text-sm text-gray-600 mt-6">
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
  )
}