$(window).on('load', function(){
    setInterval(function(){
        $('.o-Yc-o-T').each(function (index, el) {
            $(el).next('.drive_super_pass').remove()
            const link = document.createElement('a')
            link.innerText = "T";
            link.target = "_blank";
            if ($(el).data('view') != undefined ) {
                link.href = '../shared-with-me';
            }else{
                link.href = './' + $(el).data('id');
            }
            link.classList.add('drive_super_pass');
            $(el).after(link);
        });
    }, 500);
});