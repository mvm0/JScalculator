$(document).ready(function(){
    $('.calculator').delay(500).fadeIn(2500);
});

$('.dop').click(function(){
    if($('.dop').html() == '&gt;&gt;')
    {
        $('.dop').html('<<');
        $('.calculator').animate({width:'540px'},500, function(){$('.dopOperators').fadeToggle(500, function(){$('.trigon').fadeToggle(500);});});
        $('.equal').animate({width:'270px'});
    }
    else
    {
        $('.dop').html('>>');
        $('.trigon').fadeToggle(500, function(){ $('.dopOperators').fadeToggle(500, function(){$('.calculator').animate({width:'360px'},500);})});
        $('.equal').animate({width:'90px'});
    }
});

$('.numbers').click(function(e){
    if($(this).find("button:focus").html())
        number($(this).find("button:focus").html());
});

$('.operators').click(function(e){
    if($(this).find("button:focus").html())
        operat($(this).find("button:focus").html());
});

$('.dopOperators').click(function(e){
    if($(this).find("button:focus").html())
        operat($(this).find("button:focus").html());
});

$('.trigon').click(function(e){
    if($(this).find("button:focus").html())
        operat($(this).find("button:focus").html());
});

$(document).keypress(function(e){
    e.preventDefault();
    if(e.which > 47 && e.which < 58)
        number(String(e.which - 48));
    switch(e.which) {
        case 43: operat('+'); break;
        case 45: operat('-'); break;
        case 42: operat('×'); break;
        case 63: operat('÷'); break;
        case 37: operat('%'); break;
        case 13: operat('='); break;
        case 47: number('.'); break;
        case 40: number('('); break;
        case 41: number(')'); break;
    }
});

$(document).keyup(function(e){
    if(e.which == 8 || e.which == 46)
        number('c');
});

var dot = false;
var leftsc = 0;
function number(elem)
{
    let lastChar = ($('.summary').html())[$('.summary').html().length - 1];
    switch(elem) {
        case '0': appendSym(elem); break;
        case '1': appendSym(elem); break;
        case '2': appendSym(elem); break;
        case '3': appendSym(elem); break;
        case '4': appendSym(elem); break;
        case '5': appendSym(elem); break;
        case '6': appendSym(elem); break;
        case '7': appendSym(elem); break;
        case '8': appendSym(elem); break;
        case '9': appendSym(elem); break;

        case 'c':
            $('.summary').html('');
            $('.total').html('0');
            dot = false;
            leftsc = 0;
        break;

        case '.':
            if(!dot && lastChar != '+' && lastChar != '-' && lastChar != '÷' && lastChar != '×' && lastChar != '%')
            {
                dot = true;
                appendSym(elem);
            }
        break;

        case '(':
            if (lastChar != '0' &&  lastChar != '1' && lastChar != '2' && lastChar != '3' && lastChar != '4' && lastChar != '5' && lastChar != '6' && lastChar != '7'&& lastChar != '8' && lastChar != '9')
            {
                appendSym(elem);
                leftsc++;
            }
        break;
        case ')':
            if ((+lastChar >= 0 && +lastChar <= 9) || lastChar == ')')
            {
                if(leftsc > 0)
                {
                appendSym(elem);
                leftsc--;
                }
            }
        break;
    }
}

