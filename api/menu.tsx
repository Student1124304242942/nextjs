import { API } from '@/app/api'

export async function getMenu(firstCategory: number) {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firstCategory })
  })

  if (!res.ok) {
    throw new Error('Failed to fetch menu')
  }

  return res.json()
}
