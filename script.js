function checkPangram(){
  const sentence = document.getElementById('pangram').value;
  const result = document.getElementById('result');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let char of alphabet){
    if (!sentence.toLowerCase().includes(char)){
      result.innerHTML = `${sentence.toUpperCase()} is not a Pangram`;
    } else{
      result.innerHTML = `${sentence.toUpperCase()} is a Pangram`;
    }
  }
}

document.getElementById('btn').addEventListener('click', checkPangram);

