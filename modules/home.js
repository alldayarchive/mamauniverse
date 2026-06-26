export default {
    template: `
        <div class="space-y-8">
            <!-- 환영 배너 -->
            <div class="bg-rose-100 p-10 rounded-[3rem] text-rose-700 relative overflow-hidden shadow-inner">
                <div class="relative z-10">
                    <h2 class="text-4xl font-bold italic">Welcome, Mama!</h2>
                    <p class="mt-3 text-lg opacity-80">마마 유니버스는 당신의 모든 시간을 응원합니다.</p>
                </div>
                <!-- 장식용 원 -->
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-rose-200/50 rounded-full"></div>
            </div>

            <!-- 요약 카드들 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="p-8 bg-orange-50 border border-orange-100 rounded-[2rem] shadow-sm hover:shadow-md transition">
                    <span class="text-3xl">🔥</span>
                    <h3 class="font-bold text-xl mt-4 text-orange-700">인기 급상승</h3>
                    <p class="text-orange-600/70 mt-2 text-sm">"아기 첫 이유식, 어떤 것부터 시작하셨나요?"</p>
                </div>

                <div class="p-8 bg-blue-50 border border-blue-100 rounded-[2rem] shadow-sm hover:shadow-md transition">
                    <span class="text-3xl">🇺🇸</span>
                    <h3 class="font-bold text-xl mt-4 text-blue-700">미국 엄마들은 지금</h3>
                    <p class="text-blue-600/70 mt-2 text-sm">최근 미국에서 유행하는 '자기주도 이유식' 팁</p>
                </div>

                <div class="p-8 bg-pink-50 border border-pink-100 rounded-[2rem] shadow-sm hover:shadow-md transition">
                    <span class="text-3xl">🎁</span>
                    <h3 class="font-bold text-xl mt-4 text-pink-700">오늘의 나눔</h3>
                    <p class="text-pink-600/70 mt-2 text-sm">깨끗하게 사용한 타이니 모빌 나눔해요.</p>
                </div>
            </div>
        </div>
    `
};
