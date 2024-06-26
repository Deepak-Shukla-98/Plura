import { apiMiddleware } from "@/components/utils/apimiddleware";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

interface Posts {
  title: string;
  body: string;
  author: string;
}

export async function GET(request: NextRequest) {
  try {
    const { id } = (await apiMiddleware(request)) as { id: string };
    if (!!id) {
      const { followingIDs }: any = await prisma.user.findUnique({
        where: { id },
      });
      const posts = await Promise.all(
        [...followingIDs, id].flatMap(async (id: string) =>
          prisma.post.findMany({
            where: { authorId: id },
            include: { comments: true },
          })
        )
      );
      let arr = posts.flat().sort((a, b) => a.id.localeCompare(b.id));
      if (!arr.length) {
        return new Response(JSON.stringify({ error: "No Posts Found" }), {
          headers: {
            "Content-type": "application/json",
          },
          status: 404, // Not Found
        });
      }
      return new Response(JSON.stringify(arr), {
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
      const { title, body }: Posts = await request.json();
      if (!title || !body) {
        throw new Error("Missing required fields");
      }
      const { first_name, last_name } = (await prisma.user.findUnique({
        where: { id },
      })) as any;
      const input = {
        title,
        body,
        author_name: `${first_name} ${last_name}`,
        author: {
          connect: { id },
        },
      };
      const result = await prisma.post.create({
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
export async function PUT(request: NextRequest) {
  try {
    const { id } = (await apiMiddleware(request)) as { id: string };
    if (!!id) {
      const searchParams = request.nextUrl.searchParams;
      const query = searchParams.get("id") as string;
      const { title, body }: Posts = await request.json();
      const input = { title, body };
      const result = await prisma.post.update({
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
