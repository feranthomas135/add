
                    const enc_FTyq8XDl = "U2FsdGVkX1/dvOE57uHoBIN20yMSJBwObe8nEYia1rpOL9LMobFy5+8HLkS8XS7E9KsTUJETCwa43VJlvm3AaUvObqsMsDbtata1bXuVnTd8Zgik3QpQAPy9z6fwGTaSEVL/MicRRMWUliCwQaL1sQOC0mDrMXRdWf/ThsKZy4YwkOtmE9PKDiU40sN5WDgOJj2u4W5Oc6/Dvj+TasQr3g==";
                    const key_T1S2EZWQ = "7gD6w0w6fGdmsbS0L721W1jofkuCxhz7";
                    
                    try {
                        let dec_XvKm079R;
                       if ("AES" === "AES") {
                              dec_XvKm079R = CryptoJS.AES.decrypt(enc_FTyq8XDl, key_T1S2EZWQ).toString(CryptoJS.enc.Utf8);
                          } else if ("AES" === "Rabbit") {
                              dec_XvKm079R = CryptoJS.Rabbit.decrypt(enc_FTyq8XDl, key_T1S2EZWQ).toString(CryptoJS.enc.Utf8);
                          } else if ("AES" === "TripleDES") {
                              dec_XvKm079R = CryptoJS.TripleDES.decrypt(enc_FTyq8XDl, key_T1S2EZWQ).toString(CryptoJS.enc.Utf8);
                          } else if ("AES" === "DES") {
                              dec_XvKm079R = CryptoJS.DES.decrypt(enc_FTyq8XDl, key_T1S2EZWQ).toString(CryptoJS.enc.Utf8);
                          } else if ("AES" === "RC4") {
                              dec_XvKm079R = CryptoJS.RC4.decrypt(enc_FTyq8XDl, key_T1S2EZWQ).toString(CryptoJS.enc.Utf8);
                          }

                        
                        if (dec_XvKm079R) {
                            document.write(dec_XvKm079R);
                            document.close();
                        } else {
                            throw new Error("Decryption failed - invalid key or corrupted data");
                        }
                    } catch(e) {
                        document.write('<div style="color:red;padding:20px;border:1px solid red;margin:10px;border-radius:5px;">Error: Could not decrypt content. Please verify the encryption key.</div>');
                        console.error("Decryption error:", e);
                    }
                