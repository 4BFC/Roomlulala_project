//https://eunyoe.tistory.com/235
const star_form = document.querySelector(".star_result");
const show = document.querySelector(".result");
// console.log(star.nodeName);

star_form.addEventListener("click", (e) => {
  target = e.target;
  //NaN이 나온 이유는 label때문이다.
  if (target.classList.contains('star_btn')) {
    star_value = parseInt(target.value) / 2;
    console.log(star_value);

    switch (star_value) {
      case 0:
        show.innerHTML = ` 
        <form class="star_result">
        <fieldset class="rate_result">

          <input class="star_btn" type="radio" id="rating10_result" name="rating_result" value=10 />
          <label style="" for="rating10_result" title="5점"></label>

          <input class="star_btn" type="radio" id="rating8_result" name="rating_result" value=8>
          <label style="" for="rating8_result" title="4점"></label>

          <input class="star_btn" type="radio" id="rating6_result" name="rating_result" value=6 />
          <label style="" for="rating6_result" title="3점"></label>

          <input class="star_btn" type="radio" id="rating4_result" name="rating_result" value=4>
          <label style="" for="rating4_result" title="2점"></label>

          <input class="star_btn" type="radio" id="rating2_result" name="rating_result" value=2 />
          <label style="" for="rating2_result" title="1점"></label>
        </fieldset>
      </form>
        `
        break;
      case 1:
        show.innerHTML = ` 
        <form class="star_result">
        <fieldset class="rate_result">

          <input class="star_btn" type="radio" id="rating10_result" name="rating_result" value=10 />
          <label style="" for="rating10_result" title="5점"></label>

          <input class="star_btn" type="radio" id="rating8_result" name="rating_result" value=8>
          <label style="" for="rating8_result" title="4점"></label>

          <input class="star_btn" type="radio" id="rating6_result" name="rating_result" value=6 />
          <label style="" for="rating6_result" title="3점"></label>

          <input class="star_btn" type="radio" id="rating4_result" name="rating_result" value=4>
          <label style="" for="rating4_result" title="2점"></label>

          <input class="star_btn" type="radio" id="rating2_result" name="rating_result" value=2 />
          <label style="color: #f73c32;" for="rating2_result" title="1점"></label>
        </fieldset>
      </form>
        `
        break;
      case 2:
        show.innerHTML = ` 
        <form class="star_result">
        <fieldset class="rate_result">

          <input class="star_btn" type="radio" id="rating10_result" name="rating_result" value=10 />
          <label style="" for="rating10_result" title="5점"></label>

          <input class="star_btn" type="radio" id="rating8_result" name="rating_result" value=8>
          <label style="" for="rating8_result" title="4점"></label>

          <input class="star_btn" type="radio" id="rating6_result" name="rating_result" value=6 />
          <label style="" for="rating6_result" title="3점"></label>

          <input class="star_btn" type="radio" id="rating4_result" name="rating_result" value=4>
          <label style="color: #f73c32;" for="rating4_result" title="2점"></label>

          <input class="star_btn" type="radio" id="rating2_result" name="rating_result" value=2 />
          <label style="color: #f73c32;" for="rating2_result" title="1점"></label>
        </fieldset>
      </form>
        `
        break;
      case 3:
        show.innerHTML = ` 
        <form class="star_result">
        <fieldset class="rate_result">

          <input class="star_btn" type="radio" id="rating10_result" name="rating_result" value=10 />
          <label style="" for="rating10_result" title="5점"></label>

          <input class="star_btn" type="radio" id="rating8_result" name="rating_result" value=8>
          <label style="" for="rating8_result" title="4점"></label>

          <input class="star_btn" type="radio" id="rating6_result" name="rating_result" value=6 />
          <label style="color: #f73c32;" for="rating6_result" title="3점"></label>

          <input class="star_btn" type="radio" id="rating4_result" name="rating_result" value=4>
          <label style="color: #f73c32;" for="rating4_result" title="2점"></label>

          <input class="star_btn" type="radio" id="rating2_result" name="rating_result" value=2 />
          <label style="color: #f73c32;" for="rating2_result" title="1점"></label>
        </fieldset>
      </form>
        `
        break;
      case 4:
        show.innerHTML = ` 
        <form class="star_result">
        <fieldset class="rate_result">

          <input class="star_btn" type="radio" id="rating10_result" name="rating_result" value=10 />
          <label style="" for="rating10_result" title="5점"></label>

          <input class="star_btn" type="radio" id="rating8_result" name="rating_result" value=8>
          <label style="color: #f73c32;" for="rating8_result" title="4점"></label>

          <input class="star_btn" type="radio" id="rating6_result" name="rating_result" value=6 />
          <label style="color: #f73c32;" for="rating6_result" title="3점"></label>

          <input class="star_btn" type="radio" id="rating4_result" name="rating_result" value=4>
          <label style="color: #f73c32;" for="rating4_result" title="2점"></label>

          <input class="star_btn" type="radio" id="rating2_result" name="rating_result" value=2 />
          <label style="color: #f73c32;" for="rating2_result" title="1점"></label>
        </fieldset>
      </form>
        `
        break;
      case 5:
        show.innerHTML = ` 
        <form class="star_result">
        <fieldset class="rate_result">

          <input class="star_btn" type="radio" id="rating10_result" name="rating_result" value=10 />
          <label style="color: #f73c32;" for="rating10_result" title="5점"></label>

          <input class="star_btn" type="radio" id="rating8_result" name="rating_result" value=8>
          <label style="color: #f73c32;" for="rating8_result" title="4점"></label>

          <input class="star_btn" type="radio" id="rating6_result" name="rating_result" value=6 />
          <label style="color: #f73c32;" for="rating6_result" title="3점"></label>

          <input class="star_btn" type="radio" id="rating4_result" name="rating_result" value=4>
          <label style="color: #f73c32;" for="rating4_result" title="2점"></label>

          <input class="star_btn" type="radio" id="rating2_result" name="rating_result" value=2 />
          <label style="color: #f73c32;" for="rating2_result" title="1점"></label>
        </fieldset>
      </form>
        `
        break;
    }

    // show.innerHTML = `
    //   <form class="star_result">
    //   <fieldset class="rate_result">
    //     <input class="star_btn" type="radio" id="rating10_result" name="rating_result" value=10 />
    //     <label for="rating10_result" title="5점"></label>
    //     <input class="star_btn" type="radio" id="rating8_result" name="rating_result" value=8>
    //     <label for="rating8_result" title="4점"></label>
    //     <input class="star_btn" type="radio" id="rating6_result" name="rating_result" value=6 />
    //     <label for="rating6_result" title="3점"></label>
    //     <input class="star_btn" type="radio" id="rating4_result" name="rating_result" value=4>
    //     <label for="rating4_result" title="2점"></label>
    //     <input class="star_btn" type="radio" id="rating2_result" name="rating_result" value=2 />
    //     <label for="rating2_result" title="1점"></label>
    //   </fieldset>
    // </form>
    //   `
  }

})

