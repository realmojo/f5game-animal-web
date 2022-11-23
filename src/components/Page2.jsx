import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page2 = () => {
  const title = "2. 어디가 가장 편한가요?";
  const data = [
    {
      score: 20,
      text: "형형색색의 가을 숲",
    },
    {
      score: 50,
      text: "정신없이 바쁜 도시",
    },
    {
      score: 40,
      text: "호수, 강, 바다처럼 큰 물가",
    },
    {
      score: 30,
      text: "여름철 집 근처의 공원",
    },
    {
      score: 10,
      text: "산 속",
    },
  ];
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("animal-2", value);
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
          <Link to="/page3">다음</Link>
        </Button>
      </div>
    </div>
  );
};
