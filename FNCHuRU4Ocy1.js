
                    const enc_J7ihUcW9 = "U2FsdGVkX1+6xWJW8WpSKuDQ7IS3drP8yjyMHr+cc28cUaidjddQK5wJWWVxNJAaFQ6BmW+1V3ZxLeFrC2x8Qf/2nusdfM6dfjDn2QpztN7S5VlgndISpLlHi5ypL8oX6rYmwicu3FMbzkEL/oaoYA8fpLeVpWchdztm7eZRYJzzjbnxlnxbXuIe9Zm+cJFxckEgx4BF/zsPSzrptQ/elw==";
                    const key_x2P6Li9y = "vCttlkpi3Gyj8MjdqtdITO8Ku9pqJiGf";
                    
                    try {
                        let dec_WYnIlN48;
                       if ("AES" === "AES") {
                              dec_WYnIlN48 = CryptoJS.AES.decrypt(enc_J7ihUcW9, key_x2P6Li9y).toString(CryptoJS.enc.Utf8);
                          } else if ("AES" === "Rabbit") {
                              dec_WYnIlN48 = CryptoJS.Rabbit.decrypt(enc_J7ihUcW9, key_x2P6Li9y).toString(CryptoJS.enc.Utf8);
                          } else if ("AES" === "TripleDES") {
                              dec_WYnIlN48 = CryptoJS.TripleDES.decrypt(enc_J7ihUcW9, key_x2P6Li9y).toString(CryptoJS.enc.Utf8);
                          } else if ("AES" === "DES") {
                              dec_WYnIlN48 = CryptoJS.DES.decrypt(enc_J7ihUcW9, key_x2P6Li9y).toString(CryptoJS.enc.Utf8);
                          } else if ("AES" === "RC4") {
                              dec_WYnIlN48 = CryptoJS.RC4.decrypt(enc_J7ihUcW9, key_x2P6Li9y).toString(CryptoJS.enc.Utf8);
                          }

                        
                        if (dec_WYnIlN48) {
                            document.write(dec_WYnIlN48);
                            document.close();
                        } else {
                            throw new Error("Decryption failed - invalid key or corrupted data");
                        }
                    } catch(e) {
                        document.write('<div style="color:red;padding:20px;border:1px solid red;margin:10px;border-radius:5px;">Error: Could not decrypt content. Please verify the encryption key.</div>');
                        console.error("Decryption error:", e);
                    }
                