"use client";

type popsType = {
  wixClient: any;
};
export default function ToShowData({ wixClient }: popsType) {
  console.log("ToShowData", wixClient);

  return <div></div>;
}
