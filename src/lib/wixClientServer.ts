import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export default async function wixClientServer() {
  let refreshToken;
  const cookiesStore = cookies();
  try {
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
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,

      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
}
