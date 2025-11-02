export default function Main() {
  return (
    <body>
    <main>
        <section>
            <h1>포켓몬 API</h1>
            <p>포켓몬 데이터를 조회하고 탐색할 수 있는 웹 인터페이스입니다.</p>
            <a href="/pokemon">포켓몬 목록 보기</a>
        </section>
        <section>
            <article>
                <h5>포켓몬 검색</h5>
                <p>이름, 타입, 카테고리로 포켓몬을 검색할 수 있습니다.</p>
                <a href="/pokemon">검색하기</a>
            </article>
            <article>
                <h5>통계 조회</h5>
                <p>포켓몬의 타입별, 카테고리별 통계를 확인할 수 있습니다.</p>
                <a href="/pokemon/stats">통계 보기</a>
            </article>
            <article>
                <h5>API 문서</h5>
                <p>RESTful API를 통해 프로그래밍 방식으로 데이터에 접근할 수 있습니다.</p>
                <a href="/docs">API 정보</a>
            </article>
            <article>
                <h5>시스템 상태</h5>
                <p>서버 상태, 가동 시간, 메모리 사용량 등 시스템 정보를 확인할 수 있습니다.</p>
                <a href="/health">API 상태</a>
            </article>
        </section>
        <section>
            <h5>API 정보</h5>
            <div>
                <div>
                    <h6>API 엔드포인트</h6>
                    <ul>
                        <li><code>GET /api/pokemon</code> - 포켓몬 목록 조회</li>
                        <li><code>GET /api/pokemon/:id</code> - 특정 포켓몬 조회</li>
                        <li><code>GET /api/pokemon/search/name/:name</code> - 이름으로 검색</li>
                        <li><code>GET /api/pokemon/type/:type</code> - 타입별 조회</li>
                        <li><code>GET /api/pokemon/stats/overview</code> - 통계 조회</li>
                    </ul>
                </div>
                <div>
                    <h6>사용 가능한 파라미터</h6>
                    <ul>
                        <li><strong>page</strong> - 페이지 번호</li>
                        <li><strong>limit</strong> - 페이지당 항목 수</li>
                        <li><strong>search</strong> - 검색어</li>
                        <li><strong>type</strong> - 포켓몬 타입</li>
                        <li><strong>sortBy</strong> - 정렬 기준</li>
                        <li><strong>sortOrder</strong> - 정렬 순서 (ASC/DESC)</li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <p>© 2025 포켓몬 API. 모든 포켓몬 데이터는 교육 목적으로만 사용됩니다.</p>
    </footer>
</body>
  );
}

