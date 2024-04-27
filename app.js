const btns = document.querySelectorAll('.plus_minus');

const answers = document.querySelectorAll('.answer_sec');



btns.forEach(function (btn) {
  btn.addEventListener('click', function(e) {
    const quest = e.currentTarget.parentElement.parentElement;

    //selects the svg span in the button
    const pm = quest.querySelectorAll('span');


    pm.forEach(function (span) {
      if (span !== this) {
        span.classList.toggle('hidden');
      }
    })

    quest.classList.toggle('hid')

  })
})