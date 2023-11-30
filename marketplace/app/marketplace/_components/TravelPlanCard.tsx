'use client'
// TravelPlanCard.js - 旅行计划卡片组件

import { ThumbsUp } from "lucide-react";
import React from "react";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import AvatarGroup from "./AvatarGroup";
import Web3, { Bytes } from "web3";

const TravelPlanCard = ({ plan }: { plan: any }) => {
  const {
    Title,
    Travelers,
    Itinerary,
    Description,
    TotalDays,
    TotalNights,
    Creator,
    CoverImage,
    Likes,
    Purchased,
    Favorited,
    Restaurants,
    Hotels,
    Attractions,
  } = plan.TravelPlan;

  const hasCoverImage = CoverImage !== "";
  // 用户点击购买按钮时触发的函数
  async function handlePurchase() {
    if ((window as any).ethereum) {
      // 连接到 MetaMask
      try {
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        const web3 = new Web3((window as any).ethereum);

        // 用户的钱包地址
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

        // 创建交易
        const transaction = {
          from: userAddress,
          to: "收款地址",
          value: web3.utils.toWei("0.1", "ether"), // 发送的以太币数量
        };

        // 发送交易
        const result = await web3.eth.sendTransaction(transaction);

        // 监听交易确认
        try {
          web3.eth.getTransactionReceipt(result.transactionHash);
          console.log("购买成功！");
        } catch (error) {
          console.error("购买失败！");
        }
      } catch (error) {
        console.error("连接 MetaMask 失败：", error);
      }
    } else {
      console.error("MetaMask 未安装！");
    }
  }
  return (
    // <div className="bg-white rounded-md p-4 shadow-md">
    //   {/* 旅行封面或默认封面 */}
    //   {hasCoverImage ? (
    //     <img
    //       src={CoverImage}
    //       alt="旅行封面"
    //       className="w-full h-32 object-cover rounded-md mb-4"
    //     />
    //   ) : (
    //     <div className="w-full h-32 bg-gray-300 rounded-md mb-4" />
    //   )}

    //   <div className="flex items-center justify-between mb-4">
    //     {/* 旅行计划标题 */}
    //     <h3 className="text-lg font-semibold">{Title}</h3>

    //     {/* 收藏、点赞、购买按钮 */}
    //     {/* 收藏、点赞、购买按钮 */}
    //     <div className="flex items-center space-x-1">
    //       <button className="text-gray-600 hover:text-gray-800 p-1">
    //         <FaHeart
    //           className={`${
    //             Favorited ? "text-red-500" : "text-gray-400"
    //           } w-4 h-4`}
    //         />
    //       </button>
    //       <button className="text-gray-600 hover:text-gray-800 flex items-center p-1">
    //         <ThumbsUp className="text-gray-400 w-4 h-4" />
    //         <span className="text-sm ml-1">{Likes}</span>
    //       </button>
    //       <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md">
    //         {Purchased ? "已购买" : "购买"}
    //       </button>
    //     </div>
    //   </div>

    //   {/* 其他旅行计划信息，根据需要添加 */}
    //   {/* 例如：旅行计划描述、总天数、总夜晚、创作者头像等 */}
    //   {/* 还可以添加其他信息，例如餐厅、酒店、景点的图标和数量等 */}
    //   {/* 这些信息可以根据实际数据结构和样式需求来完善 */}
    //   {/* ... */}

    //   {/* 旅行计划描述 */}
    //   <p className="text-sm text-gray-600 mb-2">{Description}</p>

    //   {/* 同行者头像集合 */}
    //   <div className="flex items-center space-x-2 mb-4">
    //     {/* {Travelers.map((traveler: any, index: any) => (
    //       <img
    //         key={index}
    //         src={`头像URL ${index}`}
    //         alt={`同行者 ${index + 1}`}
    //         className="w-8 h-8 rounded-full border-2 border-white"
    //       />
    //     ))} */}
    //   </div>

    //   {/* 景点、餐厅、酒店图标和数量统计 */}
    //   {/* 这里需要根据实际数据结构展示对应的图标和数量 */}
    //   {/* ... */}

    //   {/* 總共經歷的月和日 */}
    //   <p className="text-sm text-gray-600 mb-2">
    //     共 {TotalDays} 天 {TotalNights} 夜
    //   </p>

    //   {/* 創作者頭像 */}
    //   <img
    //     src={`data:image/jpeg;base64,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`}
    //     alt="创作者头像"
    //     className="w-8 h-8 rounded-full mb-2"
    //   />
    // </div>
    <div className="bg-white rounded-md p-4 shadow-md">
      {/* 旅行封面或默认封面 */}
      {hasCoverImage ? (
        <img
          src={CoverImage}
          alt="旅行封面"
          className="w-full h-32 object-cover rounded-md mb-4"
        />
      ) : (
        <div className="w-full h-32 bg-gray-300 rounded-md mb-4" />
      )}
      <div className="flex justify-between items-center mb-4">
        {/* 旅行计划标题 */}
        <h3 className="text-lg font-semibold">{Title}</h3>

        {/* 收藏、点赞按钮 */}
        <div className="flex items-center space-x-1">
          <button className="text-gray-600 hover:text-gray-800 p-1">
            <FaHeart
              className={`${
                Favorited ? "text-red-500" : "text-gray-400"
              } w-4 h-4`}
            />
          </button>
          <button className="text-gray-600 hover:text-gray-800 flex items-center p-1">
            <ThumbsUp className="text-gray-400 w-4 h-4" />
            <span className="text-sm ml-1">{Likes}</span>
          </button>
        </div>
      </div>
      {/* <p className="text-sm text-gray-600 mb-2 line-clamp-2 transition-opacity duration-500 ease-in-out text-ellipsis overflow-hidden ... opacity-100 hover:opacity-0">
        {Description}
      </p> */}
      <p className="text-sm text-gray-500 mb-2 text-ellipsis overflow-hidden ...">
        {Description}
      </p>

      <p className="text-sm text-gray-600 mb-2">
        共 {TotalDays} 天 {TotalNights} 夜
      </p>
      <div className="flex justify-between items-center mb-4">
        {/* 創作者頭像 */}
        <div className="flex items-center">
          <AvatarGroup />
          <img
            src={`data:image/jpeg;base64,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`}
            alt="创作者头像"
            className="w-8 h-8 rounded-full -ml-4"
          />
        </div>
        {/* 购买按钮 */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-md"
          onClick={handlePurchase}
        >
          {Purchased ? "已购买" : "购买"}
        </button>
      </div>
    </div>
  );
};

export default TravelPlanCard;
