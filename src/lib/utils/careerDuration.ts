import type { Experience } from '$lib/types';

/** YYYY-MM-DD → 로컬 자정 기준 Date (타임존 밀림 방지) */
function parseISODate(s: string): Date {
	const [y, m, d] = s.split('-').map(Number);
	return new Date(y, m - 1, d);
}

/** 시작일~종료일(포함) 기준 연·월 차이 */
function diffYearMonth(start: Date, end: Date): { years: number; months: number } {
	if (end < start) return { years: 0, months: 0 };

	let years = end.getFullYear() - start.getFullYear();
	let months = end.getMonth() - start.getMonth();
	if (end.getDate() < start.getDate()) months--;
	if (months < 0) {
		years--;
		months += 12;
	}
	return { years: Math.max(0, years), months: Math.max(0, months) };
}

function toTotalMonths(ym: { years: number; months: number }): number {
	return ym.years * 12 + ym.months;
}

function formatYearMonthKorean(years: number, months: number): string {
	if (years > 0 && months > 0) return `${years}년 ${months}개월`;
	if (years > 0) return `${years}년`;
	return `${months}개월`;
}

/**
 * 단일 경력 구간의 표시용 기간 (현재 재직이면 end는 호출 시점의 new Date()).
 * startedAt·endedAt/current로 계산. startedAt이 없으면 빈 문자열.
 */
export function getExperienceDurationLabel(
	exp: Pick<Experience, 'startedAt' | 'endedAt' | 'current'>
): string {
	if (!exp.startedAt) return '';

	const start = parseISODate(exp.startedAt);
	const end = exp.current ? new Date() : exp.endedAt ? parseISODate(exp.endedAt) : null;
	if (!end) return '';

	const { years, months } = diffYearMonth(start, end);
	return formatYearMonthKorean(years, months);
}

/**
 * 경력 전체 합산(각 구간의 월 수 합 → 년·월). startedAt/endedAt이 있는 항목만 합산.
 * 해당 정보가 없으면 빈 배열과 동일하게 '총 0년 0개월'에 가깝게 처리하지 않고,
 * 하나라도 있으면 합산; 모두 없으면 '총 —' 대신 data fallback이 필요하면 호출 측에서 처리.
 */
export function getTotalCareerLabel(experiences: Experience[]): string {
	let total = 0;
	for (const exp of experiences) {
		if (!exp.startedAt) continue;
		const start = parseISODate(exp.startedAt);
		const end = exp.current ? new Date() : exp.endedAt ? parseISODate(exp.endedAt) : null;
		if (!end) continue;
		total += toTotalMonths(diffYearMonth(start, end));
	}

	if (total <= 0) return '총 경력';

	const years = Math.floor(total / 12);
	const months = total % 12;
	return `총 ${formatYearMonthKorean(years, months)}`;
}
