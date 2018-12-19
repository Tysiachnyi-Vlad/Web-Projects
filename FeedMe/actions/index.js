export const searchChanged = (text) => {
    return{
        type: 'SEARCH_CHANGED',
        payloader: text
    }
}