const string = `
.clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.clearfix {
    *zoom: 1;
}

body {
    // background:#ffe600;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.pikachu *{
    box-sizing:border-box;
    margin:0;
    padding:0;
}
.pikachu *::before ,
.pikachu *::after {
    box-sizing:border-box;
    margin:0;
    padding:0;
}



.pikachu {
    position: fixed;
    width: 100%;
    /* height: 500px; */
    margin: 0 auto;
    left: 0;
    right: 0;
    // max-width: 640px;
    // min-width: 320px;
    background-color: #EAD71C;
    min-height:50vh;
    // overflow: hidden;
}

.bead1 {
    width: 100%;
    padding: 10px 25px 10px 25px;
    position: relative;
    top: 66px;
}

.eye {
    /* position: relative; */
    height: 80px;
    width: 80px;
    background-color: #000;
    border-radius: 100%;
    top: 80px;
    z-index: 3;
}

.eye:after {
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    background-color: #FFF;
    border-radius: 100%;
    top: 16px;
}

.left-eye {
    float: left;
}

.left-eye:after {
    left: 45px;
}

.right-eye {
    float: right;
}

.right-eye:after {
    right: 45px;
}

.yuan {
    width: 100%;
}

.cheek {
    /* margin: 10px; */
    position: relative;
    height: 88px;
    width: 88px;
    background-color: #D63700;
    border-radius: 100%;
    border: 3px solid #000;
    top: 138px;
}

.left-cheek {
    /* left: 60px; */
    float: left;
    margin-left: 5px;
    /* margin-left: 80px; */

}

.cheek>img {
    /* border: 1px solid red; */
    position: absolute;
    top: 50%;
    left: 50%;
}

.left-cheek>img {
    transform: rotate(494deg);
    transform-origin: 0 0;
}

.right-cheek {
    /* margin-right: 80px; */
    float: right;
    margin-right: 5px;
}

.body1 {
    width: 50%;
    margin: 0 auto;
    position: relative;
    left: 0;
    right: 0;
    top: -231px;
    height: 100%;
    /* background-color: blue; */
}

.mouth {
    position: relative;
    /* position: fixed; */
    margin: 0 auto;
    height: 330px;
    /* height: 35%; */
    width: 160px;
    /* width: 58%; */
    background-color: #5D0B01;
    border-radius: 100%;
    border: 5px solid #000;
    top: 186px;
    /* left: 88px; */
    left: 50%;
    margin-left: -80px;
    overflow: hidden;
}

.lips {
    position: absolute;
    height: 70px;
    width: 100px;
    background-color: #EAD71C;
    border-radius: 100%;
    box-shadow: 5px 5px 0px 0px;
    /* left: 42px; */
    left: 50%;
    margin-left: -104px;
    top: 220px;
    z-index: 1;
}

.lips:after {
    content: "";
    position: absolute;
    height: 70px;
    width: 100px;
    background-color: #EAD71C;
    border-radius: 100%;
    box-shadow: -5px 5px 0px 0px;
    left: 108px;
}

.tongue {
    position: absolute;
    height: 150px;
    width: 190px;
    background-color: #CD565D;
    border-radius: 100%;
    border: 5px solid #000;
    top: 200px;
    left: -15px;
    box-shadow: inset 0 0 80px #000;
}

.nose {
    position: absolute;
    height: 175px;
    width: 80%;
    background-color: #EAD71C;
    /* left: 47px; */
    left: 50%;
    margin-left: -40%;
    top: 82px;
    z-index: 2;
}

.nose:before {
    content: "";
    position: absolute;
    height: 20px;
    width: 30px;
    background-color: #000;
    border-radius: 100% / 80% 80% 120% 120%;
    top: 120px;
    /* left: 116px; */
    left: 50%;
    margin-left: -15px;
    z-index: 3;
}
/* 这只皮卡丘送给你~ */
`;

export default string;