// ảnh tự chuyển theo time
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    let timer = null;

    showSlides();

    const sliderWrapper = document.querySelector('.slider-wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    sliderWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - sliderWrapper.offsetLeft;
        scrollLeft = sliderWrapper.scrollLeft;
    });

    sliderWrapper.addEventListener('mouseleave', () => {
        isDown = false;
    });

    sliderWrapper.addEventListener('mouseup', () => {
        isDown = false;
    });

    sliderWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderWrapper.offsetLeft;
        const walk = (x - startX) * 3;
        sliderWrapper.scrollLeft = scrollLeft - walk;
    });   
});

//Nhấn vào nút chuyển ảnh
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider img');
    const controls = document.querySelectorAll('.slider-controls input[type="radio"]');
  
    let slideIndex = 0;
    let timer = null;
  
    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[index].style.display = 'block';
        updateActiveControl(index);
        startTimer();
    }

    function updateActiveControl(index) {
        const controls = document.querySelectorAll('.slider-controls input[type="radio"]');
        for (let i = 0; i < controls.length; i++) {
          controls[i].checked = false;
        }
        controls[index].checked = true;
    }
  
    function showNextSlide() {
        slideIndex++;
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }
        showSlide(slideIndex);
        updateActiveControl(slideIndex);
    }
  
    function startTimer() { 
        clearTimeout(timer);
        timer = setTimeout(showNextSlide, 3000);
    }
  
    function stopTimer() {
        clearTimeout(timer);
    }
  
    function handleControlClick(event) {
        const value = event.target.value;
        slideIndex = parseInt(value) - 1;
        showSlide(slideIndex);
        stopTimer();
    }
  
    showSlide(slideIndex);
    startTimer();
  
    for (let i = 0; i < controls.length; i++) {
        controls[i].addEventListener('click', handleControlClick);
    }
    
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.addEventListener('mouseover', stopTimer);
    sliderWrapper.addEventListener('mouseleave', startTimer);
});
  
  //Java thanh header dính lên top và khi kéo xuống mất khi kéo lên thì hiện lại
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").classList.remove("hidden");
    } else {
        document.getElementById("header").classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;
}

// modal-login

