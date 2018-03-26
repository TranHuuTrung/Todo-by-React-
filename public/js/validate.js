
$("form#fSignUp").validate({
    rules: {
        'email' :{
            required: true,
            email   : true
        },
        'password' :{
            required: true,
            minlength: 8
        },
        'rePassword':{
            required: true,
            equalTo: "#password"
        }
    },
    messages: {
        'email' :{
            required: "Bạn phải nhập email !",
            email   : "Email không đúng !"
        },
        'password' :{
            required: "Bạn phải nhập password !",
            minlength: "Ít nhất 8 kí tự !"
        },
        'rePassword':{
            required: "Bạn phải verify password !",
            equalTo : "Verify email không trùng khớp!"
        }
    }
});