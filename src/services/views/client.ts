export class ViewsAPI {
  static base = import.meta.env.VITE_API_URL;

  static async get<Req extends Object, Res>(
    path: string,
    request?: Req
  ): Promise<Res> {
    const query = Object.entries(request || {})
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const response = await fetch(`${this.base}/${path}?${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch views");
    }

    return response.json() as Res;
  }

  static async post<Req, Res>(path: string, request: Req): Promise<Res> {
    const body = JSON.stringify(request);
    const response = await fetch(`${this.base}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch views");
    }

    return response.json() as Res;
  }
}
