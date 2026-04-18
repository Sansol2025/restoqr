import { NextResponse } from 'next/server';
import { MENU_DATA } from '@/data/menu';

export const runtime = 'edge';

export async function GET() {
  return NextResponse.json(MENU_DATA);
}
