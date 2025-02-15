import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#000008'); // 更深的蓝黑色背景
        
        const camera = new THREE.PerspectiveCamera(
            75, // 更大的视角以展示更多星空
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ 
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        currentRef.appendChild(renderer.domElement);

        // 创建主要的星星效果
        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 20000; // 增加星星数量
        const starsPos = new Float32Array(starsCount * 3);

        for(let i = 0; i < starsCount * 3; i += 3) {
            const theta = Math.random() * Math.PI * 2;
            const radius = Math.random() * 20;
            const height = (Math.random() - 0.5) * 5;
            
            starsPos[i] = Math.cos(theta) * radius;
            starsPos[i + 1] = height;
            starsPos[i + 2] = Math.sin(theta) * radius;
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));

        const starsMaterial = new THREE.PointsMaterial({
            size: 0.015,
            color: '#ffffff',
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending,
        });

        const starsMesh = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(starsMesh);

        // 添加一些更亮的星星
        const brightStarsGeometry = new THREE.BufferGeometry();
        const brightStarsCount = 1000;
        const brightStarsPos = new Float32Array(brightStarsCount * 3);

        for(let i = 0; i < brightStarsCount * 3; i += 3) {
            const theta = Math.random() * Math.PI * 2;
            const radius = Math.random() * 15;
            const height = (Math.random() - 0.5) * 4;
            
            brightStarsPos[i] = Math.cos(theta) * radius;
            brightStarsPos[i + 1] = height;
            brightStarsPos[i + 2] = Math.sin(theta) * radius;
        }

        brightStarsGeometry.setAttribute('position', new THREE.BufferAttribute(brightStarsPos, 3));

        const brightStarsMaterial = new THREE.PointsMaterial({
            size: 0.025,
            color: '#ffffff',
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
        });

        const brightStarsMesh = new THREE.Points(brightStarsGeometry, brightStarsMaterial);
        scene.add(brightStarsMesh);

        const animate = () => {
            requestAnimationFrame(animate);
            
            // 缓慢旋转效果
            starsMesh.rotation.y += 0.0001;
            brightStarsMesh.rotation.y += 0.0001;
            
            // 轻微的波动效果
            const time = Date.now() * 0.0003;
            starsMesh.position.y = Math.sin(time) * 0.1;
            brightStarsMesh.position.y = Math.sin(time * 1.2) * 0.1;
            
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
            scene.remove(starsMesh);
            scene.remove(brightStarsMesh);
            starsGeometry.dispose();
            starsMaterial.dispose();
            brightStarsGeometry.dispose();
            brightStarsMaterial.dispose();
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
