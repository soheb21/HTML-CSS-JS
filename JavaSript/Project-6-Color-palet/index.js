const generateBtn = document.getElementById("generate-btn");

const singleColorGenerator =()=>{
    const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor ="#";
    for(let i=0;i<6;i++){
        let random = Math.floor(Math.random()*hex.length);
        hexColor+=hex[random];

    }
    return hexColor;
}
const colorPaletteGenerator =()=>{
    const colorpalette =[];
    for(let i=0;i<5;i++){
        colorpalette.push(singleColorGenerator());
    }
    return colorpalette
};
    

const renderColorPalette =()=>{
    const colorContainer= document.querySelector(".color-con");
    colorContainer.innerHTML ="";

    const colorpalette =colorPaletteGenerator();

    colorpalette.forEach((color,i)=>{
        const colorDiv = document.createElement('div');
        colorDiv.id=`color${i+1}`;
        colorDiv.className ="colorBox";
        colorDiv.style.background=color;

        const colorTag =document.createElement('p')
        colorTag.id = `color${i+1}Tag`;
        colorTag.className ="colorTag";
        colorTag.innerHTML=color;

        colorDiv.appendChild(colorTag);
        colorContainer.appendChild(colorDiv);

    });

    const copytoClipboard =(id)=>{
        const el = document.getElementById(id);
        navigator.clipboard.writeText(el.innerText).then(()=>{
            alert('Copied to Clipboard')
        }).catch((err)=>{
                alert('Could not Copy')
        });
    }

    const colorTags = document.querySelectorAll(".colorTag");
    colorTags.forEach((colorTags,i)=>{
    colorTags.addEventListener("click",()=>
    copytoClipboard(`color${i+1}Tag`)

    );

    });
};
renderColorPalette();
generateBtn.addEventListener("click",renderColorPalette)