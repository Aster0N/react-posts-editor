import { useMemo } from 'react'

export const usePagesPagination = (totalPages) => {
	const pagesArray = useMemo(() => {
		let tempPages = []
		for (let i = 0; i < totalPages; i++) {
			tempPages.push(i + 1)
		}
		return tempPages
	}, [totalPages])

	return pagesArray
}