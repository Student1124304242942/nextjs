import { Metadata } from "next"
import { getMenu } from "@/api/menu"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "ComputedMeta",
  }
}

export default async function Home() {
  const menu = await getMenu(0);
  return (
      <main >
        Главная страница
        <div className="">
          <div className="">{JSON.stringify(menu)}</div>
        </div>
      </main>
    )
}
