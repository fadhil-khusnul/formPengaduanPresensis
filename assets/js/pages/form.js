
fetch('list_mk.json')
  .then(response => response.json())
  .then(data => {
    let groups = {};

    const select11 = document.getElementById("kode_mk[1]");
    const select22 = document.getElementById("id_kelas_kuliah[1]");


    data.forEach(item => {
      if (!groups[item.nama_prodi]) {
        groups[item.nama_prodi] = document.createElement('optgroup');
        groups[item.nama_prodi].label = item.nama_prodi;
        select11.appendChild(groups[item.nama_prodi]);
      }

      const option = document.createElement('option');

      option.setAttribute('data_kode_matkul', item.kode_matkul);
      option.setAttribute('fullname_sikola', item.fullname_sikola);

      option.value = item.idnumber_sikola;
      option.text = item.fullname_sikola;

      groups[item.nama_prodi].appendChild(option);
    });


    // Add event listener to select11
    $(select11).on("change", function (e) {
      console.log(data);

      const selectedOption = this.options[this.selectedIndex];
      const selectedKodeMatkul = selectedOption.getAttribute('data_kode_matkul');
      console.log(selectedKodeMatkul);

      fetch('list_mk_per_kelas.json')
        .then(response => response.json())
        .then(data => {
          select22.innerHTML = "<option selected disabled>Pilih Kelas</option>";

          const filteredData = data.filter(item => item.kode_matkul === selectedKodeMatkul);

          let groups = {};
          filteredData.forEach(item => {
            if (!groups[item.nama_prodi]) {
              groups[item.nama_prodi] = document.createElement('optgroup');
              groups[item.nama_prodi].label = item.nama_prodi;
              select22.appendChild(groups[item.nama_prodi]);
            }

            const option = document.createElement('option');
            option.setAttribute('fullname_kelas_sikola', item.fullname_kelas_sikola);

            option.value = item.id_kelas;
            option.text = item.fullname_kelas_sikola;
            groups[item.nama_prodi].appendChild(option);
          });
        })
        .catch(error => console.error('Error loading JSON file:', error));
    });
  })
  .catch(error => console.error('Error loading JSON file:', error));



fetch('get_all_prodi.json')
  .then(response => response.json())
  .then(data => {
    let groups = {};

    data.forEach(item => {
      const fakultasId = item.fakultas.id;
      if (!groups[fakultasId]) {
        groups[fakultasId] = [];
      }
      groups[fakultasId].push(item);
    });

    const select = document.getElementById("program_studi");

    for (let fakultasId in groups) {
      const group = groups[fakultasId];
      const optgroup = document.createElement("optgroup");
      optgroup.label = group[0].fakultas.nama_resmi;
      const fakultas_2 = group[0].fakultas.nama_resmi;



      group.forEach(item => {
        const option = document.createElement("option");
        option.value = item.nama_resmi;
        option.text = item.nama_resmi;
        option.setAttribute('data_fakultas', fakultas_2);

        optgroup.appendChild(option);
      });

      select.appendChild(optgroup);
    }
  });

var tambah = 1;

console.log(tambah);


let selectpertemuan = document.getElementById("pertemuan_ke[1]")

for (var i = 1; i <= 100; i++) {
  var option = document.createElement("option");
  option.setAttribute("value", i);
  option.textContent = i;
  selectpertemuan.appendChild(option);
}


