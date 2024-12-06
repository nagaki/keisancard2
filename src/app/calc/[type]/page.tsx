import Component from "./Component"

export default async function Page({
  params,
}: { params: Promise<{ type: string }> }) {
  const type = (await params).type
  return <Component type={type} />
}