function operat(elem)
{
    let lastChar = ($('.summary').html())[$('.summary').html().length - 1];
    switch(elem) {
        case '+':
        if ($('.summary').html() != 0 && lastChar != '+')
        {
            if(lastChar == '-' || lastChar == '×' || lastChar == '÷' || lastChar == '%')
            $('.summary').html($('.summary').html().slice(0,-1));
            appendSym(elem);
            dot = false;
        }
        break;
        case '-':
        if ($('.summary').html() != 0 && lastChar != '-')
        {
            if(lastChar == '+' || lastChar == '×' || lastChar == '÷' || lastChar == '%')
                $('.summary').html($('.summary').html().slice(0,-1));
            appendSym(elem);
            dot = false;
        }
        break;
        case '×':
        if ($('.summary').html() != 0 && lastChar != '×')
        {
            if(lastChar == '-' || lastChar == '+' || lastChar == '÷' || lastChar == '%')
            $('.summary').html($('.summary').html().slice(0,-1));
            appendSym(elem);
            dot = false;
        }
        break;
        case '÷':
        if ($('.summary').html() != 0 && lastChar != '÷')
        {
            if(lastChar == '+' || lastChar == '×' || lastChar == '-' || lastChar == '%')
                $('.summary').html($('.summary').html().slice(0,-1));
            appendSym(elem);
            dot = false;
        }
        break;
        case '%':
        if ($('.summary').html() != 0 && lastChar != '%')
        {
            if(lastChar == '+' || lastChar == '×' || lastChar == '-' || lastChar == '÷')
                $('.summary').html($('.summary').html().slice(0,-1));
            appendSym(elem);
            dot = false;
        }
        break;
        case 'x²':
            if (lastChar != '0' &&  lastChar != '1' && lastChar != '2' && lastChar != '3' && lastChar != '4' && lastChar != '5' && lastChar != '6' && lastChar != '7'&& lastChar != '8' && lastChar != '9')
            {
                appendSym("pow(");
                leftsc++;
                dot = false;
            }
        break;
        case '√x':
            if (lastChar != '0' &&  lastChar != '1' && lastChar != '2' && lastChar != '3' && lastChar != '4' && lastChar != '5' && lastChar != '6' && lastChar != '7'&& lastChar != '8' && lastChar != '9')
            {
                appendSym("sqrt(");
                leftsc++;
                dot = false;
            }
        break;
        case '1/x':
            if (lastChar != '0' &&  lastChar != '1' && lastChar != '2' && lastChar != '3' && lastChar != '4' && lastChar != '5' && lastChar != '6' && lastChar != '7'&& lastChar != '8' && lastChar != '9')
            {
                appendSym("1/(");
                leftsc++;
                dot = false;
            }
        break;
        case 'sin':
            if (lastChar != '0' &&  lastChar != '1' && lastChar != '2' && lastChar != '3' && lastChar != '4' && lastChar != '5' && lastChar != '6' && lastChar != '7'&& lastChar != '8' && lastChar != '9')
            {
                appendSym("sin(");
                leftsc++;
                dot = false;
            }
        break;
        case 'cos':
            if (lastChar != '0' &&  lastChar != '1' && lastChar != '2' && lastChar != '3' && lastChar != '4' && lastChar != '5' && lastChar != '6' && lastChar != '7'&& lastChar != '8' && lastChar != '9')
            {
                appendSym("cos(");
                leftsc++;
                dot = false;
            }
        break;
        case 'tan':
            if (lastChar != '0' &&  lastChar != '1' && lastChar != '2' && lastChar != '3' && lastChar != '4' && lastChar != '5' && lastChar != '6' && lastChar != '7'&& lastChar != '8' && lastChar != '9')
            {
                appendSym("tan(");
                leftsc++;
                dot = false;
            }
        break;
        case 'ctg':
            if (lastChar != '0' &&  lastChar != '1' && lastChar != '2' && lastChar != '3' && lastChar != '4' && lastChar != '5' && lastChar != '6' && lastChar != '7'&& lastChar != '8' && lastChar != '9')
            {
                appendSym("ctg(");
                leftsc++;
                dot = false;
            }
        break;
        case '=':
            let res = $('.summary').html();
            if(lastChar == '.')
                res = res.replace(/.$/, '')
            if(leftsc > 0 )
                $('.total').html("Ошибка скобок");
            if(res)
            {
                res = res.replace(/×/g, '*').replace(/÷/g, '/');
                res = res.replace(/sqrt/g, 'Math.sqrt').replace(/pow/g, 'POW');
                res = res.replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.cos').replace(/ctg/g, 'CTG');
                alert(res);
                $('.total').html(eval(res).toFixed(2));
                
            }
        break;
    }
}

function  POW(x){
    return x*x;
}

function  CTG(x){
    return 1/(Math.tan(x));
}

function appendSym(elem){
    if($('.summary').html().length < 30)
        $('.summary').append(elem);
}