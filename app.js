$(document).ready(function() {

    var person = [1,2];  //有多少人这里就要数到多少
    
    $( ".person" ).each (function() {
         var k = $( ".person" ).index( this );

         person[k] = $(this);
         console.log(k);
         console.log("123");
    });

    //trying to set div array
    
    
    $.ajax({
        type: "GET",
        url: "./acquaintance.xml",
        dataType: "xml",
        contentType: 'application/xml',
        cache: false,
        success: function (xml) {
            var i = 0;
            $(xml).find('person').each(function () {
                var userid = $(this).find('userid').text();
                var beforeimg = $(this).find('beforeimg').text();
                var before = $(this).find('before').text();
                var after = $(this).find('after').text();

                person[i].find(".userid").attr("src", userid);
                person[i].find(".beforeimg").attr("src", beforeimg);
                person[i].find(".before").append(before);
                person[i].find(".after").append(after);
                i = i + 1;
            });
        },
        error: function () {
            alert("Failed to get xml");
        }
    });
});
