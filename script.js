document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("search");
        const herbs = document.querySelectorAll(".herb");

        searchInput.addEventListener("input", function () {
          const query = searchInput.value.toLowerCase();
          herbs.forEach((herb) => {
            const name = herb.getAttribute("data-name").toLowerCase();
            if (name.includes(query)) {
              herb.style.display = "block";
            } else {
              herb.style.display = "none";
            }
          });
        });
      });
      const likes = document.querySelectorAll(".like");
      const islike = [false,false,false,false,false,false,false,false,false,false];
      const likeCounts = document.querySelectorAll(".likeCount");
      const sumLike = [0,0,0,0,0,0,0,0,0,0];
      // Like or dislike functions
      likes.forEach((like,idx)=>{
        like.addEventListener("click", () => {
        if (islike[idx]) {
          sumLike[idx]--;
          likes[idx].innerHTML = '<i class="fa-regular fa-heart"></i>';
          likeCounts[idx].innerText = sumLike[idx];
          islike[idx] = false;
        } else {
          islike[idx] = true;
          sumLike[idx]++;
          likes[idx].innerHTML = '<i class="fa-solid fa-heart"></i>';
          likeCounts[idx].innerText = sumLike[idx];
        }
      });
      })