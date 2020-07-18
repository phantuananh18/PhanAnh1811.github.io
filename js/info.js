
DomID('btnSubmit').addEventListener('click', () => {
    var txtHoTen = DomID('txtHoTen').value;
    var txtDiaChi = DomID('txtDiaChi').value;
    var txtDienThoai = DomID('txtDienThoai').value;
    var txtEmail = DomID('txtEmail').value;
    var txtNgayNhanGiay = DomID('txtNgayNhanGiay').value;
    var txtNoiDung = DomID('txtNoiDung').value;
  

    var objectStore = {
        HoTen: txtHoTen,
        DiaChi: txtDiaChi,
        DienThoai: txtDienThoai,
        Email: txtEmail,
        NgayNhanGiay: txtNgayNhanGiay,
        NoiDUng: txtNoiDung,
    }

    var arrStore = [];

    arrStore.push(objectStore);
    
    var str = "";

    for (var i = 0; i < arrStore.length; i++){
        str = '<label>Họ và Tên(*) ' + arrStore[i].HoTen + '</label></br>' +
        '<label>Địa chỉ(*) ' + arrStore[i].DiaChi + '</label></br>' +
        '<label>Điện Thoại(*) ' + arrStore[i].DienThoai + '</label>' +
        '<label>Email(*) ' + arrStore[i].Email + '</label></br>' +
        '<label>Thời gian giao nhận giày(*) ' + arrStore[i].NgayNhanGiay + '</label></br>' +
        '<label>Nội dung(*) ' + arrStore[i].NoiDUng + '</label></br>'      
    }

    DomID('outPutSubmit').innerHTML = str;
});