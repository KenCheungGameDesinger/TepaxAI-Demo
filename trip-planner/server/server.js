const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({
        "TravelPlan": {
          "Destination": "香港",
          "StartDate": "2023-07-10",
          "EndDate": "2023-07-15",
          "Travelers": {
            "Traveler": [
              {
                "Name": "小明",
                "Age": 18,
                "Gender": "男",
                "Nationality": "中国"
              },
              {
                "Name": "小红",
                "Age": 19,
                "Gender": "女",
                "Nationality": "中国"
              },
              {
                "Name": "小李",
                "Age": 20,
                "Gender": "男",
                "Nationality": "中国"
              }
            ]
          },
          "Itinerary": {
            "Day": [
              {
                "Date": "2023-07-10",
                "Transportation": {
                  "Mode": "飞机",
                  "Details": "从北京飞往香港"
                },
                "Meals": {
                  "Breakfast": "机上早餐",
                  "Lunch": "机上午餐",
                  "Dinner": "香港酒店晚餐"
                },
                "Activities": {
                  "Activity": {
                    "Name": "抵达香港",
                    "Description": "抵达后入住酒店，休息",
                    "Location": "香港国际机场",
                    "Time": "下午14:00"
                  }
                }
              },
              {
                "Date": "2023-07-11",
                "Transportation": {
                  "Mode": "地铁",
                  "Details": "前往香港迪士尼乐园"
                },
                "Meals": {
                  "Breakfast": "酒店早餐",
                  "Lunch": "迪士尼乐园午餐",
                  "Dinner": "酒店晚餐"
                },
                "Activities": {
                  "Activity": {
                    "Name": "迪士尼乐园探险",
                    "Description": "度过一天在乐园玩耍",
                    "Location": "香港迪士尼乐园",
                    "Time": "全天"
                  }
                }
              },
              {
                "Date": "2023-07-12",
                "Transportation": {
                  "Mode": "出租车",
                  "Details": "前往维多利亚港"
                },
                "Meals": {
                  "Breakfast": "酒店早餐",
                  "Lunch": "海边午餐",
                  "Dinner": "香港夜景晚餐"
                },
                "Activities": {
                  "Activity": {
                    "Name": "维多利亚港游船",
                    "Description": "晚上在游船上欣赏维多利亚港夜景",
                    "Location": "维多利亚港",
                    "Time": "晚上19:00"
                  }
                }
              },
              {
                "Date": "2023-07-13",
                "Transportation": {
                  "Mode": "地铁",
                  "Details": "参观天坛大佛"
                },
                "Meals": {
                  "Breakfast": "酒店早餐",
                  "Lunch": "大佛附近午餐",
                  "Dinner": "香港酒店晚餐"
                },
                "Activities": {
                  "Activity": {
                    "Name": "天坛大佛参观",
                    "Description": "参观天坛大佛，感受宗教文化",
                    "Location": "天坛大佛",
                    "Time": "上午10:00"
                  }
                }
              },
              {
                "Date": "2023-07-14",
                "Transportation": {
                  "Mode": "地铁",
                  "Details": "自由活动和购物"
                },
                "Meals": {
                  "Breakfast": "酒店早餐",
                  "Lunch": "购物区午餐",
                  "Dinner": "香港酒店晚餐"
                },
                "Activities": {
                  "Activity": {
                    "Name": "自由活动和购物",
                    "Description": "探索香港的购物区域，自由活动",
                    "Location": "香港市区",
                    "Time": "全天"
                  }
                }
              },
              {
                "Date": "2023-07-15",
                "Transportation": {
                  "Mode": "飞机",
                  "Details": "返回北京"
                },
                "Meals": {
                  "Breakfast": "酒店早餐",
                  "Lunch": "机上午餐",
                  "Dinner": "回国晚餐"
                },
                "Activities": {
                  "Activity": {
                    "Name": "离开香港",
                    "Description": "退房并前往香港国际机场，结束旅程",
                    "Location": "香港国际机场",
                    "Time": "上午11:00"
                  }
                }
              }
            ]
          }
        }
      })
})

app.listen(10000, () => {console.log("Server started on http://localhost:10000/")})


// route, controller, model