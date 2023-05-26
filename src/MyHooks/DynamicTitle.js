import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
    document.title=`ToysRus | ${title}`
    },[title])
}

export default useTitle