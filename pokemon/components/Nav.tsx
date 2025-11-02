import Image from "next/image";

export default function Nav() {
  return (
    <div>
        <nav>
            <a href="/">포켓몬 API</a>
            <a href="/">홈</a>
            <a href="/pokemon">포켓몬 목록</a>
            <a href="/pokemon/stats">통계</a>
            <a href="/docs">API 문서</a>
            <a href="/health">시스템 상태</a>
        </nav>
    </div>
  );
}