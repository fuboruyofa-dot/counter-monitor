export async function GET() {
  return new Response(
    JSON.stringify({ message: "Counter API is running" }),
    { headers: { "Content-Type": "application/json" } }
  )
}

export async function POST(req) {
  const body = await req.json()

  return new Response(
    JSON.stringify({
      status: "ok",
      received: body,
    }),
    { headers: { "Content-Type": "application/json" } }
  )
}
