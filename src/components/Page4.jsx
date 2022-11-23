import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page4 = () => {
  const title = "4. 어떤 사람과 대화하고 싶나요?";
  const data = [
    {
      score: 10,
      text: "똑똑하면서도 냉소적인 사람",
    },
    {
      score: 20,
      text: "귀엽고 재미있는 사람",
    },
    {
      score: 40,
      text: "지적이면서 내성적인 사람",
    },
    {
      score: 50,
      text: "활기차고 재치있는 사람",
    },
    {
      score: 30,
      text: "착하고 현명한 사람",
    },
  ];
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("animal-4", value);
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
          <Link to="/page5">다음</Link>
        </Button>
      </div>
    </div>
  );
};
