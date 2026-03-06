import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ ok: false, message: 'Contact backend is not configured yet. Please use the mailto fallback.' }, { status: 501 });
}
