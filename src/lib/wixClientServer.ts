import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export default async function wixClientServer() {
  let refreshToken;
  try {
    const cookiesStore = cookies();
    refreshToken = JSON.parse(cookiesStore.get("refreshToken")?.value || "{}");
  } catch (error) {}

  const wixClient = createClient({
    modules: {
      products,
      collections,
      // currentCart,
      // redirects,
    },
    auth: OAuthStrategy({
      // clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      clientId: "3087a099-b308-45f2-aeb8-2bb9d9371197",

      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
}
