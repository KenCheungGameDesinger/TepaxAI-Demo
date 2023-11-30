"use client";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { initWeb3, publishCoupon } from "./web3";

export default function CouponForm() {
  const [couponData, setCouponData] = useState({
    name: "",
    description: "",
    discountType: "percentage",
    discountAmount: 1,
    validFrom: "",
    validTo: "",
    conditions: "",
    maxUsagePerUser: "",
    // 添加其他字段...
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // 在这里执行提交逻辑
    await initWeb3();
    await publishCoupon(couponData);
    console.log(couponData);
    // 可以将 couponData 发送到后端或执行其他操作
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCouponData({
      ...couponData,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">录入优惠券信息</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            名称：
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={couponData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
          />
          <label htmlFor="name" className="block mb-2">
            折扣信息：
          </label>

          <Textarea
            id="info"
            name="description"
            value={couponData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
          />
          <label htmlFor="name" className="block mb-2">
            折扣：
          </label>
          <div className="flex w-1/3">
            <input
              type="number"
              name="discountAmount"
              defaultValue={1}
              onChange={handleChange}
              value={couponData.discountAmount}
              className="w-1/3"
            ></input>
            <label htmlFor="name" className="block mb-2">
              折
            </label>
          </div>
          <label htmlFor="name" className="block mb-2">
            有效期：
          </label>
          <input
            type="date"
            name="validFrom"
            id="valid from"
            className="mr-8"
            onChange={handleChange}
          />
          {" -- "}
          <input
            type="date"
            name="validTi"
            id="valid to"
            className="ml-8"
            onChange={handleChange}
          />
          <label htmlFor="name" className="block mb-2">
            條款：
          </label>
          <Textarea name="conditions" id="condition" onChange={handleChange} />
        </div>
        {/* 其他表单字段 */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          提交
        </button>
      </form>
    </div>
  );
}