async function tambah_kelas() {



  var table = document.getElementById("tbody_container");
  tambah++;


  var select1 = document.createElement("select");
  
  select1.setAttribute("id", "kode_mk[" + tambah + "]");
  select1.setAttribute("class", "js-states form-control");
  select1.setAttribute("style", "width: 100%");

  select1.setAttribute("name", "kode_mk[" + tambah + "]");
  select1.setAttribute("required", true);

  var defaultOption3 = document.createElement("option");
  defaultOption3.setAttribute("value", "");
  defaultOption3.setAttribute("selected", true);
  defaultOption3.setAttribute("disabled", true);
  defaultOption3.textContent = "Pilih Mata Kuliah (MK)";
  select1.appendChild(defaultOption3);



  var select2 = document.createElement("select");
 
  select2.setAttribute("id", "id_kelas_kuliah[" + tambah + "]");
  select2.setAttribute("class", "js-states form-control");
  select2.setAttribute("style", "width: 100%");

  select2.setAttribute("name", "id_kelas_kuliah[" + tambah + "]");
  select2.setAttribute("required", true);

  var defaultOption2 = document.createElement("option");
  defaultOption2.setAttribute("value", "");
  defaultOption2.setAttribute("selected", true);
  defaultOption2.setAttribute("disabled", true);
  defaultOption2.textContent = "Pilih Kelas";
  select2.appendChild(defaultOption2);


  fetch('list_mk.json')
    .then(response => response.json())
    .then(data => {
      let groups = {};


      data.forEach(item => {
        if (!groups[item.nama_prodi]) {
          groups[item.nama_prodi] = document.createElement('optgroup');
          groups[item.nama_prodi].label = item.nama_prodi;
          select1.appendChild(groups[item.nama_prodi]);
        }

        const option = document.createElement('option');

        option.setAttribute('data_kode_matkul', item.kode_matkul);
        option.setAttribute('fullname_sikola', item.fullname_sikola);


        option.value = item.idnumber_sikola;
        option.text = item.fullname_sikola;

        groups[item.nama_prodi].appendChild(option);
      });


      // Add event listener to select1
      $(select1).on("change", function (e) {
        console.log(data);

        const selectedOption = this.options[this.selectedIndex];
        const selectedKodeMatkul = selectedOption.getAttribute('data_kode_matkul');
        console.log(selectedKodeMatkul);

        fetch('list_mk_per_kelas.json')
          .then(response => response.json())
          .then(data => {
            select2.innerHTML = "<option selected disabled>Pilih Kelas</option>";

            const filteredData = data.filter(item => item.kode_matkul === selectedKodeMatkul);

            let groups = {};
            filteredData.forEach(item => {
              if (!groups[item.nama_prodi]) {
                groups[item.nama_prodi] = document.createElement('optgroup');
                groups[item.nama_prodi].label = item.nama_prodi;
                select2.appendChild(groups[item.nama_prodi]);
              }

              const option = document.createElement('option');
              option.setAttribute('fullname_kelas_sikola', item.fullname_kelas_sikola);

              option.value = item.id_kelas;
              option.text = item.fullname_kelas_sikola;
              groups[item.nama_prodi].appendChild(option);
            });
          })
          .catch(error => console.error('Error loading JSON file:', error));
      });
    })
    .catch(error => console.error('Error loading JSON file:', error));


  var select3 = document.createElement("select");

  select3.setAttribute("id", "pertemuan_ke[" + tambah + "]");
  select3.setAttribute("class", "js-states form-control");
  select3.setAttribute("style", "width: 100%");
  select3.setAttribute("name", "pertemuan_ke[" + tambah + "]");
  select3.setAttribute("required", true);


  var defaultOption = document.createElement("option");
  defaultOption.setAttribute("value", "");
  defaultOption.setAttribute("selected", true);
  defaultOption.setAttribute("disabled", true);
  defaultOption.textContent = "Pilih Pertemuan Ke-";
  select3.appendChild(defaultOption);

  for (var i = 1; i <= 100; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", i);
    option.textContent = i;
    select3.appendChild(option);
  }

  var input = document.createElement("input");
  input.innerHTML =
    "<option selected disabled>Pilih Tanggal</option>";
  input.setAttribute("id", "tanggal_terlaksana[" + tambah + "]");
  input.setAttribute("class", "form-control flatpickr1");
  input.setAttribute("style", "width: 100%");
  input.setAttribute("name", "tanggal_terlaksana[" + tambah + "]");
  input.setAttribute("required", true);
  input.setAttribute("placeholder", "yyyy-mm-dd");


  var button = document.createElement("button");
  button.setAttribute("id", "deleterow" + tambah);
  button.setAttribute(
    "class",
    "tn btn-sm btn-danger"
  );
  button.setAttribute("type", "button");
  button.setAttribute("class", "btn btn-sm btn-danger");
  button.setAttribute("onclick", "delete_container(this)");
  var icon = document.createElement("i");
  icon.setAttribute("class", "material-icons no-m");
  icon.innerHTML = "delete_outline";
  button.append(icon);


  var selectjenis_kendala = document.createElement("select");

  selectjenis_kendala.setAttribute("id", "jenis_kendala[" + tambah + "]");
  selectjenis_kendala.setAttribute("class", "js-states form-control");
  selectjenis_kendala.setAttribute("style", "width: 100%");
  selectjenis_kendala.setAttribute("name", "jenis_kendala[" + tambah + "]");
  selectjenis_kendala.setAttribute("required", true);


  var defaultOptionjenis = document.createElement("option");
  defaultOptionjenis.setAttribute("value", "BELUM MASUK/TERISI DI MONITORING NEOSIA");
  defaultOptionjenis.textContent = "BELUM MASUK/TERISI DI MONITORINGG NEOSIA";
  var defaultOptionjenis3 = document.createElement("option");
  defaultOptionjenis3.setAttribute("value", "");
  defaultOptionjenis3.setAttribute("selected", true);
  defaultOptionjenis3.setAttribute("disabled", true);
  defaultOptionjenis3.textContent = "Pilih Jenis Kendala"
  var defaultOptionjenis2 = document.createElement("option");
  defaultOptionjenis2.setAttribute("value", "PRESENSI DOUBLE/TERCONTRENG LEBIH DARI ANGKA 1 (ANGKA 2/3/4/etc..)");
  defaultOptionjenis2.textContent = "PRESENSI DOUBLE/TERCONTRENG LEBIH DARI ANGKA 1 (ANGKA 2/3/4/etc..)";
  selectjenis_kendala.appendChild(defaultOptionjenis3);
  selectjenis_kendala.appendChild(defaultOptionjenis);
  selectjenis_kendala.appendChild(defaultOptionjenis2);

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);


  // cell1.innerHTML = "1.";
  cell2.appendChild(selectjenis_kendala);
  cell3.appendChild(select1);
  cell4.appendChild(select2);
  cell5.appendChild(select3);
  cell6.appendChild(input);
  cell7.appendChild(button);



  reindex_container();

}






