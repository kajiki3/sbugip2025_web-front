import type { NextRequest } from "next/server";

export const runtime = "edge";

interface CustomRequestInit extends RequestInit {
    duplex?: "half";
}

// ✅ POST メソッドに対応する関数を named export する
export async function POST(request: NextRequest) {
    const url = new URL("http://hardware-backend-alb-1335368156.ap-northeast-1.elb.amazonaws.com/search/rag");

    // ヘッダーを適切に設定（ホスト名の変更）
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("host", url.hostname);

    // 外部 API へのリクエストを作成
    const externalRequest = new Request(url.toString(), {
        method: "POST",
        headers: requestHeaders,
        body: request.body,
        duplex: "half",
    } as CustomRequestInit);

    return fetch(externalRequest);
}
