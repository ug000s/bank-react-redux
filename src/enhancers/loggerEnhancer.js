export const loggerEnhancer = ({getState}) => (next) => (action) => {
    console.log(`Type: ${action.type}, payload: ${action.payload}`)
    console.log('state', getState())
    const result = next(action)
    console.log('next state', getState())
    return result
    // console.log(`Type: ${action.type}, payload: ${action.payload}`)
    // console.log('state', getState())
    // return next(action)
}