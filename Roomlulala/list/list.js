const room = [
    {
      id: 1,
      title: "방탈출카페esc(수원인계점)",
      category: "thema",
      img: "../img/escaperoom_pic1.webp",
      decs: `돈을 내고 방에 제 발로 걸어 들어가 갇힌 다음 탈출하는 기묘한 게임임.
      한판에 16000~20000원 정도이고, 제한시간은 스탠다드 60분. 그런데 45분이나 75분, 90분 등등의 베리에이션도 있긴 함.
      이 게임의 묘미는 한번 들어갔던 방은 웬만하면 다시 들어가지 않기 때문에 brand new everyday라는 것. 
      머리 쓰기 좋아하는 사람들에게 추천함.`,
    },
    {
      id: 2,
      title: "셜록홈즈 방탈출카페",
      category: "difficulty",
      img: "../img/escaperoom_pic1.webp",
      decs: `사라진 그녀에 버금갈 정도로 엄청난 스케일을 자랑한다.우선 ‘오픈 룸’인지라 실제로 모르는 사람들과 한 방에 들어가게 되므로 그 사이에서 정신을 놓지 않도록 주의해야 한다. 
      무엇보다도 협동이 중요하다. 정말이지 대단한 방이었다. 무조건 가야한다. 홍콩 형들 잘 지내..?`,
    },
    {
      id: 3,
      title: "제로월드 방탈출 카페 서현점",
      category: "location",
      img: "../img/escaperoom_pic1.webp",
      decs: `방탈출의 클리셰와도 같은 두 가지 테마가 있는데, 살인마와 탈옥이다. 
      이 방은 널리고 널린 탈옥 테마 중에서도 단연 돋보인다. 탈옥을 해본 적은 없지만 탈옥을 한다면 정말로 이런 느낌일 것 같다. 
      난이도는 꽤나 어려운 편. 정말로 즐겁게 플레이했다. 여기도 무조건 가야한다.`,
    },
    {
      id: 4,
      title: "킹이스케이프",
      category: "price",
      img: "../img/escaperoom_pic1.webp",
      decs: `정말 재밌다. 정말 신선하다. 상상하지도 못한 스타일의 방이었다. 무조건 가야한다. 
      딱 한 가지 아쉬운 점이 있다면 상식을 요구한다는 것인데, 뭐 사실 막히면 힌트나 때려맞추기로 해결할 수 있다.`,
    },
    {
      id: 5,
      title: "플레이카페 플레이어스(PLAYUS)",
      category: "thema",
      img: "../img/escaperoom_pic1.webp",
      decs: `놀랍게도 친구의 아버지와 함께 가게 되었다. 80년대를 묘사하는 소품들로 장식되어 있어 나에게는 응팔과 정팔이ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ를, 
      아버지께는 당시의 향수를 불러일으켰다. 전체적으로 평이한 문제들이 많고, 그 와중에도 신선함을 놓치지 않는다.`,
    },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all rooms when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayRoomList(room);
  displayRoomButtons();
});

function displayRoomList(roomList) {
  let displayRoom = roomList.map(function (room) {
    // console.log(room);

    return `<article class="room-list">
              <img src=${room.img} alt=${room.title} class="photo">
              <div class="room-info">
                  <fieldset class="rate">
                      <input type="radio" id="rating50" name="rating" value="10"><label for="rating10" title="5점"></label>
                      <input type="radio" id="rating49" name="rating" value="9"><label class="half" for="rating9" title="4.5점"></label>
                      <input type="radio" id="rating48" name="rating" value="8"><label for="rating8" title="4점"></label>
                      <input type="radio" id="rating47" name="rating" value="7"><label class="half" for="rating7" title="3.5점"></label>
                      <input type="radio" id="rating46" name="rating" value="6"><label for="rating6" title="3점"></label>
                      <input type="radio" id="rating45" name="rating" value="5"><label class="half" for="rating5" title="2.5점"></label>
                      <input type="radio" id="rating44" name="rating" value="4"><label for="rating4" title="2점"></label>
                      <input type="radio" id="rating43" name="rating" value="3"><label class="half" for="rating3" title="1.5점"></label>
                      <input type="radio" id="rating42" name="rating" value="2"><label for="rating2" title="1점"></label>
                      <input type="radio" id="rating41" name="rating" value="1"><label class="half" for="rating1" title="0.5점"></label>
                  </fieldset>
                  <div>
                      <h3>${room.title}</h3>
                      <p class="roominfo-text" class="text">
                          ${room.decs}
                      </p>
                  </div>
                  <div class="hash-btn">
                      <span class="hash"><a href="#" class="thema_btn">${room.category}</a></span>
                      <span class="hash"><a href="#" class="diff_btn">${room.category}</a></span>
                  </div>
              </div>
            </article>`;
  });
displayRoom = displayRoom.join("");
  // console.log(displayRoom);
sectionCenter.innerHTML = displayRoom;
}
function displayRoomButtons() {
  const categories = room.reduce(
    function (values, room) {
      if (!values.includes(room.category)) {
        values.push(room.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const roomCategory = room.filter(function (roomList) {
        // console.log(menuItem.category);
        if (roomList.category === category) {
          return roomList;
        }
      });
      if (category === "all") {
        displayRoomList(room);
      } else {
        displayRoomList(roomCategory);
      }
    });
  });
};
