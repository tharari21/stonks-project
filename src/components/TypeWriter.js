import {useState, useEffect, useRef} from 'react'

const TypeWriter = ({text}) => {
    const index = useRef(0)
    const [currentText, setCurrentText] = useState('');

    // Anytime the text prop changes we want to re-initialize. Seems unnecessary
    // useEffect(() => {
    //     index.current = 0
    //     setCurrentText('')
    // }, [text])
    useEffect(() => {
        if (index.current < text.length) {
            const timeoutId = setTimeout(() =>{
                setCurrentText(
                  (prevText) => prevText + text.charAt(index.current)
                );
                index.current += 1
            }, 100)
            return () => {
                clearTimeout(timeoutId)
            }
        }
    }, [currentText])
  return (
    <div className="typewriter">
        <h1 className="typewriter-title">
            {currentText}
        </h1>
    </div>
  )
}

export default TypeWriter