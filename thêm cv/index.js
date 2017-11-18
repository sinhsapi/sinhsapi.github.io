  var COMLUMN_TYPE=['todo','doing','done'];

  var DB={
    // lấy dữ liệu
    getData:function(){
        if (typeof(Storage) !== "undefined") {
            var data;
            try{
                data=JSON.parse(localStorage.getItem('list'))||{};

            } catch(error){
                data={};
            }
            return data;
        
        } else {
            alert('Sorry! No Web Storage support..');
            return {};
        }

    },
    // luu duu lieu
    setData:function(data){
        localStorage.setItem('list',JSON.stringify(data));
    }
  };
  var list=DB.getData();







        var app={
            newjob:function(e,type,input){
                var jobname=$(input).val();
                var event =window.event ||e;
                if(event.keyCode===13 &&jobname.trim()!==''){
                    if(!list[type]) list[type]=[];
                    list[type].push(jobname);
                    DB.setData(list);
                    // update DOM
                    this.addjobtolist(type,jobname);

                    // reset input
                    $(input).val('');
                }


            },
            addjobtolist:function(type,jobname){
                var item='<div href="#!" class="collection-item">'+jobname+'<span class="badge" onclick="app.deleteJob(this)"><i class="tiny material-icons right">delete</i></span></div>';
                $('#'+type).append(item);
            },
            deleteJob:function(span){
                var btn=$('#btn-delete');
                var modal=$('#modal-confirm');
                var item=$(span).parent();
                modal.modal()
                 modal.modal('open');
                 btn.off('click')

                 btn.on('click',function(){
                    var columntype=item.parent().attr('id');
                    var itemPosition=$('#'+columntype+'.collection-item').index(item);
                    console.log(itemPosition);
                    list[columntype].splice(itemPosition,1);
                    DB.setData(list);
                    item.remove();
                    modal.modal();
                    modal.modal('close');
                 });

            }
        }
        $( function() {
            COMLUMN_TYPE.forEach(function(type){
                var columntype=list[type] || [];
                columntype.forEach(function(jobname){
                    app.addjobtolist(type,jobname);
                })

            })
            // var doing=list['doing'] || [];
            // doing.forEach(function(job){
            //     app.addjobtolist('doing',job);
            // })


            $( ".sorted-list" ).sortable({
                connectWith: ".sorted-list",
                placeholder:'ui-state-highlight',
                start:function(event,ui){
                    $(ui.item[0]).addClass('dragging');


                    // ui.item.oldColumnType=ui.item.context.parentElement.getAttribute('id');
                    // ui.item.oldItemPosition=ui.item.index();
                },
                stop:function(event,ui){
                    $(ui.item[0]).removeClass('dragging');
                    // var item=ui.item;
                    // var oldColumnType=item.oldColumnType;
                    // var oldItemPosition=item.oldItemPosition;
                    // var newColumnType=item.context.parentElement.getAttribute('id');
                    // var newItemPosition=item.index();
                    // // remove item from old position
                    // list[oldColumnType].splice(oldItemPosition,1);
                    // // add item to new position
                    // list[newColumnType].splice(newItemPosition,0,item[0].innerText);
                    // // store date to local storage
                    // DB.setData(list);

                }
            });
        });