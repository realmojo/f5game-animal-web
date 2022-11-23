import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import AdSense from "react-adsense";

export const Home = () => {
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-3xl text-center pt-16">영적 동물 테스트</h1>
      <div className="text-center mb-2 px-2">
        당신의 정신세계를 지배하는 동물은 무엇인가요? <br />
        마음속 깊은 곳 어딘가에, 우리 모두는 자신만의 영적인 동물을 가지고
        있습니다.
      </div>
      <div className="text-center mb-2 px-2">
        하지만 오늘은 그저 신화적인 동물 이야기를 하려는 것이 아닙니다!
      </div>
      <div className="text-center mb-2 px-2">
        여러분 안에 어떤 동물이 살고 있는지 알아볼 준비가 됐나요?
      </div>
      <AdSense.Google
        style={{ display: "block" }}
        client="ca-pub-9130836798889522"
        slot="2653100417"
        format="auto"
        responsive="true"
      />
      <div className="text-center mt-2">
        <Button style={{ width: 336 }} type="primary" size="large">
          <Link to="/page1">START</Link>
        </Button>
      </div>
    </div>
  );
};
