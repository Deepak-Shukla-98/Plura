import { apiMiddleware } from "@/components/utils/apimiddleware";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const verified = await apiMiddleware(request);
    const { id: userIdFromToken } = verified as { id: string };
    if (userIdFromToken) {
      const user_id = request.nextUrl.pathname.split("/").pop();
      if (!user_id) {
        return NextResponse.json(
          { error: "User ID is missing or invalid" },
          { status: 400 }
        );
      }
      const user = await prisma.user.findUnique({
        where: { id: user_id },
        include: { profile: true },
      });
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
