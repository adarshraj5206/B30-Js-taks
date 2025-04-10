const paragraph = document.querySelector('#myParagraph');
const btn = document.querySelector('button');

btn.addEventListener( 'click', ()=>{
    // Toggle the display style between 'none' and 'block'
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
      } else {
        paragraph.style.display = 'none';
      }
})
    
  