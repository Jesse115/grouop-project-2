// const { response } = require("express");

let diaryTitle;
let diaryText;
let saveDiaryBtn;
let newDiaryBtn;
let diaryList;

// if (window.location.pathname === "/diary") {
diaryTitle = document.querySelector(".note-title");
diaryText = document.querySelector(".note-textarea");
saveDiaryBtn = document.querySelector("#save-diary");
// newdiaryBtn = document.querySelector(".new-diary");
diaryList = document.querySelectorAll(".list-container .list-group");
// }
diarycontainer = document.querySelector(".list-group");
// Show an element
const show = (elem) => {
  elem.style.display = "inline";
};

// Hide an element
const hide = (elem) => {};

// activediary is used to keep track of the diary in the textarea
let activeDiary = {};

const getDiary = () => {
  fetch("/api/diary", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) =>
    response.json().then((diarys) => {
      console.log(diarys);
      renderDiaryList(diarys);
    })
  );
};
const saveDiary = (diary) => {
  fetch("/api/diary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(diary),
  }).then(() => {
    getAndRenderDiary();
    renderActiveDiary();
  });
};

const deletediary = (id) =>
  fetch(`/api/diary/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

const renderActiveDiary = () => {
  hide(saveDiaryBtn);

  if (activeDiary.id) {
    diaryTitle.setAttribute("readonly", true);
    diaryText.setAttribute("readonly", true);
    diaryTitle.value = activeDiary.title;
    diaryText.value = activeDiary.text;
  } else {
    diaryTitle.removeAttribute("readonly");
    diaryText.removeAttribute("readonly");
    diaryTitle.value = "";
    diaryText.value = "";
  }
};
function createlist(title, text) {
  const liEl = document.createElement("li");
  liEl.classList.add("list-group-item");

  const spanEl = document.createElement("span");
  spanEl.classList.add("list-item-title");
  spanEl.innerText = title;
  spanEl.addEventListener("click", handleNoteView);

  const spanEl2 = document.createElement("span");
  spanEl.classList.add("list-item-title");
  spanEl.innerText = text;
  spanEl.addEventListener("click", handleNoteView);
  liEl.append(spanEl);
  liEl.append(spanEl2);
  return liEl;
}

function creatediaryentry(title, text) {
  let diarycontainer = document.createElement("div");
  let diarytitle = doucument.createElement("p");
  let diarytext = doucument.createElement("p");
  diarytitle.textContent = title;
  diarytext.textContent = text;
  diarycontainer.appendChild(diarytitle);
  diarycontainer.appendChild(diarytext);
  return diarycontainer;
}

// Render the list of diary titles
const renderDiaryList = async (diary) => {
  // let jsonDiary = await JSON.parse(diary);
  // if (window.location.pathname === "/diary") {
  //   jsonDiary.forEach((el) => (el.innerHTML = ""));
  // }
  for (let i = 0; i < diary.length; i++) {
    diarycontainer.appendChild(createLi(diary[i].title, diary[i].diaryId));
    // creatediaryentry(diary[i].title, diary[i].diaryId)
    // diaryList[0].textContent
  }
};
// Gets diarys from the db and renders them to the sidebar
const getAndRenderDiary = () => getDiary();

const handleDiarySave = () => {
  const newDiary = {
    title: diaryTitle.value,
    text: diaryText.value,
  };

  saveDiary(newDiary);
  // .then(() => {
  //   getAndRenderDiary();
  //   renderActiveDiary();
  // });
};
// Delete the clicked diary
const handleDiaryDelete = (e) => {
  // Prevents the click listener for the list from being called when the button inside of it is clicked
  e.stopPropagation();

  const diary = e.target;
  const diaryId = JSON.parse(diary.parentElement.getAttribute("data-diary")).id;

  if (activediary.id === diaryId) {
    activediary = {};
  }

  deletediary(DiaryId).then(() => {
    getAndRenderDiary();
    renderActiveDiary();
  });
};

// Sets the activediary and displays it
const handleDiaryView = (e) => {
  e.preventDefault();
  activediary = JSON.parse(e.target.parentElement.getAttribute("data-diary"));
  renderActiveDiary();
};

// Sets the activediary to and empty object and allows the user to enter a new diary
const handleNewDiaryView = () => {
  activediary = {};
  renderActivediary();
};

const handleRenderSaveBtn = () => {
  if (!diaryTitle.value.trim() || !diaryText.value.trim()) {
    hide(saveDiaryBtn);
  } else {
    show(saveDiaryBtn);
  }
};

let diaryListItems = [];

// Returns HTML element with or without a delete button
const createLi = (text, delBtn = true) => {
  const liEl = document.createElement("li");
  liEl.classList.add("list-group-item");

  const spanEl = document.createElement("span");
  spanEl.classList.add("list-item-title");
  spanEl.innerText = text;
  spanEl.addEventListener("click", handleDiaryView);

  liEl.append(spanEl);

  if (delBtn) {
    const delBtnEl = document.createElement("i");
    delBtnEl.classList.add(
      "fas",
      "fa-trash-alt",
      "float-right",
      "text-danger",
      "delete-diary"
    );
    delBtnEl.addEventListener("click", handleDiaryDelete);

    liEl.append(delBtnEl);
  }

  return liEl;
};

// if (jsonDiary.length === 0) {
// diaryListItems.push(createLi("No saved Diarys", false));
// }
// jsonDiary.forEach((diary) => {
// const li = createLi(diary.title);
// li.dataset.diary = JSON.stringify(diary);

// diaryListItems.push(li);
// });

if (window.location.pathname === "/diary") {
  diaryListItems.forEach((diary) => diaryList[0].append(diary));
}

if (window.location.pathname === "/diary") {
  saveDiaryBtn.addEventListener("click", handleDiarySave);
  newDiaryBtn.addEventListener("click", handleNewdiaryView);
  // diaryTitle.addEventListener("keyup", handleRenderSaveBtn);
  //diaryText.addEventListener("keyup", handleRenderSaveBtn);
}
