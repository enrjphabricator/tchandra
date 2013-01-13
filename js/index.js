if ( Modernizr.csstransforms ) {
    var ul = document.getElementById('nav-slider').children[0];
    var length  = ul.childElementCount;
    var mySwipe = new Swipe(document.getElementById('slider'), {
        auto : 4000,
        callback: function(event, index, element){
            ul.children[(index - 1 + length) % length].className = '';
            ul.children[index].className = 'hover';
        }
    });
    ul.children[0].className = 'hover';
    document.getElementById('slider').onmouseleave  = function()
    {
        mySwipe.resume();
    };

    for(var i = 0; i < length; i++)
    {
        (function(i)
        {
            ul.children[i].onmouseover = function()
            {
                mySwipe.stop();
                ul.children[mySwipe.getPos()].className = '';
                mySwipe.slide(i);
            };
        })(i);
    }
}
