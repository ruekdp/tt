export async function POST(request: Request) {
  try {
    const body = await request.json();
    return Response.json({ status: 'ok', data: body });
  } catch (error) {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }
}
