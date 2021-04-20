export default {
  welcome: "Welcome",
  navigator: [
    {
      id: broofa(),
      type: "STBPROD",
      cat_title: "ບັນຊີເງິນຝາກ",
      type_title: "ຜະລິດຕະພັນ",
      cate: "DEPOSIT",
      title: "ບັນຊີເງິນຝາກປະຢັດ"
    },
    {
      id: broofa(),
      type: "STBPROD",
      cat_title: "ບັນຊີເງິນຝາກ",
      type_title: "ຜະລິດຕະພັນ",
      cate: "DEPOSIT",
      title: "ບັນຊີເງິນຝາກປະຈຳ"
    },
    {
      id: broofa(),
      type: "STBPROD",
      cat_title: "ບັນຊີເງິນຝາກ",
      type_title: "ຜະລິດຕະພັນ",
      cate: "DEPOSIT",
      title: "ບັນຊີເງິນຝາກກະແສລາຍວັນ"
    },
    {
      id: broofa(),
      type: "STBPROD",
      cat_title: "ສິນເຊື່ອ",
      type_title: "ຜະລິດຕະພັນ",
      cate: "LOAN",
      title: "ສິນເຊື່ອສ່ວນບຸກຄົນ"
    },
    {
      id: broofa(),
      type: "STBPROD",
      cat_title: "ສິນເຊື່ອ",
      type_title: "ຜະລິດຕະພັນ",
      cate: "LOAN",
      title: "ສິນເຊື່ອນິຕິບຸກຄົນ"
    },
    {
      id: broofa(),
      type: "STBPROD",
      cat_title: "ສິນເຊື່ອ",
      type_title: "ຜະລິດຕະພັນ",
      cate: "LOAN",
      title: "ສິນເຊື່ອບ້ານ"
    },
    {
      id: broofa(),
      type: "STBOTH",
      cat_title: "ສິນເຊື່ອ",
      type_title: "ເຫດການ ແລະ ອື່ນໆ",
      cate: "LOAN",
      title: "ຂໍ້ມູນຕ້ານການຟອກເງິນ"
    },
    {
      id: broofa(),
      type: "STBOTH",
      cat_title: "ສິນເຊື່ອ",
      type_title: "ເຫດການ ແລະ ອື່ນໆ",
      cate: "LOAN",
      title: "ລາຍງານການເງິນ"
    },
    {
      id: broofa(),
      type: "STBOTH",
      cat_title: "ສິນເຊື່ອ",
      type_title: "ເຫດການ ແລະ ອື່ນໆ",
      cate: "LOAN",
      title: "ລາຍງານການເງິນ"
    },
    {
      id: broofa(),
      type: "STBOTH",
      cat_title: "ສິນເຊື່ອ",
      type_title: "ເຫດການ ແລະ ອື່ນໆ",
      cate: "LOAN",
      title: "ອັດຕາ ແລະ ຄ່າທຳນຽມ"
    },
    {
      id: broofa(),
      type: "STBSERV",
      cat_title: "ການບໍລິການ",
      type_title: "ການບໍລິການ",
      cate: "LOAN",
      title: "ໂອນເງິນພາຍໃນປະເທດ"
    },
    {
      id: broofa(),
      type: "STBSERV",
      cat_title: "ການບໍລິການ",
      type_title: "ການບໍລິການ",
      cate: "LOAN",
      title: "ໂອນເງິນລະຫ່ວາງປະເທດ"
    },
    {
      id: broofa(),
      type: "STBSERV",
      cat_title: "ການບໍລິການ",
      type_title: "ການບໍລິການ",
      cate: "LOAN",
      title: "ຜະລິດຕະພັນບັດ"
    },
    {
      id: broofa(),
      type: "STBSERV",
      cat_title: "ການບໍລິການ",
      type_title: "ການບໍລິການ",
      cate: "LOAN",
      title: "SMS ແຈ້ງ​ເຕືອນ"
    },
    {
      id: broofa(),
      type: "STBSERV",
      cat_title: "ການບໍລິການ",
      type_title: "ການບໍລິການ",
      cate: "LOAN",
      title: "ST HUB ທະນາຄານເທິງມືຖື"
    }
  ]
};
function broofa() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
