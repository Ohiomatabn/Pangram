function checkPangram(){
  const senctence = document.getElementById('pangram').value;
  const result = document.getElementById('result');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let char of alphabet){
    if (!senctence.toLowerCase().includes(char)){
      result.innerHTML = 'These senctence is not a Pangram, <br> a Pangram must contain all the senctence of alphabet';
    } else{
      result.innerHTML = "It's a pangram, <br> it contain all the letter of the alphabet";
    }
  }
}

document.getElementById('btn').addEventListener('click', checkPangram);

