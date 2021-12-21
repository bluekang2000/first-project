function Cal()
{
    var FirstNum = prompt("첫번째 수를 입력하시오")
    var SecondNum = prompt("두번째 수를 입력하시오")
    var hap = parseInt(FirstNum) + parseInt(SecondNum)
    var cha = parseInt(FirstNum) - parseInt(SecondNum)
    var gop = parseInt(FirstNum) * parseInt(SecondNum)
    var bun = parseInt(FirstNum) / parseInt(SecondNum)
    
    
    document.getElementById("result1").innerHTML = parseInt(FirstNum) +"+" + parseInt(SecondNum) +"="+ parseInt(hap)+"<br>"
    document.getElementById("result1").innerHTML += parseInt(FirstNum) +"-" + parseInt(SecondNum) +"="+ parseInt(cha)+"<br>"
    document.getElementById("result1").innerHTML += parseInt(FirstNum) +"*" + parseInt(SecondNum) +"="+ parseInt(gop)+"<br>"
    document.getElementById("result1").innerHTML += parseInt(FirstNum) +"/" + parseInt(SecondNum) +"="+ parseFloat(bun)
}

function Cal2()
{
    var FirstNum = document.getElementById("FirstNum").value
    var SecondNum = document.getElementById("SecondNum").value
    var operand = document.getElementById("operand")
    operand = operand.options[operand.selectedIndex].value

    if(operand=="hap")
    {
        var hap = parseInt(FirstNum) + parseInt(SecondNum)
        alert(hap)
        document.getElementById("ResultNum").value = hap
    }
    else if(operand =="cha")
    {
        var cha = parseInt(FirstNum) - parseInt(SecondNum)
        alert(cha)
        document.getElementById("ResultNum").value = cha
    }
    else if(operand =="gop")
    {
        var gop = parseInt(FirstNum) * parseInt(SecondNum)
        alert(gop)
        document.getElementById("ResultNum").value = gop
    }
    else if(operand =="bun")
    {
        var bun = parseInt(FirstNum) / parseInt(SecondNum)
        alert(bun)
        document.getElementById("ResultNum").value = bun
    }
}

function printgugudan()
{
    
    document.getElementById("result4").innerHTML= ""
    for(var i = 2;i<10;i++)
    {   document.getElementById("result4").innerHTML += i +"단"+"<br>"
        for(var a = 1;a<10;a++){
            document.getElementById("result4").innerHTML+= i +"x"+ a +"="+ i*a +"<br>"
        }
        document.getElementById("result4").innerHTML +="<br>"
    }
}


function dogugudan(gugudan)
{
    var gugudan = document.getElementById("gugudan")
    gugudan = gugudan.options[gugudan.selectedIndex].value;
    document.getElementById("result5").innerHTML = ""

    for(var i = 1;i<10;i++)
    {
        document.getElementById("result5").innerHTML += gugudan +"x"+ i + "="+ gugudan *i +"<br>"
    }
}

function leftstar(starnum)
{
    document.getElementById("result6").innerHTML=""
    var starnum = document.getElementById("starnum").value
    alert(starnum)
    for(var i = 0;i<starnum;i++)
    {
        for(var a = 0;a<=i;a++)
        {
            document.getElementById("result6").innerHTML+="*"
        }
        document.getElementById("result6").innerHTML+="<br>"
    }
}


function rightstar(starnum)
{
    document.getElementById("result6").innerHTML=""
    var starnum = document.getElementById("starnum").value
    alert(starnum)
    for (var i = 1; i <= starnum; i++)
    {
        for (var k = starnum; k > i; k--)
        {
            document.getElementById("result6").innerHTML+="&nbsp"                
        }
        for (var j = 0; j < i; j++)
        {
            document.getElementById("result6").innerHTML+="*"
        }
        document.getElementById("result6").innerHTML+="<br>"
    }
    //for(var i = (starnum-1);i>0;i--)
    //{
    //    document.getElementById("result6").innerHTML+="&nbsp"
    //}
    //for(var a = 0;a<=starnum;a++)
    //{
    //    document.getElementById("result6").innerHTML+="*"
    //}
}

function drawstar()
{
    var way = document.getElementById("star")
    way = way.options[star.selectedIndex].value
    if(way =="left")
    {
        leftstar()
        alert(way)
    }
    else if (way =="right")
    {
        rightstar()
        alert(way)
    }

    else
        alert("개소리 ㄴ")
}
