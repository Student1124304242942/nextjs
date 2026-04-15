import { Button, Htag } from "@/components";
 
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <Htag tag="h1">Текс</Htag>
      <Button appearance="primary">Кнопка1</Button>
      <Button appearance="ghost">Кнопка2</Button>
    </div>
  );
}
