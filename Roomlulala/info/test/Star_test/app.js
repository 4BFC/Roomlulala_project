const star_form = document.querySelector(".star_result");
const show = document.querySelector(".result");

star_form.addEventListener("click", (e) => {
  const target = e.target;
  const value = parseInt(target.value);
  const star_value = value / 2;

  show.innerHTML = createStarForm(star_value);
});

function createStarForm(value) {
  const ratings = [10, 8, 6, 4, 2];

  const formHTML = `
    <form class="star_result">
      <fieldset class="rate_result">
        ${ratings
      .map(
        (rating) => `
              <input class="star_btn" type="radio" id="rating${rating}_result" name="rating_result" value="${rating}" ${value === rating / 2 ? "checked" : ""
          }/>
              <label style="color: ${value >= rating / 2 ? "#f73c32" : ""}" for="rating${rating}_result" title="${rating / 2}점"></label>
            `
      )
      .join("")}
      </fieldset>
    </form>
  `;

  return formHTML;
}
