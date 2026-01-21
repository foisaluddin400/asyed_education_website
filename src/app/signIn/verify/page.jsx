'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import backgroundImage from "../../../../public/img/background5.jpg"
import { Form, Input, Button, message, Spin } from "antd"
import { useForgotPasswordMutation, useVerifyOtpMutation } from "@/redux/Api/authenticationApi"
import { toast } from "react-toastify"

export default function Verify() {
  const [form] = Form.useForm()
  const [verifyOtp, { isLoading: isVerifying }] = useVerifyOtpMutation()
  const [forgotPassword, { isLoading: isResending }] = useForgotPasswordMutation()
  const router = useRouter()

  const [email, setEmail] = useState("")
  useEffect(() => {
    const storedEmail = localStorage.getItem("forgotPasswordEmail")
    if (storedEmail) {
      setEmail(storedEmail)
    } else {
      message.warning("Email not found. Please try forgot password again.")
      router.push("/signIn/forgot")
    }
  }, [router])

  const onFinish = async (values) => {
    if (!email) {
      message.error("Email is required. Please go back and try again.")
      return
    }

    const payload = {
      email,
      otp: values.otp, 
    }

    try {
      const res = await verifyOtp(payload).unwrap()
      console.log(res)
       localStorage.setItem("token", res?.data?.resetToken);
      toast.success(res?.message || "Verification successful!")
    
      

      router.push("/signIn/newpass")
    } catch (err) {
      const errorMsg =
        err?.data?.message ||
        err?.data?.error ||
        "Invalid or expired OTP. Please try again."
      toast.error(errorMsg)
    }
  }

  const handleResend = async () => {
    if (!email) {
      toast.error("Email not found. Please try forgot password again.")
      return
    }

    try {
      await forgotPassword({ email }).unwrap()
      message.success("A new OTP has been sent to your email!")
    } catch (err) {
      const errorMsg =
        err?.data?.message ||
        "Failed to resend OTP. Please try again later."
      message.error(errorMsg)
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
          Verify Your Email
        </h1>

        <div className="relative mt-8 px-10 pb-10">
          <div className="absolute inset-0 bg-primary clip-tri -mr-[1px]" />

          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="relative space-y-6"
          >
            <div className="text-center text-gray-600 mb-4">
              Enter the 6-digit code sent to <strong>{email || "your email"}</strong>
            </div>

            <Form.Item
              name="otp"
              rules={[
                {
                  required: true,
                  message: "Please enter the verification code!",
                },
                {
                  len: 6,
                  message: "Code must be 6 digits!",
                },
              ]}
            >
              <Input.OTP
                length={6}
                size="large"
                className="justify-center"
                // Optional: formatter={(value) => value} → default is fine
              />
            </Form.Item>

            <div className="flex justify-between items-center text-sm">
              <p className="text-neutral-400">Didn't receive code?</p>
              <Button
                type="link"
                onClick={handleResend}
                loading={isResending}
                disabled={isResending}
                className="text-orange-500 hover:text-orange-600 p-0"
              >
                Resend
              </Button>
            </div>

            <Form.Item className="mb-0">
              <button
  type="submit"
  disabled={isVerifying}
  className={`
    w-full py-3 flex items-center justify-center gap-3
    bg-green-700 text-white rounded
    hover:bg-green-800 disabled:bg-green-800/60
    transition-all font-medium
  `}
>
  {isVerifying ? (
    <>
      <span className="raw-spinner"></span>
     Verifing...
    </>
  ) : (
    "Verify"
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