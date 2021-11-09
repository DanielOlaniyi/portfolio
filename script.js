console.log("i no send your papa");
document.querySelector(".hbg-cont").addEventListener("click", ()=>{
    document.querySelector(".hbg-cont").classList.add("hide");
    document.querySelector(".hbg-cont").classList.remove("show");
    document.querySelector(".close").classList.add("show");
    document.querySelector(".close").classList.remove("hide");
    document.querySelector(".drop").classList.remove("hide");
    document.querySelector(".drop").classList.add("show");
  })
  document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector(".hbg-cont").classList.add("show");
    document.querySelector(".hbg-cont").classList.remove("hide");
    document.querySelector(".close").classList.add("hide");
    document.querySelector(".close").classList.remove("show");
    document.querySelector(".drop").classList.remove("show");
    document.querySelector(".drop").classList.add("hide");
  })