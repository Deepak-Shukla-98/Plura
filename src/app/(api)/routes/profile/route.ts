import { apiMiddleware } from "@/components/utils/apimiddleware";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

interface Profile {
  username: string;
  first_name: string;
  last_name: string;
  dob?: Date;
  gender?: string;
  bio?: string;
  address?: string;
  user: string;
  profileImg?: string; // Assuming id is of type string
}

export async function GET(request: NextRequest) {
  try {
    const { id } = (await apiMiddleware(request)) as { id: string };
    if (!!id) {
      const user = await prisma.user.findUnique({
        where: { id },
        include: {
          profile: true,
        },
      });
      if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), {
          headers: {
            "Content-type": "application/json",
          },
          status: 404, // Not Found
        });
      }
      return new Response(
        JSON.stringify({ ...user.profile, email: user.email }),
        {
          headers: {
            "Content-type": "application/json",
          },
          status: 200,
        }
      );
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
      const {
        username,
        first_name,
        last_name,
        dob,
        gender,
        bio,
        address,
      }: Profile = await request.json();
      if (!first_name || !last_name || !username || !dob) {
        return new Response(
          JSON.stringify({ error: "Missing required fields" }),
          {
            headers: {
              "Content-type": "application/json",
            },
            status: 400,
          }
        );
      }
      const existingUser = await prisma.profile.findUnique({
        where: { username },
      });
      if (existingUser) {
        return new Response(
          JSON.stringify({ error: "Username already in use" }),
          {
            headers: {
              "Content-type": "application/json",
            },
            status: 400,
          }
        );
      }
      const input = {
        username,
        first_name,
        last_name,
        dob,
        gender,
        bio,
        address,
        user: {
          connect: { id },
        },
      };
      const result = await prisma.profile.create({
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
      const {
        username,
        first_name,
        last_name,
        dob,
        gender,
        bio,
        address,
      }: Profile = await request.json();
      const input = {
        username,
        first_name,
        last_name,
        dob,
        gender,
        bio,
        address,
      };
      const result = await prisma.profile.update({
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
