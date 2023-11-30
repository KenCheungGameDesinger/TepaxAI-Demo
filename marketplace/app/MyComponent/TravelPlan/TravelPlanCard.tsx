// TravelPlanCard.js - 旅行计划卡片组件

import React from "react";

const TravelPlanCard = ({ plan }: { plan: any }) => {
  const {
    Destination,
    StartDate,
    EndDate,
    Travelers,
    Itinerary: { Day },
  } = plan.TravelPlan;

  // 在这里可以根据需求定制卡片的 UI，显示基本信息或图片等
  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{Destination}</h2>
      <p>
        日期：{StartDate} - {EndDate}
      </p>

      {/* 展示每天的行程安排 */}
      <div className="mt-6">
        {Day.map((day:any, index:number) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">日期：{day.Date}</h3>

            {/* 交通方式 */}
            <p>交通方式：{day.Transportation.Mode}</p>
            <p>详情：{day.Transportation.Details}</p>

            {/* 用餐安排 */}
            <div className="mt-4">
              <h4 className="font-semibold mb-2">用餐安排：</h4>
              <p>早餐：{day.Meals.Breakfast}</p>
              <p>午餐：{day.Meals.Lunch}</p>
              <p>晚餐：{day.Meals.Dinner}</p>
            </div>

            {/* 活动安排 */}
            <div className="mt-4">
              <h4 className="font-semibold mb-2">活动安排：</h4>
              <p>活动名称：{day.Activities.Activity.Name}</p>
              <p>描述：{day.Activities.Activity.Description}</p>
              <p>地点：{day.Activities.Activity.Location}</p>
              <p>时间：{day.Activities.Activity.Time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPlanCard;
