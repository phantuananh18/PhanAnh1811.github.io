function DomID(id){
    return document.getElementById(id)
}

var arrTaiKhoan = [
    {
        email: "quoctoan",
        password: "123"
    },
]

var luuTruTaiKhoan = []

DomID('btn-DangKy').addEventListener('click', () => {
    var object = {
        email: DomID('inputEmailDangKy').value,
        password: DomID('inputPasswordDangKy').value
    }
    if (object.email === ''){
        DomID('kiemTraLoiEmailDangKy').innerHTML = "Email Không Được Để Trống!"
        return;
    }

    if (object.password === ''){
        DomID('kiemTraLoiPassDangKy').innerHTML = "Password Không Được Để Trống!"
        return;
    }

    DomID('inputEmailDangKy').value = ''
    DomID('inputPasswordDangKy').value = ''


    DomID('kiemTraLoiEmailDangKy').innerHTML = ''
    DomID('kiemTraLoiPassDangKy').innerHTML = ''

    thanhCong("Đăng Ký")

    arrTaiKhoan.push(object);
    console.log(arrTaiKhoan)
    
})
function thanhCong(a){
    alert(a + " Thành Công");
}


DomID('btn-DangNhap').addEventListener('click', () => {

    var emailDangNhap = DomID('inputEmail').value
    var passDangNhap = DomID('inputPassword').value
    
    var accountCheck = arrTaiKhoan.find(({email}) => email === emailDangNhap)

    if (accountCheck === undefined){
        DomID('kiemTraLoiEmailDangNhap').innerHTML = "Email Không Hợp Lệ!"
        DomID('inputEmail').value = ''
        DomID('inputPassword').value = ''
        return
    }

    if (passDangNhap !== accountCheck.password){
        DomID('kiemTraLoiPassDangNhap').innerHTML = "Mật Khẩu Không Hợp Lệ!"
        DomID('inputPassword').value = ''
        return
    }
    DomID('inputEmail').value = ''
    DomID('inputPassword').value = ''


    DomID('kiemTraLoiEmailDangNhap').innerHTML = ''
    DomID('kiemTraLoiPassDangNhap').innerHTML = ''

    thanhCong("Đăng Nhập")
})
