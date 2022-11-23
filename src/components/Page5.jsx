import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page5 = () => {
  const title =
    "5. 전 세계 어디에든 완벽한 집을 지을 수 있다면 어떤곳을 선택하시겠습니까?";
  const data = [
    {
      score: 10,
      text: "문명에서 멀리 떨어진 높은 산 위",
    },
    {
      score: 20,
      text: "모두가 서로를 아는 작은 마을",
    },
    {
      score: 30,
      text: "25명 정도밖에 살지 않는 섬",
    },
    {
      score: 50,
      text: "인기 있고 비싼 해변 휴양지",
    },
    {
      score: 40,
      text: "거대한 정원으로 둘러싸인 시골",
    },
  ];
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("animal-5", value);
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
          <Link to="/page6">다음</Link>
        </Button>
      </div>
    </div>
  );
};
