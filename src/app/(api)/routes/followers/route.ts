import { apiMiddleware } from "@/components/utils/apimiddleware";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { id } = (await apiMiddleware(request)) as { id: string };
    if (!!id) {
      const { followedByIDs }: any = await prisma.user.findUnique({
        where: { id },
      });
      if (!followedByIDs) {
        return new Response(
          JSON.stringify({ error: "No one is following you" }),
          {
            headers: {
              "Content-type": "application/json",
            },
            status: 404, // Not Found
          }
        );
      }
      return new Response(JSON.stringify(followedByIDs), {
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
