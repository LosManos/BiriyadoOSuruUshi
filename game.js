/* ==========================================================================
   BIRIYADO O SURU USHI (COW BILLIARDS) - GAME ENGINE
   ========================================================================== */

// --- 1. COW BREED CHAMPIONS CONFIGURATION ---
const COW_BREEDS = {
  SLB: {
    name: "Swedish SLB",
    tagline: "Classic Dairy Champion",
    desc: "The iconic black-and-white spotted cow. Highly reliable, cheerful, and has a classic, heartwarming moo chime.",
    color: "hsl(0, 0%, 90%)",
    accent: "hsl(0, 0%, 15%)",
    // SVG dynamic generator
    getSvg: (glow = false) => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="slb-head" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#e0e0e0"/>
          </radialGradient>
        </defs>
        ${glow ? '<circle cx="50" cy="50" r="45" fill="none" stroke="rgba(34, 197, 94, 0.4)" stroke-width="4" stroke-dasharray="4 2"/>' : ''}
        <!-- Ears -->
        <path d="M15,30 Q5,25 10,40 Z" fill="#111" />
        <path d="M85,30 Q95,25 90,40 Z" fill="#111" />
        <!-- Head Base -->
        <ellipse cx="50" cy="45" rx="30" ry="25" fill="url(#slb-head)" stroke="#111" stroke-width="2"/>
        <!-- Spotted Patches -->
        <path d="M25,30 Q30,45 20,48 Z" fill="#111" />
        <path d="M65,25 Q70,40 75,35 Z" fill="#111" />
        <path d="M45,55 Q50,60 55,52 Z" fill="#111" />
        <!-- Snout -->
        <ellipse cx="50" cy="58" rx="20" ry="12" fill="#ffaab3" stroke="#111" stroke-width="1.5"/>
        <circle cx="43" cy="58" r="3" fill="#602025" />
        <circle cx="57" cy="58" r="3" fill="#602025" />
        <!-- Eyes -->
        <circle cx="36" cy="38" r="4" fill="#000" />
        <circle cx="64" cy="38" r="4" fill="#000" />
        <circle cx="38" cy="36" r="1.5" fill="#fff" />
        <circle cx="66" cy="36" r="1.5" fill="#fff" />
      </svg>
    `,
    soundFreqs: [110, 165, 220] // Traditional rich harmonics
  },
  Mishima: {
    name: "Japanese Mishima",
    tagline: "Elegant Heritage Shotmaker",
    desc: "A legendary native Japanese breed. Small in stature, extremely focused, with a sharp eye and a beautiful bell-like sound.",
    color: "hsl(215, 25%, 15%)",
    accent: "hsl(45, 93%, 58%)",
    getSvg: (glow = false) => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="mishima-head" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stop-color="#2a3440"/>
            <stop offset="100%" stop-color="#121820"/>
          </radialGradient>
        </defs>
        ${glow ? '<circle cx="50" cy="50" r="45" fill="none" stroke="rgba(34, 197, 94, 0.4)" stroke-width="4" stroke-dasharray="4 2"/>' : ''}
        <!-- Horns -->
        <path d="M28,25 Q15,10 12,20 Z" fill="#e8e8e8" stroke="#111" stroke-width="1"/>
        <path d="M72,25 Q85,10 88,20 Z" fill="#e8e8e8" stroke="#111" stroke-width="1"/>
        <!-- Ears -->
        <path d="M18,32 Q8,30 12,42 Z" fill="#121820" />
        <path d="M82,32 Q92,30 88,42 Z" fill="#121820" />
        <!-- Head -->
        <ellipse cx="50" cy="45" rx="28" ry="24" fill="url(#mishima-head)" stroke="#111" stroke-width="2"/>
        <!-- Elegant gold star mark on forehead -->
        <path d="M50,28 L52,34 L58,34 L53,38 L55,44 L50,40 L45,44 L47,38 L42,34 L48,34 Z" fill="#f5c453" />
        <!-- Snout -->
        <ellipse cx="50" cy="56" rx="18" ry="11" fill="#e8a8b0" stroke="#111" stroke-width="1.5"/>
        <circle cx="44" cy="56" r="2.5" fill="#401015" />
        <circle cx="56" cy="56" r="2.5" fill="#401015" />
        <!-- Focused Eyes -->
        <circle cx="37" cy="38" r="3.5" fill="#000" />
        <circle cx="63" cy="38" r="3.5" fill="#000" />
        <circle cx="39" cy="36" r="1.2" fill="#fff" />
        <circle cx="65" cy="36" r="1.2" fill="#fff" />
      </svg>
    `,
    soundFreqs: [220, 330, 440] // High-pitched elegant chimes
  },
  Longhorn: {
    name: "Scottish Longhorn",
    tagline: "Fluffy Highland Star",
    desc: "Iconic fuzzy hair and majestic wide horns. Very laid back, patient, and has a deep vibrating baritone moo.",
    color: "hsl(28, 60%, 45%)",
    accent: "hsl(28, 60%, 35%)",
    getSvg: (glow = false) => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="longhorn-hair" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#b45309"/>
            <stop offset="100%" stop-color="#78350f"/>
          </linearGradient>
        </defs>
        ${glow ? '<circle cx="50" cy="50" r="45" fill="none" stroke="rgba(34, 197, 94, 0.4)" stroke-width="4" stroke-dasharray="4 2"/>' : ''}
        <!-- Giant Horns -->
        <path d="M26,24 Q2,5 5,12 C10,18 20,20 28,26 Z" fill="#eae6df" stroke="#78350f" stroke-width="1.5"/>
        <path d="M74,24 Q98,5 95,12 C90,18 80,20 72,26 Z" fill="#eae6df" stroke="#78350f" stroke-width="1.5"/>
        <!-- Ears -->
        <path d="M20,38 Q10,40 15,48 Z" fill="#78350f" />
        <path d="M80,38 Q90,40 85,48 Z" fill="#78350f" />
        <!-- Head -->
        <ellipse cx="50" cy="46" rx="26" ry="22" fill="#a16207" stroke="#111" stroke-width="1.5"/>
        <!-- Fluffy Hair covering forehead -->
        <path d="M22,30 Q30,16 50,16 Q70,16 78,30 C70,38 60,34 50,42 C40,34 30,38 22,30 Z" fill="url(#longhorn-hair)"/>
        <!-- Snout -->
        <ellipse cx="50" cy="58" rx="18" ry="10" fill="#ffaab3" stroke="#111" stroke-width="1"/>
        <circle cx="44" cy="58" r="2.5" fill="#602025" />
        <circle cx="56" cy="58" r="2.5" fill="#602025" />
        <!-- Eyes peeking through hair -->
        <circle cx="36" cy="38" r="3" fill="#000" />
        <circle cx="64" cy="38" r="3" fill="#000" />
        <circle cx="37.5" cy="36.5" r="1" fill="#fff" />
        <circle cx="65.5" cy="36.5" r="1" fill="#fff" />
      </svg>
    `,
    soundFreqs: [82.4, 123.5, 164.8] // Extremely deep baritone hums
  },
  Zebu: {
    name: "Zebu Champion",
    tagline: "Agile Ear humper",
    desc: "A humped cow with long floppy ears from South Asia. Quirky, swift, with a playful squeaky double chime.",
    color: "hsl(35, 15%, 65%)",
    accent: "hsl(35, 15%, 45%)",
    getSvg: (glow = false) => `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="zebu-head" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stop-color="#b8b0a5"/>
            <stop offset="100%" stop-color="#8c8275"/>
          </radialGradient>
        </defs>
        ${glow ? '<circle cx="50" cy="50" r="45" fill="none" stroke="rgba(34, 197, 94, 0.4)" stroke-width="4" stroke-dasharray="4 2"/>' : ''}
        <!-- Hump showing on top of head -->
        <ellipse cx="50" cy="20" rx="14" ry="8" fill="#8c8275" stroke="#111" stroke-width="1"/>
        <!-- Horns curved inward -->
        <path d="M32,25 Q24,12 36,15 Z" fill="#3a3530" />
        <path d="M68,25 Q76,12 64,15 Z" fill="#3a3530" />
        <!-- Drooping Ears -->
        <path d="M22,34 Q8,45 16,55 C18,50 22,42 24,38 Z" fill="#8c8275" stroke="#111" stroke-width="1" />
        <path d="M78,34 Q92,45 84,55 C82,50 78,42 76,38 Z" fill="#8c8275" stroke="#111" stroke-width="1" />
        <!-- Head -->
        <ellipse cx="50" cy="42" rx="24" ry="24" fill="url(#zebu-head)" stroke="#111" stroke-width="2"/>
        <!-- Snout -->
        <ellipse cx="50" cy="56" rx="16" ry="12" fill="#d9c3b0" stroke="#111" stroke-width="1.5"/>
        <circle cx="44" cy="56" r="2.5" fill="#302015" />
        <circle cx="56" cy="56" r="2.5" fill="#302015" />
        <!-- Big friendly eyes -->
        <circle cx="36" cy="36" r="4.5" fill="#000" />
        <circle cx="64" cy="36" r="4.5" fill="#000" />
        <circle cx="38.5" cy="34" r="1.8" fill="#fff" />
        <circle cx="66.5" cy="34" r="1.8" fill="#fff" />
      </svg>
    `,
    soundFreqs: [146.8, 293.7, 392.0] // Playful double octave squeak
  }
};

// --- 2. SOUND SYNTHESIS MANAGER (WEB AUDIO API) ---
class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Synthesizes a realistic billiard ball click (satisfying wood blocks / plastic clack)
  playCollision(volume = 1) {
    if (!this.enabled) return;
    this.init();
    
    const now = this.ctx.currentTime;
    
    // Core snap oscillator (high-frequency transient)
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(1200, now);
    osc1.frequency.exponentialRampToValueAtTime(100, now + 0.04);
    
    gain1.gain.setValueAtTime(0.3 * volume, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    // Deep body oscillator (felt impact thud)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(180, now);
    osc2.frequency.exponentialRampToValueAtTime(60, now + 0.08);
    
    gain2.gain.setValueAtTime(0.25 * volume, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    // Dynamic bandpass filter to give plastic "clack" shape
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, now);
    filter.Q.setValueAtTime(3, now);

    osc1.connect(gain1);
    osc2.connect(gain2);
    
    gain1.connect(filter);
    gain2.connect(this.ctx.destination);
    filter.connect(this.ctx.destination);
    
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.05);
    osc2.stop(now + 0.1);
  }

  // Synthesizes a dull wood thud for cushion/rail bounces
  playCushion(volume = 1) {
    if (!this.enabled) return;
    this.init();
    
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(95, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.15);
    
    gain.gain.setValueAtTime(0.4 * volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.16);
  }

  // Synthesizes a pocket sink "swish & cup plop"
  playPocket() {
    if (!this.enabled) return;
    this.init();
    
    const now = this.ctx.currentTime;
    
    // Wave 1: The drop plop
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(140, now);
    osc1.frequency.exponentialRampToValueAtTime(50, now + 0.25);
    gain1.gain.setValueAtTime(0.5, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    // Wave 2: Sinking chime celebration
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(330, now);
    osc2.frequency.exponentialRampToValueAtTime(660, now + 0.35);
    gain2.gain.setValueAtTime(0.15, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc2.connect(gain2);
    gain2.connect(this.ctx.destination);
    
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.26);
    osc2.stop(now + 0.36);
  }

  // Synthesizes a beautiful customized "Moo Chime" depending on the cow breed
  playMooChime(breedKey) {
    if (!this.enabled || !breedKey) return;
    this.init();
    
    const config = COW_BREEDS[breedKey];
    if (!config) return;
    
    const freqs = config.soundFreqs;
    const now = this.ctx.currentTime;
    
    // Create an FM synthesizer mock to simulate a cow's vocal vibration chimes
    freqs.forEach((baseFreq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();
      
      // Give Scottish Longhorn sawtooth/triangle; Mishima sine; SLB/Zebu triangle
      if (breedKey === 'Longhorn') {
        osc.type = 'sawtooth';
      } else if (breedKey === 'Mishima') {
        osc.type = 'sine';
      } else {
        osc.type = 'triangle';
      }
      
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.linearRampToValueAtTime(baseFreq * 0.98, now + 0.3);
      osc.frequency.linearRampToValueAtTime(baseFreq * 1.01, now + 0.8);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.15 - (i * 0.03), now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(baseFreq * 2.5, now);
      filter.frequency.exponentialRampToValueAtTime(baseFreq * 1.2, now + 1.0);
      
      osc.connect(gain);
      gain.connect(filter);
      filter.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + 1.3);
    });
  }
}

const sounds = new SoundManager();

// --- 3. PHYSICS & GAME STATE MANAGER ---

// Rotates a 3D vector v around a unit axis (ax, ay, az) by a given angle in radians using Rodrigues' formula
function rotateVector(v, ax, ay, az, angle) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const dot = ax * v[0] + ay * v[1] + az * v[2];
  
  // Cross product: a x v
  const cx = ay * v[2] - az * v[1];
  const cy = az * v[0] - ax * v[2];
  const cz = ax * v[1] - ay * v[0];
  
  return [
    v[0] * cos + cx * sin + ax * dot * (1 - cos),
    v[1] * cos + cy * sin + ay * dot * (1 - cos),
    v[2] * cos + cz * sin + az * dot * (1 - cos)
  ];
}

// Performs Gram-Schmidt orthonormalization after LERPing local axes rx, ry, rz towards identity
function lerpResetOrientation(ball, t = 0.08) {
  const targetRx = [1, 0, 0];
  const targetRy = [0, 1, 0];
  const targetRz = [0, 0, 1];
  
  // 1. Lerp rz toward [0, 0, 1]
  const rz_x = ball.rz[0] * (1 - t) + targetRz[0] * t;
  const rz_y = ball.rz[1] * (1 - t) + targetRz[1] * t;
  const rz_z = ball.rz[2] * (1 - t) + targetRz[2] * t;
  
  // Normalize rz
  const lenZ = Math.hypot(rz_x, rz_y, rz_z);
  if (lenZ > 0) {
    ball.rz = [rz_x / lenZ, rz_y / lenZ, rz_z / lenZ];
  } else {
    ball.rz = [0, 0, 1];
  }
  
  // 2. Lerp rx toward [1, 0, 0]
  const rx_x = ball.rx[0] * (1 - t) + targetRx[0] * t;
  const rx_y = ball.rx[1] * (1 - t) + targetRx[1] * t;
  const rx_z = ball.rx[2] * (1 - t) + targetRx[2] * t;
  
  // Orthogonalize rx relative to rz
  const dotXZ = rx_x * ball.rz[0] + rx_y * ball.rz[1] + rx_z * ball.rz[2];
  const orthoRx_x = rx_x - dotXZ * ball.rz[0];
  const orthoRx_y = rx_y - dotXZ * ball.rz[1];
  const orthoRx_z = rx_z - dotXZ * ball.rz[2];
  
  // Normalize rx
  const lenX = Math.hypot(orthoRx_x, orthoRx_y, orthoRx_z);
  if (lenX > 0) {
    ball.rx = [orthoRx_x / lenX, orthoRx_y / lenX, orthoRx_z / lenX];
  } else {
    ball.rx = [1, 0, 0];
  }
  
  // 3. ry is cross product rz x rx to maintain perfect right-handed orthonormality
  ball.ry = [
    ball.rz[1] * ball.rx[2] - ball.rz[2] * ball.rx[1],
    ball.rz[2] * ball.rx[0] - ball.rz[0] * ball.rx[2],
    ball.rz[0] * ball.rx[1] - ball.rz[1] * ball.rx[0]
  ];
  
  // 4. Check if we are close enough to identity to snap and finish resetting
  if (Math.abs(ball.rz[2] - 1) < 0.001 && Math.abs(ball.rx[0] - 1) < 0.001) {
    ball.rx = [1, 0, 0];
    ball.ry = [0, 1, 0];
    ball.rz = [0, 0, 1];
    ball.isResetting = false;
  }
}

// Draws a beautiful 3D-perspective projected golden star
function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, color) {
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = '#d97706'; // Darker gold outline for gorgeous contrast
  ctx.lineWidth = 0.5;
  ctx.stroke();
}

class GameEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    
    // Virtual coordination system flipped to vertical (500x1000 - perfect 1:2 aspect ratio)
    this.virtualWidth = 500;
    this.virtualHeight = 1000;
    this.ballRadius = 15;
    
    // Playable field bounds (wooden log fence cushions inside border lines)
    this.bounds = {
      left: 32,
      right: 468,
      top: 32,
      bottom: 968
    };
    
    // 6 Pockets (Watering holes relocated to the vertical grid)
    this.pockets = [
      { x: 32, y: 32, r: 28 },      // Top Left
      { x: 24, y: 500, r: 25 },     // Middle Left
      { x: 32, y: 968, r: 28 },     // Bottom Left
      { x: 468, y: 32, r: 28 },     // Top Right
      { x: 476, y: 500, r: 25 },    // Middle Right
      { x: 468, y: 968, r: 28 }     // Bottom Right
    ];
    
    // Physics constants
    this.friction = 0.988;
    this.bounceDampening = 0.88;
    
    // Core Game State
    this.turnCount = 1;
    this.activePlayer = 1; // 1 or 2
    this.selectedCows = ['SLB', null]; // Player 2 defaults to null on setup!
    this.myPlayerNumber = null; // Local device player identity (1 or 2)
    
    this.balls = [];
    this.sunkBalls = [];
    this.isRolling = false;
    this.scratchOccurred = false;
    
    // Interaction state
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
    this.dragCurrent = { x: 0, y: 0 };
    
    // Decorative Pasture Visual Assets (Procedural Flower & Grass Lists)
    this.flowers = [];
    this.grassTufts = [];
    this.generatePastureFoliage();

    // Dynamic Server IP state (resolving localhost problem on mobile)
    this.serverIp = window.location.hostname;
    this.serverPort = window.location.port;
    
    // Fetch server's local network IP to replace 'localhost' when sharing links
    fetch('/api/ip')
      .then(res => res.json())
      .then(data => {
        if (data.ip && data.ip !== 'localhost') {
          this.serverIp = data.ip;
          this.serverPort = data.port;
        }
      })
      .catch(err => console.warn("Failed to fetch server IP, falling back to hostname:", err));

    this.setupResponsiveness();
    this.resetTable();
  }

  // Pre-generates coordinates of buttercups, daisies and grass blades once
  generatePastureFoliage() {
    this.flowers = [];
    this.grassTufts = [];
    this.borderGrassTufts = [];
    const types = ['buttercup', 'daisy', 'clover'];
    
    // Generate 32 random wildflowers and clovers
    for (let i = 0; i < 32; i++) {
      this.flowers.push({
        x: 45 + Math.random() * (this.virtualWidth - 90),
        y: 45 + Math.random() * (this.virtualHeight - 90),
        type: types[Math.floor(Math.random() * types.length)],
        size: 3.5 + Math.random() * 3
      });
    }

    // Generate 75 organic grass tuft positions
    for (let i = 0; i < 75; i++) {
      this.grassTufts.push({
        x: 45 + Math.random() * (this.virtualWidth - 90),
        y: 45 + Math.random() * (this.virtualHeight - 90),
        length: 5 + Math.random() * 6
      });
    }

    // Generate 45 border grass tufts that hug the fence rails and peek over them
    for (let i = 0; i < 45; i++) {
      const side = Math.floor(Math.random() * 4);
      let x, y, len = 6 + Math.random() * 6;
      if (side === 0) { // Top rail (y near 25)
        x = 40 + Math.random() * (this.virtualWidth - 80);
        y = 22 + Math.random() * 8;
      } else if (side === 1) { // Bottom rail (y near 975)
        x = 40 + Math.random() * (this.virtualWidth - 80);
        y = 970 + Math.random() * 8;
      } else if (side === 2) { // Left rail (x near 25)
        x = 22 + Math.random() * 8;
        y = 40 + Math.random() * (this.virtualHeight - 80);
      } else { // Right rail (x near 475)
        x = 470 + Math.random() * 8;
        y = 40 + Math.random() * (this.virtualHeight - 80);
      }
      this.borderGrassTufts.push({ x, y, length: len });
    }

    // Create the procedural high-fidelity grass texture offscreen canvas
    this.createGrassTexture();
  }

  // Pre-renders a highly-detailed pasture texture canvas for maximum performance and gorgeous grass aesthetics
  createGrassTexture() {
    const grassCanvas = document.createElement('canvas');
    grassCanvas.width = this.virtualWidth;
    grassCanvas.height = this.virtualHeight;
    const ctx = grassCanvas.getContext('2d');

    // 1. Base pasture green
    ctx.fillStyle = '#1c4422'; // Lush base green
    ctx.fillRect(0, 0, this.virtualWidth, this.virtualHeight);

    // 2. Mower Lawn stripes (alternating light/dark green bands for a premium turf look)
    const numStripes = 10;
    const stripeWidth = this.virtualWidth / numStripes;
    for (let i = 0; i < numStripes; i++) {
      ctx.fillStyle = i % 2 === 0 ? 'rgba(34, 197, 94, 0.04)' : 'rgba(10, 35, 10, 0.04)';
      ctx.fillRect(i * stripeWidth, 0, stripeWidth, this.virtualHeight);
    }

    // 3. Sunlight radial glow
    const radialGrad = ctx.createRadialGradient(
      this.virtualWidth / 2, this.virtualHeight / 2, 80,
      this.virtualWidth / 2, this.virtualHeight / 2, 800
    );
    radialGrad.addColorStop(0, 'rgba(45, 109, 61, 0.45)');  // center bright grass highlight
    radialGrad.addColorStop(1, 'rgba(15, 38, 16, 0.45)');   // outer deep border green
    ctx.fillStyle = radialGrad;
    ctx.fillRect(0, 0, this.virtualWidth, this.virtualHeight);

    // 4. Generate thousands of tiny, highly detailed grass blades
    // Draw 5000 tiny blades of grass to make a truly dense sod/felt!
    ctx.lineWidth = 1.0;
    for (let i = 0; i < 5000; i++) {
      const gx = Math.random() * this.virtualWidth;
      const gy = Math.random() * this.virtualHeight;
      const len = 3 + Math.random() * 5;
      const angle = (Math.random() - 0.5) * 0.4; // slight tilt

      // Pick organic grass green variants
      const greens = [
        'rgba(34, 95, 42, 0.7)',   // Forest green
        'rgba(27, 86, 36, 0.65)',  // Deep green
        'rgba(45, 137, 59, 0.55)',  // Medium emerald
        'rgba(30, 72, 38, 0.75)',   // Olive grass
        'rgba(74, 166, 88, 0.35)'   // Sunny lime highlight
      ];
      ctx.strokeStyle = greens[Math.floor(Math.random() * greens.length)];

      ctx.beginPath();
      ctx.moveTo(gx, gy);
      ctx.quadraticCurveTo(
        gx + angle * len * 0.5, gy - len * 0.5,
        gx + angle * len, gy - len
      );
      ctx.stroke();
    }

    // 5. Draw tiny clover patches in the turf
    for (let i = 0; i < 40; i++) {
      const cx = Math.random() * this.virtualWidth;
      const cy = Math.random() * this.virtualHeight;
      const s = 1.5 + Math.random() * 1.5;
      ctx.fillStyle = 'rgba(21, 128, 61, 0.45)'; // Subtle green clover color

      // Tiny 3-leaf shape
      ctx.beginPath(); ctx.arc(cx - s*0.5, cy - s*0.2, s, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx + s*0.5, cy - s*0.2, s, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx, cy + s*0.3, s, 0, Math.PI*2); ctx.fill();
    }

    // 6. Draw subtle soil/dirt spots for organic depth
    for (let i = 0; i < 15; i++) {
      const dx = Math.random() * this.virtualWidth;
      const dy = Math.random() * this.virtualHeight;
      const dr = 1 + Math.random() * 2;
      ctx.fillStyle = 'rgba(45, 26, 15, 0.15)'; // faint mud dirt
      ctx.beginPath();
      ctx.arc(dx, dy, dr, 0, Math.PI*2);
      ctx.fill();
    }

    this.grassTexture = grassCanvas;
  }

  setupResponsiveness() {
    const resize = () => {
      const parent = this.canvas.parentElement;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      
      this.canvas.width = width;
      this.canvas.height = height;
    };
    window.addEventListener('resize', resize);
    setTimeout(resize, 100);
  }

  canvasToVirtual(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    const canvasX = clientX - rect.left;
    const canvasY = clientY - rect.top;
    
    // Calculate independent scaling to stretch calculations
    const scaleX = rect.width / this.virtualWidth;
    const scaleY = rect.height / this.virtualHeight;
    
    const x = canvasX / scaleX;
    const y = canvasY / scaleY;
    
    return { x, y };
  }

  // Resets layout to vertical orientation: cue ball at bottom, triangle pointing down at top
  resetTable() {
    this.balls = [];
    this.sunkBalls = [];
    this.scratchOccurred = false;
    
    // 1. Cue Ball placed at (250, 750) - bottom kitchen area
    this.balls.push({
      id: 0,
      x: 250,
      y: 750,
      vx: 0,
      vy: 0,
      radius: this.ballRadius,
      isCue: true,
      color: '#ffffff',
      scale: 1,
      sinking: false,
      rx: [1, 0, 0],
      ry: [0, 1, 0],
      rz: [0, 0, 1],
      stoppedTime: Date.now(),
      isResetting: false
    });
    
    // 2. 6-Ball Triangle Rack placed pointing down, apexed at (250, 320)
    const apexX = 250;
    const apexY = 320; // Pushed down slightly to give room at the top
    
    // Calculate aspect ratio correction to make balls touch perfectly on screen
    const rect = this.canvas.getBoundingClientRect();
    const canvasW = rect.width || this.canvas.width || 360;
    const canvasH = rect.height || this.canvas.height || 720;
    const cScaleX = canvasW / this.virtualWidth;
    const cScaleY = canvasH / this.virtualHeight;
    const aspectCorrection = cScaleX / cScaleY;
    
    // Horizontal spacing (dx) is exactly 2 * radius (30)
    const dx = this.ballRadius * 2;
    // Vertical spacing (dy) uses trigonometry corrected by our aspect ratio ratio!
    const dy = 25.98 * aspectCorrection; 
    
    // Row 1 (Apex ball)
    this.balls.push({ id: 1, x: apexX, y: apexY, vx: 0, vy: 0, radius: this.ballRadius, color: '#f5c453', scale: 1, sinking: false, rx: [1, 0, 0], ry: [0, 1, 0], rz: [0, 0, 1], stoppedTime: Date.now(), isResetting: false });
    
    // Row 2 (y = apexY - dy)
    this.balls.push({ id: 2, x: apexX - dx/2, y: apexY - dy, vx: 0, vy: 0, radius: this.ballRadius, color: '#3b82f6', scale: 1, sinking: false, rx: [1, 0, 0], ry: [0, 1, 0], rz: [0, 0, 1], stoppedTime: Date.now(), isResetting: false });
    this.balls.push({ id: 3, x: apexX + dx/2, y: apexY - dy, vx: 0, vy: 0, radius: this.ballRadius, color: '#ef4444', scale: 1, sinking: false, rx: [1, 0, 0], ry: [0, 1, 0], rz: [0, 0, 1], stoppedTime: Date.now(), isResetting: false });
    
    // Row 3 (y = apexY - 2*dy)
    this.balls.push({ id: 4, x: apexX - dx, y: apexY - dy * 2, vx: 0, vy: 0, radius: this.ballRadius, color: '#a855f7', scale: 1, sinking: false, rx: [1, 0, 0], ry: [0, 1, 0], rz: [0, 0, 1], stoppedTime: Date.now(), isResetting: false });
    this.balls.push({ id: 5, x: apexX, y: apexY - dy * 2, vx: 0, vy: 0, radius: this.ballRadius, color: '#f97316', scale: 1, sinking: false, rx: [1, 0, 0], ry: [0, 1, 0], rz: [0, 0, 1], stoppedTime: Date.now(), isResetting: false });
    this.balls.push({ id: 6, x: apexX + dx, y: apexY - dy * 2, vx: 0, vy: 0, radius: this.ballRadius, color: '#10b981', scale: 1, sinking: false, rx: [1, 0, 0], ry: [0, 1, 0], rz: [0, 0, 1], stoppedTime: Date.now(), isResetting: false });
    
    this.isRolling = false;
    this.isDragging = false;
    this.updateControlsUI();
  }

  // --- CORE GAME STATE EXPORT/IMPORT (URL-FRIENDLY BASE64 JSON) ---
  
  serializeState() {
    const BREED_CHAR_MAP = {
      'SLB': 'S',
      'Mishima': 'M',
      'Longhorn': 'L',
      'Zebu': 'Z'
    };
    
    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));
    const toBase36 = (val) => clamp(Math.round(val), 0, 1295).toString(36).padStart(2, '0');
    
    const turnStr = this.turnCount.toString(36);
    const activePlayerStr = this.activePlayer.toString();
    
    const cow1 = BREED_CHAR_MAP[this.selectedCows[0]] || '_';
    const cow2 = BREED_CHAR_MAP[this.selectedCows[1]] || '_';
    const cowsStr = cow1 + cow2;
    
    const cueBall = this.balls.find(b => b.isCue);
    const cueX = cueBall ? cueBall.x : 250;
    const cueY = cueBall ? cueBall.y : 750;
    const cueStr = toBase36(cueX) + toBase36(cueY);
    
    const targetBallsStr = this.balls
      .filter(b => !b.isCue)
      .map(b => b.id.toString() + toBase36(b.x) + toBase36(b.y))
      .join('');
      
    return `${turnStr}.${activePlayerStr}.${cowsStr}.${cueStr}.${targetBallsStr}`;
  }

  decodeStateParam(param) {
    if (!param) return null;
    
    // If the param contains a dot, it is already a raw compact string.
    if (param.includes('.')) {
      return param;
    }
    
    // 1. Try decoding as Base64 first (for old JSON sharing links)
    try {
      const decoded = decodeURIComponent(escape(atob(param)));
      if (decoded.trim().startsWith('{') || decoded.includes('.')) {
        return decoded;
      }
    } catch (e) {
      // Ignore decoding errors and fallback to raw param
    }
    // 2. Otherwise treat it as the raw compact state parameter
    return param;
  }

  deserializeState(stateString) {
    if (!stateString) return false;
    const cleaned = stateString.trim();
    
    if (cleaned.startsWith('{')) {
      return this.deserializeJsonState(cleaned);
    }
    
    // Parse custom compact format: turn.activePlayer.cows.cue.balls
    const parts = cleaned.split('.');
    if (parts.length < 5) {
      return false;
    }
    
    try {
      const CHAR_BREED_MAP = {
        'S': 'SLB',
        'M': 'Mishima',
        'L': 'Longhorn',
        'Z': 'Zebu'
      };
      const fromBase36 = (str) => parseInt(str, 36);
      
      const turnCount = fromBase36(parts[0]);
      const activePlayer = parseInt(parts[1], 10);
      const cowsStr = parts[2];
      const cueStr = parts[3];
      const ballsStr = parts[4];
      
      if (isNaN(turnCount) || isNaN(activePlayer) || cowsStr.length !== 2 || cueStr.length !== 4) {
        return false;
      }
      
      this.turnCount = turnCount;
      this.activePlayer = activePlayer;
      this.selectedCows = [
        CHAR_BREED_MAP[cowsStr[0]] || null,
        CHAR_BREED_MAP[cowsStr[1]] || null
      ];
      
      // Auto-detect and set local device player identity upon deserializing
      if (activePlayer === 2 && this.selectedCows[1] === null) {
        this.myPlayerNumber = 2; // Joining as Player 2
      } else if (activePlayer === 1) {
        this.myPlayerNumber = 1; // Resuming as Player 1
      } else {
        this.myPlayerNumber = activePlayer; // Fallback guess
      }
      
      const cueX = fromBase36(cueStr.substring(0, 2));
      const cueY = fromBase36(cueStr.substring(2, 4));
      
      // Load cue ball
      this.balls = [{
        id: 0,
        x: cueX,
        y: cueY,
        vx: 0,
        vy: 0,
        radius: this.ballRadius,
        isCue: true,
        color: '#ffffff',
        scale: 1,
        sinking: false,
        rx: [1, 0, 0],
        ry: [0, 1, 0],
        rz: [0, 0, 1],
        stoppedTime: Date.now(),
        isResetting: false
      }];
      
      const ballColors = {
        1: '#f5c453',
        2: '#3b82f6',
        3: '#ef4444',
        4: '#a855f7',
        5: '#f97316',
        6: '#10b981'
      };
      
      // Load target balls
      const activeIds = [];
      for (let i = 0; i < ballsStr.length; i += 5) {
        if (i + 5 > ballsStr.length) break;
        const id = parseInt(ballsStr[i], 10);
        const x = fromBase36(ballsStr.substring(i + 1, i + 3));
        const y = fromBase36(ballsStr.substring(i + 3, i + 5));
        
        if (isNaN(id) || isNaN(x) || isNaN(y)) {
          return false;
        }
        
        activeIds.push(id);
        this.balls.push({
          id,
          x,
          y,
          vx: 0,
          vy: 0,
          radius: this.ballRadius,
          color: ballColors[id] || '#f5c453',
          scale: 1,
          sinking: false,
          rx: [1, 0, 0],
          ry: [0, 1, 0],
          rz: [0, 0, 1],
          stoppedTime: Date.now(),
          isResetting: false
        });
      }
      
      // Derive which balls are sunk
      const allIds = [1, 2, 3, 4, 5, 6];
      this.sunkBalls = allIds.filter(id => !activeIds.includes(id));
      
      this.isRolling = false;
      this.isDragging = false;
      this.scratchOccurred = false;
      
      this.updateHudUI();
      this.updateControlsUI();
      return true;
    } catch (e) {
      console.error("Failed to parse compact game state:", e);
      return false;
    }
  }

  deserializeJsonState(jsonString) {
    try {
      const state = JSON.parse(jsonString);
      if (!state.t || !state.a || !state.cue || !Array.isArray(state.b)) {
        return false;
      }
      
      this.turnCount = state.t;
      this.activePlayer = state.a;
      this.selectedCows = state.c || ['SLB', null];
      
      // Auto-detect and set local device player identity upon deserializing
      if (state.a === 2 && (!state.c || state.c[1] === null)) {
        this.myPlayerNumber = 2; // Joining as Player 2
      } else if (state.a === 1) {
        this.myPlayerNumber = 1; // Resuming as Player 1
      } else {
        this.myPlayerNumber = state.a; // Fallback guess
      }
      
      // Load cue ball
      this.balls = [{
        id: 0,
        x: state.cue.x,
        y: state.cue.y,
        vx: 0,
        vy: 0,
        radius: this.ballRadius,
        isCue: true,
        color: '#ffffff',
        scale: 1,
        sinking: false,
        rx: [1, 0, 0],
        ry: [0, 1, 0],
        rz: [0, 0, 1],
        stoppedTime: Date.now(),
        isResetting: false
      }];
      
      const ballColors = {
        1: '#f5c453',
        2: '#3b82f6',
        3: '#ef4444',
        4: '#a855f7',
        5: '#f97316',
        6: '#10b981'
      };

      // Load target balls
      state.b.forEach(b => {
        this.balls.push({
          id: b.i,
          x: b.x,
          y: b.y,
          vx: 0,
          vy: 0,
          radius: this.ballRadius,
          color: b.c || ballColors[b.i] || '#f5c453',
          scale: 1,
          sinking: false,
          rx: [1, 0, 0],
          ry: [0, 1, 0],
          rz: [0, 0, 1],
          stoppedTime: Date.now(),
          isResetting: false
        });
      });
      
      // Derive which balls are sunk
      const allIds = [1, 2, 3, 4, 5, 6];
      const activeIds = state.b.map(b => b.i);
      this.sunkBalls = allIds.filter(id => !activeIds.includes(id));
      
      this.isRolling = false;
      this.isDragging = false;
      this.scratchOccurred = false;
      
      this.updateHudUI();
      this.updateControlsUI();
      return true;
    } catch (e) {
      console.error("Failed to parse game state JSON:", e);
      return false;
    }
  }

  // --- Aiming Controls (Portrait dragging) ---
  handleDragStart(clientX, clientY) {
    // Lock controls during rolling, if it's not this player's turn, OR if Player 2's breed select overlay is active!
    if (this.isRolling || 
        this.activePlayer !== this.myPlayerNumber || 
        (this.activePlayer === 2 && this.selectedCows[1] === null)) {
      return;
    }
    
    const pos = this.canvasToVirtual(clientX, clientY);
    const cueBall = this.balls.find(b => b.isCue);
    if (!cueBall) return;
    
    // Circle distance hit check
    const dist = Math.hypot(pos.x - cueBall.x, pos.y - cueBall.y);
    if (dist < 40) {
      this.isDragging = true;
      this.dragStart = { x: cueBall.x, y: cueBall.y };
      this.dragCurrent = pos;
    }
  }

  handleDragMove(clientX, clientY) {
    if (!this.isDragging) return;
    this.dragCurrent = this.canvasToVirtual(clientX, clientY);
  }

  handleDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    
    const cueBall = this.balls.find(b => b.isCue);
    if (!cueBall) return;
    
    // Vector pointing away from drag direction (standard pool aim pull-back)
    const dx = cueBall.x - this.dragCurrent.x;
    const dy = cueBall.y - this.dragCurrent.y;
    const length = Math.hypot(dx, dy);
    
    if (length < 8) return; // Too soft to register
    
    // Cap maximum power (drag length 160 units = max speed 16.5)
    const maxDrag = 160;
    const cappedLength = Math.min(length, maxDrag);
    const ratio = cappedLength / maxDrag;
    const speed = ratio * 16.5;
    
    // Set velocities
    cueBall.vx = (dx / length) * speed;
    cueBall.vy = (dy / length) * speed;
    
    this.isRolling = true;
    
    // Synthesize shoot brush sound
    sounds.playCollision(0.8);
    
    // Display physics notification
    const notice = document.getElementById('physics-notice');
    if (notice) notice.classList.add('visible');
    
    this.updateControlsUI();
  }

  // --- ENGINE UPDATE LOOP ---
  update() {
    // 1. Smooth Orientation Auto-Reset (always active, updates still balls)
    this.balls.forEach(ball => {
      if (ball.vx === 0 && ball.vy === 0 && !ball.sinking) {
        if (ball.stoppedTime === null) {
          ball.stoppedTime = Date.now();
        }
        if (Date.now() - ball.stoppedTime > 1000) {
          ball.isResetting = true;
        }
        if (ball.isResetting) {
          lerpResetOrientation(ball, 0.08);
        }
      }
    });

    // 2. Core Physics Update (only if balls are rolling)
    if (!this.isRolling) return;
    
    let anyRolling = false;
    
    // Move and check bounds
    this.balls.forEach(ball => {
      if (ball.sinking) {
        // Spiral and shrink toward the pocket center
        const targetPocket = this.pockets[ball.pocketIndex];
        if (targetPocket) {
          const dx = targetPocket.x - ball.x;
          const dy = targetPocket.y - ball.y;
          ball.x += dx * 0.15;
          ball.y += dy * 0.15;
          ball.scale -= 0.08;
          if (ball.scale <= 0) {
            ball.scale = 0;
            // Fully sunk
            if (ball.isCue) {
              this.scratchOccurred = true;
            } else {
              this.sunkBalls.push(ball.id);
            }
            ball.sunkComplete = true;
          }
        }
        anyRolling = true;
        return;
      }
      
      // Standard linear friction damping with 3D rotation update
      const dx = ball.vx;
      const dy = ball.vy;
      const speed = Math.hypot(dx, dy);

      ball.x += dx;
      ball.y += dy;
      
      ball.vx *= this.friction;
      ball.vy *= this.friction;
      
      // Stop moving if speed is negligible
      if (speed < 0.08) {
        ball.vx = 0;
        ball.vy = 0;
        if (ball.stoppedTime === null) {
          ball.stoppedTime = Date.now();
        }
      } else {
        anyRolling = true;
        ball.stoppedTime = null; // Reset stop timer
        ball.isResetting = false; // Reset reset state
        
        // Compute 3D rotation from rolling
        const angle = speed / ball.radius;
        const ax = -dy / speed;
        const ay = dx / speed;
        const az = 0;
        
        ball.rx = rotateVector(ball.rx, ax, ay, az, angle);
        ball.ry = rotateVector(ball.ry, ax, ay, az, angle);
        ball.rz = rotateVector(ball.rz, ax, ay, az, angle);
      }
      
      // Bounces
      if (ball.x - ball.radius < this.bounds.left) {
        ball.x = this.bounds.left + ball.radius;
        ball.vx = -ball.vx * this.bounceDampening;
        sounds.playCushion(Math.min(Math.abs(ball.vx) / 5, 1));
      } else if (ball.x + ball.radius > this.bounds.right) {
        ball.x = this.bounds.right - ball.radius;
        ball.vx = -ball.vx * this.bounceDampening;
        sounds.playCushion(Math.min(Math.abs(ball.vx) / 5, 1));
      }
      
      if (ball.y - ball.radius < this.bounds.top) {
        ball.y = this.bounds.top + ball.radius;
        ball.vy = -ball.vy * this.bounceDampening;
        sounds.playCushion(Math.min(Math.abs(ball.vy) / 5, 1));
      } else if (ball.y + ball.radius > this.bounds.bottom) {
        ball.y = this.bounds.bottom - ball.radius;
        ball.vy = -ball.vy * this.bounceDampening;
        sounds.playCushion(Math.min(Math.abs(ball.vy) / 5, 1));
      }
      
      // Check pocket gravity triggers
      this.pockets.forEach((pocket, idx) => {
        const dist = Math.hypot(ball.x - pocket.x, ball.y - pocket.y);
        if (dist < pocket.r + 2) {
          ball.sinking = true;
          ball.pocketIndex = idx;
          ball.vx = 0;
          ball.vy = 0;
          sounds.playPocket();
          
          if (!ball.isCue) {
            const notice = document.getElementById('pocket-notice');
            if (notice) {
              notice.textContent = `Ball #${ball.id} Sunk! 🐮🎉`;
              notice.classList.add('visible');
              setTimeout(() => notice.classList.remove('remove'), 2200);
              setTimeout(() => notice.classList.remove('visible'), 2200);
            }
          }
        }
      });
    });
    
    this.balls = this.balls.filter(b => !b.sunkComplete);
    
    // Collisions
    for (let i = 0; i < this.balls.length; i++) {
      for (let j = i + 1; j < this.balls.length; j++) {
        const b1 = this.balls[i];
        const b2 = this.balls[j];
        
        if (b1.sinking || b2.sinking) continue;
        
        const dx = b2.x - b1.x;
        const dy = b2.y - b1.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist < b1.radius + b2.radius) {
          // Resolve overlap statically
          const overlap = b1.radius + b2.radius - dist;
          const nx = dx / dist;
          const ny = dy / dist;
          
          b1.x -= nx * (overlap / 2);
          b1.y -= ny * (overlap / 2);
          b2.x += nx * (overlap / 2);
          b2.y += ny * (overlap / 2);
          
          // Elastic momentum equations
          const kx = b1.vx - b2.vx;
          const ky = b1.vy - b2.vy;
          const vn = kx * nx + ky * ny;
          
          if (vn > 0) {
            const restitution = 0.96;
            const impulse = (1 + restitution) * vn / 2;
            
            b1.vx -= impulse * nx;
            b1.vy -= impulse * ny;
            b2.vx += impulse * nx;
            b2.vy += impulse * ny;
            
            // Play clack collision sound with power-scaling
            sounds.playCollision(Math.min(vn / 6, 1));
          }
        }
      }
    }
    
    if (!anyRolling) {
      this.isRolling = false;
      const notice = document.getElementById('physics-notice');
      if (notice) notice.classList.remove('visible');
      
      if (this.scratchOccurred) {
        this.scratchOccurred = false;
        // Reset to vertical kitchen (250, 750)
        this.balls.push({
          id: 0,
          x: 250,
          y: 750,
          vx: 0,
          vy: 0,
          radius: this.ballRadius,
          isCue: true,
          color: '#ffffff',
          scale: 1,
          sinking: false,
          rx: [1, 0, 0],
          ry: [0, 1, 0],
          rz: [0, 0, 1],
          stoppedTime: Date.now(),
          isResetting: false
        });
        
        const notice = document.getElementById('pocket-notice');
        if (notice) {
          notice.textContent = "Cue Scratched! Reset to kitchen 🥛";
          notice.classList.add('visible');
          setTimeout(() => notice.classList.remove('visible'), 2500);
        }
        sounds.playMooChime(this.selectedCows[this.activePlayer - 1]);
      }
      
      this.updateControlsUI();
    }
  }

  // --- DYNAMIC IN-GAME SELECTOR CHECKER ---
  checkInGameSelector() {
    const overlay = document.getElementById('in-game-selector');
    if (this.myPlayerNumber === 2 && this.activePlayer === 2 && this.selectedCows[1] === null) {
      overlay.classList.add('active');
    } else {
      overlay.classList.remove('active');
    }
  }

  // --- CANVAS GRAPHICS RENDERING (PASTURE THEME) ---
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Calculate independent scaling to let the pasture/fence stretch and fill available space
    const scaleX = this.canvas.width / this.virtualWidth;
    const scaleY = this.canvas.height / this.virtualHeight;
    
    // Draw the table felt, fences, and pockets using the stretched coordinate scale
    this.ctx.save();
    this.ctx.scale(scaleX, scaleY);
    
    // 1. Lush Pre-rendered Grass Pasture base
    if (this.grassTexture) {
      this.ctx.drawImage(this.grassTexture, 0, 0);
    } else {
      this.ctx.fillStyle = '#1c4422';
      this.ctx.fillRect(0, 0, this.virtualWidth, this.virtualHeight);
    }
    
    // 2. Draw detailed multi-toned grass blades
    this.grassTufts.forEach(tuft => {
      this.ctx.save();
      this.ctx.translate(tuft.x, tuft.y);
      const h = tuft.length;
      
      // Shadow behind blades
      this.ctx.strokeStyle = 'rgba(10, 35, 10, 0.25)';
      this.ctx.lineWidth = 2.5;
      this.ctx.beginPath();
      this.ctx.moveTo(1, 1);
      this.ctx.quadraticCurveTo(-h*0.3 + 1, -h*0.5 + 1, -h*0.5 + 1, -h*0.9 + 1);
      this.ctx.stroke();

      // Curved Left blade (dark green)
      this.ctx.strokeStyle = '#143f17';
      this.ctx.lineWidth = 1.8;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.quadraticCurveTo(-h*0.3, -h*0.5, -h*0.5, -h * 0.9);
      this.ctx.stroke();
      
      // Middle blade (emerald green)
      this.ctx.strokeStyle = '#1b5c20';
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.quadraticCurveTo(0, -h*0.6, h*0.1, -h * 1.15);
      this.ctx.stroke();
      
      // Curved Right blade (pasture light green)
      this.ctx.strokeStyle = '#22c55e';
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.quadraticCurveTo(h*0.35, -h*0.5, h*0.55, -h * 0.85);
      this.ctx.stroke();
      
      this.ctx.restore();
    });

    // 3. Draw Buttercups, Daisies & 3-Leaf Clovers
    this.flowers.forEach(flower => {
      // Soft shadow under foliage
      this.ctx.beginPath();
      this.ctx.arc(flower.x + 1, flower.y + 1, flower.size * 1.1, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(10, 25, 10, 0.35)';
      this.ctx.fill();

      if (flower.type === 'buttercup') {
        // Buttercup golden star
        this.ctx.beginPath();
        this.ctx.arc(flower.x, flower.y, flower.size, 0, Math.PI * 2);
        this.ctx.fillStyle = '#f5c453';
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(flower.x, flower.y, flower.size * 0.4, 0, Math.PI * 2);
        this.ctx.fillStyle = '#d97706';
        this.ctx.fill();
      } else if (flower.type === 'daisy') {
        // Daisy white petals
        this.ctx.beginPath();
        this.ctx.arc(flower.x, flower.y, flower.size, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(flower.x, flower.y, flower.size * 0.4, 0, Math.PI * 2);
        this.ctx.fillStyle = '#eab308';
        this.ctx.fill();
      } else {
        // Dynamic 3-Leaf Clover drawing
        this.ctx.save();
        this.ctx.translate(flower.x, flower.y);
        const s = flower.size * 0.7;
        this.ctx.fillStyle = '#15803d'; // Rich clover green
        
        // Leaf 1 (Left)
        this.ctx.beginPath(); this.ctx.arc(-s*0.6, -s*0.3, s, 0, Math.PI*2); this.ctx.fill();
        // Leaf 2 (Right)
        this.ctx.beginPath(); this.ctx.arc(s*0.6, -s*0.3, s, 0, Math.PI*2); this.ctx.fill();
        // Leaf 3 (Bottom)
        this.ctx.beginPath(); this.ctx.arc(0, s*0.4, s, 0, Math.PI*2); this.ctx.fill();
        
        // Small clover stem
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#14532d';
        this.ctx.lineWidth = s * 0.35;
        this.ctx.moveTo(0, 0);
        this.ctx.quadraticCurveTo(s*0.6, s*1.3, s*0.3, s*1.8);
        this.ctx.stroke();
        
        this.ctx.restore();
      }
    });

    // 4. Draw Cushions/Rails as rustic wooden double-rail corral fences with cross braces
    const drawFenceWall = (ctx, rx, ry, rw, rh, isVert = false) => {
      ctx.save();
      ctx.translate(rx, ry);

      const halfW = rw / 2;
      const halfH = rh / 2;

      // Outer rail is shifted outward, inner rail is shifted inward
      const outOffset = -6;
      const inOffset = 6;

      const outerY = isVert ? 0 : outOffset;
      const outerX = isVert ? outOffset : 0;
      const outerW = isVert ? 6 : rw;
      const outerH = isVert ? rh : 6;

      const innerY = isVert ? 0 : inOffset;
      const innerX = isVert ? inOffset : 0;
      const innerW = isVert ? 10 : rw;
      const innerH = isVert ? rh : 10;

      // Draw shadow for both rails
      ctx.fillStyle = 'rgba(10, 20, 10, 0.4)';
      if (isVert) {
        ctx.fillRect(outOffset - 3 + 2, -halfH + 2, 6, rh);
        ctx.fillRect(inOffset - 5 + 2, -halfH + 2, 10, rh);
      } else {
        ctx.fillRect(-halfW + 2, outOffset - 3 + 2, rw, 6);
        ctx.fillRect(-halfW + 2, inOffset - 5 + 2, rw, 10);
      }

      // Helper to draw a single log rail segment
      const drawSingleRail = (x, y, w, h, thickness, colorGrad) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.fillStyle = colorGrad;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(-w/2, -h/2, w, h, 3);
        } else {
          ctx.rect(-w/2, -h/2, w, h);
        }
        ctx.fill();
        ctx.strokeStyle = '#230f03';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Beautiful organic wood grain lines
        ctx.strokeStyle = 'rgba(35, 15, 3, 0.35)';
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        if (isVert) {
          ctx.moveTo(-w*0.15, -h/2 + 6); ctx.lineTo(-w*0.15, h/2 - 6);
          ctx.moveTo(w*0.15, -h/2 + 8); ctx.lineTo(w*0.15, h/2 - 8);
          // wood knot
          ctx.arc(0, -h*0.15, 1.8, 0, Math.PI*2);
        } else {
          ctx.moveTo(-w/2 + 6, -h*0.15); ctx.lineTo(w/2 - 6, -h*0.15);
          ctx.moveTo(-w/2 + 8, h*0.15); ctx.lineTo(w/2 - 8, h*0.15);
          // wood knot
          ctx.arc(-w*0.15, 0, 1.8, 0, Math.PI*2);
        }
        ctx.stroke();
        ctx.restore();
      };

      // Oak log linear bark-to-core wood gradients
      const barkGradOuter = ctx.createLinearGradient(
        isVert ? outOffset - 3 : 0, isVert ? 0 : outOffset - 3,
        isVert ? outOffset + 3 : 0, isVert ? 0 : outOffset + 3
      );
      barkGradOuter.addColorStop(0, '#3f1f0a');
      barkGradOuter.addColorStop(0.5, '#6e3816');
      barkGradOuter.addColorStop(1, '#3f1f0a');

      const barkGradInner = ctx.createLinearGradient(
        isVert ? inOffset - 5 : 0, isVert ? 0 : inOffset - 5,
        isVert ? inOffset + 5 : 0, isVert ? 0 : inOffset + 5
      );
      barkGradInner.addColorStop(0, '#311707');
      barkGradInner.addColorStop(0.2, '#50280f');
      barkGradInner.addColorStop(0.5, '#7b401b'); // oak inner heartwood
      barkGradInner.addColorStop(0.8, '#50280f');
      barkGradInner.addColorStop(1, '#311707');

      // Draw rustic vertical connector slats bridging the rails
      ctx.fillStyle = '#4c260d';
      ctx.strokeStyle = '#230f03';
      ctx.lineWidth = 1.2;
      const slatSpacing = 35;
      const startPos = -halfW + 15;
      const endPos = halfW - 15;

      for (let pos = startPos; pos <= endPos; pos += slatSpacing) {
        ctx.save();
        if (isVert) {
          ctx.translate(0, pos);
          ctx.fillRect(outOffset, -3, inOffset - outOffset, 6);
          ctx.strokeRect(outOffset, -3, inOffset - outOffset, 6);
          // Silver nails
          ctx.fillStyle = '#9e9e9e';
          ctx.beginPath();
          ctx.arc(outOffset + 1.5, 0, 0.8, 0, Math.PI*2);
          ctx.arc(inOffset - 1.5, 0, 0.8, 0, Math.PI*2);
          ctx.fill();
        } else {
          ctx.translate(pos, 0);
          ctx.fillRect(-3, outOffset, 6, inOffset - outOffset);
          ctx.strokeRect(-3, outOffset, 6, inOffset - outOffset);
          // Silver nails
          ctx.fillStyle = '#9e9e9e';
          ctx.beginPath();
          ctx.arc(0, outOffset + 1.5, 0.8, 0, Math.PI*2);
          ctx.arc(0, inOffset - 1.5, 0.8, 0, Math.PI*2);
          ctx.fill();
        }
        ctx.restore();
      }

      // Draw agricultural X cross-braces in the middle sections of the rails
      const drawXBrace = (centerPos) => {
        ctx.save();
        ctx.translate(isVert ? 0 : centerPos, isVert ? centerPos : 0);
        ctx.strokeStyle = '#4a250c';
        ctx.lineWidth = 2.5;

        if (isVert) {
          ctx.beginPath();
          ctx.moveTo(outOffset, -12); ctx.lineTo(inOffset, 12);
          ctx.moveTo(inOffset, -12); ctx.lineTo(outOffset, 12);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(-12, outOffset); ctx.lineTo(12, inOffset);
          ctx.moveTo(-12, inOffset); ctx.lineTo(12, outOffset);
          ctx.stroke();
        }
        ctx.restore();
      };

      if (rw > 250 || rh > 250) {
        const len = isVert ? rh : rw;
        drawXBrace(-len * 0.25);
        drawXBrace(0);
        drawXBrace(len * 0.25);
      } else {
        drawXBrace(0);
      }

      // Paint the horizontal/vertical outer and inner rails
      drawSingleRail(outerX, outerY, outerW, outerH, 6, barkGradOuter);
      drawSingleRail(innerX, innerY, innerW, innerH, 10, barkGradInner);

      ctx.restore();
    };

    // Draw the 6 individual double-rail corral walls
    // Top Horizontal Fence Wall
    drawFenceWall(this.ctx, 250, 14, 395, 16, false);
    // Bottom Horizontal Fence Wall
    drawFenceWall(this.ctx, 250, 986, 395, 16, false);
    // Left Vertical Fence Walls (split by middle pocket)
    drawFenceWall(this.ctx, 14, 260, 16, 400, true);
    drawFenceWall(this.ctx, 14, 740, 16, 400, true);
    // Right Vertical Fence Walls (split by middle pocket)
    drawFenceWall(this.ctx, 486, 260, 16, 400, true);
    drawFenceWall(this.ctx, 486, 740, 16, 400, true);

    // 5. Draw circular cut log posts at corners & pocket midpoints
    const drawFencePost = (ctx, px, py, pr) => {
      ctx.save();
      // Post shadow
      ctx.beginPath(); ctx.arc(px+3, py+3, pr, 0, Math.PI*2); ctx.fillStyle = 'rgba(10,20,10,0.5)'; ctx.fill();
      
      // Bark base
      ctx.beginPath(); ctx.arc(px, py, pr, 0, Math.PI*2); ctx.fillStyle = '#421f07'; ctx.fill();
      ctx.strokeStyle = '#230f03'; ctx.lineWidth = 2; ctx.stroke();
      
      // Cut wood core top
      ctx.beginPath(); ctx.arc(px, py, pr - 3, 0, Math.PI*2); ctx.fillStyle = '#b5865a'; ctx.fill();
      ctx.strokeStyle = '#8a5c33'; ctx.lineWidth = 1.2; ctx.stroke();
      
      // Growth rings
      ctx.strokeStyle = 'rgba(66, 31, 7, 0.25)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(px, py, pr * 0.65, 0, Math.PI*2); ctx.stroke();
      ctx.beginPath(); ctx.arc(px, py, pr * 0.35, 0, Math.PI*2); ctx.stroke();
      
      // Log radial crack
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(px + pr * 0.5, py - pr * 0.2);
      ctx.strokeStyle = '#230f03';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      ctx.restore();
    };

    // Draw the fence posts directly adjacent to pockets
    drawFencePost(this.ctx, 32, 32, 14);                // Top-Left corner
    drawFencePost(this.ctx, this.virtualWidth - 32, 32, 14); // Top-Right corner
    drawFencePost(this.ctx, 32, this.virtualHeight - 32, 14); // Bottom-Left corner
    drawFencePost(this.ctx, this.virtualWidth - 32, this.virtualHeight - 32, 14); // Bottom-Right corner
    drawFencePost(this.ctx, 14, 500, 12);               // Mid-Left post
    drawFencePost(this.ctx, this.virtualWidth - 14, 500, 12); // Mid-Right post

    // Rope binds wrapped around corners/joins
    this.ctx.strokeStyle = '#bfac95'; // Rope fiber color
    this.ctx.lineWidth = 2.5;
    const ropeWrap = (rx, ry) => {
      this.ctx.beginPath();
      this.ctx.moveTo(rx - 8, ry - 8); this.ctx.lineTo(rx + 8, ry + 8);
      this.ctx.moveTo(rx + 8, ry - 8); this.ctx.lineTo(rx - 8, ry + 8);
      this.ctx.stroke();
    };
    ropeWrap(32, 32);
    ropeWrap(this.virtualWidth - 32, 32);
    ropeWrap(32, this.virtualHeight - 32);
    ropeWrap(this.virtualWidth - 32, this.virtualHeight - 32);
    ropeWrap(14, 500);
    ropeWrap(this.virtualWidth - 14, 500);

    // 6. Draw border grass tufts that peek OVER the fence rails, creating gorgeous layered 3D depth!
    this.borderGrassTufts.forEach(tuft => {
      this.ctx.save();
      this.ctx.translate(tuft.x, tuft.y);
      const h = tuft.length;
      
      // Shadow behind blades
      this.ctx.strokeStyle = 'rgba(10, 35, 10, 0.2)';
      this.ctx.lineWidth = 2.2;
      this.ctx.beginPath();
      this.ctx.moveTo(1, 1);
      this.ctx.quadraticCurveTo(-h*0.25 + 1, -h*0.45 + 1, -h*0.45 + 1, -h*0.8 + 1);
      this.ctx.stroke();

      // Curved Left blade (dark pasture green)
      this.ctx.strokeStyle = '#123915';
      this.ctx.lineWidth = 1.5;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.quadraticCurveTo(-h*0.25, -h*0.45, -h*0.45, -h * 0.8);
      this.ctx.stroke();
      
      // Middle blade (vivid clover green)
      this.ctx.strokeStyle = '#166534';
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.quadraticCurveTo(0, -h*0.5, h*0.08, -h * 1.05);
      this.ctx.stroke();
      
      // Curved Right blade (bright lime highlights)
      this.ctx.strokeStyle = '#4ade80';
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.quadraticCurveTo(h*0.3, -h*0.45, h*0.5, -h * 0.75);
      this.ctx.stroke();
      
      this.ctx.restore();
    });

    // Inner log boundaries shadow (the cushion impact edge)
    this.ctx.strokeStyle = '#112d1b';
    this.ctx.lineWidth = 4;
    this.ctx.strokeRect(28, 28, this.virtualWidth - 56, this.virtualHeight - 56);
    
    this.ctx.restore(); // BACK to unscaled normal screen pixel coordinates!

    // 5. Draw muddy watering hole pockets (Centered at screen positions, drawn as perfect round circles!)
    this.pockets.forEach(pocket => {
      const screenX = pocket.x * scaleX;
      const screenY = pocket.y * scaleY;
      const screenR = pocket.r * scaleX; // Uniform pocket radius matching ball scale
      
      // Mud border
      this.ctx.beginPath();
      this.ctx.arc(screenX, screenY, screenR + 2, 0, Math.PI * 2);
      this.ctx.fillStyle = '#2d1a0f';
      this.ctx.fill();
      
      // Inner watering hole
      this.ctx.beginPath();
      this.ctx.arc(screenX, screenY, screenR, 0, Math.PI * 2);
      this.ctx.fillStyle = '#080808';
      this.ctx.fill();
    });

    // 6. Draw cue guide lines (Aiming system)
    if (this.isDragging) {
      const cueBall = this.balls.find(b => b.isCue);
      if (cueBall) {
        const cueScreenX = cueBall.x * scaleX;
        const cueScreenY = cueBall.y * scaleY;
        const dragScreenX = this.dragCurrent.x * scaleX;
        const dragScreenY = this.dragCurrent.y * scaleY;
        
        const dx = cueScreenX - dragScreenX;
        const dy = cueScreenY - dragScreenY;
        const dist = Math.hypot(dx, dy);
        
        if (dist > 8) {
          const ux = dx / dist;
          const uy = dy / dist;
          
          // Draw projected guide line
          this.ctx.beginPath();
          this.ctx.moveTo(cueScreenX + ux * cueBall.radius * scaleX, cueScreenY + uy * cueBall.radius * scaleX);
          this.ctx.lineTo(cueScreenX + ux * Math.min(dist * 2.5, 300), cueScreenY + uy * Math.min(dist * 2.5, 300));
          this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
          this.ctx.lineWidth = 3;
          this.ctx.setLineDash([5, 5]);
          this.ctx.stroke();
          this.ctx.setLineDash([]);
          
          // wood cue stick
          this.ctx.beginPath();
          this.ctx.moveTo(cueScreenX - ux * (cueBall.radius * scaleX + 10), cueScreenY - uy * (cueBall.radius * scaleX + 10));
          this.ctx.lineTo(dragScreenX, dragScreenY);
          this.ctx.strokeStyle = '#b45309';
          this.ctx.lineWidth = 5;
          this.ctx.lineCap = 'round';
          this.ctx.stroke();
          
          // gold cue tip
          this.ctx.beginPath();
          this.ctx.moveTo(cueScreenX - ux * (cueBall.radius * scaleX + 5), cueScreenY - uy * (cueBall.radius * scaleX + 5));
          this.ctx.lineTo(cueScreenX - ux * (cueBall.radius * scaleX + 10), cueScreenY - uy * (cueBall.radius * scaleX + 10));
          this.ctx.strokeStyle = '#f5c453';
          this.ctx.lineWidth = 5;
          this.ctx.stroke();
        }
      }
    }
    
    // 7. Draw Billiard Balls - centered dynamically but scaled uniformly
    this.balls.forEach(ball => {
      this.ctx.save();
      // Translate to the stretched screen coordinate
      this.ctx.translate(ball.x * scaleX, ball.y * scaleY);
      // Scale uniformly by scaleX so balls remain perfectly round circles!
      this.ctx.scale(ball.scale * scaleX, ball.scale * scaleX);
      
      // Shadow
      this.ctx.beginPath();
      this.ctx.arc(4, 4, ball.radius - 1, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      this.ctx.fill();
      
      // Get the active breed of the active player to customize the cue ball style
      const activeBreedKey = this.selectedCows[this.activePlayer - 1] || 'SLB';
      
      if (ball.isCue) {
        // Base Cue Ball Fill depending on active cow breed
        let baseColor = '#ffffff';
        if (activeBreedKey === 'Mishima') {
          baseColor = '#1e293b'; // Slate-navy
        } else if (activeBreedKey === 'Longhorn') {
          baseColor = '#b45309'; // Warm ginger-brown
        } else if (activeBreedKey === 'Zebu') {
          baseColor = '#8c8275'; // Warm grey
        }
        
        this.ctx.beginPath();
        this.ctx.arc(0, 0, ball.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = baseColor;
        this.ctx.fill();
        
        // Render cow spots / star / stripes dynamically projected in 3D!
        if (activeBreedKey === 'SLB' || activeBreedKey === 'Longhorn') {
          // Spotted cows (SLB = black spots, Longhorn = cream fuzzy spots)
          const spotsColor = activeBreedKey === 'SLB' ? '#111111' : '#fef3c7';
          
          const spots = [
            { x: -0.35, y: -0.35, z: 0.85, r: 4.5 },
            { x: 0.35,  y: 0.35,  z: 0.85, r: 5.5 },
            { x: 0.5,   y: -0.4,  z: 0.7,  r: 3 },
            { x: -0.5,  y: 0.5,   z: -0.7, r: 4.8 },
            { x: 0.1,   y: -0.65, z: -0.7, r: 3.8 },
            { x: 0.55,  y: 0.55,  z: -0.6, r: 4.2 }
          ];
          
          spots.forEach(spot => {
            // Project spot into world 3D coordinates based on ball orientation axes
            const wx = spot.x * ball.rx[0] + spot.y * ball.ry[0] + spot.z * ball.rz[0];
            const wy = spot.x * ball.rx[1] + spot.y * ball.ry[1] + spot.z * ball.rz[1];
            const wz = spot.x * ball.rx[2] + spot.y * ball.ry[2] + spot.z * ball.rz[2];
            
            if (wz > 0.05) {
              const spotX = wx * ball.radius;
              const spotY = wy * ball.radius;
              this.ctx.save();
              this.ctx.beginPath();
              const angle = Math.atan2(wy, wx);
              // Major radius is spot.r, minor radius is spot.r * wz (foreshorted at edge)
              this.ctx.ellipse(spotX, spotY, spot.r * wz, spot.r, angle, 0, Math.PI * 2);
              this.ctx.fillStyle = spotsColor;
              this.ctx.fill();
              this.ctx.restore();
            }
          });
        } else if (activeBreedKey === 'Mishima') {
          // Elegant Japanese Mishima: 3D projected golden star on Plate A and Plate B
          // Plate A (Front)
          if (ball.rz[2] > 0.05) {
            this.ctx.save();
            this.ctx.transform(ball.rx[0], ball.rx[1], ball.ry[0], ball.ry[1], ball.rz[0] * ball.radius, ball.rz[1] * ball.radius);
            drawStar(this.ctx, 0, 0, 5, 6, 2.5, '#f5c453');
            this.ctx.restore();
          }
          // Plate B (Back)
          if (-ball.rz[2] > 0.05) {
            this.ctx.save();
            this.ctx.transform(-ball.rx[0], -ball.rx[1], -ball.ry[0], -ball.ry[1], -ball.rz[0] * ball.radius, -ball.rz[1] * ball.radius);
            drawStar(this.ctx, 0, 0, 5, 6, 2.5, '#f5c453');
            this.ctx.restore();
          }
        } else if (activeBreedKey === 'Zebu') {
          // Zebu Champion: Silver-white concentric stripes on Plate A and Plate B
          const drawStripes = (ctx) => {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.lineWidth = 1.6;
            ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.stroke();
            ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.stroke();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.beginPath(); ctx.arc(0, 0, 1.8, 0, Math.PI * 2); ctx.fill();
          };
          // Plate A (Front)
          if (ball.rz[2] > 0.05) {
            this.ctx.save();
            this.ctx.transform(ball.rx[0], ball.rx[1], ball.ry[0], ball.ry[1], ball.rz[0] * ball.radius, ball.rz[1] * ball.radius);
            drawStripes(this.ctx);
            this.ctx.restore();
          }
          // Plate B (Back)
          if (-ball.rz[2] > 0.05) {
            this.ctx.save();
            this.ctx.transform(-ball.rx[0], -ball.rx[1], -ball.ry[0], -ball.ry[1], -ball.rz[0] * ball.radius, -ball.rz[1] * ball.radius);
            drawStripes(this.ctx);
            this.ctx.restore();
          }
        }
      } else {
        // Draw standard target billiard ball base colored sphere
        this.ctx.beginPath();
        this.ctx.arc(0, 0, ball.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = ball.color;
        this.ctx.fill();
        
        // Draw number plate on Plate A (centered at rz)
        if (ball.rz[2] > 0.05) {
          this.ctx.save();
          this.ctx.transform(ball.rx[0], ball.rx[1], ball.ry[0], ball.ry[1], ball.rz[0] * ball.radius, ball.rz[1] * ball.radius);
          
          this.ctx.beginPath();
          this.ctx.arc(0, 0, 6, 0, Math.PI * 2);
          this.ctx.fillStyle = '#ffffff';
          this.ctx.fill();
          
          this.ctx.font = 'bold 8px Inter';
          this.ctx.fillStyle = '#000000';
          this.ctx.textAlign = 'center';
          this.ctx.textBaseline = 'middle';
          this.ctx.fillText(ball.id, 0, 0.5);
          
          this.ctx.restore();
        }
        
        // Draw number plate on Plate B (centered at -rz)
        if (-ball.rz[2] > 0.05) {
          this.ctx.save();
          this.ctx.transform(-ball.rx[0], -ball.rx[1], -ball.ry[0], -ball.ry[1], -ball.rz[0] * ball.radius, -ball.rz[1] * ball.radius);
          
          this.ctx.beginPath();
          this.ctx.arc(0, 0, 6, 0, Math.PI * 2);
          this.ctx.fillStyle = '#ffffff';
          this.ctx.fill();
          
          this.ctx.font = 'bold 8px Inter';
          this.ctx.fillStyle = '#000000';
          this.ctx.textAlign = 'center';
          this.ctx.textBaseline = 'middle';
          this.ctx.fillText(ball.id, 0, 0.5);
          
          this.ctx.restore();
        }
      }
      
      // 3D static shadow/glow highlight overlay (shades BOTH cue balls and target balls beautifully!)
      const radGlow = this.ctx.createRadialGradient(-4, -4, 1, 0, 0, ball.radius);
      radGlow.addColorStop(0, 'rgba(255, 255, 255, 0.55)');
      radGlow.addColorStop(0.35, 'rgba(255, 255, 255, 0)');
      radGlow.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
      this.ctx.fillStyle = radGlow;
      
      this.ctx.beginPath();
      this.ctx.arc(0, 0, ball.radius, 0, Math.PI * 2);
      this.ctx.fill();
      
      this.ctx.restore();
    });
  }

  // --- UI INTEGRATION HELPERS ---
  
  // Updates HUD labels and avatars based on active player and cows
  updateHudUI() {
    document.getElementById('lbl-turn-count').textContent = `Turn ${this.turnCount}`;
    
    const p1Key = this.selectedCows[0];
    const p2Key = this.selectedCows[1];
    
    // Player 1 Details
    document.getElementById('hud-p1-name').textContent = COW_BREEDS[p1Key].name.split(' ')[0];
    document.getElementById('hud-p1-avatar').innerHTML = COW_BREEDS[p1Key].getSvg();
    
    // Player 2 Details (Dynamic checking)
    const p2Avatar = document.getElementById('hud-p2-avatar');
    const p2Name = document.getElementById('hud-p2-name');
    
    if (p2Key) {
      p2Name.textContent = COW_BREEDS[p2Key].name.split(' ')[0];
      p2Avatar.innerHTML = COW_BREEDS[p2Key].getSvg();
    } else {
      p2Name.textContent = "Waiting...";
      p2Avatar.innerHTML = "❓";
    }
    
    // Highlight Active
    const activeLabel = document.getElementById('lbl-active-player');
    const p1Container = document.getElementById('hud-p1');
    const p2Container = document.getElementById('hud-p2');
    const helpText = document.getElementById('help-text');
    
    const isMyTurn = this.activePlayer === this.myPlayerNumber;
    
    if (this.activePlayer === 1) {
      activeLabel.textContent = `${COW_BREEDS[p1Key].name.split(' ')[0]}'s Turn!`;
      p1Container.style.opacity = '1';
      p2Container.style.opacity = '0.35';
    } else {
      if (p2Key) {
        activeLabel.textContent = `${COW_BREEDS[p2Key].name.split(' ')[0]}'s Turn!`;
      } else {
        activeLabel.textContent = `Co-Player 2's Turn!`;
      }
      p1Container.style.opacity = '0.35';
      p2Container.style.opacity = '1';
    }
    
    if (helpText) {
      if (isMyTurn) {
        helpText.textContent = "Drag backward from the Cue Ball (White/Spotted) to shoot!";
        helpText.style.color = "var(--text-muted)";
      } else {
        const nextPlayerName = this.activePlayer === 1 ? COW_BREEDS[p1Key].name : (p2Key ? COW_BREEDS[p2Key].name : "Co-Player 2");
        helpText.textContent = `Waiting for ${nextPlayerName} to play and share their QR turn! 🐮💤`;
        helpText.style.color = "var(--color-accent)";
      }
    }
  }

  updateControlsUI() {
    const btnShare = document.getElementById('btn-share-turn');
    const isMyTurn = this.activePlayer === this.myPlayerNumber;
    
    if (this.isRolling || this.balls.length <= 1 || !isMyTurn) {
      btnShare.disabled = true;
      btnShare.classList.add('btn-disabled');
    } else {
      btnShare.disabled = false;
      btnShare.classList.remove('btn-disabled');
    }
  }
}

// --- 4. VIEW MANAGER & DOM HANDLERS ---
document.addEventListener('DOMContentLoaded', () => {
  const screenStart = document.getElementById('screen-start');
  const screenGame = document.getElementById('screen-game');
  const btnStartGame = document.getElementById('btn-start-game');
  
  const canvas = document.getElementById('game-canvas');
  const game = new GameEngine(canvas);
  
  // Player 1 selection parameters
  let p1Selected = 'SLB';
  const breedsList = Object.keys(COW_BREEDS);
  
  const p1Preview = document.getElementById('p1-preview');
  
  const updateSelectorPreviews = () => {
    p1Preview.innerHTML = COW_BREEDS[p1Selected].getSvg(true);
    document.getElementById('p1-breed-name').textContent = COW_BREEDS[p1Selected].name;
  };
  
  updateSelectorPreviews();

  const updateBreedCard = (breedKey) => {
    const breed = COW_BREEDS[breedKey];
    document.getElementById('card-title').textContent = breed.name;
    document.getElementById('card-desc').textContent = breed.desc;
    document.getElementById('card-badge').textContent = breed.tagline;
  };
  updateBreedCard(p1Selected);

  // Arrow chimes
  document.querySelectorAll('.arrow-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      let idx = breedsList.indexOf(p1Selected);
      if (e.target.classList.contains('next')) {
        idx = (idx + 1) % breedsList.length;
      } else {
        idx = (idx - 1 + breedsList.length) % breedsList.length;
      }
      p1Selected = breedsList[idx];
      
      updateSelectorPreviews();
      updateBreedCard(p1Selected);
      sounds.playMooChime(p1Selected);
    });
  });

  // Start game triggers
  btnStartGame.addEventListener('click', () => {
    game.myPlayerNumber = 1; // Explicitly Player 1!
    game.selectedCows = [p1Selected, null];
    game.turnCount = 1;
    game.activePlayer = 1;
    
    game.resetTable();
    game.updateHudUI();
    game.checkInGameSelector();
    
    screenStart.classList.remove('active');
    screenGame.classList.add('active');
    
    sounds.playMooChime(p1Selected);
  });

  document.getElementById('btn-change-cows').addEventListener('click', () => {
    screenGame.classList.remove('active');
    screenStart.classList.add('active');
  });

  // Main Loop Canvas Events
  canvas.addEventListener('mousedown', (e) => {
    sounds.init();
    game.handleDragStart(e.clientX, e.clientY);
  });
  canvas.addEventListener('mousemove', (e) => {
    game.handleDragMove(e.clientX, e.clientY);
  });
  window.addEventListener('mouseup', () => {
    game.handleDragEnd();
  });
  
  // Mobile touch listeners
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      sounds.init();
      game.handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
  
  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      game.handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
  
  window.addEventListener('touchend', () => {
    game.handleDragEnd();
  });

  // Continuous animation loops
  const animate = () => {
    game.update();
    game.draw();
    requestAnimationFrame(animate);
  };
  requestAnimationFrame(animate);

  // --- IN-GAME BREED SELECTOR FOR CO-PLAYER 2 ---
  let p2ChosenBreed = null;
  const inGameDesc = document.getElementById('in-game-desc');
  const btnConfirmP2Breed = document.getElementById('btn-confirm-p2-breed');
  
  // Bind mini SVGs dynamically inside P2 selector overlay buttons
  document.getElementById('prev-SLB').innerHTML = COW_BREEDS['SLB'].getSvg();
  document.getElementById('prev-Mishima').innerHTML = COW_BREEDS['Mishima'].getSvg();
  document.getElementById('prev-Longhorn').innerHTML = COW_BREEDS['Longhorn'].getSvg();
  document.getElementById('prev-Zebu').innerHTML = COW_BREEDS['Zebu'].getSvg();
  
  document.querySelectorAll('.breed-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const breed = e.currentTarget.dataset.breed;
      p2ChosenBreed = breed;
      
      // Toggle CSS highlights
      document.querySelectorAll('.breed-select-btn').forEach(b => b.classList.remove('chosen'));
      e.currentTarget.classList.add('chosen');
      
      // Update details card
      inGameDesc.textContent = COW_BREEDS[breed].desc;
      
      // Enable confirm button
      btnConfirmP2Breed.disabled = false;
      btnConfirmP2Breed.classList.remove('btn-disabled');
      
      sounds.playMooChime(breed);
    });
  });
  
  btnConfirmP2Breed.addEventListener('click', () => {
    if (!p2ChosenBreed) return;
    
    // Save to game instance and close overlay
    game.selectedCows[1] = p2ChosenBreed;
    game.updateHudUI();
    game.checkInGameSelector();
    
    sounds.playMooChime(p2ChosenBreed);
  });

  // --- QR MODAL HANDLERS (URL-LINKED QUERY PARAMETERS) ---
  const btnShareTurn = document.getElementById('btn-share-turn');
  const qrTarget = document.getElementById('qr-code-target');
  const modalShare = document.getElementById('modal-share');
  const modalScan = document.getElementById('modal-scan');
  
  btnShareTurn.addEventListener('click', () => {
    // 1. Advance turns and toggle player
    game.turnCount++;
    game.activePlayer = game.activePlayer === 1 ? 2 : 1;
    game.updateHudUI();
    game.checkInGameSelector();
    
    // 2. Compel state into custom compact representation
    const compactState = game.serializeState();
    
    // 3. Construct direct URL link query parameter using the resolved server IP
    const protocol = window.location.protocol; // https:
    const portSuffix = game.serverPort ? `:${game.serverPort}` : "";
    const baseUri = `${protocol}//${game.serverIp}${portSuffix}${window.location.pathname}`;
    const shareUrl = `${baseUri}?s=${compactState}`;
    
    // 4. Generate QR code pointing directly to the link!
    qrTarget.innerHTML = "";
    new QRCode(qrTarget, {
      text: shareUrl, // Direct clickable secure HTTPS link!
      width: 188,
      height: 188,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.L
    });
    
    // Fill text summaries
    const nextCowKey = game.selectedCows[game.activePlayer - 1];
    document.getElementById('qr-next-cow-name').textContent = nextCowKey ? COW_BREEDS[nextCowKey].name : "Co-Player 2";
    document.getElementById('qr-balls-count').textContent = `${game.balls.length - 1} / 6 remaining`;
    
    modalShare.classList.add('active');
    
    if (nextCowKey) {
      sounds.playMooChime(nextCowKey);
    }
  });

  // Close modals
  document.querySelectorAll('.modal-close-btn, .modal-close-action').forEach(btn => {
    btn.addEventListener('click', () => {
      if (modalShare.classList.contains('active')) {
        // Revert turn advancement if closing the share modal (e.g. they want to shoot again)
        game.turnCount--;
        game.activePlayer = game.activePlayer === 1 ? 2 : 1;
        game.updateHudUI();
        game.updateControlsUI();
      }
      
      modalShare.classList.remove('active');
      modalScan.classList.remove('active');
      stopCameraScanner();
      
      // If closing the QR modal after sharing, trigger breed overlay check on current screen
      game.checkInGameSelector();
    });
  });

  // --- CAMERA DECODER HANDLERS (URL SCAN PARSER) ---
  const btnScanTurn = document.getElementById('btn-scan-turn');
  const scanVideo = document.getElementById('scan-video');
  const scanFeedback = document.getElementById('scan-feedback');
  
  let videoStream = null;
  let scanFrameId = null;
  
  // Creates a virtual canvas context to process camera frames
  const virtualCanvas = document.createElement('canvas');
  const virtualCtx = virtualCanvas.getContext('2d');
  
  const startCameraScanner = () => {
    scanFeedback.textContent = "Requesting camera stream... 📸";
    
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
      .then((stream) => {
        videoStream = stream;
        scanVideo.srcObject = stream;
        scanVideo.setAttribute("playsinline", true);
        scanVideo.play();
        
        scanFeedback.textContent = "Awaiting QR scan code... 🐮🎯";
        // Begin loop decoding frame checks
        scanFrameId = requestAnimationFrame(decodeScanFrame);
      })
      .catch((err) => {
        console.error("Camera access failed:", err);
        scanFeedback.textContent = "Camera error! Grant permissions. ⚠️";
      });
  };

  const stopCameraScanner = () => {
    if (scanFrameId) {
      cancelAnimationFrame(scanFrameId);
      scanFrameId = null;
    }
    
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      videoStream = null;
    }
    scanVideo.srcObject = null;
  };

  const decodeScanFrame = () => {
    if (scanVideo.readyState === scanVideo.HAVE_ENOUGH_DATA) {
      // Scale virtual processing canvas to video source resolution
      virtualCanvas.width = scanVideo.videoWidth;
      virtualCanvas.height = scanVideo.videoHeight;
      
      virtualCtx.drawImage(scanVideo, 0, 0, virtualCanvas.width, virtualCanvas.height);
      const imgData = virtualCtx.getImageData(0, 0, virtualCanvas.width, virtualCanvas.height);
      
      // Invoke jsQR decoder
      const code = jsQR(imgData.data, imgData.width, imgData.height, {
        inversionAttempts: "dontInvert",
      });
      
      if (code) {
        const decodedUrlString = code.data;
        
        try {
          // Extract Base64 query parameter "?s=" from scanned URL link
          const urlObj = new URL(decodedUrlString);
          const base64State = urlObj.searchParams.get('s');
          
          if (base64State) {
            const decodedState = game.decodeStateParam(base64State);
            const success = game.deserializeState(decodedState);
            
            if (success) {
              scanFeedback.textContent = "Success! Turn synchronized! 🥛🎉";
              sounds.playPocket();
              
              const nextCow = game.selectedCows[game.activePlayer - 1];
              if (nextCow) {
                setTimeout(() => sounds.playMooChime(nextCow), 400);
              }
              
              setTimeout(() => {
                modalScan.classList.remove('active');
                stopCameraScanner();
                game.checkInGameSelector();
              }, 1000);
              return;
            }
          }
        } catch (e) {
          // Fallback check: try parsing raw JSON directly in case they scanned an old QR
          const success = game.deserializeState(decodedUrlString);
          if (success) {
            scanFeedback.textContent = "Success! Turn synchronized! 🥛🎉";
            sounds.playPocket();
            
            const nextCow = game.selectedCows[game.activePlayer - 1];
            if (nextCow) {
              setTimeout(() => sounds.playMooChime(nextCow), 400);
            }
            
            setTimeout(() => {
              modalScan.classList.remove('active');
              stopCameraScanner();
              game.checkInGameSelector();
            }, 1000);
            return;
          }
        }
        scanFeedback.textContent = "Invalid QR code link format! ⚠️";
      }
    }
    
    if (scanFrameId) {
      scanFrameId = requestAnimationFrame(decodeScanFrame);
    }
  };

  btnScanTurn.addEventListener('click', () => {
    modalScan.classList.add('active');
    startCameraScanner();
  });

  // Sound toggle button
  const soundToggle = document.getElementById('btn-sound-toggle');
  soundToggle.addEventListener('click', () => {
    const isEnabled = sounds.toggle();
    soundToggle.textContent = `🔊 Sound: ${isEnabled ? 'On' : 'Off'}`;
    if (isEnabled) sounds.playCushion(0.5);
  });

  // Reset match button
  document.getElementById('btn-reset-match').addEventListener('click', () => {
    if (confirm("Reset the match? This will restore all 6 balls.")) {
      game.myPlayerNumber = 1; // Explicitly Player 1!
      game.turnCount = 1;
      game.activePlayer = 1;
      game.selectedCows = [p1Selected, null];
      
      game.resetTable();
      game.updateHudUI();
      game.checkInGameSelector();
      
      // Reset P2 selectors highlights in DOM
      document.querySelectorAll('.breed-select-btn').forEach(btn => btn.classList.remove('chosen'));
      btnConfirmP2Breed.disabled = true;
      btnConfirmP2Breed.classList.add('btn-disabled');
      inGameDesc.textContent = "Tap a breed to view profile details.";
      p2ChosenBreed = null;
      
      sounds.playMooChime(p1Selected);
    }
  });

  // --- STARTUP URL QUERY DECODER ---
  const loadStateFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const stateParam = urlParams.get('s');
    
    if (stateParam) {
      try {
        const decodedState = game.decodeStateParam(stateParam);
        const success = game.deserializeState(decodedState);
        
        if (success) {
          console.log("🔗 Game state parsed securely from URL link query.");
          
          // Swap screen
          screenStart.classList.remove('active');
          screenGame.classList.add('active');
          
          // Check in-game selection panel
          game.checkInGameSelector();
          
          // Play current player moo chime after a brief loading delay
          setTimeout(() => {
            const currentCow = game.selectedCows[game.activePlayer - 1];
            if (currentCow) {
              sounds.playMooChime(currentCow);
            }
          }, 600);
        }
      } catch (err) {
        console.error("Failed to decode game state parameter from URL:", err);
      }
      
      // CLEAR the query parameter instantly from the browser URL history!
      // This prevents accidental page refreshes from deleting current shots!
      window.history.replaceState({}, '', window.location.pathname);
    }
  };
  
  // Call loader once
  loadStateFromUrl();

});
