document.addEventListener("DOMContentLoaded", (event) => {
      let hashUrl = ec.replace (new RegExp("%20", "g"),"+")  
      let bytes = CryptoJS.AES.decrypt(hashUrl, 'secret key 123');
      var link = bytes.toString(CryptoJS.enc.Utf8);
      window.location.href = link
    });
