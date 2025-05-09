import { db } from '@/lib/prisma';
import App from 'next/app';
import { NextResponse } from 'next/server';
import { AppUpdate } from '../../../../generated/prisma';

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