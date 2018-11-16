var Manager = function () { };
Manager.prototype = {
    InitForm: function( ) {
        this.showForm('ds');
       // this.filterPopup();
    },
    //ẩn hiện form add, edit,ds
    showForm: function (mode,nameForm) {
        if (mode == "Add" ) {
            $('.divDS').hide();
            $('.divAdd').show();
            $('.divButtomAdd').show();
            $('.divButtomEdit').hide();
            $('#zp_form_headerdisp').html(' <span class="ssp-un" id="zp_form_header_name">Add&nbsp;' + nameForm + '</span>');
            $('#div_hidden').show();//div làm mờ để không thao tác dc trong trang
        }
        else if (mode == "Edit") {
            $('.divDS').hide();
            $('.divAdd').show();
            $('.divButtomAdd').hide();
            $('.divButtomEdit').show();
            $('#zp_form_headerdisp').html(' <span class="ssp-un" id="zp_form_header_name">Edit&nbsp;' + nameForm + '</span>');
            $('#div_hidden').show();//div làm mờ để không thao tác dc trong trang
        }
        else {
            //dùng cho buttom back lại trang danh sách
            $('.divDS').show();
            $('.divAdd').hide();
            $('#div_hidden').hide();//div làm mờ để không thao tác dc trong trang
        }
      
    },
    //ẩn hiện form ở trang home
    fnHideShow: function (divHide, divShow,div_hidden) {
        $('#'+ divHide).hide();
        $('#' + divShow).show();
        if (div_hidden == 'show') {
            $('#div_hidden').show();//div làm mờ để không thao tác dc trong trang
        }
        else {
            $('#div_hidden').hide();//div làm mờ để không thao tác dc trong trang
        }
    },
    //ẩn hiện form add, edit cua view
    fnFormView: function (mode) {
        if (mode == "Add" ) {
            $('.div_CView').show();
        }
        if (mode == "Edit") {
            $('.div_EView').show();
        }
    },
    //close form
    fnClose:function(divhide){
        $('#' + divhide).hide();
        $('#div_hidden').hide();//div làm mờ để không thao tác dc trong trang
    },
    //ẩn hiện filter
    filterPopup: function () {
            $("#filter").slideToggle("fast");
    },
    fnSlideToggle:function(id){
        $('#' + id).slideToggle("fast");
    },
    //checkbox filter
    fnCheckFilter: function () {
        if ($('.checkbox_name').isChecked == true) {
            $('.divName').show();
        }
        else {
            $('.divName').hide();
        }
}
}
