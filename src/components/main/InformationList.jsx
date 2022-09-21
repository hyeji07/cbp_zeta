import React from 'react';
import InfoSwiper from './InfoSwiper';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/main/information.scss';

const InformationList = () => {

  const totalData = ['M&A・투자정보', '정부지원사업 참여 모집', '정책자금 / 기업지원정보', '기술거래 리스트', '컨설팅 실적', 'Q&A'];
  return (
    <div className="mainInformation">
      <h2 className="mainInfoTitle">ZETA INFORMATION</h2>
      <div className='infoSwiperBoxList'>
        {
          totalData.map((item, index)=> {
            return <InfoSwiper key={index} data={totalData[index]} />
          })
        }
      </div>
      <Link to="/datainfo" className='mainInfoMoreBtn'>더보기</Link>
    </div>
  );
};

export default React.memo(InformationList);