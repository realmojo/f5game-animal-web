import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page9 = () => {
  const title = "9. ‘재충전’을 위한 최고의 방법은 무엇인가요?";
  const data = [
    {
      score: 40,
      text: "오랫동안 해변 걷기",
    },
    {
      score: 10,
      text: "좋은 식당에서 친구들과 함께 맛있는 식사하기",
    },
    {
      score: 20,
      text: "가장 좋아하는 컴퓨터 게임하기",
    },
    {
      score: 30,
      text: "하루종일 자기",
    },
    {
      score: 50,
      text: "외출, 영화, 술집, 클럽",
    },
  ];
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("animal-9", value);
  };
  return (
    <div>
      <h1 className="pl-3 pr-2 pt-2 text-2xl font-bold">{title}</h1>

      <div className="pl-3 pt-3 pb-5">
        <Radio.Group className="font-default" onChange={doChange}>
          <Space direction="vertical">
            {data.map((item) => (
              <Radio key={item.score} value={item.score}>
                {item.text}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </div>
      <AdsensePage />
      <div className="text-center mt-2">
        <Button style={{ width: 336 }} type="primary" size="large">
          <Link to="/page10">다음</Link>
        </Button>
      </div>
    </div>
  );
};
