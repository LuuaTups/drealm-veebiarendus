// Hero background: a slow flight through a tunnel of floating "digital work" cards
// (browser windows, phones, charts, chat) lit in warm rust tones.
import {
  CanvasTexture,
  Clock,
  DoubleSide,
  Fog,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  SRGBColorSpace,
  Scene,
  WebGLRenderer,
} from 'three';

type Kind = 'browser' | 'phone' | 'chart' | 'chat' | 'ad';

const PALETTE = ['#b8461c', '#c9572a', '#a8361a', '#d9733f', '#8f2a0c', '#e08a55'];

function roundRect(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

function cardTexture(kind: Kind, base: string): { tex: CanvasTexture; aspect: number } {
  const dims: Record<Kind, [number, number]> = {
    browser: [512, 340],
    phone: [220, 440],
    chart: [380, 260],
    chat: [360, 260],
    ad: [300, 380],
  };
  const [w, h] = dims[kind];
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d')!;
  const r = kind === 'phone' ? 34 : 16;

  // body
  const grad = g.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, base);
  grad.addColorStop(1, '#5a1406');
  g.globalAlpha = 0.9;
  roundRect(g, 2, 2, w - 4, h - 4, r);
  g.fillStyle = grad;
  g.fill();
  g.globalAlpha = 1;
  g.lineWidth = 2;
  g.strokeStyle = 'rgba(255, 196, 160, 0.45)';
  g.stroke();

  const ink = 'rgba(255, 214, 190, 0.55)';
  const soft = 'rgba(255, 214, 190, 0.22)';
  g.fillStyle = soft;

  if (kind === 'browser') {
    for (let i = 0; i < 3; i++) {
      g.beginPath();
      g.arc(24 + i * 18, 22, 5, 0, Math.PI * 2);
      g.fillStyle = ink;
      g.fill();
    }
    g.fillStyle = soft;
    g.fillRect(0, 42, w, 1.5);
    g.fillStyle = ink;
    g.fillRect(28, 76, w * 0.42, 22);
    g.fillRect(28, 108, w * 0.3, 22);
    g.fillStyle = soft;
    g.fillRect(28, 146, w * 0.38, 8);
    g.fillRect(28, 162, w * 0.33, 8);
    roundRect(g, 28, 190, 110, 32, 16);
    g.fillStyle = 'rgba(255, 236, 222, 0.75)';
    g.fill();
    g.fillStyle = 'rgba(255, 170, 120, 0.35)';
    g.fillRect(w * 0.56, 66, w * 0.38, h * 0.5);
    g.fillStyle = soft;
    for (let i = 0; i < 3; i++) g.fillRect(28 + i * ((w - 56) / 3), h - 70, (w - 56) / 3 - 14, 44);
  } else if (kind === 'phone') {
    g.fillStyle = ink;
    g.fillRect(w / 2 - 30, 18, 60, 8);
    g.fillStyle = 'rgba(255, 170, 120, 0.35)';
    g.fillRect(20, 50, w - 40, 170);
    g.fillStyle = ink;
    g.fillRect(20, 240, w * 0.7, 16);
    g.fillRect(20, 264, w * 0.5, 16);
    g.fillStyle = soft;
    g.fillRect(20, 296, w - 40, 8);
    g.fillRect(20, 312, w - 60, 8);
    roundRect(g, 20, h - 74, w - 40, 40, 20);
    g.fillStyle = 'rgba(255, 236, 222, 0.75)';
    g.fill();
  } else if (kind === 'chart') {
    g.fillStyle = ink;
    g.fillRect(24, 24, 120, 12);
    g.strokeStyle = 'rgba(255, 210, 180, 0.9)';
    g.lineWidth = 4;
    g.beginPath();
    const pts = [0.9, 0.82, 0.86, 0.66, 0.7, 0.5, 0.42, 0.28];
    pts.forEach((p, i) => {
      const x = 24 + (i / (pts.length - 1)) * (w - 48);
      const y = 60 + p * (h - 90);
      i ? g.lineTo(x, y) : g.moveTo(x, y);
    });
    g.stroke();
    g.fillStyle = soft;
    for (let i = 0; i < 6; i++) g.fillRect(24 + i * 56, h - 26, 36, 6);
  } else if (kind === 'chat') {
    roundRect(g, w - 220, 26, 196, 44, 18);
    g.fillStyle = 'rgba(255, 236, 222, 0.7)';
    g.fill();
    roundRect(g, 24, 86, 250, 80, 18);
    g.fillStyle = soft;
    g.fill();
    g.fillStyle = ink;
    g.fillRect(44, 108, 190, 8);
    g.fillRect(44, 124, 160, 8);
    g.fillRect(44, 140, 120, 8);
    roundRect(g, 24, h - 62, w - 48, 38, 19);
    g.strokeStyle = soft;
    g.lineWidth = 2;
    g.stroke();
  } else {
    g.fillStyle = 'rgba(255, 170, 120, 0.4)';
    g.fillRect(18, 18, w - 36, h * 0.62);
    g.fillStyle = 'rgba(255, 236, 222, 0.85)';
    g.fillRect(30, h * 0.62 - 50, w * 0.55, 18);
    g.fillRect(30, h * 0.62 - 24, w * 0.4, 12);
    g.fillStyle = ink;
    g.fillRect(18, h - 70, w - 36, 10);
    g.fillRect(18, h - 52, w * 0.6, 10);
  }

  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  tex.anisotropy = 4;
  return { tex, aspect: w / h };
}

