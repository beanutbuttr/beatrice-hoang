//uTitle
      $(".uTitle").on('mouseenter', function(){
            $(this).css("color", "rgb(56, 56, 56)");
            $(this).css("cursor", "default");
        });

        $(".uTitle").on('mouseleave', function(){
            $(this).css("color", "rgb(183, 171, 165)");
            $(this).css("cursor", "default");
        });
//hovering
      $(".hovering").on('mouseenter', function(){
            $(this).css("color", "rgb(56, 56, 56)").css("font-style", "italic");
            $(this).css("cursor", "pointer");

        });

        $(".hovering").on('mouseleave', function(){
            $(this).css("color", "rgb(183, 171, 165)").css("font-style", "normal");
            $(this).css("cursor", "default");
        });
//storeTab
      $("#storeTab").on('mouseenter', function(){
            $("#storeTab").css("color", "rgb(56, 56, 56)").css("font-style", "italic");
        });

        $("#storeTab").on('mouseleave', function(){
            $("#storeTab").css("color", "rgb(183, 171, 165)").css("font-style", "normal");
        });
