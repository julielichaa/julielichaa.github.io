// Array of particles, each will be an object with more attributes
let particles = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 20);
    this.life = 255; // Transparency of the particle
    this.speedX = random(-2, 2); // Speed of particle in X direction
    this.speedY = random(-2, 2); // Speed of particle in Y direction
    this.color = color(random(255), random(255), random(255)); // Random color for each particle
  }

  // Method to update the particle's state
  update() {
    this.x += this.speedX; // Move horizontally
    this.y += this.speedY; // Move vertically
    this.life -= 5; // Decrease life over time
    this.size *= 0.98; // Shrink the particle over time

    // If particle hits the edge of the canvas, it bounces back, i love it lol
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }

  // Method to display the particle
  display() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.life);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  // Method to check if the particle is done (life <= 0)
  isDead() {
    return this.life <= 0;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 50); // Fade effect

  // Update and display all particles
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.display();

    // Remove particle when its life is over
    if (p.isDead()) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  // Push a new particle to the array when the mouse is pressed
  particles.push(new Particle(mouseX, mouseY));
  console.log(particles); // Log the current particles array to console for reference
}

// Using array methods like join() and concat()
function mouseReleased() {
  let particlePositions = particles.map(p => `(${p.x}, ${p.y})`);
  let joinedPositions = particlePositions.join(", ");
  console.log("Particle Positions: " + joinedPositions);
}

// Extra: Handling an HTML element (adding a message when the user clicks)
document.addEventListener("DOMContentLoaded", function() {
  const messageDiv = document.createElement("div");
  messageDiv.style.position = "absolute";
  messageDiv.style.top = "10px";
  messageDiv.style.left = "10px";
  messageDiv.style.background = "rgba(0, 0, 0, 0.7)";
  messageDiv.style.color = "white";
  messageDiv.style.padding = "5px";
  messageDiv.style.fontSize = "18px";
  messageDiv.innerHTML = "Click anywhere to create particles!";
  document.body.appendChild(messageDiv);
});