export function mountHeroScene(canvas: HTMLCanvasElement) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  const small = innerWidth < 760 || (navigator as Navigator & { hardwareConcurrency?: number }).hardwareConcurrency! <= 4;
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.25 : 2));

  const scene = new Scene();
  scene.fog = new Fog(0x1b0200, 10, 58);
  const camera = new PerspectiveCamera(58, 1, 0.1, 100);
  camera.position.set(0, 0, 8);

  const kinds: Kind[] = ['browser', 'browser', 'phone', 'chart', 'chat', 'ad', 'browser', 'phone'];
  const textures = kinds.flatMap((k) => PALETTE.slice(0, 4).map((col) => ({ k, ...cardTexture(k, col) })));

  const DEPTH = 56;
  const cards: { mesh: Mesh; speed: number; spin: number }[] = [];
  const N = small ? 30 : 56;
  for (let i = 0; i < N; i++) {
    const t = textures[(i * 7) % textures.length];
    const scale = (t.k === 'phone' ? 2.4 : t.k === 'browser' ? 4.4 : 3.1) * (0.8 + Math.random() * 0.5);
    const geo = new PlaneGeometry(scale * t.aspect, scale);
    const mat = new MeshBasicMaterial({ map: t.tex, transparent: true, depthWrite: false, side: DoubleSide, fog: true });
    const mesh = new Mesh(geo, mat);
    // place on the walls of an oval tunnel, keeping the centre clear for the headline
    const angle = (i / N) * Math.PI * 2 * 5 + Math.random() * 0.5;
    const radius = 5.2 + Math.random() * 3.2;
    const x = Math.cos(angle) * radius * 1.55;
    const y = Math.sin(angle) * radius * 0.95;
    mesh.position.set(x, y, 3 - Math.random() * (DEPTH + 3));
    // turn each card towards the tunnel axis, like panels lining a corridor
    mesh.rotation.set(Math.sign(y) * (0.35 + Math.random() * 0.35), -Math.sign(x) * (0.5 + Math.random() * 0.4), (Math.random() - 0.5) * 0.5);
    scene.add(mesh);
    cards.push({ mesh, speed: 0.9 + Math.random() * 0.8, spin: (Math.random() - 0.5) * 0.06 });
  }

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  const onMove = (e: PointerEvent) => {
    mouse.tx = (e.clientX / innerWidth - 0.5) * 2;
    mouse.ty = (e.clientY / innerHeight - 0.5) * 2;
  };
  addEventListener('pointermove', onMove, { passive: true });

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(canvas);
  resize();

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let visible = true;
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(canvas);

  const clock = new Clock();
  const tick = () => {
    const dt = Math.min(clock.getDelta(), 0.05);
    if (visible) {
      if (!reduce) {
        for (const c of cards) {
          c.mesh.position.z += c.speed * dt;
          c.mesh.rotation.z += c.spin * dt;
          if (c.mesh.position.z > 3) c.mesh.position.z -= DEPTH + 3;
          // fade cards out before they get close enough to cover the headline
          const m = c.mesh.material as MeshBasicMaterial;
          m.opacity = Math.min(1, Math.max(0, (3 - c.mesh.position.z) / 6));
        }
      }
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      camera.position.x = mouse.x * 0.9;
      camera.position.y = -mouse.y * 0.6;
      camera.lookAt(0, 0, -20);
      renderer.render(scene, camera);
    }
    requestAnimationFrame(tick);
  };
  tick();
}
