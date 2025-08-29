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

function openModal(modal) {
  if (!modal) return;
  modal.classList.add("modal_is-open");
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("modal_is-open");
}

editProfileButton.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function editProfileSubmission(evt) {
  evt.preventDefault();
  const inputProfileValues = {
    name: editProfileNameInput.value,
    decript: editProfileDescriptionInput.value,
  };
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;

  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", editProfileSubmission);

function newPostSubmission(evt) {
  evt.preventDefault();
  const inputPostValues = {
    link: newPostLinkInput.value,
    caption: newPostCaptionInput.value,
  };
  console.log(newPostLinkInput.value);
  console.log(newPostCaptionInput.value);

  closeModal(newPostModal);
}
