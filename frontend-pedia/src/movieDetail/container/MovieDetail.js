import React from 'react';
import './MovieDetail.scss';
import { Container } from '@material-ui/core';

export default function Home() {
  return (
    <div className="movieDetail">
      <div className="headerWrapper">헤더</div>
      <div className="contentWrapper">
        <Container className="contentBox" maxWidth="sm">
          <div className="movieInfo">
            <div className="infoHeader">
              기본정보<span>더보기</span>
            </div>
            <div className="infoContent">
              <div>미나리</div>
              <div>2020.미국.드라마</div>
              <div>1시간 56분</div>
              <div>
                "미나리는 어디서든 잘 자라" 낯선 미국, 아칸소로 떠나온 한국
                가족들에게 뭔가 해내는 걸 보여주고 싶은 아빠 '제이콥'(스티븐
                연)은 자신만의 농장을 가꾸기 시작하고 엄마 '모니카'(한예리)도
                다시 일자리를 찾는다. 아직 어린아이들...
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="footer">푸터</div>
    </div>
  );
}