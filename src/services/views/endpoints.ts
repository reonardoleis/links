import { ViewsAPI } from "./client";
import { GetViewsResponse, PostViewsRequest } from "./views";

export async function getViews(): Promise<GetViewsResponse> {
  return ViewsAPI.get("views");
}

export async function postViews(request: PostViewsRequest): Promise<void> {
  return ViewsAPI.post("views", request);
}
