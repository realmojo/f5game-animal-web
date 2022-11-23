import React from "react";
import { Button, Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { AdsensePage } from "./adsense/page";

export const Page10 = () => {
  const title = "10. 좋아하는 영화 장르는 무엇인가요?";
  const data = [
    {
      score: 10,
      text: "액션 영화",
    },
    {
      score: 20,
      text: "코미디 드라마",
    },
    {
      score: 50,
      text: "호러 영화",
    },
    {
      score: 30,
      text: "서사적인 영화",
    },
    {
      score: 40,
      text: "범죄 스릴러 & 미스테리",
    },
  ];
  const doChange = (e) => {
    const { value } = e.target;
    localStorage.setItem("animal-10", value);
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
          <Link to="/result">다음</Link>
        </Button>
      </div>
    </div>
  );
};
