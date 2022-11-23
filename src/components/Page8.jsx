import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page8 = () => {
  const title = "8. 문제를 어떻게 해결하시나요?";
  const data = [
    {
      score: 40,
      text: "먼저 계획을 세웁니다. 그러고 나서, 그것을 실행하기 위해 일하죠.",
    },
    {
      score: 50,
      text: "문제를 연구하고 온라인에서 해결책을 찾습니다.",
    },
    {
      score: 10,
      text: "문제가 사라지거나 더 이상 간과할 수 없을 때까지 기다립니다.",
    },
    {
      score: 30,
      text: "문제요? 문제가 하나도 없는데요!",
    },
    {
      score: 20,
      text: "상황에 따라 즉흥적으로 대처합니다. 대부분의 경우 효과가 있어요.",
    },
  ];
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("animal-8", value);
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
          <Link to="/page9">다음</Link>
        </Button>
      </div>
    </div>
  );
};
