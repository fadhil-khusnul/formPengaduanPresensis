
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


async function tambah_kelas() {



  var table = document.getElementById("tbody_container");
  tambah++;


  var select1 = document.createElement("select");
  select1.innerHTML =
    "<option selected disabled>Pilih Mata Kuliah (MK)</option>";
  select1.setAttribute("id", "kode_mk[" + tambah + "]");
  select1.setAttribute("class", "form-select form-control");
  select1.setAttribute("style", "width: 100%");

  select1.setAttribute("name", "kode_mk[" + tambah + "]");
  select1.setAttribute("required", true);



  var select2 = document.createElement("select");
  select2.innerHTML =
    "<option selected disabled>Pilih Kelas</option>";
  select2.setAttribute("id", "id_kelas_kuliah[" + tambah + "]");
  select2.setAttribute("class", "form-select form-control");
  select2.setAttribute("style", "width: 100%");

  select2.setAttribute("name", "id_kelas_kuliah[" + tambah + "]");
  select2.setAttribute("required", true);


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

  for (var i = 1; i <= 16; i++) {
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

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);


  // cell1.innerHTML = "1.";
  cell2.appendChild(select1);
  cell3.appendChild(select2);
  cell4.appendChild(select3);
  cell5.appendChild(input);
  cell6.appendChild(button);



  reindex_container();

}


function SubmitForm() {

  console.log(tambah);

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
  var id_kelas_kuliah = [];
  var pertemuan_ke = [];
  var tanggal_terlaksana = [];

  for (var i = 0; i < tambah; i++) {

    kode_mk[i] = document.getElementById("kode_mk[" + (i + 1) + "]").value;

    id_kelas_kuliah[i] = document.getElementById("id_kelas_kuliah[" + (i + 1) + "]").value;
    pertemuan_ke[i] = document.getElementById("pertemuan_ke[" + (i + 1) + "]").value;
    tanggal_terlaksana[i] = document.getElementById("tanggal_terlaksana[" + (i + 1) + "]").value;

    formData.append('kode_mk[' + i + ']', kode_mk[i]);
    formData.append('id_kelas_kuliah[' + i + ']', id_kelas_kuliah[i]);
    formData.append('pertemuan_ke[' + i + ']', pertemuan_ke[i]);
    formData.append('tanggal_terlaksana[' + i + ']', tanggal_terlaksana[i]);
  }

  console.log(kode_mk);

  const programStudiSelect = document.getElementById("program_studi");
  const selectedOption = programStudiSelect.options[programStudiSelect.selectedIndex];
  const fakultas = selectedOption.getAttribute('data_fakultas');

  let program_studi = document.getElementById("program_studi").value;
  let no_wa = document.getElementById("no_wa").value;
  no_wa = no_wa.replace(/[\s\-+]/g, '');
  no_wa = 'wa.me/'+ no_wa;

  console.log(fakultas, program_studi, no_wa);

  formData.append("fakultas", fakultas);
  formData.append("program_studi", program_studi);
  formData.append("no_wa", no_wa);
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







  return false; // Prevent the form from submitting

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
  $("#tbody_container tr > td:nth-child(5) input").flatpickr({

  });


}

function delete_container(r) {
  var table = r.parentNode.parentNode.rowIndex;
  document.getElementById("table_container").deleteRow(table);
  tambah--;

  var input1 = document.querySelectorAll(
    "#tbody_container tr td:nth-child(4) select"
  );
  for (var i = 0; i < input1.length; i++) {
    input1[i].id = "pertemuan_ke[" + (i + 1) + "]";
    input1[i].name = "pertemuan_ke[" + (i + 1) + "]";
  }



  var select1 = document.querySelectorAll("#tbody_container tr td:nth-child(3) select");
  for (var i = 0; i < select1.length; i++) {
    select1[i].id = "id_kelas_kuliah[" + (i + 1) + "]";
    select1[i].name = "id_kelas_kuliah[" + (i + 1) + "]";
  }


  var select2 = document.querySelectorAll("#tbody_container tr td:nth-child(2) select");
  for (var i = 0; i < select2.length; i++) {
    select2[i].id = "kode_mk[" + (i + 1) + "]";
    select2[i].name = "kode_mk[" + (i + 1) + "]";
  }
  var select2 = document.querySelectorAll("#tbody_container tr td:nth-child(5) input");
  for (var i = 0; i < select2.length; i++) {
    select2[i].id = "tanggal_terlaksana[" + (i + 1) + "]";
    select2[i].name = "tanggal_terlaksana[" + (i + 1) + "]";
  }



  var button = document.querySelectorAll(
    "#tbody_container tr td:nth-child(5) button"
  );
  for (var i = 0; i < button.length; i++) {
    button[i].id = "deleterow" + (i + 1);
  }

  reindex_container();
}

$('#no_wa').inputmask({
  mask:"+62 999-9999-9999999999",
  // alias: 'numeric',
  placeholder: '',
  clearMaskOnLostFocus: false,
  
});


