import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

const KEY = 'portfolio:views'

export async function GET() {
  const views = (await kv.get<number>(KEY)) ?? 0
  return NextResponse.json({ views })
}

export async function POST() {
  const views = await kv.incr(KEY)
  return NextResponse.json({ views })
}
