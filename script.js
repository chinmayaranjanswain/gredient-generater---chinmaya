// DOM Elements
const gradientBox = document.getElementById('gradientBox');
const floatingGenerateBtn = document.getElementById('floatingGenerateBtn');
const gradientCode = document.getElementById('gradientCode');
const copyBtn = document.getElementById('copyBtn');
const paletteColors = document.getElementById('paletteColors');

// Premium gradient color combinations
const premiumColors = [
    { color1: '#774A62', color2: '#3C2F8C' },  // Royal Purple
    { color1: '#2C3E50', color2: '#3498DB' },  // Midnight Blue
    { color1: '#434343', color2: '#000000' },  // Dark Slate
    { color1: '#4B1248', color2: '#F0C27B' },  // Mystic Mauve
    { color1: '#0F2027', color2: '#203A43' },  // Dark Ocean
    { color1: '#5D4157', color2: '#A8CABA' },  // Dusty Gradient
    { color1: '#2C3E50', color2: '#FD746C' },  // Sunset Noir
    { color1: '#141E30', color2: '#243B55' },  // Royal Blue
    { color1: '#1F1C2C', color2: '#928DAB' },  // Midnight City
    { color1: '#2B32B2', color2: '#1488CC' },  // Electric Violet
    { color1: '#0F2027', color2: '#2C5364' },  // Dark Skies
    { color1: '#23074D', color2: '#CC5333' },  // Deep Purple Sunset
    { color1: '#1A2980', color2: '#26D0CE' },  // Deep Sea
    { color1: '#FF512F', color2: '#DD2476' },  // Burning Sunset
    { color1: '#16222A', color2: '#3A6073' },  // Steel Gray
    { color1: '#4B6CB7', color2: '#182848' },  // Royal Navy
    { color1: '#8E2DE2', color2: '#4A00E0' },  // Ultra Violet
    { color1: '#20002c', color2: '#cbb4d4' },  // Mystic Purple
    { color1: '#2C3E50', color2: '#BDC3C7' },  // Elegant Silver
    { color1: '#DA4453', color2: '#89216B' },  // Crimson Tide
    { color1: '#636FA4', color2: '#E8CBC0' },  // Mauve Mist
    { color1: '#1D976C', color2: '#93F9B9' },  // Emerald Glow
    { color1: '#2193b0', color2: '#6dd5ed' },  // Crystal Blue
    { color1: '#373B44', color2: '#4286f4' },  // Deep Space
    { color1: '#283c86', color2: '#45a247' },  // Forest Blues
    { color1: '#3a1c71', color2: '#d76d77' },  // Royal Blush
    { color1: '#000046', color2: '#1CB5E0' },  // Ocean Night
    { color1: '#4568DC', color2: '#B06AB3' },  // Cosmic Fusion
    { color1: '#0B486B', color2: '#F56217' },  // Sunset Beach
    { color1: '#3C3B3F', color2: '#605C3C' }   // Vintage Gold
];

// Generate a random premium gradient
function generatePremiumGradient() {
    const randomIndex = Math.floor(Math.random() * premiumColors.length);
    const { color1, color2 } = premiumColors[randomIndex];
    const angle = generateRandomAngle();
    
    const gradientCSS = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    
    // Apply gradient to the display box
    gradientBox.style.background = gradientCSS;
    
    // Update the CSS code display with glassmorphism
    gradientCode.textContent = `background: ${gradientCSS};
background-color: rgba(255, 255, 255, 0.25);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border-radius: 10px;
border: 1px solid rgba(255, 255, 255, 0.18);`;
    
    // Update color palette
    updateColorPalette([color1, color2]);
}

// Generate a random angle for the gradient
function generateRandomAngle() {
    // Generate angles that create more dramatic diagonal effects
    const angles = [15, 22, 45, 145, 165, 195, 225, 315, 335];
    return angles[Math.floor(Math.random() * angles.length)];
}

// Update the color palette display
function updateColorPalette(colors) {
    paletteColors.innerHTML = '';
    
    colors.forEach(color => {
        const container = document.createElement('div');
        container.className = 'color-box-container';
        
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.title = color.toUpperCase();
        
        const colorCode = document.createElement('span');
        colorCode.className = 'color-code';
        colorCode.textContent = color.toUpperCase();
        
        container.appendChild(colorBox);
        container.appendChild(colorCode);
        paletteColors.appendChild(container);
    });
}

// Copy CSS code to clipboard
async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(gradientCode.textContent);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = 'Copy CSS';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

// Event Listeners
floatingGenerateBtn.addEventListener('click', generatePremiumGradient);
copyBtn.addEventListener('click', copyToClipboard);

// Generate initial gradient on page load
generatePremiumGradient(); 