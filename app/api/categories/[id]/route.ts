import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { cookies } from "next/headers";

// DELETE a category by ID
export async function DELETE(
  request: Request,
  context: { params: { id: string } } // context olarak almak daha güvenli
) {
  try {
    const { id } = context.params; // params'ı buradan al
    const cookieStore = cookies();
    const userId = cookieStore.get("session")?.value;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const category = await prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    const expensesUsingCategory = await prisma.expense.count({
      where: { categoryId: id },
    });

    if (expensesUsingCategory > 0) {
      return NextResponse.json(
        {
          error: "Cannot delete category with expenses",
          count: expensesUsingCategory,
        },
        { status: 409 }
      );
    }

    await prisma.category.delete({ where: { id } });

    return NextResponse.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 }
    );
  }
}
