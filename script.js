// Включение/выключение отображения списка студентов
const showStudentsButton = document.getElementById("showStudents");
const studentsList = document.getElementById("studentsList");

showStudentsButton.addEventListener("click", () => {
  // Смена видимости списка студентов
  studentsList.style.display =
    studentsList.style.display === "none" ? "block" : "none";
});
