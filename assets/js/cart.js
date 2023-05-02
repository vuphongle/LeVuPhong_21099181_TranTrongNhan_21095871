// Lấy thông tin sản phẩm từ trang chi tiết sản phẩm
var productName = document.getElementById('tensp').textContent;
var productPrice = document.getElementById('dongia').textContent;
var productSize = document.querySelector('.size-num input:checked').value;
var productQuantity = document.querySelector('.product-quanity input').value;

// Lắng nghe sự kiện khi người dùng nhấn vào nút "THÊM VÀO GIỎ HÀNG"
var addToCartBtn = document.querySelector('.product-add-btn button');
addToCartBtn.addEventListener('click', function() {
  // Tạo đối tượng sản phẩm mới
  var product = {
    name: productName,
    price: productPrice,
    size: productSize,
    quantity: productQuantity
  };

  // Lấy danh sách sản phẩm từ Local Storage (nếu có)
  var productList = JSON.parse(localStorage.getItem('productList')) || [];

  // Thêm sản phẩm mới vào danh sách
  productList.push(product);

  // Lưu danh sách sản phẩm vào Local Storage
  localStorage.setItem('productList', JSON.stringify(productList));

  // Chuyển hướng đến trang giohang.html
  window.location.href = 'GioHang.html';
});
