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
            $('#zp_form_headerdisp').html(' <span class="ssp-un" id="zp_form_header_name">Add&nbsp;'+nameForm+'</span>');
        }
        else if (mode == "Edit") {
            $('.divDS').hide();
            $('.divAdd').show();
            $('.divButtomAdd').hide();
            $('.divButtomEdit').show();
            $('#zp_form_headerdisp').html(' <span class="ssp-un" id="zp_form_header_name">Edit&nbsp;' + nameForm + '</span>');
        }
        else {
            $('.divDS').show();
            $('.divAdd').hide();
        }
    },
    //ẩn hiện filter
    filterPopup: function () {
            $("#filter").slideToggle("slow");
    },
    fnSlideToggle:function(id){
        $('#' + id).slideToggle("slow");
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
