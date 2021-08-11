import {
    useSearchPageState,
    useSearchPage,
    useSearchPageStateDispatch,
  } from 'vtex.search-page-context/SearchPageContext'

  const SearchResultContex = () => {
    const { pagination, searchQuery } = useSearchPage()
    const { isFetchingMore } = useSearchPageState()
    const dispatch = useSearchPageStateDispatch()
     
    return (
      <div>
     
       is fetch more { isFetchingMore }
      </div>
    )
  }
  
  export default SearchResultContex