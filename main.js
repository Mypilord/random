let score = 0; 
let autoclick = false; 
let doubleclick = false; 

function scoreCount() { 
    if (doubleclick == false) {
    score = score + 1
    document.getElementById('score').textContent = score;
} else if (doubleclick == true) {
score = score + 2
document.getElementById('score').textContent = score;
}
} 

function doubleclicker() {
    if (score >= 200) {
        score = score - 200;
        doubleclick = true; 
      }
      else {
        alert ("not enough money honey, you broke son"); 
      }
    } 



    
    function autoclicker() {
        if (score >= 30) {
            score = score - 30; 
        autoclick = true;
         setInterval (() => {
            if (autoclick) {
                score = score + 1;
                document.getElementById('score').textContent = score;
            }

        }, 5000); 
      }
      else {
        alert ("broke asf, you need money."); 
      }
    } 
    
    
 