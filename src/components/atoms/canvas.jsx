import React, { lazy, Suspense, useEffect, useRef } from 'react'

const CanvasLoader = lazy(() => import ("./canvasloader"));

const CanvasComponent = () => {
    const canvasRef = useRef(null);
    const glRef = useRef(null);

    useEffect(() => {
        const initCanvas = async () => {
            const {renderer, gl, mesh, update, resize, updateMouse} = await CanvasLoader();

            glRef.current = gl;

            if (!canvasRef.current.children.length) {
                canvasRef.current.appendChild(gl.canvas);
            }
            
            update();
            resize();
        }

        initCanvas();
    }
    , []);

    return (
        <div ref={canvasRef}>
            <Suspense fallback={<div>Loading...</div>}></Suspense>
        </div>
    )
}

export default CanvasComponent;