const btnStartTestEl = document.querySelector(".btn--start--test");
const section1El = document.querySelector(".section1");
const section2El = document.querySelector(".section2");

const btnNextQEl = document.querySelector(".next");
const btnPrevQEl = document.querySelector(".prev");
const btnFinishTestEl = document.querySelector(".finish");

const pageNumberEl = document.querySelector(".pageNumber");

const question1El = document.querySelector("#q-1");
const question2El = document.querySelector("#q-2");
const question3El = document.querySelector("#q-3");
const question4El = document.querySelector("#q-4");
const question5El = document.querySelector("#q-5");

const questionBox = document.querySelectorAll(".options--box");
const op = document.querySelectorAll(".option");

let page = 0;
const questions = [
  question1El,
  question2El,
  question3El,
  question4El,
  question5El,
];

const ans = ["c", "c", "b", "b", "c"];
const selectedOptions = ["", "", "", "", ""];

btnStartTestEl.addEventListener("click", function () {
  section1El.classList.add("d--none");
  section2El.classList.remove("d--none");
});

btnNextQEl.addEventListener("click", function () {
  questions[page].classList.add("d--none");
  page++;
  questions[page].classList.remove("d--none");
  if (page === 4) {
    btnNextQEl.classList.add("d--none");
    btnFinishTestEl.classList.remove("d--none");
  }

  pageNumberEl.textContent = page + 1;
});

btnPrevQEl.addEventListener("click", function () {
  if (page > 0) {
    if (page === 4) {
      btnNextQEl.classList.remove("d--none");
      btnFinishTestEl.classList.add("d--none");
    }

    questions[page].classList.add("d--none");
    page--;
    questions[page].classList.remove("d--none");

    pageNumberEl.textContent = page + 1;
  }
});
document.addEventListener("click", function () {
  questionBox[page].addEventListener("click", function (args) {
    selectedOptions[page] = args.path[0].id;
    args.path[0]
      .closest(".options--box")
      .querySelectorAll(".option")
      .forEach((ele) => {
        ele.classList.remove("active");
      });
    args.path[0].classList.add("active");
    // console.log(
    //   args.path[0].closest(".options--box").querySelectorAll(".option")
    // );

    // console.log(args.path[0].id);
    // console.log(selectedOptions);
    // console.log(questionBox[page]);
  });
});
const displayBox = document.querySelector(".display--messege");
const massegeEl = document.querySelector(".messege");
btnFinishTestEl.addEventListener("click", function () {
  // section2El.classList.add("d--none");
  displayBox.classList.remove("d--none");
  let cnt = 0;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] == selectedOptions[i]) {
      cnt++;
    }
  }
  massegeEl.textContent = cnt;
  // console.log(cnt);
  // console.log(selectedOptions);
  // console.log(ans);
});
