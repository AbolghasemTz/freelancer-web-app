import { useEffect, useRef } from "react"

export default function useOutSideClick(handler,listenCaptching = true) {
    const ref= useRef()

    useEffect(() => {
      function handleClick (e) {
       if(ref.current && !ref.current.contains(e.target)) {
        handler()
       }
      }
      document.addEventListener("click",handleClick,listenCaptching)
      return () => document.removeEventListener('click', handleClick,listenCaptching)
    },[handler,listenCaptching])
    return ref
}