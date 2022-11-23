import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page6 = () => {
  const title = "6. 만약 당신이 사물이라면 무엇일까요?";
  const data = [
    {
      score: 20,
      text: "식물원의 아름답고 희귀한 꽃",
    },
    {
      score: 50,
      text: "모두가 갖고 싶어 하는 새로운 기계 장치",
    },
    {
      score: 10,
      text: "초고속 경주용 자동차",
    },
    {
      score: 40,
      text: "다람쥐 가족이 사는 오래 된 나무",
    },
    {
      score: 30,
      text: "보물들과 함정들로 가득 찬 신비한 동굴",
    },
  ];
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("animal-6", value);
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
          <Link to="/page7">다음</Link>
        </Button>
      </div>
    </div>
  );
};
