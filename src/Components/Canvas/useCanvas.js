import { useRef, useEffect } from 'react'

const useCanvas = draw => {
  
  const ref = useRef(null)
  
  useEffect(() => {
    
    const canvas = ref.current
    const context = canvas.getContext('2d', { willReadFrequently: true })

    draw(context)
    
    return () => {}
  }, [draw])
  
  return ref
}

export default useCanvas