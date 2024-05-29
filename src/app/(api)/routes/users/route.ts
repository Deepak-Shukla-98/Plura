import { apiMiddleware } from "@/components/utils/apimiddleware";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const { id } = (await apiMiddleware(request)) as { id: string };
    if (!!id) {
      const { followingIDs }: any = await prisma.user.findUnique({
        where: { id },
      });
      const all_users = await prisma.user.findMany({
        include: { profile: true },
      });
      const users = all_users
        .filter((f) => ![id, ...followingIDs].includes(f.id))
        .map((d) => {
          const { id, first_name, last_name, profile } = d;
          const username = profile?.username ?? null;
          const bio = profile?.bio ?? null;
          return { id, first_name, last_name, username, bio };
        });
      if (!users) {
        return new Response(JSON.stringify({ error: "No users found" }), {
          headers: {
            "Content-type": "application/json",
          },
          status: 404, // Not Found
        });
      }
      return new Response(JSON.stringify(users), {
        headers: {
          "Content-type": "application/json",
        },
        status: 200,
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      headers: {
        "Content-type": "application/json",
      },
      status: 500,
    });
  }
}