function reindex_container() {
  var nomor_tabel_lokasi;

  console.log(tambah);


  const ids = document.querySelectorAll(
    "#tbody_container tr > td:nth-child(1)"
  );
  ids.forEach((e, i) => {
    e.innerHTML = i + 1 + ".";
    nomor_tabel_lokasi = i + 1;
  });


  $("#tbody_container tr > td:nth-child(2) select").select2({

  });
  $("#tbody_container tr > td:nth-child(3) select").select2({

  });
  $("#tbody_container tr > td:nth-child(4) select").select2({

  });
  $("#tbody_container tr > td:nth-child(5) select").select2({

  });
  $("#tbody_container tr > td:nth-child(6) input").flatpickr({

  });


}

function delete_container(r) {
  var table = r.parentNode.parentNode.rowIndex;
  document.getElementById("table_container").deleteRow(table);
  tambah--;

  var input1 = document.querySelectorAll(
    "#tbody_container tr td:nth-child(5) select"
  );
  for (var i = 0; i < input1.length; i++) {
    input1[i].id = "pertemuan_ke[" + (i + 1) + "]";
    input1[i].name = "pertemuan_ke[" + (i + 1) + "]";
  }
  
  var selectjenis = document.querySelectorAll(
    "#tbody_container tr td:nth-child(2) select"
  );
  for (var i = 0; i < selectjenis.length; i++) {
    selectjenis[i].id = "jenis_kendala[" + (i + 1) + "]";
    selectjenis[i].name = "jenis_kendala[" + (i + 1) + "]";
  }



  var select1 = document.querySelectorAll("#tbody_container tr td:nth-child(4) select");
  for (var i = 0; i < select1.length; i++) {
    select1[i].id = "id_kelas_kuliah[" + (i + 1) + "]";
    select1[i].name = "id_kelas_kuliah[" + (i + 1) + "]";
  }


  var select2 = document.querySelectorAll("#tbody_container tr td:nth-child(3) select");
  for (var i = 0; i < select2.length; i++) {
    select2[i].id = "kode_mk[" + (i + 1) + "]";
    select2[i].name = "kode_mk[" + (i + 1) + "]";
  }
  var select2 = document.querySelectorAll("#tbody_container tr td:nth-child(6) input");
  for (var i = 0; i < select2.length; i++) {
    select2[i].id = "tanggal_terlaksana[" + (i + 1) + "]";
    select2[i].name = "tanggal_terlaksana[" + (i + 1) + "]";
  }



  var button = document.querySelectorAll(
    "#tbody_container tr td:nth-child(7) button"
  );
  for (var i = 0; i < button.length; i++) {
    button[i].id = "deleterow" + (i + 1);
  }

  reindex_container();
}

