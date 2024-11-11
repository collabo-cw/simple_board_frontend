import styled from "@emotion/styled";
import PopsComponent from '../../src/components/pops/pops';
import FooterComponent from '../../src/components/footer/footer';
import Slider from 'react-slick'; // Slider 컴포넌트를 import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  position:relative;
  width: 100%;
  box-sizing: border-box;
  background: url("./img/frame.png") no-repeat;
  background-size:100% auto;
  max-width: 440px;
  min-height:860px;
  margin:0 auto;
  padding:120px 40px 0;
`;
const Wrap = styled.div`
  display: block;
  scrollbar-width: none;
  max-height: 600px;
  display: block;
  overflow: scroll;
`;
const SliderBox = styled.div`
  display: block;
  height:230px;
  background: url(./img/mainBanner2.png) no-repeat;
  background-size: 100% 100%;
`;

const LinkText = styled.a`
  position:relative;
  display:block;
  color: #333;
  text-decoration: none;
  font-size:16px;
  font-weight:bold;
  span{
    color:#ff6635;
  }
  ::after{
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5px;
    width: 25px;
    height: 25px;
    background: url(./img/arrowRight.png) no-repeat;
    background-size: 100% auto;
  }
`;

export default function MainPage() {

    const settings = {
      className: "center",
      dots: true, // 페이지네이션 활성화
      infinite: true, // 무한 반복
      speed: 500, // 슬라이드 전환 속도
      slidesToShow: 1, // 한 번에 보이는 슬라이드 수
      slidesToScroll: 1, // 스크롤 시 이동하는 슬라이드 수
      arrows: false // 내비게이션 버튼 제거
    };
      const slidesData = [
        [
          {img :"/img/chooCafe.png", title: "CHOO CAFE", tag:"#청담 #포토존 #패션", date:"2024-09-23"},
          {img :"/img/maison.png", title: "메종 마르지엘라", tag:"#여의도 #패션 #카페", date:"2024-09-23"},
          {img :"/img/dior.png", title: "디올 성수", tag:"#성수 #포토존 #패션", date:"2024-09-23"}
        ], // 첫 번째 슬라이드
        [
          {img :"/img/mainBanner2.png", title: "설화, 다시피어나다", tag:"#북촌 #뷰티 #전시형", date:null},
          {img :"/img/sale.png", title: "TVN 즐건제일", tag:"#성수 #체험형 #포토존", date:null},
          {img :"/img/coffee.png", title: "마일스톤 커피", tag:"#북촌 #데이트 #콜라보", date:null}
        ]  // 두 번째 슬라이드
    ];
  return (
    <Container>
      <Wrap>
          <div>
            <Slider {...settings}>
              <SliderBox></SliderBox>
              <SliderBox></SliderBox>
            </Slider>
          </div>
          <div style={{ marginTop: "30px" }}>
            <div>
              <LinkText href=""><span>소이</span> 님이 좋아할만한 팝스</LinkText>
              <PopsComponent slides={[slidesData[0]]} /> {/* 1, 2, 3 슬라이드 */}
            </div>
            <div>
            <LinkText href="" style={{ marginTop: "20px" }}>지금 뜨는 <span>인기</span> 팝스!</LinkText>
            <PopsComponent slides={[slidesData[1]]} /> {/* 4, 5, 6 슬라이드 */}
            </div>
          </div>
      </Wrap>
      <FooterComponent />
    </Container>
  );
}