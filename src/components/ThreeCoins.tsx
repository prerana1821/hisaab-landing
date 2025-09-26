import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCoins = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationIdRef = useRef<number>();
  const coinsRef = useRef<THREE.Group[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Create coin geometry and materials
    const coinGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32);
    
    // Gold material for coins
    const goldMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFD700,
      shininess: 100,
      specular: 0x222222,
    });

    // Green accent material 
    const greenMaterial = new THREE.MeshPhongMaterial({
      color: 0x10B981,
      shininess: 100,
      specular: 0x222222,
    });

    // Create multiple floating coins
    const coinCount = 8;
    const coins: THREE.Group[] = [];

    for (let i = 0; i < coinCount; i++) {
      const coinGroup = new THREE.Group();
      
      // Main coin
      const coin = new THREE.Mesh(
        coinGeometry, 
        i % 3 === 0 ? greenMaterial : goldMaterial
      );
      coin.castShadow = true;
      coin.receiveShadow = true;
      
      // Add some edge detail
      const edgeGeometry = new THREE.TorusGeometry(0.3, 0.02, 8, 16);
      const edge = new THREE.Mesh(edgeGeometry, goldMaterial);
      edge.rotation.x = Math.PI / 2;
      
      coinGroup.add(coin);
      coinGroup.add(edge);

      // Random positioning
      coinGroup.position.x = (Math.random() - 0.5) * 8;
      coinGroup.position.y = (Math.random() - 0.5) * 6;
      coinGroup.position.z = (Math.random() - 0.5) * 4;

      // Random rotation
      coinGroup.rotation.x = Math.random() * Math.PI;
      coinGroup.rotation.y = Math.random() * Math.PI;
      coinGroup.rotation.z = Math.random() * Math.PI;

      // Store initial position for floating animation
      (coinGroup as any).initialY = coinGroup.position.y;
      (coinGroup as any).floatSpeed = 0.5 + Math.random() * 0.5;
      (coinGroup as any).floatAmplitude = 0.2 + Math.random() * 0.3;

      coins.push(coinGroup);
      scene.add(coinGroup);
    }

    coinsRef.current = coins;

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate coins
      coins.forEach((coinGroup, index) => {
        // Floating motion
        coinGroup.position.y = (coinGroup as any).initialY + 
          Math.sin(time * (coinGroup as any).floatSpeed + index) * (coinGroup as any).floatAmplitude;
        
        // Gentle rotation
        coinGroup.rotation.y += 0.01;
        coinGroup.rotation.x += 0.005;

        // Gentle drift
        coinGroup.position.x += Math.sin(time * 0.3 + index) * 0.001;
        coinGroup.position.z += Math.cos(time * 0.2 + index) * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      coins.forEach(coinGroup => {
        coinGroup.children.forEach(mesh => {
          if (mesh instanceof THREE.Mesh) {
            mesh.geometry.dispose();
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach(material => material.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        });
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef}
      className="w-full h-full min-h-[400px] relative"
      style={{
        background: 'transparent',
        pointerEvents: 'none'
      }}
    />
  );
};

export default ThreeCoins;