function SubmitForm() {

  console.log(tambah);
  var form = $('#form_kendala');

  // if (form.valid()) {
  //   var submitBtn = document.getElementById('submitBtn');
  //   var spinner = document.getElementById('spinner');
  //   var btnText = document.getElementById('btnText');
  //   var successAlert = document.getElementById('successAlert');
  //   var errorAlert = document.getElementById('errorAlert');
  
  //   submitBtn.disabled = true; // Disable the button
  //   spinner.classList.remove('d-none'); // Show the spinner
  //   btnText.innerText = 'Loading...'; // Change the button text
  
  
  //   const scriptURL = 'https://script.google.com/macros/s/AKfycbzg7bQyTf7QnbKNx5884tiM84gACK2FUlchfYlDYPM8q7DFTvV99vdi1xEbMnvngDBy/exec'
  
  
  //   const formData = new FormData();
  
  //   var kode_mk = [];
  //   var kode_mk_fullname = [];
  //   var selectedOption_kode_mk_fullname = [];
  //   var fullname_sikola = [];
  
  
  //   var id_kelas_kuliah = [];
  
  //   var id_kelas_kuliah_fullname_kelas_sikola = [];
  //   var selectedOption_fullname_kelas_sikola = [];
  //   var fullname_kelas_sikola = [];
  
  
  //   var pertemuan_ke = [];
  //   var jenis_kendala = [];
  //   var tanggal_terlaksana = [];
  
  //   for (var i = 0; i < tambah; i++) {
  
  //     kode_mk[i] = document.getElementById("kode_mk[" + (i + 1) + "]").value;
  //     kode_mk_fullname[i] = document.getElementById("kode_mk[" + (i + 1) + "]");
  //     selectedOption_kode_mk_fullname[i] = kode_mk_fullname[i].options[kode_mk_fullname[i].selectedIndex];
  //     fullname_sikola[i] = selectedOption_kode_mk_fullname[i].getAttribute('fullname_sikola');
  
  //     id_kelas_kuliah[i] = document.getElementById("id_kelas_kuliah[" + (i + 1) + "]").value;
  //     id_kelas_kuliah_fullname_kelas_sikola[i] = document.getElementById("id_kelas_kuliah[" + (i + 1) + "]");
  //     selectedOption_fullname_kelas_sikola[i] = id_kelas_kuliah_fullname_kelas_sikola[i].options[id_kelas_kuliah_fullname_kelas_sikola[i].selectedIndex];
  //     fullname_kelas_sikola[i] = selectedOption_fullname_kelas_sikola[i].getAttribute('fullname_kelas_sikola');
  
  
  //     pertemuan_ke[i] = document.getElementById("pertemuan_ke[" + (i + 1) + "]").value;
  //     jenis_kendala[i] = document.getElementById("jenis_kendala[" + (i + 1) + "]").value;
  //     tanggal_terlaksana[i] = document.getElementById("tanggal_terlaksana[" + (i + 1) + "]").value;
  
  //     formData.append('kode_mk[' + i + ']', kode_mk[i]);
  //     formData.append('id_kelas_kuliah[' + i + ']', id_kelas_kuliah[i]);
  //     formData.append('pertemuan_ke[' + i + ']', pertemuan_ke[i]);
  //     formData.append('jenis_kendala[' + i + ']', jenis_kendala[i]);
  //     formData.append('tanggal_terlaksana[' + i + ']', tanggal_terlaksana[i]);
  
      
  
  //     formData.append('fullname_sikola[' + i + ']', fullname_sikola[i]);
  //     formData.append('fullname_kelas_sikola[' + i + ']', fullname_kelas_sikola[i]);
  
  //   }
  
  //   console.log(fullname_sikola);
  
  //   const programStudiSelect = document.getElementById("program_studi");
  //   const selectedOption = programStudiSelect.options[programStudiSelect.selectedIndex];
  //   const fakultas = selectedOption.getAttribute('data_fakultas');
  
  //   let program_studi = document.getElementById("program_studi").value;
  //   // let keterangan_kendala = document.getElementById("keterangan_kendala").value;
  //   let no_wa = document.getElementById("no_wa").value;
  //   no_wa = no_wa.replace(/[\s\-+]/g, '');
  //   no_wa = 'wa.me/'+ no_wa;
  
  //   console.log(fakultas, program_studi, no_wa);
  
  //   formData.append("fakultas", fakultas);
  //   formData.append("program_studi", program_studi);
  //   formData.append("no_wa", no_wa);
  //   // formData.append("keterangan_kendala", keterangan_kendala);
  //   formData.append("tambah", tambah);
  
  
  
  //   fetch(scriptURL, { method: 'POST', body: formData })
  //     .then(response => {
  //       submitBtn.disabled = false; // Enable the button
  //       spinner.classList.add('d-none'); // Hide the spinner
  //       btnText.innerText = 'Submit'; // Reset the button text
  
  //       if (response.ok) {
  
  //         errorAlert.classList.add('d-none');
  
  //         localStorage.setItem('formSubmitted', 'true');
  
  //         $.blockUI({
  //           message: '<div class="spinner-grow text-primary" role="status"><span class="visually-hidden">Loading...</span><div>',
  //           timeout: 5000
  //         });
  
  //         setTimeout(() => {
  //           window.location.reload();
  //         }, 5000);
  
  //       } else {
  //         throw new Error('Network response was not ok');
  //       }
  //     })
  //     .catch(error => {
  //       var error_msg = document.getElementById("error_msg");
  
  //       error_msg.innerText = error
  //       submitBtn.disabled = false; // Enable the button
  //       spinner.classList.add('d-none'); // Hide the spinner
  //       btnText.innerText = 'Submit';
  
  
  //       successAlert.classList.add('d-none'); // Hide success alert
  //       errorAlert.classList.remove('d-none'); // Show error alert
  
  //       console.error('Error!', error.message);
  //     });
  //   return true; // Allow the form to submit
  // } else {
  //   return false; // Prevent the form from submitting
  // }

  var submitBtn = document.getElementById('submitBtn');
  var spinner = document.getElementById('spinner');
  var btnText = document.getElementById('btnText');
  var successAlert = document.getElementById('successAlert');
  var errorAlert = document.getElementById('errorAlert');

  submitBtn.disabled = true; // Disable the button
  spinner.classList.remove('d-none'); // Show the spinner
  btnText.innerText = 'Loading...'; // Change the button text


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzg7bQyTf7QnbKNx5884tiM84gACK2FUlchfYlDYPM8q7DFTvV99vdi1xEbMnvngDBy/exec'


  const formData = new FormData();

  var kode_mk = [];
  var kode_mk_fullname = [];
  var selectedOption_kode_mk_fullname = [];
  var fullname_sikola = [];


  var id_kelas_kuliah = [];

  var id_kelas_kuliah_fullname_kelas_sikola = [];
  var selectedOption_fullname_kelas_sikola = [];
  var fullname_kelas_sikola = [];


  var pertemuan_ke = [];
  var jenis_kendala = [];
  var tanggal_terlaksana = [];

  for (var i = 0; i < tambah; i++) {

    kode_mk[i] = document.getElementById("kode_mk[" + (i + 1) + "]").value;
    kode_mk_fullname[i] = document.getElementById("kode_mk[" + (i + 1) + "]");
    selectedOption_kode_mk_fullname[i] = kode_mk_fullname[i].options[kode_mk_fullname[i].selectedIndex];
    fullname_sikola[i] = selectedOption_kode_mk_fullname[i].getAttribute('fullname_sikola');

    id_kelas_kuliah[i] = document.getElementById("id_kelas_kuliah[" + (i + 1) + "]").value;
    id_kelas_kuliah_fullname_kelas_sikola[i] = document.getElementById("id_kelas_kuliah[" + (i + 1) + "]");
    selectedOption_fullname_kelas_sikola[i] = id_kelas_kuliah_fullname_kelas_sikola[i].options[id_kelas_kuliah_fullname_kelas_sikola[i].selectedIndex];
    fullname_kelas_sikola[i] = selectedOption_fullname_kelas_sikola[i].getAttribute('fullname_kelas_sikola');


    pertemuan_ke[i] = document.getElementById("pertemuan_ke[" + (i + 1) + "]").value;
    jenis_kendala[i] = document.getElementById("jenis_kendala[" + (i + 1) + "]").value;
    tanggal_terlaksana[i] = document.getElementById("tanggal_terlaksana[" + (i + 1) + "]").value;

    formData.append('kode_mk[' + i + ']', kode_mk[i]);
    formData.append('id_kelas_kuliah[' + i + ']', id_kelas_kuliah[i]);
    formData.append('pertemuan_ke[' + i + ']', pertemuan_ke[i]);
    formData.append('jenis_kendala[' + i + ']', jenis_kendala[i]);
    formData.append('tanggal_terlaksana[' + i + ']', tanggal_terlaksana[i]);

    

    formData.append('fullname_sikola[' + i + ']', fullname_sikola[i]);
    formData.append('fullname_kelas_sikola[' + i + ']', fullname_kelas_sikola[i]);

  }

  console.log(fullname_sikola);

  const programStudiSelect = document.getElementById("program_studi");
  const selectedOption = programStudiSelect.options[programStudiSelect.selectedIndex];
  const fakultas = selectedOption.getAttribute('data_fakultas');

  let program_studi = document.getElementById("program_studi").value;
  // let keterangan_kendala = document.getElementById("keterangan_kendala").value;
  let no_wa = document.getElementById("no_wa").value;
  no_wa = no_wa.replace(/[\s\-+]/g, '');
  no_wa = 'wa.me/'+ no_wa;

  console.log(fakultas, program_studi, no_wa);

  formData.append("fakultas", fakultas);
  formData.append("program_studi", program_studi);
  formData.append("no_wa", no_wa);
  // formData.append("keterangan_kendala", keterangan_kendala);
  formData.append("tambah", tambah);



  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      submitBtn.disabled = false; // Enable the button
      spinner.classList.add('d-none'); // Hide the spinner
      btnText.innerText = 'Submit'; // Reset the button text

      if (response.ok) {

        errorAlert.classList.add('d-none');

        localStorage.setItem('formSubmitted', 'true');

        $.blockUI({
          message: '<div class="spinner-grow text-primary" role="status"><span class="visually-hidden">Loading...</span><div>',
          timeout: 5000
        });

        setTimeout(() => {
          window.location.reload();
        }, 5000);

      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      var error_msg = document.getElementById("error_msg");

      error_msg.innerText = error
      submitBtn.disabled = false; // Enable the button
      spinner.classList.add('d-none'); // Hide the spinner
      btnText.innerText = 'Submit';


      successAlert.classList.add('d-none'); // Hide success alert
      errorAlert.classList.remove('d-none'); // Show error alert

      console.error('Error!', error.message);
    });
  return false;




  



}

$('#no_wa').inputmask({
  mask:"+62 999-9999-9999999999",
  // alias: 'numeric',
  placeholder: '',
  clearMaskOnLostFocus: false,
  
});




