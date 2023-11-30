// TravelPlanDetails.js - 旅行计划详细信息页面组件

import React from "react";

const TravelPlanDetails = ({ plan }: { plan: any }) => {
  const { Destination, StartDate, EndDate, Travelers, Itinerary } = plan;

  // 在这里根据需求展示详细信息页面的布局，显示行程安排、活动、用餐等详细信息
  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{Destination}</h2>
      <p>
        日期：{StartDate} - {EndDate}
      </p>
      {/* 根据行程安排、用餐、活动等信息生成相应的内容 */}
    </div>
  );
};

export default TravelPlanDetails;
