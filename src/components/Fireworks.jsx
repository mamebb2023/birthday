import { useEffect, useRef } from "react";

// Helper functions
const PI2 = Math.PI * 2;
const random = (min, max) => (Math.random() * (max - min + 1) + min) | 0;
const timestamp = () => new Date().getTime();

class Firework {
  constructor(x, y, targetX, targetY, shade, offsprings) {
    this.dead = false;
    this.offsprings = offsprings;

    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;

    this.shade = shade;
    this.history = [];
  }

  update(delta, ctx, fireworks) {
    if (this.dead) return;

    let xDiff = this.targetX - this.x;
    let yDiff = this.targetY - this.y;
    if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) {
      this.x += xDiff * 2 * delta;
      this.y += yDiff * 2 * delta;

      this.history.push({ x: this.x, y: this.y });
      if (this.history.length > 20) this.history.shift();
    } else {
      if (this.offsprings && !this.madeChilds) {
        let babies = this.offsprings / 2;
        for (let i = 0; i < babies; i++) {
          let targetX =
            (this.x + this.offsprings * Math.cos((PI2 * i) / babies)) | 0;
          let targetY =
            (this.y + this.offsprings * Math.sin((PI2 * i) / babies)) | 0;
          fireworks.push(
            new Firework(this.x, this.y, targetX, targetY, this.shade, 0)
          );
        }
      }
      this.madeChilds = true;
      this.history.shift();
    }

    if (this.history.length === 0) this.dead = true;
    else if (this.offsprings) {
      for (let i = 0; this.history.length > i; i++) {
        let point = this.history[i];
        ctx.beginPath();
        ctx.fillStyle = `hsl(${this.shade}, 100%, ${i}%)`;
        ctx.arc(point.x, point.y, 1, 0, PI2, false);
        ctx.fill();
      }
    } else {
      ctx.beginPath();
      ctx.fillStyle = `hsl(${this.shade}, 100%, 50%)`;
      ctx.arc(this.x, this.y, 1, 0, PI2, false);
      ctx.fill();
    }
  }
}

const BirthdayFireworks = () => {
  const canvasRef = useRef(null);
  const fireworksRef = useRef([]);
  const counterRef = useRef(0);
  const resizeTimeoutRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const center = (width / 2) | 0;
    const spawnA = (center - center / 4) | 0;
    const spawnB = (center + center / 4) | 0;
    const spawnC = height * 0.1;
    const spawnD = height * 0.5;

    const resize = () => {
      clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = setTimeout(() => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 150);
    };

    const onClick = (evt) => {
      const x = evt.clientX || (evt.touches && evt.touches[0].pageX);
      const y = evt.clientY || (evt.touches && evt.touches[0].pageY);
      const count = random(3, 5);
      for (let i = 0; i < count; i++) {
        fireworksRef.current.push(
          new Firework(
            random(spawnA, spawnB),
            height,
            x,
            y,
            random(0, 260),
            random(30, 110)
          )
        );
      }
      counterRef.current = -1;
    };

    const update = (delta) => {
      ctx.globalCompositeOperation = "hard-light";
      ctx.fillStyle = `rgba(20, 20, 20, ${7 * delta})`;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";
      for (let firework of fireworksRef.current) {
        firework.update(delta, ctx, fireworksRef.current);
      }

      counterRef.current += delta * 3;
      if (counterRef.current >= 1) {
        fireworksRef.current.push(
          new Firework(
            random(spawnA, spawnB),
            height,
            random(0, width),
            random(spawnC, spawnD),
            random(0, 360),
            random(30, 110)
          )
        );
        counterRef.current = 0;
      }

      if (fireworksRef.current.length > 1000) {
        fireworksRef.current = fireworksRef.current.filter(
          (firework) => !firework.dead
        );
      }
    };

    const loop = () => {
      requestAnimationFrame(loop);
      const now = timestamp();
      const delta = (now - then) / 2000;
      then = now;
      update(delta);
    };

    let then = timestamp();
    loop();

    window.addEventListener("resize", resize);
    document.addEventListener("click", onClick);
    document.addEventListener("touchstart", onClick);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("click", onClick);
      document.removeEventListener("touchstart", onClick);
    };
  }, []);

  return <canvas ref={canvasRef} id="birthday" />;
};

export default BirthdayFireworks;
