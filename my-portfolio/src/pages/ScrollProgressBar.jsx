import React, { useState, useEffect, useCallback } from "react";
import { throttle } from "lodash"; // Lodash의 throttle을 사용할 수 있습니다.

const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  // 스크롤 핸들러 최적화 (useCallback으로 메모이제이션)
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY; // 현재 스크롤 위치
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight; // 스크롤 가능한 전체 길이
    const scrollProgress = (scrollTop / documentHeight) * 100; // 스크롤 퍼센티지 계산
    setScrollWidth(scrollProgress); // 상태 업데이트
  }, []);

  useEffect(() => {
    // 스크롤 및 리사이즈 이벤트에 핸들러 추가 (throttle을 사용하여 성능 최적화)
    const throttledHandleScroll = throttle(handleScroll, 100); // 100ms에 한 번만 실행되도록 설정
    window.addEventListener("scroll", throttledHandleScroll);
    window.addEventListener("resize", throttledHandleScroll); // 화면 크기 변경에도 대응

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll); // 클린업
      window.removeEventListener("resize", throttledHandleScroll); // 클린업
    };
  }, [handleScroll]);

  return (
    <div
      style={{
        position: "fixed",
        top: "0px", // 필요에 따라 조정
        left: 0,
        width: `${scrollWidth}%`, // 스크롤 퍼센티지에 따라 너비 설정
        height: "5px", // 프로그레스바 높이
        backgroundColor: "#3498db", // 색상
        zIndex: 1000,
        transition: "width 0.25s ease-out", // 부드러운 전환 효과
      }}
    />
  );
};

export default ScrollProgressBar;
