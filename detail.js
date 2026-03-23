function showProduct() {
  const name = document.getElementById("name").value;

  const num = document.getElementById("num").value;
   
  const wsNumber = document.getElementById("ws-number").value
   
   const district = document.getElementById("district").value;
   
   const blood = document.getElementById("blood").value;
   
   
   localStorage.setItem("num", num);
   
   localStorage.setItem("name", name);
   
   localStorage.setItem("ws-number", wsNumber);
   
   localStorage.setItem("district", district);
   
   localStorage.setItem("blood", blood);
   return ;
}