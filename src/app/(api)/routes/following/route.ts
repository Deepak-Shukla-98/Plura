import { apiMiddleware } from "@/components/utils/apimiddleware";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

interface Following {
  followedBy: string;
  following: string;
}

export async function GET(request: NextRequest) {
  try {
    const { id } = (await apiMiddleware(request)) as { id: string };
    if (!!id) {
      const { followingIDs }: any = await prisma.user.findUnique({
        where: { id },
      });
      if (!followingIDs) {
        return new Response(
          JSON.stringify({ error: "No one in following you" }),
          {
            headers: {
              "Content-type": "application/json",
            },
            status: 404, // Not Found
          }
        );
      }
      return new Response(JSON.stringify(followingIDs), {
        headers: {
          "Content-type": "application/json",
        },
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ error: "Not Authorised" }), {
        headers: {
          "Content-type": "application/json",
        },
        status: 401, // Not Found
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
export async function PUT(request: NextRequest) {
  try {
    const { id } = (await apiMiddleware(request)) as { id: string };
    if (!!id) {
      const { following }: Following = await request.json();
      if (!following) {
        throw new Error("Missing required fields");
      }
      const input = {
        following: {
          connect: { id: following },
        },
      };
      const result = await prisma.user.update({
        where: {
          id,
        },
        data: input as any,
      });
      return new Response(JSON.stringify(result), {
        headers: {
          "Content-type": "application/json",
        },
        status: 200,
      });
    } else {
      return new Response(JSON.stringify({ error: "Not Authorised" }), {
        headers: {
          "Content-type": "application/json",
        },
        status: 401, // Not Found
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      headers: {
        "Content-type": "application/json",
      },
      status: 500,
    });
  }
}
