$(document).ready(function() {

    "use strict";

    // $('#id_kelas_kuliah[1]').select2();
    $('.select').select2({
     
    });
    // $('#tbody_container tr > td:nth-child(2) select').select2();

    $(".js-example-basic-multiple-limit").select2({
        maximumSelectionLength: 2
    });

    $(".js-example-tokenizer").select2({
        tags: true,
        tokenSeparators: [',', ' ']
    });

    


});

