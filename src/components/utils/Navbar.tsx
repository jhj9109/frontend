import React from 'react';
import '@css/utils/Navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import GlobalLoginState from '@recoil/GlobalLoginState';
import { clearToken, getToken } from '@cert/TokenStorage';
import { Dropdown } from './Dropdown';

function Navbar() {
  const setLoginState = useSetRecoilState(GlobalLoginState);
  const navigate = useNavigate();

  const onClickLogOut = () => {
    clearToken();
    setLoginState(() => {
      return {
        id: '',
        isLogin: false,
        isAdmin: false,
        profileUrl: '',
      };
    });
    alert('로그아웃 되셨습니다!');
    navigate('/auth');
  };

  const onClickAuthTimeline = () => {
    if (getToken()) {
      navigate('/2022-timeline');
    } else {
      alert('로그인을 먼저 해주세요!');
      navigate('/auth');
    }
  };

  const onClickAuthReview = () => {
    if (getToken()) {
      navigate('/review/');
    } else {
      alert('로그인을 먼저 해주세요!');
      navigate('/auth');
    }
  };

  const onClickEventCreate = () => {
    navigate('/');
  };

  const onClickEventMatching = () => {
    navigate('/Result');
  };

  const onClickRotation = () => {
    if (getToken()) {
      navigate('/rotation/');
    } else {
      alert('로그인을 먼저 해주세요!');
      navigate('/auth');
    }
  };

  const onClickCalendar = () => {
    navigate('/rotation/calendar');
  };

  return (
    <div className="navbar--wrapper">
      <Dropdown
        title={<button>이벤트</button>}
        menu={[
          <button onClick={onClickEventCreate}>이벤트 생성</button>,
          <button onClick={onClickEventMatching}>이벤트 매칭</button>,
        ]}
      />
      <Dropdown
        title={<button>사서 로테이션</button>}
        menu={[
          <button onClick={onClickRotation}>로테이션</button>,
          <button onClick={onClickCalendar}>사서 달력</button>,
        ]}
      />
      <span onClick={onClickAuthReview}>친스타그램</span>
      <span onClick={onClickAuthTimeline}>집현전실록</span>
      {getToken() ? <span onClick={onClickLogOut}>로그아웃</span> : <Link to={`/auth`}>로그인하기</Link>}
    </div>
  );
}

export default Navbar;
