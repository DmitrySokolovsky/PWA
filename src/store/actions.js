export const LOAD_DATA = "LOAD_DATA";

export const loadData = (payload) => {
    return {
        type: LOAD_DATA,
        payload
    }
}