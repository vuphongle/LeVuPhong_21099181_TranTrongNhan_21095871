
$(document).ready(function () {
    
    let dssp = JSON.parse(localStorage.getItem("dssp"))
    let masp = localStorage.getItem("masp")

    let temp = dssp.find(sp => sp.masp == masp)

    $("#tensp").html(temp.tensp);
    $("#dongia").html(temp.dongia)
    $("#mota").html(temp.mota)
    function napSp(sp){
          let temp = "<img src='"+sp.hinhanh+"' alt=' ' > " 
          
        $("#ha").html(temp);
    }

    $(document).ready(function () {
        dssp.forEach(sp => {
            napSp(temp);
        });
    });

    
});