document.addEventListener("DOMContentLoaded", (event) => {

  const faqBlocks= document.querySelectorAll(".faq__block");

  console.log(faqBlocks);
  faqBlocks.forEach((block, i) => {
    block.addEventListener('click', () => {

      const answer = block.querySelector('.faq__answer');
      answer.classList.toggle('visible')
    })
  })

});