window.addEventListener('DOMContentLoaded', () => {
    const buyBtns = document.querySelector('.infor-user')
    const modal = document.querySelector('.modal-login')
    const modalClose = document.querySelector('.js-modal-close')
    const modalSigin = document.querySelector(".js-signin")

    function showlogin() {
        modal.classList.add('open')
    }

    function hidelogin() {
        modal.classList.remove('open')
    }
    modalClose.addEventListener('click',hidelogin)
    buyBtns.addEventListener('click',showlogin);
    modalSigin.addEventListener('click', hidelogin);
    const modalContainer = document.querySelector('.js-modal-container')

    modal.addEventListener('click', hidelogin)
    modalContainer.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    // var KiemTraThongTinDangNhap = false;
    // var emaillogin = $("#email-login");
    // var passlogin = $("#pass-login");
    // $("#login").click(function(){
    //     // alert("Tính năng đang được phát triển");
    //     $("table tbody tr").each(function(){
    //         var rowEmail = $(this).find("td:eq(2)").text();
    //         var rowPass = $(this).find("td:eq(5)").text();
    //         if(rowEmail === emaillogin.val() && rowPass === passlogin.val()){
    //             KiemTraThongTinDangNhap = true;
    //             return true; // Dừng vòng lặp khi tìm thấy giá trị trùng lặp
    //         }
    //     });
    //     if(KiemTraThongTinDangNhap) {
    //         alert("Đăng nhập thành công");
    //     } else {
    //         alert("Tài khoản hoặc mật khẩu không đúng")
    //     }
    // })

    $("#login").click(function() {
        const emaillogin = $("#email-login").val();
        const passlogin = $("#pass-login").val();
      
        const found = $("table tbody tr").toArray().find(function(row) {
          const rowEmail = $(row).find("td:eq(1)").text();
          const rowPass = $(row).find("td:eq(4)").text();
          return rowEmail === emaillogin && rowPass === passlogin;
        });
      
        if (found) {
          alert("Đăng nhập thành công");
          hidelogin();
        } else {
          alert("Tài khoản hoặc mật khẩu không đúng")
        }
    });            
})
//Sign In
$(document).ready(function(){
    $("#myBtn").on("click", function(){
        $("#myModal").modal();
    });

    //Kiểm tra cú pháp tên
    var txtTen = $("#txtTen");
    var tbTen = $("#tbTen");

    function KiemtraTen() {
        var re = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
        if(txtTen.val() == ""){
            tbTen.html("* Bắt buộc nhập");
            return false;
        }

        if(!re.test(txtTen.val())){
            tbTen.html("* Vui lòng chữ cái đầu viết hoa và cách nhau bởi dấu cách");
            return false;
        }
        tbTen.html("*")
        return true;
    }
    txtTen.blur(KiemtraTen);


    //Kiểm tra cú pháp email
    var txtEmail = $("#txtEmail");
    var tbEmail = $("#tbEmail");

    function KiemtraEmail() {
        var re = /^[a-zA-Z][\w\.-]*@[a-zA-Z0-9][\w\.-]*\.[a-zA-Z]{2,4}$/;
        if(txtEmail.val() == ""){
            tbEmail.html("* Bắt buộc nhập");
            return false;
        }

        if(!re.test(txtEmail.val())){
            tbEmail.html("* Vui lòng nhập đúng email");
            return false;
        }
        tbEmail.html("*")
        return true;
    }
    txtEmail.blur(KiemtraEmail);

    //Kiểm tra ngày sinh

    var txtNgaySinh = $("#txtNgaySinh");
    var tbNgaySinh = $("#tbNgaySinh");

    function KiemtraNgaySinh() {
        if(txtNgaySinh.val() == ""){
            tbNgaySinh.html("* Bắt buộc nhập");
            return false;
        }
    
        var ngaySinh = new Date(txtNgaySinh.val());
        today = new Date();
        var age14 = new Date(today.getFullYear() - 14, today.getMonth(), today.getDate());
    
        if(ngaySinh > age14){
            tbNgaySinh.html("* Phải đủ 14 tuổi");
            return false;
        }
        
        tbNgaySinh.html("*");
        return true;
    }
    txtNgaySinh.blur(KiemtraNgaySinh);

    //Kiểm tra địa chỉ
    var txtDiaChi = $("#txtDiaChi");
    var tbDiaChi = $("#tbDiaChi");

    function KiemtraDiaChi() {
        if(txtDiaChi.val() == ""){
            tbDiaChi.html("* Bắt buộc nhập");
            return false;
        }
        tbDiaChi.html("*")
        return true;
    }
    txtDiaChi.blur(KiemtraDiaChi);

    //Kiểm tra pass
    var txtPass = $("#txtPass");
    var tbPass = $("#tbPass");

    function KiemtraPass() {
        var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(txtPass.val() == ""){
            tbPass.html("* Bắt buộc nhập");
            return false;
        }

        if(!re.test(txtPass.val())){
            tbPass.html("* Tối thiểu tám ký tự, ít nhất một chữ cái và một số");
            return false;
        }
        tbPass.html("*")
        return true;
    }
    txtPass.blur(KiemtraPass);

    var txtSDT = $("#txtSDT");
    var tbSDT = $("#tbSDT");

    function KiemtraSDT() {
        var re = /^(0\d{7,11})$/;
        if(txtSDT.val() == ""){
            tbSDT.html("* Bắt buộc nhập");
            return false;
        }

        if(!re.test(txtSDT.val())){
            tbSDT.html("* Phải bắt đầu bằng số 0 và có 8-12 số");
            return false;
        }
        tbSDT.html("*")
        return true;
    }
    txtSDT.blur(KiemtraSDT);

    $("#btnSave").click(function(){
        if(!KiemtraTen() || !KiemtraDiaChi() || !KiemtraEmail() || !KiemtraNgaySinh() || !KiemtraSDT() || !KiemtraPass()){
            $("#thongbao").html("Mời bạn nhập đúng và đầy đủ thông tin");
            return false;
        }
    
        var ten = txtTen.val();
        var diachi = txtDiaChi.val();
        var ngaysinh = txtNgaySinh.val();
        var email = txtEmail.val();
        var pass = txtPass.val();
        var sdt = txtSDT.val();
    
        // Kiểm tra trùng lặp trường Email trong bảng
        var isEmailDuplicated = false;
        $("table tbody tr").each(function(){
            var rowEmail = $(this).find("td:eq(2)").text();
            if(rowEmail === email){
                isEmailDuplicated = true;
                return false; // Dừng vòng lặp khi tìm thấy giá trị trùng lặp
            }
        });
    
        if(isEmailDuplicated){
            alert("Địa chỉ email đã tồn tại trong bảng");
            return false;
        }
    
        // Kiểm tra trùng lặp trường SĐT trong bảng
        var isSdtDuplicated = false;
        $("table tbody tr").each(function(){
            var rowSdt = $(this).find("td:eq(6)").text();
            if(rowSdt === sdt){
                isSdtDuplicated = true;
                return false; // Dừng vòng lặp khi tìm thấy giá trị trùng lặp
            }
        });
    
        if(isSdtDuplicated){
            alert("Số điện thoại đã tồn tại trong bảng");
            return false;
        }
    
        // var them = "<tr><td>" + (i++) + "</td><td>" + ten + "</td><td>" + email + "</td><td>" + diachi + "</td><td>" + ngaysinh + "</td><td>"+ pass + "</td><td>" + sdt + "</td><tr>";
        // $("table tbody").append(them);
        // alert("Đăng ký thành công");
        // $("#myModal").modal("hide");
        // return true;
        
        var them = "<tr><td>" + ten + "</td><td>" + email + "</td><td>" + diachi + "</td><td>" + ngaysinh + "</td><td>"+ pass + "</td><td>" + sdt + "</td><tr>";

        // Thêm dữ liệu vào localStorage
        localStorage.setItem("danhSachNguoiDung", them + localStorage.getItem("danhSachNguoiDung"));
        // Lấy dữ liệu từ localStorage và thêm vào bảng
        $(".table-striped tbody").html(localStorage.getItem("danhSachNguoiDung"));

        // Lấy dữ liệu từ localStorage và hiển thị trên bảng
  
        alert("Đăng ký thành công");
        $("#myModal").modal("hide");
    });
    
    if (localStorage.getItem("danhSachNguoiDung")) {
        $(".table-striped tbody").html(localStorage.getItem("danhSachNguoiDung"));
    }    
    // Xóa dữ liệu đăng ký
    // localStorage.removeItem("danhSachNguoiDung");

})
  