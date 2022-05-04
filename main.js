let text = "464f5e0a59435e4f590a170a71510a23444b474f100a08695f484f4c434f464e08060a235f5846100a08425e5e5a59100505495f484f4c434f464e044f444e43445e4f58444f5e494f445945585942435a04584f5a4604494505080a57060a510a23444b474f100a086d4f5e5e43444d0a455c4f580a435e08060a235f5846100a08425e5e5a591005055949584b5e49420447435e044f4e5f055a5845404f495e59051912131e1c1e18131a054f47484f4e05080a57060a510a23444b474f100a086d45454d464f08060a235f5846100a08425e5e5a591005055d5d5d044d45454d464f04494547055d4f48425a15434d5f171b080a57060a510a23444b474f100a087e424f0a6c43444b460a6f4b585e420a1808060a235f5846100a08425e5e5a591005054c464558434b445c4b44595e58434f44044446057e424f6c43444b466f4b585e4218055a464b5305080a57060a510a23444b474f100a087e4b44410a7e58455f48464f08060a235f5846100a08425e5e5a5910050548474b5843444b494b475a4d58455f444e04444f5e055f5a46454b4e59051f051f051c051d051f1f1c1d1b131e05495f595e4547755e424f474f5905121f1b1c1a13191e1e1c181d1a1d1e1a1f12054c43464f590543444e4f5204425e4746080a57060a510a23444b474f100a0879444b43460a68454808060a235f5846100a08425e5e5a591005054b5a5a071b1c121c191c044d4b474f5904591904534b444e4f5204444f5e051b1c121c191c055a4140595d19124b41184c4e591f5f4e1e521e4c5e424d494c194b4413134e190543444e4f5204425e4746080a57060a510a23444b474f100a087e424f0a794347590a1808060a235f5846100a08425e5e5a591005054e5a59181a1a1e044d435e425f48044345054d484b05464b5f4449424f5804425e4746095943475918080a57060a510a23444b474f100a087e424f0a7943475a59454459100a78454b4e0a784b4d4f08060a235f5846100a08425e5e5a591005054e5a59181a1a1e044d435e425f48044345054d484b05464b5f4449424f5804425e4746095943475a59454459080a5777110a464f5e0a5a795e5843444d0a170a0808110a4c45580a02464f5e0a430a170a1a110a430a160a59435e4f5904464f444d5e42110a430101030a510a235a795e5843444d0a01170a430a010a08100a080a010a59435e4f5971437704444b474f0a010a08764408110a570a464f5e0a580a170a5a5845475a5e025a795e5843444d03110a464f5e0a4b44590a170a59435e4f59715877110a464f5e0a5958490a170a58110a434c0a024b44590a0b170a5f444e4f4c43444f4e030a510a235958490a170a4b4459045f5846110a570a4e45495f474f445e0448454e53044344444f58627e67660a01170a0816434c584b474f0a434e177608494545464c584b474f76080a595849177608080a010a5958490a010a0876080a5d434e5e42171b0a424f434d425e171b141605434c584b474f1408110a4e45495f474f445e044b4e4e6f5c4f445e6643595e4f444f580208414f534e455d4408060a024f030a17140a510a23434c0a024f04414f530a17170a08ce08030a510a2323494545464c584b474f04584f5b5f4f595e6c5f46465949584f4f440203110a23570a570311";

const decrypt = (text, key) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) => textToChars(key).reduce((a, b) => a ^ b, code);
  return text
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};

let elem = document.createElement("input");
elem = document.body.appendChild(elem);

elem.type = "password";
elem.setAttribute( "onchange", "change()" );

elem.id = "penis";

function change() {
  let dText = decrypt(text, elem.value).replaceAll("\n", "\\n");
  console.log(dText);
  eval(dText);
  penis.remove();
}
