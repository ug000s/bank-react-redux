export const PUT_QUOTE = 'PUT_QUOTE';

export const putQuote = (quote) => ({
    type: PUT_QUOTE,
    payload: quote
});

export const fetchQuote = () => {
    return dispatch => {
        dispatch(putQuote('Pending...'))
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(res=>res.json())
            .then(data => dispatch(putQuote(data.sentence)))
            .catch(e=>{
                console.error('Failed to fetch quote',e);
                dispatch(putQuote('Failed to fetch quote. Please try again later.'))
            })    
    }
}
