import React from 'react'
import './cursor.scss'

class Cursor extends React.Component {
    constructor() {
        super()
        this.state = {
            mouseX: 0,
            mouseY: 0,
            trailingX: 0,
            trailingY: 0,
        }

        this.cursor = React.createRef()
        this.cursorTrailing = React.createRef()
        this.animationFrame = null;
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove)
        this.moveCursor();
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove)
        cancelAnimationFrame(this.animationFrame)
    }

    onMouseMove = (evt) => {
        const { clientX, clientY } = evt;
        this.setState({
            mouseX: clientX,
            mouseY: clientY
        });

        //calculate the direction of the cursor and the speed using derivatives
        
    }

    moveCursor = () => {
        const { mouseX, mouseY, trailingX, trailingY } = this.state;
        const diffX = mouseX - trailingX;
        const diffY = mouseY - trailingY;
        const easing = 10;
        if (this.cursor.current === null) return;

        const cursorWidth = this.cursor.current.offsetWidth;
        this.setState({
            trailingX: trailingX + diffX / easing,
            trailingY: trailingY + diffY / easing
        },
        () => {
            this.cursor.current.style.transform = `translate3d(${mouseX - cursorWidth/2}px, ${mouseY - cursorWidth/2}px, 0)`;
            this.cursorTrailing.current.style.transform = `translate3d(${trailingX - cursorWidth/2}px, ${trailingY - cursorWidth/2}px, 0)`;
            this.animationFrame = requestAnimationFrame(this.moveCursor);
        })
    }

    render() {
        return (
            <div className='cursors'>
                <div className='cursor' ref={this.cursor}/>
                <div className='cursor trail' ref={this.cursorTrailing}/>
            </div>
        )
    }
}

export default Cursor