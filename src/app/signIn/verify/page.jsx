'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import backgroundImage from "../../../../public/img/background5.jpg";
import { Spin } from "antd";

export default function Verify() {

  const inputRefs = useRef([]);

  const [loading, setLoading] = useState(false);

  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Submit OTP
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const code = otpValues.join("");

    // if (code.length !== 6) {
    //   toast.info("Please enter all 6 digits.");
    //   return;
    // }
    // setLoading(true);

    // try {
    //   const res = await verifyOtp({ email, code: Number(code) }).unwrap();

    //   if (res?.success) {
    //     toast.success(res?.message);
    //     localStorage.setItem("resetToken", res?.data?.resetToken);
    //     router.push("/signIn/newpass");
    //   }
    //   setLoading(false);
    // } catch (error) {
    //   setLoading(false);
    //   toast.error(error?.data?.message);
    // }
  };

  // Resend code
  const handleResend = async () => {
    // try {
    //   if (!email)
    //     return Swal.fire("Error", "Email not found in local storage", "error");

    //   const res = await resend({ email }).unwrap();
    //   if (res?.success) {
    //     Swal.fire(
    //       "Sent!",
    //       "A new verification code has been sent to your email.",
    //       "success"
    //     );
    //   }
    // } catch (error) {
    //   Swal.fire(
    //     "Error",
    //     error?.data?.message || "Failed to resend code",
    //     "error"
    //   );
    // }
  };
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center backdrop-blur-2xl"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      {/* LOGIN CARD */}
      <div className="w-[500px] bg-secondary shadow-2xl rounded-md  border border-gray-300 relative">
        {/* TOP CIRCLE ICON */}
        <div
          className="mt-4 flex justify-center
           "
        >
          <Image
            src="/img/logo4.png"
            width={105}
            height={100}
            alt="icon"
            className="object-contain"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-center text-3xl font-serif mt-3 text-green-900">
          Verify Your Email
        </h1>

        {/* GREEN TRIANGLE AREA */}
        <div className="relative mt-7 px-10 py-10">
          <div className="absolute -mr-[1px] inset-0 bg-primary clip-tri"></div>

        <form className="relative space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-6 gap-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="bg-white text-3xl text-center border rounded  md:h-[50px] h-[50px] focus:outline-none focus:ring-2 focus:ring-orange-400"
                  onInput={(e) => handleInputChange(e, i)}
                  ref={(el) => (inputRefs.current[i] = el)}
                  value={otpValues[i]}
                />
              ))}
          </div>

          <div className="flex justify-between">
            <p className="text-neutral-400">Didn&apos;t receive code?</p>
            <button
              type="button"
              onClick={handleResend}
              className="font-semibold text-orange-500 hover:underline"
            >
              Resend
            </button>
          </div>

          <Link href={'/signIn/newpass'}><button
            className={`w-full py-3 rounded text-white flex justify-center items-center gap-2 transition-all duration-300 ${
              loading
                ? "bg-primary cursor-not-allowed"
                : "bg-primary hover:bg-primary"
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
          </button></Link>
        </form>
        </div>

        {/* FOOTER */}
        <p className="text-center text-xs py-4 text-gray-700">
          © 2018 Green Login Form . All Rights Reserved | Design by W3layouts
        </p>
      </div>
    </div>
  );
}
