import { Typewriter } from 'react-simple-typewriter'

export function Typewriters() {
    return (
        <>
            <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
                <Typewriter
                    words={['Front-End Developer', 'Web Coder', 'Web Programmer', 'Website Development Learner']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>
        </>
    )
}
