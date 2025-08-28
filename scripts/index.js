const editProfileButton = document.querySelector(".profile__edit-button");
const profileDescriptionEl = document.querySelector(".profile__description");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const profileNameEl = document.querySelector(".profile__name");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");
const newPostButton = document.querySelector(".profile__post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const addCardFormEl = newPostModal.querySelector(".modal__form");
const newPostLinkInput = newPostModal.querySelector(
  "#profile-image_link-input"
);
const newPostCaptionInput = newPostModal.querySelector(
  "#profile-caption-input"
);

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-open");
});

editProfileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-open");
});

newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-open");
});

newPostCloseButton.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-open");
});

function editProfileSubmittion(evt) {
  evt.preventDefault();
  const inputProfileValues = {
    name: editProfileNameInput.value,
    decript: editProfileDescriptionInput.value,
  };
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  editProfileModal.classList.remove("modal_is-open");
}

editProfileForm.addEventListener("submit", editProfileSubmittion);

function newPostSubmittion(evt) {
  evt.preventDefault();
  const inputPostValues = {
    link: newPostLinkInput.value,
    caption: newPostCaptionInput.value,
  };
  console.log(newPostLinkInput.value);
  console.log(newPostCaptionInput.value);

  newPostModal.classList.remove("modal_is-open");
}

addCardFormEl.addEventListener("submit", newPostSubmittion);
