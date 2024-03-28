let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

// Lấy các phần tử cần sử dụng từ DOM
const boxesContainer = document.querySelector('.boxes');
const scoreElement = document.querySelector('.points');
const moreBoxButton = document.getElementById('btn');

let totalBox = 0;

// Hàm để tạo box
function createBox(color) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.backgroundColor = color;

  // Xử lý sự kiện khi click vào box
  box.addEventListener('click', function() {
    boxesContainer.removeChild(box);
    totalBox--;
    scoreElement.textContent = totalBox;
  });

  return box;
}

// Hàm để thêm box vào container
function addBoxes(num) {
  for (let i = 0; i < num; i++) {
    const randomColor = colors[i % colors.length];
    const box = createBox(randomColor);
    boxesContainer.appendChild(box);
    totalBox++;
  }
  scoreElement.textContent = totalBox;
}

// Xử lý sự kiện khi click vào nút "More box"
moreBoxButton.addEventListener('click', function() {
  addBoxes(5);
});

// Khởi tạo số lượng box ban đầu
addBoxes(5);