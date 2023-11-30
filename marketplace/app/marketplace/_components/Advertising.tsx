import React from "react";

type Props = {
  title: string; // 广告标题
  content: string; // 广告内容
  imageUrl?: string; // 图片 URL
  ctaText?: string; // Call to Action 按钮文本
};

const Advertising = (props: Props) => {
  const backgroundStyle = {
    backgroundImage: `url(https://www.imagetours.com/__media/tours/HG/cover.jpg)`,
  };
  return (
    <div
      className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-md mb-8 p-6 text-center relative overflow-hidden"
      style={{
        // backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div
        className="absolute inset-0 bg-black opacity-40 rounded-md"
        style={{ backdropFilter: 'brightness(0.8)' }}
      /> */}

      <div className="relative z-10 text-white">
        {/* 标题 */}
        <h2 className="text-xl font-semibold mb-2">{props.title}</h2>

        {/* 内容 */}
        <p>{props.content}</p>

        {/* 按钮 */}
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md mt-4">
          {props.ctaText || "立即行动"}
        </button>
      </div>
    </div>
  );
};

export default Advertising;
