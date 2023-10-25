import * as S from "./style";
import { data } from "../../../App/data";
import LimitedTimeOffers from "./components/LimitedTimeOffers";
import TrendingNow from "./components/TrendingNow";
import { useMemo } from "react";
import {} from "antd";
function Home() {
  const { typedClocks } = data;
  const renderTypeClocks = useMemo(() => {
    // render TypeClocks
    return typedClocks.map((item, index) => {
      return (
        <S.TypeClockItem md={8} xs={8} key={index}>
          <S.ImageTypeWrapper>
            <S.ImageTypeClock src={item.image}></S.ImageTypeClock>
          </S.ImageTypeWrapper>
          <S.NameTypeClock>{item.name}</S.NameTypeClock>
        </S.TypeClockItem>
      );
    });
  }, [typedClocks]);
  const renderTypeClocksMobile = useMemo(() => {
    return typedClocks.map((item, index) => {
      return (
        <S.TypedMobileItem key={index}>
          {item.name.toUpperCase()}
        </S.TypedMobileItem>
      );
    });
  }, [typedClocks]);
  // render trending now
  return (
    <S.HomeWrapper gutter={[16, 16]}>
      <S.LogoWrapper xs={24} md={24} sm={24} xl={24}>
        <S.Logo src="https://media.licdn.com/dms/image/C5112AQEfptQtGhQJzg/article-cover_image-shrink_720_1280/0/1520153250066?e=2147483647&v=beta&t=OFTPWbq17Js1SyMYjopAHujweUE000l92Dn8kgYHAO0"></S.Logo>
        <S.TypedClockList gutter={[16, 16]} justify={"space-between"}>
          {renderTypeClocks}
        </S.TypedClockList>
      </S.LogoWrapper>
      <S.TypeClockMobile justify={"space-between"}>
        {renderTypeClocksMobile}
      </S.TypeClockMobile>
      <LimitedTimeOffers />
      <TrendingNow />
    </S.HomeWrapper>
  );
}

export default Home;