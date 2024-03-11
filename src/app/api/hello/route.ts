import { NextResponse } from 'next/server';


export async function GET(req: Request){
  try {
      return NextResponse.json({ message: 'hello, I am working!!' })
  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' })
  }
}