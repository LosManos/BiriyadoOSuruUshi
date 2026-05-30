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
    const types = ['buttercup', 'daisy'];
    
    // Generate 20 random flowers inside the fence area
    for (let i = 0; i < 20; i++) {
      this.flowers.push({
        x: 45 + Math.random() * (this.virtualWidth - 90),
        y: 45 + Math.random() * (this.virtualHeight - 90),
        type: types[Math.floor(Math.random() * types.length)],
        size: 3 + Math.random() * 3
      });
    }

    // Generate 30 tufts of grass
    for (let i = 0; i < 30; i++) {
      this.grassTufts.push({
        x: 45 + Math.random() * (this.virtualWidth - 90),
        y: 45 + Math.random() * (this.virtualHeight - 90),
        length: 6 + Math.random() * 6
      });
    }
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
    const x = ((clientX - rect.left) / rect.width) * this.virtualWidth;
    const y = ((clientY - rect.top) / rect.height) * this.virtualHeight;
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
      sinking: false
    });
    
    // 2. 6-Ball Triangle Rack placed pointing down, apexed at (250, 300)
    const apexX = 250;
    const apexY = 300;
    const spacingX = this.ballRadius * 2 + 0.5;
    const spacingY = this.ballRadius * 1.732; // Row offset d * cos(30deg)
    
    // Row 1 (Apex ball)
    this.balls.push({ id: 1, x: apexX, y: apexY, vx: 0, vy: 0, radius: this.ballRadius, color: '#f5c453', scale: 1, sinking: false });
    
    // Row 2 (behind it - higher up)
    this.balls.push({ id: 2, x: apexX - spacingX/2, y: apexY - spacingY, vx: 0, vy: 0, radius: this.ballRadius, color: '#3b82f6', scale: 1, sinking: false });
    this.balls.push({ id: 3, x: apexX + spacingX/2, y: apexY - spacingY, vx: 0, vy: 0, radius: this.ballRadius, color: '#ef4444', scale: 1, sinking: false });
    
    // Row 3 (closer to top rail)
    this.balls.push({ id: 4, x: apexX - spacingX, y: apexY - spacingY * 2, vx: 0, vy: 0, radius: this.ballRadius, color: '#a855f7', scale: 1, sinking: false });
    this.balls.push({ id: 5, x: apexX, y: apexY - spacingY * 2, vx: 0, vy: 0, radius: this.ballRadius, color: '#f97316', scale: 1, sinking: false });
    this.balls.push({ id: 6, x: apexX + spacingX, y: apexY - spacingY * 2, vx: 0, vy: 0, radius: this.ballRadius, color: '#10b981', scale: 1, sinking: false });
    
    this.isRolling = false;
    this.isDragging = false;
    this.updateControlsUI();
  }

  // --- CORE GAME STATE EXPORT/IMPORT (URL-FRIENDLY BASE64 JSON) ---
  
  serializeState() {
    const state = {
      t: this.turnCount,
      a: this.activePlayer,
      c: this.selectedCows,
      // Normalize cue ball position
      cue: {
        x: Math.round(this.balls.find(b => b.isCue)?.x || 250),
        y: Math.round(this.balls.find(b => b.isCue)?.y || 750)
      },
      // Compact active target balls
      b: this.balls.filter(b => !b.isCue).map(b => ({
        i: b.id,
        x: Math.round(b.x),
        y: Math.round(b.y),
        c: b.color
      }))
    };
    return JSON.stringify(state);
  }

  deserializeState(jsonString) {
    try {
      const state = JSON.parse(jsonString);
      if (!state.t || !state.a || !state.cue || !Array.isArray(state.b)) {
        return false;
      }
      
      this.turnCount = state.t;
      this.activePlayer = state.a;
      this.selectedCows = state.c || ['SLB', null];
      
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
        sinking: false
      }];
      
      // Load target balls
      state.b.forEach(b => {
        this.balls.push({
          id: b.i,
          x: b.x,
          y: b.y,
          vx: 0,
          vy: 0,
          radius: this.ballRadius,
          color: b.c || '#f5c453',
          scale: 1,
          sinking: false
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
    // Lock controls during rolling OR if Player 2's breed select overlay is active!
    if (this.isRolling || (this.activePlayer === 2 && this.selectedCows[1] === null)) return;
    
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
    if (!this.isRolling) return;
    
    let anyRolling = false;
    
    // 1. Move and check bounds
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
      
      // Standard linear friction damping
      ball.x += ball.vx;
      ball.y += ball.vy;
      
      ball.vx *= this.friction;
      ball.vy *= this.friction;
      
      // Stop moving if speed is negligible
      if (Math.hypot(ball.vx, ball.vy) < 0.08) {
        ball.vx = 0;
        ball.vy = 0;
      } else {
        anyRolling = true;
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
          sinking: false
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
    if (this.activePlayer === 2 && this.selectedCows[1] === null) {
      overlay.classList.add('active');
    } else {
      overlay.classList.remove('active');
    }
  }

  // --- CANVAS GRAPHICS RENDERING (PASTURE THEME) ---
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.save();
    const scaleX = this.canvas.width / this.virtualWidth;
    const scaleY = this.canvas.height / this.virtualHeight;
    this.ctx.scale(scaleX, scaleY);
    
    // 1. Lush Green Grass Field base
    this.ctx.fillStyle = '#1e4a38';
    this.ctx.fillRect(0, 0, this.virtualWidth, this.virtualHeight);
    
    // Radial glow to simulate sunlight on the pasture field
    const feltGlow = this.ctx.createRadialGradient(
      this.virtualWidth/2, this.virtualHeight/2, 100,
      this.virtualWidth/2, this.virtualHeight/2, 850
    );
    feltGlow.addColorStop(0, '#2b634b');
    feltGlow.addColorStop(1, '#1e4a38');
    this.ctx.fillStyle = feltGlow;
    this.ctx.fillRect(0, 0, this.virtualWidth, this.virtualHeight);
    
    // 2. Draw grass blades
    this.ctx.strokeStyle = '#2b634b';
    this.ctx.lineWidth = 1.5;
    this.grassTufts.forEach(tuft => {
      this.ctx.beginPath();
      // Draw a tiny triple blade tuft of grass
      this.ctx.moveTo(tuft.x, tuft.y);
      this.ctx.lineTo(tuft.x - 2, tuft.y - tuft.length);
      this.ctx.moveTo(tuft.x, tuft.y);
      this.ctx.lineTo(tuft.x, tuft.y - tuft.length * 1.2);
      this.ctx.moveTo(tuft.x, tuft.y);
      this.ctx.lineTo(tuft.x + 2, tuft.y - tuft.length);
      this.ctx.stroke();
    });

    // 3. Draw Buttercups & Daisies
    this.flowers.forEach(flower => {
      if (flower.type === 'buttercup') {
        // Draw golden buttercup yellow dots
        this.ctx.beginPath();
        this.ctx.arc(flower.x, flower.y, flower.size, 0, Math.PI * 2);
        this.ctx.fillStyle = '#f5c453';
        this.ctx.fill();
        // center
        this.ctx.beginPath();
        this.ctx.arc(flower.x, flower.y, flower.size * 0.4, 0, Math.PI * 2);
        this.ctx.fillStyle = '#d97706';
        this.ctx.fill();
      } else {
        // Draw white daisies
        this.ctx.beginPath();
        this.ctx.arc(flower.x, flower.y, flower.size, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
        // center yellow pollen
        this.ctx.beginPath();
        this.ctx.arc(flower.x, flower.y, flower.size * 0.4, 0, Math.PI * 2);
        this.ctx.fillStyle = '#f5c453';
        this.ctx.fill();
      }
    });

    // 4. Draw Cushions/Rails as rustic wooden logs
    this.ctx.strokeStyle = '#543015'; // bark dark brown
    this.ctx.lineWidth = 14;
    this.ctx.strokeRect(7, 7, this.virtualWidth - 14, this.virtualHeight - 14);
    
    // Draw wood grain details on logs
    this.ctx.strokeStyle = '#42240e';
    this.ctx.lineWidth = 2;
    // Top Rail log grain
    this.ctx.beginPath();
    this.ctx.moveTo(14, 7); this.ctx.lineTo(this.virtualWidth - 14, 7);
    this.ctx.moveTo(14, 11); this.ctx.lineTo(this.virtualWidth - 14, 11);
    // Bottom Rail log grain
    this.ctx.moveTo(14, this.virtualHeight - 7); this.ctx.lineTo(this.virtualWidth - 14, this.virtualHeight - 7);
    this.ctx.moveTo(14, this.virtualHeight - 11); this.ctx.lineTo(this.virtualWidth - 14, this.virtualHeight - 11);
    // Left rail grain
    this.ctx.moveTo(7, 14); this.ctx.lineTo(7, this.virtualHeight - 14);
    this.ctx.moveTo(11, 14); this.ctx.lineTo(11, this.virtualHeight - 14);
    // Right rail grain
    this.ctx.moveTo(this.virtualWidth - 7, 14); this.ctx.lineTo(this.virtualWidth - 7, this.virtualHeight - 14);
    this.ctx.moveTo(this.virtualWidth - 11, 14); this.ctx.lineTo(this.virtualWidth - 11, this.virtualHeight - 14);
    this.ctx.stroke();

    // Rope joints at corners and side rails
    this.ctx.strokeStyle = '#c4b5a5'; // rope gray-beige
    this.ctx.lineWidth = 3;
    const ropeJoint = (x, y) => {
      this.ctx.beginPath();
      this.ctx.moveTo(x - 8, y - 8); this.ctx.lineTo(x + 8, y + 8);
      this.ctx.moveTo(x + 8, y - 8); this.ctx.lineTo(x - 8, y + 8);
      this.ctx.stroke();
    };
    ropeJoint(14, 14);
    ropeJoint(this.virtualWidth - 14, 14);
    ropeJoint(14, this.virtualHeight - 14);
    ropeJoint(this.virtualWidth - 14, this.virtualHeight - 14);

    // Inner log lines
    this.ctx.strokeStyle = '#12261d'; // dark fence grass shadow
    this.ctx.lineWidth = 6;
    this.ctx.strokeRect(28, 28, this.virtualWidth - 56, this.virtualHeight - 56);
    
    // 5. Draw muddy watering hole pockets
    this.pockets.forEach(pocket => {
      // mud outline ring
      this.ctx.beginPath();
      this.ctx.arc(pocket.x, pocket.y, pocket.r + 2, 0, Math.PI * 2);
      this.ctx.fillStyle = '#2d1a0f'; // rich mud brown
      this.ctx.fill();
      
      // inner dark pocket
      this.ctx.beginPath();
      this.ctx.arc(pocket.x, pocket.y, pocket.r, 0, Math.PI * 2);
      this.ctx.fillStyle = '#080808'; // water deep hole
      this.ctx.fill();
    });
    
    // 6. Draw cue guides
    if (this.isDragging) {
      const cueBall = this.balls.find(b => b.isCue);
      if (cueBall) {
        const dx = cueBall.x - this.dragCurrent.x;
        const dy = cueBall.y - this.dragCurrent.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist > 8) {
          const ux = dx / dist;
          const uy = dy / dist;
          
          this.ctx.beginPath();
          this.ctx.moveTo(cueBall.x + ux * cueBall.radius, cueBall.y + uy * cueBall.radius);
          this.ctx.lineTo(cueBall.x + ux * Math.min(dist * 2.5, 300), cueBall.y + uy * Math.min(dist * 2.5, 300));
          this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
          this.ctx.lineWidth = 3;
          this.ctx.setLineDash([5, 5]);
          this.ctx.stroke();
          this.ctx.setLineDash([]);
          
          // wood cue stick
          this.ctx.beginPath();
          this.ctx.moveTo(cueBall.x - ux * (cueBall.radius + 10), cueBall.y - uy * (cueBall.radius + 10));
          this.ctx.lineTo(this.dragCurrent.x, this.dragCurrent.y);
          this.ctx.strokeStyle = '#b45309';
          this.ctx.lineWidth = 5;
          this.ctx.lineCap = 'round';
          this.ctx.stroke();
          
          // gold cue tip
          this.ctx.beginPath();
          this.ctx.moveTo(cueBall.x - ux * (cueBall.radius + 5), cueBall.y - uy * (cueBall.radius + 5));
          this.ctx.lineTo(cueBall.x - ux * (cueBall.radius + 10), cueBall.y - uy * (cueBall.radius + 10));
          this.ctx.strokeStyle = '#f5c453';
          this.ctx.lineWidth = 5;
          this.ctx.stroke();
        }
      }
    }
    
    // 4. Draw Billiard Balls
    this.balls.forEach(ball => {
      this.ctx.save();
      this.ctx.translate(ball.x, ball.y);
      this.ctx.scale(ball.scale, ball.scale);
      
      // Shadow
      this.ctx.beginPath();
      this.ctx.arc(4, 4, ball.radius - 1, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      this.ctx.fill();
      
      // Render Cue Ball (Spotted Cow print cue ball!)
      if (ball.isCue) {
        // Main white cue
        this.ctx.beginPath();
        this.ctx.arc(0, 0, ball.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
        
        // Spot 1
        this.ctx.beginPath();
        this.ctx.arc(-5, -4, 4, 0, Math.PI * 2);
        this.ctx.fillStyle = '#111111';
        this.ctx.fill();
        
        // Spot 2
        this.ctx.beginPath();
        this.ctx.arc(5, 5, 5, 0, Math.PI * 2);
        this.ctx.fillStyle = '#111111';
        this.ctx.fill();
        
        // Spot 3
        this.ctx.beginPath();
        this.ctx.arc(6, -6, 2.5, 0, Math.PI * 2);
        this.ctx.fillStyle = '#111111';
        this.ctx.fill();
      } else {
        // Target Balls (solid colored spheres)
        this.ctx.beginPath();
        this.ctx.arc(0, 0, ball.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = ball.color;
        this.ctx.fill();
        
        // Sphere highlights
        const radGlow = this.ctx.createRadialGradient(-4, -4, 1, 0, 0, ball.radius);
        radGlow.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
        radGlow.addColorStop(0.3, 'rgba(255, 255, 255, 0)');
        radGlow.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
        this.ctx.fillStyle = radGlow;
        this.ctx.fill();
        
        // Sunk Ball Number label
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 6, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
        
        this.ctx.font = 'bold 8px Inter';
        this.ctx.fillStyle = '#000000';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(ball.id, 0, 0.5);
      }
      
      this.ctx.restore();
    });
    
    this.ctx.restore();
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
  }

  updateControlsUI() {
    const btnShare = document.getElementById('btn-share-turn');
    if (this.isRolling || this.balls.length <= 1) {
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
    
    // 2. Compel state into JSON and compress to URL-safe Base64
    const compactState = game.serializeState();
    const base64State = btoa(unescape(encodeURIComponent(compactState)));
    
    // 3. Construct direct URL link query parameter using the resolved server IP
    const protocol = window.location.protocol; // https:
    const baseUri = `${protocol}//${game.serverIp}:${game.serverPort}${window.location.pathname}`;
    const shareUrl = `${baseUri}?s=${base64State}`;
    
    // 4. Generate QR code pointing directly to the link!
    qrTarget.innerHTML = "";
    new QRCode(qrTarget, {
      text: shareUrl, // Direct clickable secure HTTPS link!
      width: 188,
      height: 188,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
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
            const decodedJson = decodeURIComponent(escape(atob(base64State)));
            const success = game.deserializeState(decodedJson);
            
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
        const decodedJson = decodeURIComponent(escape(atob(stateParam)));
        const success = game.deserializeState(decodedJson);
        
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
