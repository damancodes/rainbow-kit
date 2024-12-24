export const dynamic = "force-static"

export async function GET() {
  const verificationCode =
    process.env.NEXT_PUBLIC_VERIFICATION_CODE || "Default verification code"

  return new Response(verificationCode, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
