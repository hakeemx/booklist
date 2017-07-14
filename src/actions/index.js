export default function selectBook(book){
	//selectBook is an actionCreator, it needs to return an action
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
