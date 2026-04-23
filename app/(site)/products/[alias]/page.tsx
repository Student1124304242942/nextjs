import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page'
import type { MenuItem } from '@/interfaces/menu.interface';

import { Metadata } from 'next'
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: "Страница",
}

export async function generateStaticParams() {
    const menu = await getMenu(0);
    return menu.flatMap((m: MenuItem) => m.pages.map(p => ({ alias: p.alias })));
}

export default async function PageProducts(
    { params }: { params: Promise<{ alias: string }> }
) {
    const { alias } = await params;
    const page = await getPage(alias);
    if (!page) {
        notFound();
    }
    return (
        <div>
            {page.title}
        </div>
    )
}