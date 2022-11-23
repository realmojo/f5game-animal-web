import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page7 = () => {
  const title = "7. 가장 좋아하는 단어를 고르세요.";
  const data = [
    {
      score: 50,
      text: "행복한",
    },
    {
      score: 20,
      text: "강력한",
    },
    {
      score: 30,
      text: "신비로운",
    },
    {
      score: 40,
      text: "친절한",
    },
    {
      score: 10,
      text: "부유한",
    },
  ];
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("animal-7", value);
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
          <Link to="/page8">다음</Link>
        </Button>
      </div>
    </div>
  );
};
