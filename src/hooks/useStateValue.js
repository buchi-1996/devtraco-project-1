import { useContext } from 'react'
import AppState from '../context/AppState'

const useStateValue = () => {
    const { state, dispatch } = useContext(AppState)
    return { state, dispatch }
}

export default useStateValue