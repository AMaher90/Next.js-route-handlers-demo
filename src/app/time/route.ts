// the default value is auto
// in build this make the GET requests cached by default
// to make it not cached in build we change the value to "force-dynamic" 
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    time : new Date().toLocaleTimeString()
  })
}
