function moveBg(e) {
    const rect = e.target.getBoundingClientRect();
    e.target.style.setProperty('--x', (e.clientX - rect.x) / rect.width * 100);
    e.target.style.setProperty('--y', (e.clientY - rect.y) / rect.height * 100);
}
document.querySelector("button").addEventListener('pointermove', moveBg);
let x;
function intro() {
    let i = 4; 
    let $b = document.querySelector("button");
    $b.style.setProperty( "--a", '100%' );
    x = setInterval(() => {
        $b.style.setProperty( 
            "--x", ((Math.cos(i) + 2) / 3.6) * 100
        );
        $b.style.setProperty( 
            "--y", ((Math.sin(i) + 2) / 3.6) * 100
        );
        i+= 0.03;
        if( i > 11.5 ) {
            clearInterval(x);
            $b.style.setProperty( "--a", '' );
        }
    },16);
}
intro();
document.querySelector("button").addEventListener('pointerover', (e) => {
    clearInterval(x);
    e.target.style.setProperty( "--a", '' );
});

document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

