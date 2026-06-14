import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {

  // ambil latest scan
  const { data: latest } = await supabase
    .from("latest_scan")
    .select("*")
    .order("scanned_at", { ascending: false })
    .limit(1)
    .single();

  if (!latest) {

    return NextResponse.json({
      success: false
    });
  }

  // cari produk
  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("uid", latest.uid)
    .single();

  return NextResponse.json({
    success: true,
    product
  });
}