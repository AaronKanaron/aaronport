import React, { useState, useEffect, useRef } from 'react'
import * as ogl from "ogl";
import './canvas.scss'

const CanvasComponent = () => {
    const canvasRef = useRef(null);
    const glRef = useRef(null);
    

    useEffect(() => {
        const vertex = `
        attribute vec2 uv;
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 0, 1);
        }
        `;
        const fragment = `
        precision highp float;
        precision highp int;
        uniform sampler2D tWater;
        uniform sampler2D tFlow;
        uniform float uTime;
        varying vec2 vUv;
        uniform vec4 res;
        uniform vec2 img;

        vec2 centeredAspectRatio(vec2 uvs, vec2 factor){
            return uvs * factor - factor /2. + 0.5;
        }

        void main() {
            // R and G values are velocity in the x and y direction
            // B value is the velocity length
            vec3 flow = texture2D(tFlow, vUv).rgb;

            vec2 uv = .5 * gl_FragCoord.xy / res.xy ;

            // vec2 uv = .5 * gl_FragCoord.xy / res.xy ;
            vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
            myUV -= flow.xy * (0.15 * 1.2);

            vec2 myUV2 = (uv - vec2(0.5))*res.zw + vec2(0.5);
            myUV2 -= flow.xy * (0.125 * 1.2);

            vec2 myUV3 = (uv - vec2(0.5))*res.zw + vec2(0.5);
            myUV3 -= flow.xy * (0.10 * 1.4);

            vec3 tex = texture2D(tWater, myUV).rgb;
            vec3 tex2 = texture2D(tWater, myUV2).rgb;
            vec3 tex3 = texture2D(tWater, myUV3).rgb;

            gl_FragColor = vec4(tex.r, tex2.g, tex3.b, 1.0);
        }
        `;

        const _size = [2048, 1638];
        const renderer = new ogl.Renderer({ dpr: 2 });
        const gl = renderer.gl;
        glRef.current = gl;

        
        if (!canvasRef.current.children.length) {
            gl.canvas.style.width = `100%`;
            gl.canvas.style.height = `100%`;
            canvasRef.current.appendChild(gl.canvas);
        }

        // Variable inputs to control flowmap
        let aspect = 0.1;
        const mouse = new ogl.Vec2(-1);
        const velocity = new ogl.Vec2();
        
        const maxWidth = 400; // Set your desired maximum width
        const maxHeight = 300; // Set your desired maximum height

        const resize = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const screenAspectRatio = screenWidth / screenHeight;
            
            
            let width = screenWidth * 0.5;
            let height = width / screenAspectRatio;
            
            // Scale down the dimensions if they exceed the maximum values
            if (width > maxWidth || height > maxHeight) {
                const scale = Math.min(maxWidth / width, maxHeight / height);
                width *= scale;
                height *= scale;
            }
            
            // console.log(`screenWidth ${screenWidth}\nscreenHeight ${screenHeight}\n--\nratio ${screenAspectRatio}\n--\nsimWidth ${width}\nsimHeight ${height}`);
            
            
            // Update the uniforms with the new dimensions
            let a1, a2;
            const imageAspect = _size[1] / _size[0];
            if (window.innerHeight / window.innerWidth < imageAspect) {
                a1 = 1;
                a2 = window.innerHeight / window.innerWidth / imageAspect;
            } else {
                a1 = window.innerWidth / window.innerHeight * imageAspect;
                a2 = 1;
            }
            mesh.program.uniforms.res.value = new ogl.Vec4(
                width,
                height,
                a1,
                a2
            );

            renderer.setSize(width, height); //this sets the size of the canvas, but also the style width and height (stupid)
            gl.canvas.style.width = screenWidth + "px";
            gl.canvas.style.height = screenHeight + "px";

            aspect = width / height;
        };
        
        

        const flowmap = new ogl.Flowmap(gl, {
            falloff: 0.4, //size of the brush
            dissipation: 0.98, //how fast return to original state 1 = no return
            alpha: 0.5, //strength
        });

        // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
        const geometry = new ogl.Geometry(gl, {
            position: {
                size: 2,
                data: new Float32Array([-1, -1, 3, -1, -1, 3]),
            },
            uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
        });

        const texture = new ogl.Texture(gl, {
            minFilter: gl.LINEAR,
            magFilter: gl.LINEAR,
        });

        const smallImg = new Image();
        smallImg.onload = () => {
            texture.image = smallImg
        };
        smallImg.crossOrigin = 'Anonymous';
        smallImg.src = '/waterxxxs.jpg';
        const img = new Image();
        img.onload = () => {
            texture.image = img
        };
        img.crossOrigin = 'Anonymous';
        img.src = '/waterxs.jpg';

        //console log the current image

        let a1, a2;
        const imageAspect = _size[1] / _size[0];
        if (window.innerHeight / window.innerWidth < imageAspect) {
            a1 = 1;
            a2 = window.innerHeight / window.innerWidth / imageAspect;
        } else {
            a1 = window.innerWidth / window.innerHeight * imageAspect;
            a2 = 1;
        }

        const program = new ogl.Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                tWater: { value: texture },
                res: {
                    value: new ogl.Vec4(window.innerWidth, window.innerHeight, a1, a2),
                },
                img: { value: new ogl.Vec2(_size[1], _size[0]) },
            // Note that the uniform is applied without using an object and value property
            // This is because the class alternates this texture between two render targets
            // and updates the value property after each render.
                tFlow: flowmap.uniform,
            },
        });

        const mesh = new ogl.Mesh(gl, { geometry, program });

        window.addEventListener('resize', resize, false);
        resize();

        // Create handlers to get mouse position and velocity
        const isTouchCapable = 'ontouchstart' in window;

        const updateMouse = (e) => {
            e.preventDefault();

            if (e.changedTouches && e.changedTouches.length) {
                e.x = e.changedTouches[0].pageX;
                e.y = e.changedTouches[0].pageY;
            }
            if (e.x === undefined) {
                e.x = e.pageX;
                e.y = e.pageY;
            }

            const rect = gl.canvas.getBoundingClientRect();
            const scaleX = maxWidth / rect.width;
            const scaleY = maxHeight / rect.height;

            // Get mouse value in 0 to 1 range, with y flipped
            mouse.set(
                (e.x - rect.left) * scaleX / maxWidth,
                1.0 - (e.y - rect.top) * scaleY / maxHeight
            );
            // Calculate velocity
            if (!lastTime) {
            // First frame
                lastTime = performance.now();
                lastMouse.set(e.x, e.y);
            }

            const deltaX = e.x - lastMouse.x;
            const deltaY = e.y - lastMouse.y;

            lastMouse.set(e.x, e.y);

            const time = performance.now();

            // Avoid dividing by 0
            const delta = Math.max(10.4, time - lastTime);
            lastTime = time;
            velocity.x = deltaX / delta;
            velocity.y = deltaY / delta;
            // Flag update to prevent hanging velocity values when not moving
            velocity.needsUpdate = true;
        };

        if (isTouchCapable) {
            window.addEventListener('touchstart', updateMouse, false);
            window.addEventListener('touchmove', updateMouse, { passive: false });
        } else {
            window.addEventListener('mousemove', updateMouse, false);
        }
        
        let lastTime;
        const lastMouse = new ogl.Vec2();
        
        const update = (t) => {
            requestAnimationFrame(update);

            // Reset velocity when mouse not moving
            if (!velocity.needsUpdate) {
                mouse.set(-1);
                velocity.set(0);
            }
            velocity.needsUpdate = false;
            // Update flowmap inputs
            flowmap.aspect = aspect;
            flowmap.mouse.copy(mouse);
            // Ease velocity input, slower when fading out
            flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
            flowmap.update();
            program.uniforms.uTime.value = t * 0.01;
            renderer.render({ scene: mesh });
        };
    
        requestAnimationFrame(update);

        // return () => {
        //     window.removeEventListener("resize", resize);
        //     if (isTouchCapable) {
        //         window.removeEventListener("touchstart", updateMouse);
        //         window.removeEventListener("touchmove", updateMouse);
        //     } else {
        //         window.removeEventListener("mousemove", updateMouse);
        //     }
        // }
    }, []);

    return (
        <>
            <div className="canvas" ref={canvasRef} />
        </>
    );
};

export default CanvasComponent;