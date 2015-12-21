$(window).ready(function(){   
    //assign length of the width of window to ww variable
    var ww = $(window).width();
    //invoke checkWidth function with ww parameter on windows load
    checkWidth(ww);
    //checkWidth function which resizes button sizedepending on screen size
    function checkWidth(wow){
        if(wow>768){
            $('button').removeClass('btn-sm');
            $('button').addClass('btn-md');    
        }else if(wow<768){
            $('button').removeClass('btn-md');
            $('button').addClass('btn-sm');    
        } 
    }
    //if window will be resized checkWidth functon will be invoked with parameter which is the current width of the screen
    $(window).resize(function(){
        var ww1 = $(window).width();
        checkWidth(ww1);
    });

    //$('h2').addClass('animated bounce');
    //when togglebyhand button pressed it will togle mainNavBar, this function runs when nav bar is collapsed
    $('#togglebyhand').click(function(){
        $('#mainNavBar').toggle();
    });
    //fitText plugin execution for different elements
    $('h2').fitText(2,{'minFontSize': 14,'maxFontSize': 40});
    $('h3').fitText(2,{'minFontSize': 18,'maxFontSize': 28});
    $('p').fitText(2,{'minFontSize': 12,'maxFontSize': 16});

    $('button').mouseenter(function(){
        $(this).addClass('btn-primary');
    })
    .mouseleave(function(){
        $(this).removeClass('btn-primary');
    });
    //when current button is pressed and hold it adds btn-info class to the button
    $('button').mousedown(function(){
        $(this).addClass('btn-info'); 
    });
    //when it released it removes two classes below so that button gets its btn-default class back
    $('button').mouseup(function(){
        $(this).removeClass('btn-info');
        $(this).removeClass('btn-primary');
    });  
  
    //hides projects more than 6 and shows more button, shows all projects when button clicked    
    $('.optionaldivs').hide();
    $('#morediv').show();
    $('.mb').click(function(){
        $('.optionaldivs').show();
        $('#morediv').hide();
    });
    //shadow to each project thubnail on mouseenter    
    $('.projinnerdiv').mouseenter(function(){
        $(this).addClass('shadowtoeachdiv');
        $(this).siblings('.projusedtoolsdiv').addClass('shadowtoeachdiv');
      })
        .mouseleave(function(){
        $(this).removeClass('shadowtoeachdiv');
        $(this).siblings('.projusedtoolsdiv').removeClass('shadowtoeachdiv');
    });
    
    /*Random quotes*/
    var ob = {
          1:{
            quote:"Education is the most powerful weapon which you can use to change the world.",
            author:"Nelson Mandela"
          },
          2:{
            quote:"Do not let your learning lead to knowledge. Let your learning lead to action.",
            author:"Jim Rohn"
          },
          3:{
            quote:"Educating the mind without educating the heart is no education at all.",
            author:"Aristotle"
          },
          4:{
            quote:"Unless you do something beyond what you have already mastered, you will never grow.",
            author:"Ronald E. Osborne"
          },
          5:{
            quote:"Study without desire spoils the memory, and it retains nothing that it takes in.",
            author:"Leonardo da Vinci"
          },
          6:{
            quote:"What is a college? An institute of learning. What is a business? An institute of learning. Life, itself, is an institute of learning.",
            author:"Thomas Edison"
          },
          7:{
            quote:"If people did not do silly things, nothing intelligent would ever get done.",
            author:"Ludwig Wittgenstein"
          },
          8:{
            quote:"The beautiful thing about learning is that no one can take it away from you.",
            author:"B.B. King"
          },
          9:{
            quote:"I have no special talent, I am only passionately curious.",
            author:"Albert Einstein"
          },
          10:{
            quote:"In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists.",
            author:"Eric Hoffer"
          },
          11:{
            quote:"If a man empties his purse into his head, no one can take it away from him. An investment in knowledge always pays the best interest.",
            author:"Benjamin Franklin"
          }
    };
    var rn = Math.floor(Math.random()*11+1);
    genQuote();
    function genQuote(){
        $('#quote').html(ob[rn]['quote']).fadeOut().fadeIn(2500);
        $('#author').html(ob[rn]['author']).fadeOut().fadeIn(2500);
        setTimeout(function(){
            $('#quote').html(ob[rn]['quote']).fadeOut(2500);
            $('#author').html(ob[rn]['author']).fadeOut(2500);
            rn++;
            if(rn===12){
                rn=1;
            }
        },8000);
        setTimeout(genQuote,10500);
    }
});