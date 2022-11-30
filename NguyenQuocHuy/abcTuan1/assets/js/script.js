currentGal='all';
currentImg=-1;
function changeGallery(type,element){
     let button = document.getElementsByClassName('button');
     for(i=0; i< button.length ;i++){
         button[i].style.color = '#38CCCC';
     }
     element.style.color = '#F96699';
     document.getElementById(type).style.display='block';
     switch (type) {
         case 'all':
            document.getElementById('citys').style.display = 'none';
            document.getElementById('natures').style.display = 'none';
            document.getElementById('portraits').style.display = 'none';
            document.getElementById('all').style.display = 'flex';
            currentGal='all';
             break;
        case 'citys':
                document.getElementById('all').style.display = 'none';
                document.getElementById('natures').style.display = 'none';
                document.getElementById('portraits').style.display = 'none';
                document.getElementById('citys').style.display = 'flex';
                currentGal='citys';
                 break;
        case 'natures':
            document.getElementById('citys').style.display = 'none';
            document.getElementById('all').style.display = 'none';
            document.getElementById('portraits').style.display = 'none';
            document.getElementById('natures').style.display = 'flex';
            currentGal='natures';
             break;
      case 'portraits':
            document.getElementById('citys').style.display = 'none';
            document.getElementById('natures').style.display = 'none';
            document.getElementById('all').style.display = 'none';
            document.getElementById('portraits').style.display = 'flex';
            currentGal='portraits';
             break;
     }
    // console.log(currentGal)
    // console.log($(`#${currentGal}`).children())
}

$( document ).ready(function() {
    console.log( "ready!" );
    let cugal='';
    $("img").click(function(){
        Isrc=$(this).parent().attr('data-link')
        $('.img-modals').css("display","unset")
        $('.img-back').css("display","unset")

        $('.img-modals').append('<img src="'+Isrc+'" alt="" srcset="" class="img-viewed">')
        cugal=$(`#${currentGal}`).children()
        for(var i=0;i<cugal.length;i++){
            if(cugal[i]==$(this).parent().parent()[0]){
                currentImg=i;
                break;
            }
            
        }
    });
    $('.img-modals').click(function(event){
        if(event.target==$('.btn-right-next')[0]){
            if(currentImg+1>=cugal.length)
                currentImg=-1
            $('.img-viewed').attr("src",$(cugal[++currentImg]).children(0).attr('data-link'))
        }
        else
        if(event.target==$('.btn-left-pre')[0]){
            if(currentImg-1<0)
                currentImg=cugal.length
            $('.img-viewed').attr("src",$(cugal[--currentImg]).children(0).attr('data-link'))
        }
        else
        if(event.target!=$('.img-viewed')[0]){
            $('.img-modals').css("display","none")
            $('.img-back').css("display","none")
            $('.img-modals>img').remove()
        }
        
    })
    
   
});


