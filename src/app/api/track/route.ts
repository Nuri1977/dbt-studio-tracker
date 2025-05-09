import { db } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { AppUpdate } from '../../../../generated/prisma';


export async function GET(request: Request) {
  try {
    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const secretKey = searchParams.get('api_key');
    const version = searchParams.get('version');

    // Build filter conditions
    const where = version && version !== 'all' 
      ? { version: version } 
      : undefined;

    // TODO: Validate the secret key
    const res = await db.appUpdate.findMany({
      where,
      orderBy: {
        timestamp: 'desc', // Sort by timestamp, newest first
      }
    });
    if (!res) {
      return NextResponse.json(
        { error: 'No app updates found' },
        { status: 404 }
      );
    }
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.error('Error fetching app updates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch app updates' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json() as AppUpdate;
    
    // Validate required fields
    if (!data.event || !data.version || !data.platform || !data.arch) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create app update record in database
    const appUpdate = await db.appUpdate.create({
      data: {
        event: data.event,
        version: data.version,
        platform: data.platform,
        arch: data.arch,
        timestamp: data.timestamp ? new Date(data.timestamp) : new Date(),
        hostname: data.hostname || null,
      },
    });

    return NextResponse.json({ 
      success: true, 
      id: appUpdate.id 
    }, { status: 201 });
  } catch (error) {
    console.error('Error tracking app update:', error);
    return NextResponse.json(
      { error: 'Failed to track app update' },
      { status: 500 }
    );
  }
}