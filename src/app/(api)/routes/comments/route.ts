import { apiMiddleware } from "@/components/utils/apimiddleware";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

interface Comments {
  comment: string;
  name: string;
  author: string;
  post: string;
}

export async function GET(request: NextRequest) {
  try {
    const { id } = (await apiMiddleware(request)) as { id: string };
    if (!!id) {
      const comment = await prisma.comment.findMany();
      if (!comment) {
        return new Response(JSON.stringify({ error: "No Comments" }), {
          headers: {
            "Content-type": "application/json",
          },
          status: 404, // Not Found
        });
      }
      return new Response(JSON.stringify(comment), {
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
export async function POST(request: NextRequest) {
  try {
    const { id } = (await apiMiddleware(request)) as { id: string };
    if (!!id) {
      const searchParams = request.nextUrl.searchParams;
      const query = searchParams.get("id") as string;
      const { comment }: Comments = await request.json();
      const { first_name } = (await prisma.user.findUnique({
        where: { id },
      })) as { first_name: string };
      if (!comment || !query) {
        throw new Error("Missing required fields");
      }
      const input = {
        comment,
        name: first_name,
        author: {
          connect: { id },
        },
        post: {
          connect: { id: query },
        },
      };
      const result = await prisma.comment.create({
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
        status: 401,
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
export async function PUT(request: NextRequest) {
  try {
    const { id } = (await apiMiddleware(request)) as { id: string };
    if (!!id) {
      const searchParams = request.nextUrl.searchParams;
      const query = searchParams.get("id") as string;
      const { comment }: Comments = await request.json();
      const input = { comment };
      const result = await prisma.comment.update({
        where: {
          id: query,
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
        status: 401,
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
