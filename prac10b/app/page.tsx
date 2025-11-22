
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-blue-50">
      <div className="max-w-4xl w-full">
        <Heading level={1} size="3xl" align="center" className="mb-8 text-gray-800">
          오늘 우리팀의 성적은??
        </Heading>

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="elevated" padding="lg">
            <Heading level={2} size="xl" marginBottom>
              경기 결과
            </Heading>
            <Text color="muted" marginBottom>
              team A 5 - 3 team B<br/>
              team C 2 - 4 team D<br/>
              team E 1 - 0 team F<br/>
              team G 3 - 3 team H<br/>
              team I 2 - 2 team J
            </Text>
            <Button href="/result" variant="secondary" size="md">
              자세히
            </Button>
          </Card>

          <Card variant="elevated" padding="lg">
            <Heading level={2} size="xl" marginBottom>
              순위
            </Heading>
            <Text color="muted" marginBottom>
              1. team A<br/>
              2. team B<br/>
              3. team C<br/>
              4. team D<br/>
              5. team E
            </Text>
            <Button href="/ranking" variant="secondary" size="md">
              자세히
            </Button>
          </Card>
        </div>

        <div className="mt-12">
            <Heading level={3} size="lg" marginBottom>
                최근 소식
            </Heading>
            <Text color="muted" marginBottom>
                이번주 가장 핫한 뉴스는?
            </Text>
            <Card variant="elevated" padding="md" className="mb-6">
                <Link
              href="/news1"
              className="flex items-center text-lg font-semibold text-gray-900 hover:text-blue-600"
            >
              OOO선수, 역대 최다 홈런 기록 경신!
            </Link>
                <Text color="muted" marginBottom>
                    O월 O일 A vs B의 경기에서 OOO선수가 솔로 홈런을 치며 통산 최다 홈런 기록을 경신했습니다...
                </Text>
            </Card>
            <Card variant="elevated" padding="md" className="mb-6">
                <Link
              href="/news2"
              className="flex items-center text-lg font-semibold text-gray-900 hover:text-blue-600"
            >
              국가대표 선발 명단 발표
            </Link>
                <Text color="muted" marginBottom>
                    O월 O일, 2025년 올림픽을 대비한 국가대표 야구팀 최종 명단이 발표되었습니다...
                </Text>
            </Card>
            <Card variant="elevated" padding="md" className="mb-6">
                <Link
              href="/news3"
              className="flex items-center text-lg font-semibold text-gray-900 hover:text-blue-600"
            >
              OOO선수, G팀으로 이적?
            </Link>
                <Text color="muted" marginBottom>
                    최근 FA 시장에서 가장 주목받고 있는 OOO선수의 이적 소식이 화제입니다...
                </Text>
            </Card>
            <div className="flex justify-center gap-4">
                <Button variant="secondary" size="sm">
                    &lt;
                </Button>
                <Button variant="ghost" size="sm">
                    1
                </Button>
                <Button variant="ghost" size="sm">
                    2
                </Button>
                <Button variant="ghost" size="sm">
                    3
                </Button>
                <Button variant="ghost" size="sm">
                    4
                </Button>
                <Button variant="ghost" size="sm">
                    5
                </Button>
                <Button variant="secondary" size="sm">
                    &gt;
                </Button>
            </div>
        </div>

        <div className="mt-16">
          <Heading level={3} size="lg">
            이달의 선수
          </Heading>
          <Text color="muted" marginBottom>
            이번 달 팬들이 선정한 최고의 선수는?
          </Text>
          <Card variant="elevated">
            <Heading size="lg">
              현재 1위: aaa
            </Heading>
            <div className="grid md:grid-cols-2 gap-8">
              <Card variant="outlined" padding="md" className="flex justify-center items-center">
                <Image
                  src="/baseball.png"
                  alt="이달의 선수"
                  width={200}
                  height={200}
                  //className="max-w-4xl w-full"
                />
              </Card>
              
              <div>
                <Card variant="outlined" className="mb-1 grid md:grid-cols-2 gap-8">
                  <Link
                    href="/statistics/aaa"
                    className="flex text-lg font-semibold text-gray-900 hover:text-blue-600"
                  >
                    1. aaa
                  </Link>
                </Card>
                <Card variant="outlined" className="mb-1">
                  <Link
                    href="/statistics/bbb"
                    className="flex text-lg font-semibold text-gray-900 hover:text-blue-600"
                  >
                    2. bbb
                  </Link>
                </Card>
                <Card variant="outlined" className="mb-1">
                  <Link
                    href="/statistics/ccc"
                    className="flex text-lg font-semibold text-gray-900 hover:text-blue-600"
                  >
                    3. ccc
                  </Link>
                </Card>
                <Card variant="outlined" className="mb-1">
                  <Link
                    href="/statistics/ddd"
                    className="flex text-lg font-semibold text-gray-900 hover:text-blue-600"
                  >
                    4. ddd
                  </Link>
                </Card>
                <Card variant="outlined" className="mb-1">
                  <Link
                    href="/statistics/eee"
                    className="flex text-lg font-semibold text-gray-900 hover:text-blue-600"
                  >
                    5. eee
                  </Link>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
