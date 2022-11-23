import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page3 = () => {
  const title = "3. 가장 좋아하는 슈퍼히어로는?";
  const data = [
    {
      score: 30,
      text: "닥터 스트레인지를 존경합니다.",
    },
    {
      score: 40,
      text: "플래시의 놀라운 속도에 감탄하죠!",
    },
    {
      score: 10,
      text: "헐크만큼 강했으면 좋겠어요!",
    },
    {
      score: 20,
      text: "나는 울버린이 더 좋아요.",
    },
    {
      score: 50,
      text: "스파이더맨이 최고 아닌가요?",
    },
  ];
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("animal-3", value);
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
          <Link to="/page4">다음</Link>
        </Button>
      </div>
    </div>
  );
};
