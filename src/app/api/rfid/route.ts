import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {

  const body = await req.json();

  const uid = body.uid;

  // simpan latest scan
  await supabase
    .from("latest_scan")
    .insert([
      {
        uid: uid
      }
    ]);

  // cari produk
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("uid", uid)
    .single();

  if (error) {

    return NextResponse.json({
      success: false,
      message: "Product not found"
    });
  }

  return NextResponse.json({
    success: true,
    product: data
  });
}