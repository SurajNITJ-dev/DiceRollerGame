function rollDice(){

    const rollSound = document.getElementById("rollSound");
   
    rollSound.currentTime = 0; 
   
    rollSound.play();

    const numOfDice = document.getElementById("inpt").value;
    const diceResult=document.getElementById("diceResult");
    const totalSumElement = document.getElementById("totalSum");
    // const diceImages=document.getElementById("diceImages");

    const values = [];
    const images = [];
    let sum=0;

    for(let i=0;i<numOfDice;i++){
        const value= Math.floor(Math.random() * 6 ) + 1;
        sum+=value;
        
        values.push(value);
        images.push(`<img src="dice_imag/${value}.png" alt="${value}" class="dice-img dice-rolling">`)
    }

    // diceResult.textContent=`Dice : ${values.join(', ')}`;
    // diceImages.innerHTML = images.join('  ')
    diceResult.innerHTML = `
        <p style="margin-bottom: 10px;">Dice: ${values.join(', ')}</p>
        <div class="img-container">${images.join('  ')}</div>`;

    totalSumElement.textContent = sum;
}

function resetApp() {
    document.getElementById("inpt").value = 1;         // Input default 1 karega
    document.getElementById("totalSum").textContent = 0; // Sum 0 karega
    document.getElementById("diceResult").innerHTML = ""; // Dice clear kar dega
}


// //3D Dice

// function rollDice(){
//     const numOfDice = document.getElementById("inpt").value;
//     const diceResult = document.getElementById("diceResult");

//     const values = [];
//     const cubesHTML = [];

//     // Pehle hum saare cubes ka HTML structure box mein daal dete hain
//     for(let i = 0; i < numOfDice; i++){
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
        
//         cubesHTML.push(`
//             <div class="scene">
//                 <div class="cube" id="cube-${i}">
//                     <div class="cube__face cube__face--front">1</div>
//                     <div class="cube__face cube__face--back">9</div>
//                     <div class="cube__face cube__face--right">2</div>
//                     <div class="cube__face cube__face--left">5</div>
//                     <div class="cube__face cube__face--top">3</div>
//                     <div class="cube__face cube__face--bottom">4</div>
//                 </div>
//             </div>
//         `);
//     }

//     diceResult.innerHTML = `
//         <p style="margin-bottom: 20px;">Dice: ${values.join(', ')}</p>
//         <div class="img-container">${cubesHTML.join('')}</div>
//     `;

//     // 🟢 AB AAYEGA ANIMATION: setTimeout se hum har cube ko dynamic 3D rotation denge
//     setTimeout(() => {
//         for(let i = 0; i < numOfDice; i++){
//             const cube = document.getElementById(`cube-${i}`);
//             const value = values[i];
            
//             // Har number ke liye sahi target angles (X aur Y axis par)
//             let xAngle = 0;
//             let yAngle = 0;

//             if (value === 1) { xAngle = 0; yAngle = 0; }
//             else if (value === 2) { xAngle = 0; yAngle = -90; }
//             else if (value === 3) { xAngle = -90; yAngle = 0; }
//             else if (value === 4) { xAngle = 90; yAngle = 0; }
//             else if (value === 5) { xAngle = 0; yAngle = 90; }
//             else if (value === 6) { xAngle = 180; yAngle = 0; }

//             // 🎲 REAL 3D ROLL FEEL: 
//             // Target angle mein (360 * 2 = 720 degree) jod diya taaki dabba rukne se pehle 2 baar saamne ghoome!
//             cube.style.transform = `rotateX(${xAngle + 720}deg) rotateY(${yAngle + 720}deg)`;
//         }
//     }, 50); // 50ms ka delay taaki browser animation register kar sake
// }