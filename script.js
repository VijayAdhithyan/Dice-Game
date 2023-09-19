const div = document.createElement("div");
div.innerHTML = `<div style = "display: flex; flex-direction: column; align-item: center;margin-top: 70px;row-gap:10px">
<p style = "text-align: center; font-size : 18px;color:green">Let's Play Dice</p>
<p style = "text-align: center; font-size : 30px">Player To Play</p>
<div style="display:flex; align-item: center; justify-content: center; column-gap : 200px;margin-top:50px">
    <div>
        <p style= "text-align:center;font-size:24px">Player-1</p>
        <p style= "text-align:center;font-size:28px"><b>0</b></p>
        <p style="cursor:pointer;padding:10px 20px; background-color: green;color:#fff;text-align:center">Roll Now</p>
    </div>
    <div style="margin-top:50px">
        <img src="./Images/num-1.png" width=130/>
        <p style="cursor:pointer;margin-top:70px;padding:6px 0px; background-color:pink;text-align:center">Reset</p>
    </div>
    <div>
        <p style= "text-align:center; font-size:24px">Player-2</p>
        <p style= "text-align:center;font-size:28px"><b>0</b></p>
        <p style="cursor:pointer;text-align:center;padding:10px 20px; background-color: #555;color:#fff">Roll Now</p>
    </div>
</div>
</div>`;

document.body.append(div)
