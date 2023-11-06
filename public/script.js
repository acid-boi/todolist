function clickhandle(name,id){
    var checkBox = document.getElementById(id);
    let id_li = "task-"+id;
    var text = document.getElementById(id_li);
        if(checkBox.checked == true){   
        text.style.textDecoration = "line-through";
        }
        else{
            text.style.textDecoration = "none";
        }
    
}
