

export class Canvas {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.gravity;
        this.jumpVelocity; 
        this.score = 0;
    }
    resizeCanvas() {
        const aspectRatio = 800 / 400;  
        this.canvas.width = window.innerWidth < 800 ? window.innerWidth : 800;
        this.canvas.height = this.canvas.width / aspectRatio;
        this.gravity = this.canvas.height * 0.0025;
    }
    drawControls(){
        const controls = ['Space: Jump', 'S: Slide', 'A: Shoot'];
        this.ctx.save();
        this.ctx.textAlign = 'left';
        this.ctx.font = `${this.canvas.height * 0.04}px "Press Start 2P"`;
        this.ctx.shadowColor = 'rgba(0,0,0,0.8)';
        this.ctx.shadowBlur = 6;
        this.ctx.shadowOffsetX = 2;
        this.ctx.shadowOffsetY = 2;
        this.ctx.strokeStyle = 'rgba(0,0,0,0.9)';
        this.ctx.lineWidth = 3;
        controls.forEach((line, i) => {
            const y = this.canvas.height * 0.07 * (i + 1);
            this.ctx.strokeText(line, 10, y);
            this.ctx.fillStyle = 'white';
            this.ctx.fillText(line, 10, y);
        });
        this.ctx.restore();
    }
    gameOver(score){
        this.canvas.style.animation = "shake 0.5s";
        this.ctx.save();
        this.ctx.textAlign = "center";
        this.ctx.shadowColor = 'rgba(0,0,0,0.8)';
        this.ctx.shadowBlur = 8;
        this.ctx.shadowOffsetX = 3;
        this.ctx.shadowOffsetY = 3;
        this.ctx.strokeStyle = 'rgba(0,0,0,0.9)';
        this.ctx.lineWidth = 4;
        const lines = [
            { text: 'Game Over',        y: this.canvas.height / 2 - this.canvas.height * 0.12, size: 0.1  },
            { text: `Final Score: ${score}`, y: this.canvas.height / 2,                        size: 0.07 },
            { text: 'Press R To Restart',   y: this.canvas.height / 2 + this.canvas.height * 0.12, size: 0.05 },
        ];
        lines.forEach(({ text, y, size }) => {
            this.ctx.font = `${this.canvas.height * size}px "Press Start 2P"`;
            this.ctx.strokeText(text, this.canvas.width / 2, y);
            this.ctx.fillStyle = 'white';
            this.ctx.fillText(text, this.canvas.width / 2, y);
        });
        this.ctx.restore();
    }
}