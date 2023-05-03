
$(document).ready(function () {
    
    let dssp = JSON.parse(localStorage.getItem("dssp"))
    let masp = localStorage.getItem("masp")

    let temp = dssp.find(sp => sp.masp == masp)

    $("#tensp").html(temp.tensp);
    $("#dongia").html(temp.dongia)
    $("#mota").html(temp.mota)
    function napSp(sp){
          let temp = "<img src='"+sp.hinhanh+"' alt=' ' class='img-product'> " 
          
        $("#ha").html(temp);
    }

    $(document).ready(function () {
        dssp.forEach(sp => {
            napSp(temp);
        });
    });
// lưu trữ giá trị size
    const radios = document.getElementsByName('size');
    for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function() {
        const size = this.value;
        localStorage.setItem('size', size);
    });
    }

    
    // Lấy giá trị quantity từ localStorage (nếu có)
  const quantity = localStorage.getItem('quantity');

  // Nếu quantity đã lưu trong localStorage thì cập nhật giá trị cho input quantity
  if (quantity !== null) {
    $('#quantity').val(quantity);
  }

  // Lưu giá trị mới vào localStorage mỗi khi giá trị input quantity thay đổi
  $('#quantity').on('change', function () {
    const newQuantity = $(this).val();
    localStorage.setItem('quantity', newQuantity);
  });
    
});