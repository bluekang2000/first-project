function Question_all()
{
	Question1();
	Question2();
	Question3();
	Question4();
	Question5();
}
function Question_reset()
{
	document.getElementById("q1_ans").innerHTML= "정답란"
	document.getElementById("q2_1_ans").innerHTML= "(1)"
	document.getElementById("q2_2_ans").innerHTML= "(2)"
	document.getElementById("q3_ans").innerHTML= "정답란"
	document.getElementById("q4_1_ans").innerHTML= "(1)"
	document.getElementById("q4_2_ans").innerHTML= "(2)"
	document.getElementById("q5_1_ans").innerHTML= "정답란"
}

function Question1() 
{
	document.getElementById("q1_ans").innerHTML= "1"
}
function Question2() 
{
	document.getElementById("q2_1_ans").innerHTML= "멤버 변수"
	document.getElementById("q2_2_ans").innerHTML= "메소드"
}
function Question3() 
{
	document.getElementById("q3_ans").innerHTML= "1,2,3"
}
function Question4() 
{
	document.getElementById("q4_1_ans").innerHTML= "다른 파일"
	document.getElementById("q4_2_ans").innerHTML= "객체"
}
function Question5() 
{
	var q5_ans = document.getElementById("q5_2_ans").value
	var len = q5_ans.length;
	document.getElementById("q5_1_ans").innerHTML= len
}

function Checkmoney()
{
	var inputmoney = document.getElementById("inputmoney").value
	document.getElementById("q6_inputmoney_box").innerHTML += inputmoney +" 원 "
}
function BuyTShirt(val)
{	
	var inputmoney = document.getElementById("inputmoney").value
	var cloth1_count = document.getElementById("cloth1_count").value
	document.getElementById("q6_order_box").innerHTML += "티셔츠 : "+cloth1_count  +"벌"
	var pay_money = cloth1_count * val
	var rest_coin = inputmoney- pay_money
	if(rest_coin < 0)
	{
		alert("입력금액이 부족하다.")
		return
	}
	document.getElementById("q6_pay_box").innerHTML += "총 결제금액 : "+pay_money +"원 <br>"
	document.getElementById("q6_pay_box").innerHTML += "반환 금액 : "+rest_coin +"원 "
}
function BuyJumper(val)
{	
	var inputmoney = document.getElementById("inputmoney").value
	var cloth2_count = document.getElementById("cloth2_count").value
	document.getElementById("q6_order_box").innerHTML += "점퍼 : "+cloth2_count  +"벌"
	var pay_money = cloth2_count * val
	var rest_coin = inputmoney- pay_money
	if(rest_coin < 0)
	{
		alert("입력금액이 부족하다.")
		return
	}
	document.getElementById("q6_pay_box").innerHTML += "총 결제금액 : "+pay_money +"원 <br> "
	document.getElementById("q6_pay_box").innerHTML += "반환 금액 : "+rest_coin +"원 "
}
function BuyDress(val)
{	
	var inputmoney = document.getElementById("inputmoney").value
	var cloth3_count = document.getElementById("cloth3_count").value
	document.getElementById("q6_order_box").innerHTML += "드레스 : "+cloth3_count  +"벌"
	var pay_money = cloth3_count * val
	var rest_coin = inputmoney- pay_money
	if(rest_coin < 0)
	{
		alert("입력금액이 부족하다.")
		return
	}
	document.getElementById("q6_pay_box").innerHTML += "총 결제금액 : "+pay_money +"원 <br>"
	document.getElementById("q6_pay_box").innerHTML += "반환 금액 : "+rest_coin +"원 "
}