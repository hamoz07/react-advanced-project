import { useEffect, useState } from "react"

const useLocalData = (key,initial) => {

    const [value,setValue] = useState(()=>{
        const save = window.localStorage.getItem(key)

            return save ? JSON.parse(save) : initial
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])


  return [value,setValue]
}

export default useLocalData
