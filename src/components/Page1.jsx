import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page1 = () => {
  const title =
    "1. 일 년에 두 계절만 있다고 상상해 보세요. 어느 계절을 고를 건가요?";
  const data = [
    {
      score: 50,
      text: "봄, 가을",
    },
    {
      score: 30,
      text: "여름, 겨울",
    },
    {
      score: 40,
      text: "봄, 여름",
    },
    {
      score: 20,
      text: "가을, 겨울",
    },
    {
      score: 10,
      text: "여름, 가을",
    },
  ];
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("animal-1", value);
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
          <Link to="/page2">다음</Link>
        </Button>
      </div>
    </div>
  );
};
