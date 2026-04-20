"use client";
import { Button, Htag, P, Rating, Tag } from "@/components"
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [rating, setRating] = useState<number>(4)
  return (
    <div className="">
      <Htag tag="h1">Текс</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка1
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка2
      </Button>
      <P size="s">Маленький параграф 14px</P>
      <P size="m">Средний параграф 16px</P>
      <P size="l">Большой параграф 18px</P>
      <Tag size="s" color="ghost">Photoshop</Tag>
      <Tag size="s" color="red">Срочно</Tag>
      <Tag size="s" color="green">Готово</Tag>
      <Tag size="s" color="grey">Обычный</Tag>
      <Tag size="s" color="primary">Новое</Tag>
      <Tag size="m" color="primary" href="https://react.dev">React</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </div>
  );
}
