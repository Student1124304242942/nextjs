'use client'

export default function Error({
	error,
	unstable_retry,
}: {
	error: Error & { digest?: string }
	unstable_retry: () => void
}) {
	return <>
		<div>Что-то пошло не так - Product</div>
		<div>{error.message}</div>
		<button onClick={() => unstable_retry()}>Ещё раз</button>
	</>
}
