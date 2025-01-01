import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#000000');
        
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ 
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        currentRef.appendChild(renderer.domElement);

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;
        const posArray = new Float32Array(particlesCount * 3);

        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: '#ffffff',
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        const animate = () => {
            requestAnimationFrame(animate);
            particlesMesh.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            currentRef.removeChild(renderer.domElement);
            scene.remove(particlesMesh);
            particlesGeometry.dispose();
            particlesMaterial.dispose();
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            style={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: '#000000'
            }} 
        />
    );
};

export default Background;
