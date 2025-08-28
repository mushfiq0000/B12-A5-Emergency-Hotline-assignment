
// Heart button---------------

const totalHearts = document.getElementsByClassName("add-heart-btn");
for (const totalHeart of totalHearts) {
  totalHeart.addEventListener("click", function () {
    const addHeartBtn = Number(
      document.getElementById("total-heart").innerText
    );
    let heart = addHeartBtn + 1;

    document.getElementById("total-heart").innerText = heart;
  });
}


// Call button-----------------

const callBtns = document.getElementsByClassName("call-btn");
for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function () {
    const totalCoin = Number(document.getElementById("total-coin").innerText);
    let coin = totalCoin - 20;

    
    const subTitel = callBtn.parentNode.parentNode.children[1].children[1].innerText
    const subNumber = callBtn.parentNode.parentNode.children[2].children[0].innerText
    

    if (totalCoin >= 20) {
      alert(`📞Calling ${subTitel} ${subNumber}...`);
      document.getElementById("total-coin").innerText = coin;



      const date = new Date().toLocaleTimeString()
      const historyBox = document.getElementById("history-box");
      const historyElement = document.createElement("div");
      historyElement.innerHTML = `<div class="flex justify-between items-center  px-4 py-3  rounded-xl bg-[#fafafa]">

              <div>
                <h1 class="font-bold">${subTitel}</h1>
                <p>${subNumber}</p>
              </div>

              <div class="ml-13">
                <p>${date}</p>
              </div>

            </div>`;

      historyBox.append(historyElement);
    } else {
      alert(
        "❌You don’t have enough coins. You need at least 20 coins to make a call."
      );
    }
  })
}


document.getElementById('clear-btn').addEventListener('click', function () {
    document.getElementById("history-box").innerText = ''
})


const copyBtns = document.getElementsByClassName('copy-btn')
for (const copyBtn of copyBtns){
    copyBtn.addEventListener('click', function () {
      const totalCopy = Number(document.getElementById('copy-number').innerText)
      let totalCopyNumber = totalCopy + 1

      document.getElementById('copy-number').innerText = totalCopyNumber

    const subNumber = copyBtn.parentNode.parentNode.children[2].children[0].innerText
      
    
        navigator.clipboard.writeText(subNumber).then(() => {
        alert("Copied: " + subNumber);
    });
        



    })
}
